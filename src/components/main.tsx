import Navbar from './navbar';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import users from '../models/static_data';
import UserSummary from './usersummary';
import { Route, Routes } from 'react-router-dom';

function Main() {
    return (
    <div className='body-2'>
    <Navbar />
    <div className='section row wf-section'>
      <Sidebar />
      <Route path='/*'>
        <Route path='/dashboard' element={ <Dashboard />} />
        <Route path='/user' element={ <UserSummary />} />
      </Route>
    </div>
  </div>
    );
}

export default Main