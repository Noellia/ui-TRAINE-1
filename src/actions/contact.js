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

export const SET_CONTACT_DATA = 'SET_CONTACT_DATA';

export const setContactData = contact => ({type: SET_CONTACT_DATA, contact});

// Accion | Action
export const SORT_CONTACT = 'SORT_CONTACT';
// Disparador o Action Creator
export const sortContact = sort => ({type: SORT_CONTACT, sort});

export const FETCH_CONTACT_REQUESTED = 'FETCH_CONTACT_REQUESTED'; // Accion | Action
export const FETCH_CONTACT_SUCCEEDED = 'FETCH_CONTACT_SUCCEEDED'; // Accion | Action

export const fetchContactRequested = id => ({type: FETCH_CONTACT_REQUESTED, id}) // Disparador o Action Creator
export const fetchContactSucceeded = (contact) => ({
    type: FETCH_CONTACT_SUCCEEDED, contact
}) // Disparador o Action Creator

export const DELETE_CONTACT_REQUESTED = 'DELETE_CONTACT_REQUESTED'; // Accion | Action
export const DELETE_CONTACT_SUCCEEDED = 'DELETE_CONTACT_SUCCEEDED'; // Accion | Action

export const deleteContactRequested = id => ({type: DELETE_CONTACT_REQUESTED, id});
export const deleteContactSucceeded = constant({type: DELETE_CONTACT_SUCCEEDED}); 
