// ///////////////////////////////////////////
// Polyfills
import 'babel-polyfill';

// ///////////////////////////////////////////
// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// ///////////////////////////////////////////
// Components
import ProfileContainer from './components/ProfileContainer';


// ///////////////////////////////////////////
// REDUX AND REDUX FORM
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const reducers = { form: formReducer };
const reducer = combineReducers(reducers);
const store = createStore(reducer);

// ///////////////////////////////////////////
// Render the App
ReactDOM.render((
  <Provider store={store}>
    <ProfileContainer />
  </Provider>
), document.getElementById('app'));

