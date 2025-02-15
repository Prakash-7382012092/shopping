import React from 'react';
import { createHashRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import Home from './components/Home';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

const App = () => {
  const router = createHashRouter(  // Changed from createBrowserRouter to createHashRouter
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
