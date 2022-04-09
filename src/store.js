import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { taskListReducer } from './components/todos/todos.reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));
const store = createStore(taskListReducer, enhancers);
export default store;
