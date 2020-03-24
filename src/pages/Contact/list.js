import React, {PureComponent} from 'react';
import Table from '../../components/table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    fetchContactsRequested,
    sortContact
} from '../../actions/contact'

import keys from 'lodash/keys';
import head from 'lodash/head';

class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        const {contacts, loading, tableProps, onSort} = this.props;
        return (
            <div>
                
                <h1 align="center">Tabla de datos </h1>
                <br/>

                <hr/>
                <h3 align="right" ><Link to="/contacts/edit/new">Ingresar nuevo</Link></h3>
                
                <Table {...{data: contacts, ...tableProps, onSort: onSort}}/>
                
            </div>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {contacts, loading}, tableProps} = state.contact;
    return {
        tableProps,
        contacts,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getContacts: () => dispatch(fetchContactsRequested()),
    onSort: sort => dispatch(sortContact(sort))
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);