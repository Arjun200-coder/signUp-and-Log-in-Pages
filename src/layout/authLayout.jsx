import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayoutPage() {
  return (
    <>
    <div className='w-full'>
    <Outlet />
    </div>
    </>
  )
}

export default AuthLayoutPage