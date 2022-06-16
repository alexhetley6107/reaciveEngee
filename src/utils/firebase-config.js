import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEwxcejKW2CYVmAfbYu8YXJXj94GAMD74",
  authDomain: "engee-dd49f.firebaseapp.com",
  projectId: "engee-dd49f",
  storageBucket: "engee-dd49f.appspot.com",
  messagingSenderId: "394522486095",
  appId: "1:394522486095:web:f6b49809c834c2352d913a"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

