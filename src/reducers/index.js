import {combineReducers} from 'redux';

import car from './car';
import country from './country';
import contact from './contact';
import instrument from './instrument';

export default combineReducers({
    country,
    car,
    contact,
    instrument
})