import React from 'react';
import Header from './Header';
import Home from './Home';
import Photos from './Photos';
import TodoList from './TodoList';
import { Route, Routes } from 'react-router-dom';
import store from '../store.js';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />

        <Route
          path="/todos/*"
          element={
            <Provider store={store}>
              <TodoList />
            </Provider>
          }
        />
      </Routes>
    </div>
  );
};
export default App;
