import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import List from './list';
import Edit from './edit';
import New from './new';

export default ({match: {path}}) => (
    <Switch>
        <Route path={`${path}/edit/new`} exact component={New} />
        <Route path={`${path}/edit/:code`} exact component={Edit} />
        <Route path={path} component={List}/>
    </Switch>
);
