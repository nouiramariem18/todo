import { createStore } from 'redux';
import tasksReducer from './tasksReducer';

const persistedState = localStorage.getItem('tasksState')
  ? JSON.parse(localStorage.getItem('tasksState'))
  : undefined;

const store = createStore(
  tasksReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem('tasksState', JSON.stringify(store.getState()));
});

export default store;
