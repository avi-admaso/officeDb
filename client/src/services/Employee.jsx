// const { response } = require("express")

const myServer =
'http://localhost:8000/Workers/621e114da72c607127350a2e'
export const getAllEmployee = ()=>{
  return fetch(myServer) 
  .then((response)=>{console.log(response.json())})
  .catch(console.log("you fucked"))
}
