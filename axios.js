/*
Axios is a promise-based HTTP Client for node.js and the browser. 
It is isomorphic (= it can run in the browser and nodejs with the same codebase). 
On the server-side it uses the native node.js http module, 
while on the client (browser) it uses XMLHttpRequests.
*/

import axios from "axios";
/** base url to make requests to the the movie database */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
/*

whenever I do like instance.get("/something")
it will send "https://api.themoviedb.org/3/something"

*/
export default instance;
