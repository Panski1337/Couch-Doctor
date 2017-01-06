import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {globalReducer} from '../reducers/globalReducer';

const rootReducer = globalReducer;


export default function configureStore(initialState) {
  if (__DEV__) {
    return createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
  } else {
    return createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware)
    ));
  }
}
