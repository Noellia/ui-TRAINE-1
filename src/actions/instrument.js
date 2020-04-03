import constant from 'lodash/constant';

export const FETCH_INSTRUMENTS_REQUESTED = 'FETCH_INSTRUMENTS_REQUESTED'; // Accion | Action
export const FETCH_INSTRUMENTS_SUCCEEDED = 'FETCH_INSTRUMENTS_SUCCEEDED'; // Accion | Action

export const fetchInstrumentsRequested = filter => ({type: FETCH_INSTRUMENTS_REQUESTED, filter}) // Disparador o Action Creator
export const fetchInstrumentsSucceeded = (instruments, limit, total) => ({
    type: FETCH_INSTRUMENTS_SUCCEEDED,
    instruments, limit, total
}) // Disparador o Action Creator


export const SUBMIT_INSTRUMENT_DATA_REQUESTED = 'SUBMIT_INSTRUMENT_DATA_REQUESTED';
export const SUBMIT_INSTRUMENT_DATA_SUCCEEDED = 'SUBMIT_INSTRUMENT_DATA_SUCCEEDED';

export const submitInstrumentDataRequested = constant({type: SUBMIT_INSTRUMENT_DATA_REQUESTED});
export const submitInstrumentDataSucceeded = constant({type: SUBMIT_INSTRUMENT_DATA_SUCCEEDED});

export const SET_INSTRUMENT_DATA = 'SET_INSTRUMENT_DATA';

export const setInstrumentData = instrument => ({type: SET_INSTRUMENT_DATA, instrument});

// Accion | Action
export const SORT_INSTRUMENT = 'SORT_INSTRUMENT';
// Disparador o Action Creator
export const sortInstrument = sort => ({type: SORT_INSTRUMENT, sort});

export const FETCH_INSTRUMENT_REQUESTED = 'FETCH_INSTRUMENT_REQUESTED'; // Accion | Action
export const FETCH_INSTRUMENT_SUCCEEDED = 'FETCH_INSTRUMENT_SUCCEEDED'; // Accion | Action

export const fetchInstrumentRequested = id => ({type: FETCH_INSTRUMENT_REQUESTED, id}) // Disparador o Action Creator
export const fetchInstrumentSucceeded = (instrument) => ({
    type: FETCH_INSTRUMENT_SUCCEEDED, instrument
}) // Disparador o Action Creator