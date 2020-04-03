import {
    FETCH_INSTRUMENTS_REQUESTED,
    FETCH_INSTRUMENTS_SUCCEEDED,
    SORT_INSTRUMENT,
    SUBMIT_INSTRUMENT_DATA_SUCCEEDED,
    FETCH_INSTRUMENT_REQUESTED,
    FETCH_INSTRUMENT_SUCCEEDED,
    SET_INSTRUMENT_DATA
} from '../../actions/instrument';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    success: false,
    working: false,
    instruments: [],
    instrument: {}
    
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_INSTRUMENTS_REQUESTED:
            return {...state, loading: true};
        case FETCH_INSTRUMENTS_SUCCEEDED:
            const {instruments, limit, total} = action;
            return {...state, loading: false, instruments, limit, total};
        case SORT_INSTRUMENT:
            return {
                ...state,
                loading: false,
                cars: orderBy(state.instruments,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
            case SUBMIT_INSTRUMENT_DATA_SUCCEEDED:
                return {...state, success: true, instrument: {}};
            case FETCH_INSTRUMENT_REQUESTED:
                return {...state, instrument: {}, loading: true};
            case FETCH_INSTRUMENT_SUCCEEDED:
                return {...state, instrument: action.instrument, loading: false};
            case SET_INSTRUMENT_DATA:
                return {...state, instrument: action.instrument, loading:false};
            default:
                return state;
    }
}