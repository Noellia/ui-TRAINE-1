import {
    call,
    put,
    delay
} from 'redux-saga/effects';

import ContactAPI from '../Api/contact';
import {
    fetchContactsSucceeded
} from '../actions/contact';

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