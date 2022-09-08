import { Box, Button, Card, CardContent, Container, IconButton, Modal, Portal } from "@mui/material";
import React, { useEffect, useState } from "react";
import './interactionsHome.css'
import temporal from '../../../landing/images/imagenTemporal.png'
import AtenasAcademy from '../../../landing/images/AtenasAcademy.png'
import { NavLink } from "react-router-dom";
import Feed from "./feed";
import axios from "axios";

function ButtonsInteracction(props){
    const widthScreen = window.innerWidth
    /* Instagram Feed */
    // const [data, setData]=useState([])
    // useEffect(() => {
    //     // this is to avoid memory leaks
    //     const abortController = new AbortController();

    //     async function fetchInstagramPost () {
    //       try{
    //         axios
    //             .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQVJXSWtTMURJZAU9BYWRubnFrbUZAhdjdsb2s3SzEyUk9TMHdWc0NXbGg5S3J6Q2p3bGNHVzcyUV9ydHM1eEhjMTdLU0JzUWdIMGZA5NnBKZAnJOVDdHVENsVmUtLVRHdkw0U0hMei1PaWxqdmU3MG9GRgZDZD`)
    //             .then((resp) => {
    //                 setData(resp.data.data)
    //             })
    //       } catch (err) {
    //           console.log('error', err)
    //       }
    //     }

    //     // manually call the fecth function 
    //     fetchInstagramPost();
  
    //     return () => {
    //         // cancel pending fetch request on component unmount
    //         abortController.abort(); 
    //     };
    // }, [])


    // const cardContainerButtons2 = 
    //     <Card className="cardContainerButtons3">
    //         <CardContent className="cardContentButtons3">
    //         {data.map((feed) => 
    //         (
    //             <Feed key={feed.id} feed={feed} />
    //         )
            
    //         )}
    //         </CardContent>
    //     </Card>;

    const cardContainerButtons3 = 
        <Card className="cardContainerButtons3">
            <CardContent className="cardContentButtons3">
                <p>Descargables</p>
                <IconButton className="IconButton3" onClick={()=>props.evento(1)}>
                    <NavLink to={'/home/resources'}>
                        <img className="imgButton3" src={AtenasAcademy} alt="Logo Atenas Academy" title=""/>
                    </NavLink>
                </IconButton>
            </CardContent>
            <CardContent className="cardContentButtons3">
                <p>Descargables</p>
                <IconButton className="IconButton3" onClick={()=>props.evento(1)}>
                    <NavLink to={'/home/resources'}>
                        <img className="imgButton3" src={AtenasAcademy} alt="Logo Atenas Academy" title=""/>
                    </NavLink>
                </IconButton>
            </CardContent>
        </Card>;
        return(
            <Container className="containerButtons">
                <Card className="cardContainerButtons1">
                    <CardContent className="cardContentButtons1">
                        <div className="descriptionButton">
                            <p className="nameButton">Nombre y Apellido</p>
                            <p className="chargeButton">Cargo que ocupa</p>
                        </div>
                        <img src={temporal} alt="Nombre de Usuario" title="" className="personButton"/>
                        <IconButton className="spaceAtenas">
                            <NavLink to={'/home/profile'} className='link'>
                                <p style={{color:'#616161'}}>Mi espacio <strong style={{color:'#0c5091'}}>ATENAS</strong></p>
                            </NavLink>
                        </IconButton>
                    </CardContent>
                </Card>
                {/* {widthScreen<768? '':cardContainerButtons2} */}
                {cardContainerButtons3}
                {/* {state.widthScreen<768? '':cardContainerButtons3} */}
            </Container>
        )
    }
export default ButtonsInteracction;
