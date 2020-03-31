import {
    FETCH_CONTACTS_REQUESTED,
    FETCH_CONTACTS_SUCCEEDED,
    SORT_CONTACT,
    SUBMIT_CONTACT_DATA_SUCCEEDED,
    FETCH_CONTACT_REQUESTED,
    FETCH_CONTACT_SUCCEEDED,
    SET_CONTACT_DATA
} from '../../actions/contact';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    success: false,
    working: false,
    contacts: [],
    contact: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CONTACTS_REQUESTED:
            return {...state, loading: true};
        case FETCH_CONTACTS_SUCCEEDED:
            const {contacts, limit, total} = action;
            return {...state, loading: false, contacts, limit, total};
        case SORT_CONTACT:
            return {
                ...state,
                loading: false,
                contacts: orderBy(state.contacts,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };

            case SUBMIT_CONTACT_DATA_SUCCEEDED:
                return {...state, success: true, contact: {}};
            case FETCH_CONTACT_REQUESTED:
                return {...state, contact: {}, loading: true};
            case FETCH_CONTACT_SUCCEEDED:
                return {...state, contact: action.contact, loading: false};
            case SET_CONTACT_DATA:
                return {...state, contact: action.contact, loading:false};
            default:
                return state;
    }

}