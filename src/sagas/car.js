import {
    call,
    put,
    delay,
    select
} from 'redux-saga/effects';

import CarAPI from '../Api/car';
import {
    fetchCarsSucceeded, submitCarDataSucceeded, fetchCarSucceeded, deleteCarSucceeded
} from '../actions/car';

export function* fetchCars({filter}) {
    try {
        const {cars, limit, total} = yield call(
            CarAPI.fetch,
            filter
        );
        yield delay(1500);
        yield put(
            fetchCarsSucceeded(cars, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* submitCarData() {
    const {car} = yield select(state => state.car.documents);
    const result = yield call(CarAPI.submitCar, car);
    if (result.success) {
        yield put(
            submitCarDataSucceeded()
        );
    }
}
export function* fetchCarRequested({id}) {
    // hacer Llmado a la api para el fetch de 1 contacto
    const car = yield call(CarAPI.fetchOne, id);
    yield put(fetchCarSucceeded(car))
}

export function* deleteCar({id}) {
    const success = yield call(CarAPI.deleteCar, id);
    yield delay(500);
    yield put(
    deleteCarSucceeded(success)
    );
}