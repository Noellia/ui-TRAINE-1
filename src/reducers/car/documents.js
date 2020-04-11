import {
    DELETE_CAR_REQUESTED,
    DELETE_CAR_SUCCEEDED,
    FETCH_CARS_REQUESTED,
    FETCH_CARS_SUCCEEDED,
    SORT_CAR,
    SUBMIT_CAR_DATA_SUCCEEDED,
    FETCH_CAR_REQUESTED,
    FETCH_CAR_SUCCEEDED,
    SET_CAR_DATA
} from '../../actions/car';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    success: false,
    working: false,
    cars: [],
    car: {}
    
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CARS_REQUESTED:
            return {...state, loading: true};
        case FETCH_CARS_SUCCEEDED:
            const {cars, limit, total} = action;
            return {...state, loading: false, cars, limit, total};
        case SORT_CAR:
            return {
                ...state,
                loading: false,
                cars: orderBy(state.cars,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
            case SUBMIT_CAR_DATA_SUCCEEDED:
                return {...state, success: true, car: {}};
            case DELETE_CAR_REQUESTED:
                return {...state, loading: true}
            case DELETE_CAR_SUCCEEDED:
                    return {...state, car: action.car, loading: false};
            case FETCH_CAR_REQUESTED:
                return {...state, car: {}, loading: true};
            case FETCH_CAR_SUCCEEDED:
                return {...state, car: action.car, loading: false};
            case SET_CAR_DATA:
                return {...state, car: action.car, loading:false};
            default:
                return state;
    }
}