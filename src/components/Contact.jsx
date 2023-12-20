import React from 'react'
import {useParams, Outlet} from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

function Contact() {
  const {testId} = useParams();
  const {userName} = useContext(UserContext);
  return (
    <div className = "mt-[120px]">
      Contact {testId ? testId : 'Hey'}
      <div>{userName}</div>
      <Outlet></Outlet>
      </div>
  )
}

export default Contact
