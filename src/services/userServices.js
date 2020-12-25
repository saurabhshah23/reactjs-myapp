// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";

export const getUserDetails = (id) => {
  console.log("userServices > getUserDetails called...");
  return new Promise((resolve, reject) => {
    try {
      // do db call or API endpoint axios call here and return the promise.
      resolve({
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
