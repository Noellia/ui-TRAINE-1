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
    deleteInstrumentRequested,
    fetchInstrumentsRequested,
    sortInstrument,
    submitInstrumentDataRequested
} from '../../actions/instrument'

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: null
        };
    }
    componentDidMount() {
        this.props.getInstruments();
    }

    handlePagination = (skip) => {
        this.props.getInstruments({skip});
    } 

    render() {
        const {
            instruments,
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
                        <Button color="primary" tag={Link} to="/instruments/edit/new"> Nuevo </Button>
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
                                data: instruments,
                                ...tableProps,
                                onSort,
                                limit,
                                total,
                                onPageClick: this.handlePagination,
                                onDelete: modal => this.setState({modal}),
                                linkTo: 'instruments'
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
                            Confirme si esta de acuerdo: {modal.family} {modal.instrument}
                        </ModalBody>
                        <ModalFooter>
                            <ButtonGroup>
                                <Button color="danger" onClick={() => {
                                    this.props.deleteInstrument(modal.id)
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
    const {documents: {instruments, limit, total, loading}, tableProps} = state.instrument;
    return {
        tableProps,
        instruments,
        limit,
        total,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getInstruments: filters => dispatch(fetchInstrumentsRequested(filters)),
    onSort: sort => dispatch(sortInstrument(sort)),
    submitInstrumentData: () => dispatch(submitInstrumentDataRequested()),
    deleteInstrument: id => dispatch(deleteInstrumentRequested(id))

})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);