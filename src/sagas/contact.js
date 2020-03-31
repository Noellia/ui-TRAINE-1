import {call, put, delay, select } from 'redux-saga/effects';

import ContactAPI from '../Api/contact';
import {fetchContactsSucceeded, submitContactDataSucceeded, fetchContactSucceeded} from '../actions/contact';

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
    const {contact} = yield select(state => state.contact.documents);
    const result = yield call(ContactAPI.submitContact, contact);
    if (result.success) {
        yield put(
            submitContactDataSucceeded()
        );
    }
}
export function* fetchContactRequested({id}) {
    // hacer Llmado a la api para el fetch de 1 contacto
    const contact = yield call(ContactAPI.fetchOne, id);
    yield put(fetchContactSucceeded(contact))
}