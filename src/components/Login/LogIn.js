import React, { useRef, useState } from 'react'
import './Login.scss';
import { useNavigate} from "react-router-dom";
import MyBtn from "../MyBtn/MyBtn";
import { useDispatch } from 'react-redux';
import { signInWithPopup } from "firebase/auth";
import { auth, provider} from "../../firebase-config";

function LogIn(props) {

  const dispatch = useDispatch();

  const [isAlert, setAlert] = useState(false);

  console.log(auth.currentUser);
  
  const navigate = useNavigate();
  const logIn = async () => {
    /* signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result); */
      navigate('/');/* 
    })
    .catch((error) => {
      console.log(error);
    }); */
      
  }

  return (
    <section className="LogIn">
      <p className='LogIn-engee'>ENGEE</p>
      <p className='LogIn-title'>It`s free App for learning foreign words </p>
      

      <MyBtn big={ document.querySelector('body')?.clientWidth >  450  ? true : false} 
      border={'deepskyblue'} back={'darkblue'}
        method={logIn}>login with google</MyBtn>

    </section>
  )
}

export default LogIn