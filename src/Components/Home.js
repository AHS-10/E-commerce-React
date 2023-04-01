import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import { auth, db } from "../Config/Config";
import { onAuthStateChanged } from "firebase/auth";

function Home() {
  const GetCurrentUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          db.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => setUser(snapshot.data().FullName))
            .catch();
        } else {
        }
      });
    }, []);
    return user;
  };
  // const GetCurrentUser = () => {
  //   const [user, setUser] = useState(null);
  //   useEffect(() => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {

          
          
  //       } else {
  //       }
  //     });
  //   }, []);
  //   return user;
  // };

  const user = GetCurrentUser();
  console.log(user);

  return (
    <>
      <Navbar />
      <Products />
    </>
  );
}

export default Home;
