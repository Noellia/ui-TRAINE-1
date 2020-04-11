import {
    all,
    takeEvery
} from 'redux-saga/effects';

import {FETCH_CARS_REQUESTED, FETCH_CAR_REQUESTED, SUBMIT_CAR_DATA_REQUESTED, DELETE_CAR_REQUESTED} from '../actions/car';
import {FETCH_CONTACTS_REQUESTED, FETCH_CONTACT_REQUESTED, SUBMIT_CONTACT_DATA_REQUESTED, DELETE_CONTACT_REQUESTED} from '../actions/contact';
import {FETCH_COUNTRIES_REQUESTED, FETCH_COUNTRY_REQUESTED, SUBMIT_COUNTRY_DATA_REQUESTED, DELETE_COUNTRY_REQUESTED} from '../actions/country';
import {FETCH_INSTRUMENTS_REQUESTED, FETCH_INSTRUMENT_REQUESTED, SUBMIT_INSTRUMENT_DATA_REQUESTED , DELETE_INSTRUMENT_REQUESTED} from '../actions/instrument';


import {fetchCars, fetchCarRequested, submitCarData, deleteCar} from './car'
import {fetchContacts, fetchContactRequested, submitContactData, deleteContact} from './contact'
import {fetchCountries, fetchCountry, submitCountryData, deleteCountry} from './country'
import {fetchInstruments, fetchInstrumentRequested, submitInstrumentData, deleteInstrument } from './instrument'



export default function* root() {
    return yield all([
        takeEvery(DELETE_CAR_REQUESTED, deleteCar),
        takeEvery(FETCH_CARS_REQUESTED, fetchCars),
        takeEvery(FETCH_CAR_REQUESTED, fetchCarRequested),
        takeEvery(SUBMIT_CAR_DATA_REQUESTED, submitCarData),
        takeEvery(DELETE_CONTACT_REQUESTED, deleteContact),
        takeEvery(FETCH_CONTACTS_REQUESTED, fetchContacts),
        takeEvery(FETCH_CONTACT_REQUESTED, fetchContactRequested),
        takeEvery(SUBMIT_CONTACT_DATA_REQUESTED, submitContactData),
        takeEvery(DELETE_COUNTRY_REQUESTED, deleteCountry),
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries),
        takeEvery(FETCH_COUNTRY_REQUESTED, fetchCountry),
        takeEvery(SUBMIT_COUNTRY_DATA_REQUESTED, submitCountryData),
        takeEvery(DELETE_INSTRUMENT_REQUESTED, deleteInstrument),
        takeEvery(FETCH_INSTRUMENTS_REQUESTED, fetchInstruments),
        takeEvery(SUBMIT_INSTRUMENT_DATA_REQUESTED, submitInstrumentData),
        takeEvery(FETCH_INSTRUMENT_REQUESTED, fetchInstrumentRequested)
        
    ])
}
