import React, {PureComponent} from 'react';
import Table from '../../components/table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    fetchCarsRequested,
    sortCar
} from '../../actions/car'

// import keys from 'lodash/keys';
// import head from 'lodash/head';

class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCars();
    }

    render() {
        const {cars, loading, tableProps, onSort} = this.props;
        return (
            <div>
                
                <h1 align="center">Tabla de datos </h1>
                <br/>
                
                       
                <hr/>
                <h3 align="right" ><Link  to="/car/edit/new"> Ingresar nuevo </Link></h3>
                
                <Table {...{data: cars, ...tableProps, onSort: onSort}}/>
                
            </div>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {cars, loading}, tableProps} = state.car;
    return {
        tableProps,
        cars,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getCars: () => dispatch(fetchCarsRequested()),
    onSort: sort => dispatch(sortCar(sort))
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
