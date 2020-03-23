import React, {PureComponent} from 'react';
import Table from '../../components/table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    fetchCountriesRequested,
    sortCountry
} from '../../actions/country'

import keys from 'lodash/keys';
import head from 'lodash/head';

class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCountries();
    }

    render() {
        const {countries, loading, tableProps, onSort} = this.props;
        return (
            <div>
                
                <h1 align="center">Tabla de datos </h1>
                <br/>
                
                
                
                <hr/>
                <h3 align="right" ><Link  to="/country/edit/new"> Ingresar nuevo </Link></h3>
                
                <Table {...{data: countries, ...tableProps, onSort: onSort}}/>
                
            </div>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {countries, loading}, tableProps} = state.country;
    return {
        tableProps,
        countries,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getCountries: () => dispatch(fetchCountriesRequested()),
    onSort: sort => dispatch(sortCountry(sort))
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
