import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Questions from './pages/Questions/Questions';
import AskQuestion from './components/AskQuestion/AskQuestion';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import Tags from './pages/Tags/Tags';
import Users from './pages/Users/Users';
import UserProfile from './pages/UserProfile/UserProfile';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ValidateOTP from './pages/Auth/ValidateOTP';
import SetNewPassword from './pages/Auth/SetNewPassword';
import AuthenticateOTP from './pages/Auth/AuthenticateOTP';
import AccessAuth from './pages/Auth/AccessAuth';
import Valotp from './pages/Auth/Valotp';

function AllRoutes({ setFirst, setLanguage }) {
  return (
    <div>
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/Auth' element={<Auth setLanguage={setLanguage} />} />
      <Route exact path='/Questions' element={<Questions />} />
      <Route exact path='/AskQuestion' element={<AskQuestion />} />
      <Route exact path='/Questions/:id' element={<DisplayQuestion />} />
      <Route exact path='/Tags' element={<Tags />} />
      <Route exact path='/Users' element={<Users />} />
      <Route exact path='/Users/:id' element={<UserProfile />} />
      <Route exact path='/ForgotPassword' element={<ForgotPassword />} />
      <Route exact path='/ValidateOTP' element={<ValidateOTP />} />
      <Route exact path='/SetNewPassword' element={<SetNewPassword />} />
      <Route exact path='/AuthenticateOTP' element={<AuthenticateOTP setLanguage={setLanguage} />} />
      <Route exact path='/AccessAuth' element={<AccessAuth setFirst={setFirst} />} />
      <Route exact path='/Valotp'element={<Valotp setFirst={setFirst} />} />
      </Routes>
    </div>
  )
}

export default AllRoutes