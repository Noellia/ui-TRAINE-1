import {
    FETCH_CONTACTS_REQUESTED,
    FETCH_CONTACTS_SUCCEEDED,
    SORT_CONTACT
} from '../../actions/contact';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    contacts: []
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
        default:
            return state;
    }
}