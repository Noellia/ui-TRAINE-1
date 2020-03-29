import {call, put, delay, select } from 'redux-saga/effects';

import ContactAPI from '../Api/contact';
import {fetchContactsSucceeded, submitContactDataSucceeded } from '../actions/contact';

export function* fetchContacts({filter}) {
    try {
        const {contacts, limit, total} = yield call(
            ContactAPI.fetch,
            filter
        );
        yield delay(1500);
        yield put(
            fetchContactsSucceeded(contacts, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}
export function* submitContactData() {
    const contact = yield select(state => state.contacts.contact);
    const result = yield call(ContactAPI.submitContact, contact);
    if (result.success) {
        yield put(
            submitContactDataSucceeded()
        );
    }
}