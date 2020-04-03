import {
    all,
    takeEvery
} from 'redux-saga/effects';

import {FETCH_CARS_REQUESTED, FETCH_CAR_REQUESTED, SUBMIT_CAR_DATA_REQUESTED} from '../actions/car';
import {FETCH_CONTACTS_REQUESTED, FETCH_CONTACT_REQUESTED, SUBMIT_CONTACT_DATA_REQUESTED} from '../actions/contact';
import {FETCH_COUNTRIES_REQUESTED, FETCH_COUNTRY_REQUESTED, SUBMIT_COUNTRY_DATA_REQUESTED} from '../actions/country';
import {FETCH_INSTRUMENTS_REQUESTED, FETCH_INSTRUMENT_REQUESTED, SUBMIT_INSTRUMENT_DATA_REQUESTED } from '../actions/instrument';


import {fetchCars, fetchCarRequested, submitCarData} from './car'
import {fetchContacts, fetchContactRequested, submitContactData} from './contact'
import {fetchCountries, fetchCountry, submitCountryData} from './country'
import {fetchInstruments, fetchInstrumentRequested, submitInstrumentData } from './instrument'



export default function* root() {
    return yield all([
        takeEvery(FETCH_CARS_REQUESTED, fetchCars),
        takeEvery(FETCH_CAR_REQUESTED, fetchCarRequested),
        takeEvery(SUBMIT_CAR_DATA_REQUESTED, submitCarData),
        takeEvery(FETCH_CONTACTS_REQUESTED, fetchContacts),
        takeEvery(FETCH_CONTACT_REQUESTED, fetchContactRequested),
        takeEvery(SUBMIT_CONTACT_DATA_REQUESTED, submitContactData),
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries),
        takeEvery(FETCH_COUNTRY_REQUESTED, fetchCountry),
        takeEvery(SUBMIT_COUNTRY_DATA_REQUESTED, submitCountryData),
        takeEvery(FETCH_INSTRUMENTS_REQUESTED, fetchInstruments),
        takeEvery(SUBMIT_INSTRUMENT_DATA_REQUESTED, submitInstrumentData),
        takeEvery(FETCH_INSTRUMENT_REQUESTED, fetchInstrumentRequested)
    ])
}
