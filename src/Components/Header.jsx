import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        // An error happened.
        navigate("/");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="icon"
      />
      {user && (
        <div className="flex p-3">
          <img className="w-12 h-12" src={user.photoURL} alt="icon" />
          <button
            onClick={handleSignOut}
            className=" cursor-pointer bg-red-600 text-white font-bold ml-5 p-2 rounded-xl"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
