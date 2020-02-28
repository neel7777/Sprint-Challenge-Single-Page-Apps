import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Episodes () {
    const [ep, setEp] = useState([]);
    useEffect(() => {
        
        axios.get('https://swapi.co/api/people')
          .then(response => {
            console.log(response);
            
            
            
          })
          .catch(error =>{
            console.log("Data not returned", error);
        })
      }, []);

}