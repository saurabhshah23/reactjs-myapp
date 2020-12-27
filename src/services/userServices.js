// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_USERS } from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
export const getAllUsers = () => {
  console.log("userServices > getAllUsers called...");
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
      .get(GET_ALL_USERS)
      .then((res) => {
        console.log("getAllUsers > axios res=", res);
        const persons = res.data;
        resolve(res.data);
      })
      .catch((err) => {
        console.log("getAllUsers > axios err=", err);
        reject("Error in getAllUsers axios!");
      });
    } catch (error) {
      console.error("in services > updateLastCwkId, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};

/**
 * Function to fetch the details of the user based on userId.
 * @param {string} userid of the user.
 */
export const getUserDetails = (id) => {
  console.log("userServices > getUserDetails called...");
  return new Promise((resolve, reject) => {
    try {
      // do db call or API endpoint axios call here and return the promise.
      resolve({
          "id": "30",
          "firstName": "Joel",
          "lastName": "Joseph",
          "gender": "Male",
          "age": 33,
          "isActiveEmployee": true,
          "location": "London"
      })
    } catch (error) {
      console.error("in services > updateLastCwkId, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};

