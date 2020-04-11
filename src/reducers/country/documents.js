import {
    DELETE_COUNTRY_REQUESTED,
    DELETE_COUNTRY_SUCCEEDED,
    FETCH_COUNTRIES_SUCCEEDED,
    FETCH_COUNTRIES_REQUESTED,
    SORT_COUNTRY,
    SUBMIT_COUNTRY_DATA_SUCCEEDED,
    FETCH_COUNTRY_REQUESTED,
    FETCH_COUNTRY_SUCCEEDED,
    SET_COUNTRY_DATA
    
} from '../../actions/country';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    success: false,
    working: false,
    countries: [],
    country: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COUNTRIES_REQUESTED:
            return {...state, loading: true};
        case FETCH_COUNTRIES_SUCCEEDED:
            const {countries, limit, total} = action;
            return {...state, loading: false, countries, limit, total};
        case SORT_COUNTRY:
            return {
                ...state,
                loading: false,
                countries: orderBy(state.countries,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        case DELETE_COUNTRY_REQUESTED:
            return {...state, loading:true};
        case DELETE_COUNTRY_SUCCEEDED:
            return {...state, country: action.country, loading:false}
        case SUBMIT_COUNTRY_DATA_SUCCEEDED:
                return {...state, success: true, country: {}};
        case FETCH_COUNTRY_REQUESTED:
                return {...state, country: {}, loading: true};
        case FETCH_COUNTRY_SUCCEEDED:
                return {...state, country: action.country, loading: false};
        case SET_COUNTRY_DATA:
                return {...state, country: action.country, loading:false};
            default:
                return state;
    
    }
}