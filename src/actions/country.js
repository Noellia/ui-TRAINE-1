import constant from 'lodash/constant';

// Accion | Action

export const FETCH_COUNTRIES_REQUESTED = 'FETCH_COUNTRIES_REQUESTED'; 
export const FETCH_COUNTRIES_SUCCEEDED = 'FETCH_COUNTRIES_SUCCEEDED';

// Disparador o Action Creator

export const fetchCountriesRequested = constant({type: FETCH_COUNTRIES_REQUESTED}) // Disparador o Action Creator
export const fetchCountriesSucceeded = countries => ({type: FETCH_COUNTRIES_SUCCEEDED, countries })

// Accion | Action
export const SORT_COUNTRY = 'SORT_COUNTRY';
// Disparador o Action Creator
export const sortCountry = sort => ({type: SORT_COUNTRY, sort});
