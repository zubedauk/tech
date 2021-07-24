import './App.css';
import Cities from './Cities'
import React, { useState, useEffect } from "react";


function App() {
  const [data,setData]=useState('')
   useEffect(
     function(){
       fetch('https://cyf-api.codeyourfuture.io/cities')
       .then(function(obj){
            return obj.json()
       })
       .then(function(data){
         setData(data["cities"][0])
         console.log(data["cities"][0].name)
         console.log(data["cities"].length)
         

       })
     },[]) 
  if(data){
    return (
      <Cities db={data} />
     )
  }else{
    return false;
  }
 
}

export default App;
