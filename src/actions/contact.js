import constant from 'lodash/constant';

export const FETCH_CONTACTS_REQUESTED = 'FETCH_CONTACTS_REQUESTED'; // Accion | Action
export const FETCH_CONTACTS_SUCCEEDED = 'FETCH_CONTACTS_SUCCEEDED'; // Accion | Action

export const fetchContactsRequested = filter => ({type: FETCH_CONTACTS_REQUESTED, filter}) // Disparador o Action Creator
export const fetchContactsSucceeded = (contacts, limit, total) => ({
    type: FETCH_CONTACTS_SUCCEEDED,
    contacts, limit, total
}) // Disparador o Action Creator


export const SUBMIT_CONTACT_DATA_REQUESTED = 'SUBMIT_CONTACT_DATA_REQUESTED';
export const SUBMIT_CONTACT_DATA_SUCCEEDED = 'SUBMIT_CONTACT_DATA_SUCCEEDED';

export const submitContactDataRequested = constant({type: SUBMIT_CONTACT_DATA_REQUESTED});
export const submitContactDataSucceeded = constant({type: SUBMIT_CONTACT_DATA_SUCCEEDED});

// Accion | Action
export const SORT_CONTACT = 'SORT_CONTACT';
// Disparador o Action Creator
export const sortContact = sort => ({type: SORT_CONTACT, sort});
