import React, {PureComponent} from 'react';
import Table from '../../components/table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    Container,
    Button,
    Row,
    Col,
    Spinner
} from 'reactstrap';

import {
    fetchContactsRequested,
    sortContact,
    submitContactDataRequested
} from '../../actions/contact'

class App extends PureComponent {
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
                                onPageClick: this.handlePagination
                            }}/>
                        )}
                    </Col>
                </Row>
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
    submitContactData: () => dispatch(submitContactDataRequested()) 

})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);