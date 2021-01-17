import React, { useState } from "react";
import { getUserDetails } from "services";

export function useProvideAuth() {
  const [user, setUser] = useState(null);

  // signin method: It can either return a promise or execute a callback function.
  // You can prefer to keep this in userServices.js
  const signin = (id) => {
    console.log("SS:: PrivateRoute > useProviderAuth > signin() called...");
    return new Promise((resolve, reject) => {
      try {
        // do db call or API endpoint axios call here and return the promise.
        getUserDetails(2)
          .then((res) => {
            console.log("useProvideAuth > signin > getUserDetails > res=", res);
            setUser(res);
            resolve(res);
          })
          .catch((err) => {
            console.log("useProvideAuth > signin > getUserDetails > err=", err);
            setUser([]);
            reject("signin error!");
          });
      } catch (error) {
        console.error("signin error!==", error);
        reject("signin error!");
      }
    });
  };
  const signout = () => {
    return new Promise((resolve, reject) => {
      try {
        // do API endpoint axios call here and return the promise.
        setUser(null);
        resolve(true);
      } catch (error) {
        console.error("signout error!==", error);
        reject("signout error!");
      }
    });
  };

  // Firebase auth example code (ref: https://usehooks.com/useAuth/)
  // const signin = (email, password) => {
  //   return firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(response => {
  //       setUser(response.user);
  //       return response.user;
  //     });
  // };
  // const signout = () => {
  //   return firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       setUser(false);
  //     });
  // };

  return {
    user,
    signin,
    signout,
  };
}
