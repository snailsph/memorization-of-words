import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';
import Perf from 'react-addons-perf'

const win = window;
win.Perf = Perf

const middlewares = [thunkMiddleware];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducers, {}, storeEnhancers);