import axios from 'axios';
import { Toast } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import base_url from './api/bootapi';
import { toast } from 'react-toastify';
import Room from './Room';
function FindRooms(){


     useEffect(()=>{
         document.title="find rooms";
     },[])
     useEffect(()=>{
            getAllRoomsFromServer();
     },[])

     
     const [rooms,setroomsDetails]=useState([

     ]);
    //function to get available rooms from server
    const getAllRoomsFromServer=()=>{
            axios.get('http://c726-103-156-19-229.ngrok.io/getRooms').then(
                (response)=>{
                        console.log(response);
                        toast.success("rooms");
                        setroomsDetails(response.data);
                      
                },
                (error)=>{
                        console.log(error);
                }
            )        
    };
    return(
        <div>
                <h1>show the vacate rooms suggested by seniors</h1>
                {
                        rooms.length>0
                        ? rooms.map((item)=><Room room={item} />)
                        :"No rooms"}
                
        </div>
    )
        };

export default FindRooms;