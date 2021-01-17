/**
 * All API urls and other constants will reside here.
 * It is always a good idea to keep a local copy of all API response to 
 * keep your app working for UI changes and 
 * make it independent of network requirements.
 * 
 * They need to be categorised and grouped together as:
 *  - Actual endpoints url.
 *  - Local data .json file path.
 * At a moment only one group should be uncommented.
 * 
 * Other way to deal with this is to name every json file as per your service endpoint and use a basepath variable.
 * Toggle this basePath variable between "actual-domain.com/" or "/data/".
 */

// Actual endpoints. Uncomment below section to use actual data.
// export const GET_ALL_USERS = () => `https://jsonplaceholder.typicode.com/users`;
// export const GET_USER_DETAILS = (id) => `https://jsonplaceholder.typicode.com/users/${id}`;

// Local endpoints. Uncomment below section to use dummy local data.
export const GET_ALL_USERS = () => `/data/users`;
export const GET_USER_DETAILS = (id) => `/data/user`;
