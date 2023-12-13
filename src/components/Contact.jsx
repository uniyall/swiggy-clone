import React from 'react'
import {useParams} from 'react-router-dom';

function Contact() {
  const {testId} = useParams();
  return (
    <div className = "mt-[120px]">Contact {testId ? testId : 'Hey'}</div>
  )
}

export default Contact
