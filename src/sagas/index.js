import {
    all,
    takeEvery
} from 'redux-saga/effects';

import {FETCH_CARS_REQUESTED} from '../actions/car';
import {FETCH_CONTACTS_REQUESTED} from '../actions/contact';
import {FETCH_COUNTRIES_REQUESTED} from '../actions/country';
import {SUBMIT_CONTACT_DATA_REQUESTED} from '../actions/contact'

import {fetchCars} from './car'
import {fetchContacts, submitContactData} from './contact'
import {fetchCountries} from './country'


export default function* root() {
    return yield all([
        takeEvery(FETCH_CARS_REQUESTED, fetchCars),
        takeEvery(FETCH_CONTACTS_REQUESTED, fetchContacts),
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries),
        takeEvery(SUBMIT_CONTACT_DATA_REQUESTED, submitContactData)
        
    ])
}
