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
    deleteContactRequested,
    fetchContactsRequested,
    sortContact,
    submitContactDataRequested
} from '../../actions/contact'

class App extends PureComponent {
        constructor(props) {
        super(props);
        this.state = {
            modal: null
        };
    }
    componentDidMount() {
        this.props.getContacts();
    }

    handlePagination = (skip) => {
        this.props.getContacts({skip});
    } 

    render() {
        const {
            contacts,
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
                        <Button color="primary" tag={Link} to="/contacts/edit/new"> Nuevo </Button>
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
                                data: contacts,
                                ...tableProps,
                                onSort,
                                limit,
                                total,
                                onPageClick: this.handlePagination,
                                onDelete: modal => this.setState({modal}),
                                linkTo: 'contacts'
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
                            Confirme si esta de acuerdo: {modal.first_name} {modal.last_name}
                        </ModalBody>
                        <ModalFooter>
                            <ButtonGroup>
                                <Button color="danger" onClick={() => {
                                    this.props.deleteContact(modal.id)
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
    const {documents: {contacts, limit, total, loading}, tableProps} = state.contact;
    return {
        tableProps,
        contacts,
        limit,
        total,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getContacts: filters => dispatch(fetchContactsRequested(filters)),
    onSort: sort => dispatch(sortContact(sort)),
    submitContactData: () => dispatch(submitContactDataRequested()),
    deleteContact: id => dispatch(deleteContactRequested(id)) 

})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);