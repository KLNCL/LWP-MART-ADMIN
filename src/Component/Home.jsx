import React, { useEffect } from 'react'
import UserManagement from './UserMangement/UserManagement'
import BuyersSellersChart from './Chart/Chart'
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const checkLoginStatus = () => {
    const token = localStorage.getItem("authToken"); 
    if (!token) {
      navigate('/login');
    } else {
      console.log("No token found, user is not logged in.");
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  console.log("hii+");

  return (
    <div>
        <UserManagement/>
        <BuyersSellersChart/>
    </div>
  )
}
