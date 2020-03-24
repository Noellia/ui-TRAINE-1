import {
    call,
    put
} from 'redux-saga/effects';

import ContactAPI from '../Api/contact';
import {
    fetchContactsSucceeded
} from '../actions/contact';

export function* fetchContacts() {
    try {
        const contacts = yield call(
            ContactAPI.fetch
        );
        yield put(
            fetchContactsSucceeded(contacts)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}