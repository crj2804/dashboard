import React, { useState, useEffect } from 'react';
import Logo from '../images/Logo.png';
import '../styling/dashboard.scss';
import person from '../images/person.png';
import axios from 'axios';

const DashBoard = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get('/user')
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  if (!user) return null;

  function logoutOnClick(logout) {
    return () => axios.get('/logout', logout).then(() => {
      window.location.href = '/login';
    });
  }

  return (
    <div className="dashboard-header">
      <img
        className="logo-sizing"
        src={Logo}
        alt="logo"
      />
      <div id="centering" style={{ float: 'right' }}>
        <div>
          <img
            className="person-sizing"
            src={person}
            alt="person"
          />
        </div>
        <label style={{ display: 'inline-block' }}>{user.name}</label>
        <div>
          <button id="logout" onClick={logoutOnClick()}>
            Logout
        </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;