import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Navbar from './components/navbar';
import PageNotFound from './components/pagenotefound';
import Sidebar from './components/sidebar';
import UserSummary from './components/usersummary';
import './lendsqr-project.css';


function App() {

  const [ authenticated, setAuthenticated ] = useState<Boolean|undefined>(false);
  useEffect(()=>{
    setAuthenticated(Boolean(localStorage.getItem('lendsqr.authenticated')));
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route path='/pagenotfound' element={ <PageNotFound /> } />
          <Route path='/*' element={
            (authenticated)? (
                <div className='body-2'>
                <Navbar />
                <div className='section row wf-section'>
                  <Sidebar />
                  <Routes>
                      <Route path='/dashboard' element={ <Dashboard />} />
                      <Route path='/users/:id' element={ <UserSummary />} />
                  </Routes>
                </div>
              </div>) : <Navigate to='/login' />
          } />
          <Route path='*' element={ <PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
