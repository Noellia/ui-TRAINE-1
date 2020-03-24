import {
    FETCH_CONTACTS_REQUESTED,
    FETCH_CONTACTS_SUCCEEDED,
    SORT_CONTACT
} from '../../actions/contact';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    countries: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CONTACTS_REQUESTED:
            return {...state, loading: true};
        case FETCH_CONTACTS_SUCCEEDED:
            return {...state, loading: false, contacts: action.contacts};
        case SORT_CONTACT:
            return {
                ...state,
                loading: false,
                contacts: orderBy(state.contacts,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        default:
            return state;
    }
}