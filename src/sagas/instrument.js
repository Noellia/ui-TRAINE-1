import {call, put, delay, select } from 'redux-saga/effects';

import InstrumentAPI from '../Api/instrument';
import {fetchInstrumentsSucceeded, submitInstrumentDataSucceeded, fetchInstrumentSucceeded} from '../actions/instrument';

export function* fetchInstruments({filter}) {
    try {
        const {instruments, limit, total} = yield call(
            InstrumentAPI.fetch,
            filter
        );
        yield delay(1500);
        yield put(
            fetchInstrumentsSucceeded(instruments, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}
export function* submitInstrumentData() {
    const {instrument} = yield select(state => state.instrument.documents);
    const result = yield call(InstrumentAPI.submitInstrument, instrument);
    if (result.success) {
        yield put(
            submitInstrumentDataSucceeded()
        );
    }
}
export function* fetchInstrumentRequested({id}) {
    // hacer Llmado a la api para el fetch de 1 contacto
    const instrument = yield call(InstrumentAPI.fetchOne, id);
    yield put(fetchInstrumentSucceeded(instrument))
}