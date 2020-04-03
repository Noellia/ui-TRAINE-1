import {
    call,
    put,
    delay,
    select
} from 'redux-saga/effects';

import CountryAPI from '../Api/country';
import {
    fetchCountriesSucceeded,
    fetchCountrySucceeded,
    submitCountryDataSucceeded
} from '../actions/country';

export function* fetchCountries({filter}) {
    try {
        const {countries, limit, total} = yield call(
            CountryAPI.fetch,
            filter
        );
        yield delay(1500);
        yield put(
            fetchCountriesSucceeded(countries, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }

}

export function* submitCountryData() {
    const {country} = yield select(state => state.country.documents);
    const result = yield call(CountryAPI.submitCountry, country);
    if (result.success) {
        yield put(
            submitCountryDataSucceeded()
        );
    }
}

export function* fetchCountry({id}) {
    // hacer Llmado a la api para el fetch de 1 contacto
    const country = yield call(CountryAPI.fetchOne, id);
    yield put(fetchCountrySucceeded(country))
}