import { Box, Button, Card, CardContent, Container, IconButton, Modal, Portal } from "@mui/material";
import React, { useState } from "react";
import './interactionsHome.css'
import temporal from '../../../landing/images/imagenTemporal.png'
import AtenasAcademy from '../../../landing/images/AtenasAcademy.png'
import { NavLink } from "react-router-dom";

function ButtonsInteracction(props){
    const widthScreen = window.innerWidth
    const cardContainerButtons2 = 
        <Card className="cardContainerButtons2y3">
            <CardContent className="cardContentButtons2">
                <div
                    class="fb-like"
                    data-share="true"
                    data-width="450"
                    data-show-faces="true">
                </div>
            </CardContent>
        </Card>;

    const cardContainerButtons3 = 
        <Card className="cardContainerButtons3">
            <CardContent className="cardContentButtons3">
                <p>Descargables</p>
                <IconButton className="IconButton3" onClick={()=>props.evento(1)}>
                    <NavLink to={'/home/courses'}>
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
                {widthScreen<768? '':cardContainerButtons2}
                {cardContainerButtons3}
                {/* {state.widthScreen<768? '':cardContainerButtons3} */}
            </Container>
        )
    }
export default ButtonsInteracction;
