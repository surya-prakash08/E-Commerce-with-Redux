import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar1 from './Navbar';

import {Provider} from 'react-redux';
import store from '../store/store';
const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
      <Navbar1/>
      <main>
        <Outlet/>
      </main>
      </Provider>
    </>
  )
}

export default RootLayout
