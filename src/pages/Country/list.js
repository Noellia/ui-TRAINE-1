import React, {PureComponent} from 'react';
import Table from '../../components/table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    Container,
    Button,
    ButtonGroup,
    Row,
    Col,
    Spinner,
    Modal,
    ModalFooter,
    ModalHeader,
    ModalBody
} from 'reactstrap';

import {
    deleteCountrytRequested,
    fetchCountriesRequested,
    sortCountry,
    submitCountryDataRequested
} from '../../actions/country'

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: null
        };
    }
    componentDidMount() {
        this.props.getCountries();
    }

    handlePagination = (skip) => {
        this.props.getCountries({skip});
    } 


    render() {
        const {
            countries,
            limit,
            total,
            tableProps,
            onSort,
            loading
        } = this.props;

        const {modal} = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Tabla de datos </h3>
                    </Col>
                    <Col sm="3">
                        <Button color="primary" tag={Link} to="/countries/edit/new"> Nuevo </Button>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        {loading && (
                            <Spinner color="danger" />
                        )}
                        {!loading && (
                            <Table {...{
                                data: countries,
                                ...tableProps,
                                onSort,
                                limit,
                                total,
                                onPageClick: this.handlePagination,
                                onDelete: modal => this.setState({modal}),
                                linkTo: 'countries'
                            }}/>
                        )}
                    </Col>
                </Row>
                {modal && (
                    <Modal isOpen>
                        <ModalHeader>
                            ¡Usted esta a punto de borrar un elemento!
                        </ModalHeader>
                        <ModalBody>
                            Confirme si esta de acuerdo: {modal.name} {modal.code}
                        </ModalBody>
                        <ModalFooter>
                            <ButtonGroup>
                                <Button color="danger" onClick={() => {
                                    this.props.deleteCountry(modal.id)
                                    this.setState({modal: null})
                                }} >
                                    Aceptar
                                </Button>
                                <Button color="info" onClick={() => this.setState({modal: null})}>
                                    Cancelar
                                </Button>
                            </ButtonGroup>
                        </ModalFooter>
                    </Modal>
            )}
            </Container>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {countries, limit, total, loading}, tableProps} = state.country;
    return {
        tableProps,
        countries,
        limit,
        total,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getCountries: filters => dispatch(fetchCountriesRequested(filters)),
    onSort: sort => dispatch(sortCountry(sort)),
    submitCountryData: () => dispatch(submitCountryDataRequested()),
    deleteCountry: id => dispatch(deleteCountrytRequested(id))
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
