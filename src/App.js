import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmployeesList from "./pages/EmployeesList/EmployeesList"
import Home from "./pages/Home/Home"
import Error from "./pages/Error/Error.js";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';  
import { persistStore } from 'redux-persist';

function App() {
  let persistor = persistStore(store);
  return (
 <Provider store={store}>
  <PersistGate persistor={persistor}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="employees" element={<EmployeesList/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </PersistGate>
  </Provider>
  );
}

export default App;
