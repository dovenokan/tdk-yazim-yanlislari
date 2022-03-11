/* eslint-disable no-unreachable */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-const-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import {db,auth} from './firebases/firestore';
import { useState,useEffect  } from 'react';
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'
import {useHistory} from 'react-router-dom'
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Admin(props) {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const hist = useHistory()
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const userData = props.userData||"no user data"
    const userName = userData.displayName||process.env.REACT_APP_USER_IMG
    const userGmail = userData.email
    const userImage = userData.photoURL||process.env.REACT_APP_USER_IMG
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <button onClick={()=>auth.signOut()}>{userGmail}</button>
            <button onClick={()=>auth.signOut()}>{userName}</button>
        </>
    )
}

export default Admin
