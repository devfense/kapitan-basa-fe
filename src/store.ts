import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';
import createSagaMiddleware from 'redux-saga';

import reducers from './modules/reducers';
import routesMap from './routesMap';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const { reducer, middleware, enhancer } = connectRoutes(routesMap);

const rootReducer = combineReducers({ location: reducer, ...reducers });
const middlewares = applyMiddleware(sagaMiddleware, middleware);
const composeEnhancers = composeWithDevTools({});
const store = createStore(rootReducer, composeEnhancers(enhancer, middlewares));

export type LocationState = ReturnType<typeof reducer>;
export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);

export default store;