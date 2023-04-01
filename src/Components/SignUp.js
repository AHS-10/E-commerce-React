import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../Config/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
// import { auth, db } from "../Config/Config";

function SignUp() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // auth.createUserWithEmailAndPassword(email, password)
    //   .then((success) => {
    //     console.log(success);
    //     db.collection("users").doc(success.user.uid).set({
    //         FullName: fullName,
    //         Email: email,
    //         password: password,
    //       })
    //       .then(() => {
    //         setSuccessMsg(
    //           "SignUp Successfully, You will noe redirect to Login page"
    //         );
    //         setFullName("");
    //         setEmail("");
    //         setPassword("");
    //         setErrorMsg("");
    //         setTimeout(() => {
    //           setSuccessMsg("");
    //           navigate("/login");
    //         }, 3000);
    //       })
    //       .catch((error) => {
    //         setErrorMsg(error.message);
    //       });
    //   })
    //   .catch((error) => {
    //     setErrorMsg(error.message);
    //   });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const storeData = async () => {
          try {
            const docRef = await addDoc(collection(db, "users"), {
              FullName: fullName,
              Email: email,
              Password: password,
            });
            setSuccessMsg(
                        "SignUp Successfully, You will noe redirect to Login page"
                      );
                      setFullName("");
                      setEmail("");
                      setPassword("");
                      setErrorMsg("");
                      setTimeout(() => {
                        setSuccessMsg("");
                        navigate("/login");
                      }, 2000);
            // console.log("Document written with ID: ", docRef.id);
          } catch (error) {
            console.error("Error adding document: ", error);
        // setErrorMsg(error.message)

          }
        };
        storeData();
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 2000);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <h2>Sign Up</h2>
        {successMsg && (
          <>
            <p className='text-success'>{successMsg}</p>
            
          </>
        )}
        <form onSubmit={handleSignUp}>
          <div className="form-floating mt-4">
            <input
              type="text"
              class="form-control "
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(val) => {
                setFullName(val.target.value);
              }}
              value={fullName}
              required
            />
            <label for="floatingInput">Full Name</label>
          </div>

          <div className="form-floating mt-3">
            <input
              type="email"
              class="form-control "
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(val) => {
                setEmail(val.target.value);
              }}
              value={email}
              required
            />
            <label for="floatingInput">Email address</label>
          </div>

          <div className="form-floating mt-3">
            <input
              type="password"
              class="form-control "
              id="floatingPassword"
              placeholder="Password"
              onChange={(val) => {
                setPassword(val.target.value);
              }}
              value={password}
              required
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            SignUp
          </button>
        </form>
        {errorMsg && (
          <>
            <p className="text-danger">{errorMsg}</p>
          </>
        )}
        <p className="mt-2">
          Already have an account{" "}
          <Link to="/login" className="text-decoration-none">
            Login
          </Link>{" "}
        </p>
      </div>
    </>
  );
}

export default SignUp;
