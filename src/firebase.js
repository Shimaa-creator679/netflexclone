
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6zTKdGgHNxdJjocjrkDxoLov_RYfom1U",
  authDomain: "netflex-clone-febf0.firebaseapp.com",
  projectId: "netflex-clone-febf0",
  storageBucket: "netflex-clone-febf0.firebasestorage.app",
  messagingSenderId: "358952965010",
  appId: "1:358952965010:web:ef20d5010ee09fd880274b"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)

const signup=async(name,email,password)=>{
  try{

    const res=await createUserWithEmailAndPassword(auth,email,password)
    const user=res.user

    await addDoc(collection(db,"user"),{
      uid:user.uid,
      name,
      authprovider:"Local",
      email,

    })

  }
  catch(e){
    console.log(e);
   toast.error(e.code)

  }
};

const signin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } 
  catch (e) {
    console.error("Error during signin:", e.message);
    toast.error(e.code)
  }
};

const logout= async()=>{

     signOut(auth)
 
 } 
 export{auth,db,signup,signin,logout}


  
