import constant from 'lodash/constant';

export const FETCH_CARS_REQUESTED = 'FETCH_CARS_REQUESTED';
export const FETCH_CARS_SUCCEEDED = 'FETCH_CARS_SUCCEEDED';

export const fetchCarsRequested = constant({type: FETCH_CARS_REQUESTED})
export const fetchCarsSucceeded = cars => ({type: FETCH_CARS_SUCCEEDED, cars })


export const SORT_CAR = 'SORT_CAR';
export const sortCar = sort => ({type: SORT_CAR, sort});