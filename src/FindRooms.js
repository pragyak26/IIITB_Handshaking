import axios from 'axios';
import React, { useEffect } from 'react';
import base_url from './api/bootapi';
function FindRooms(){


     useEffect(()=>{
         document.title="find rooms";
     },[])
     useEffect(()=>{
            getAllRoomsFromServer();
     },[])

     

    //function to get available rooms from server
    const getAllRoomsFromServer=()=>{
            axios.get(`${base_url}\findrooms`).then(
                (response)=>{
                        console.log(response);
                },
                (error)=>{
                        console.log(error);
                }
            )        
    };
    return(
        <div>
                <h1>show the vacate rooms suggested by seniors</h1>
        </div>
    )
};

export default FindRooms;