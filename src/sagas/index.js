import {
    all,
    takeEvery
} from 'redux-saga/effects';

import {FETCH_CARS_REQUESTED} from '../actions/car';
import {FETCH_COUNTRIES_REQUESTED} from '../actions/country';

import {fetchCars} from './car'
import {fetchCountries} from './country'

export default function* root() {
    return yield all([
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries),
        takeEvery(FETCH_CARS_REQUESTED, fetchCars)
    ])
}
