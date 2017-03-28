
/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ExampleTable from './components/ExampleTable';

injectTapEventPlugin();

render(
    <ExampleTable /> ,
    document.getElementById('app')
);
