import { Button, Card, CardContent, Container, IconButton } from "@mui/material";
import React from "react";
import './interactionsHome.css'
import temporal from '../../../landing/images/imagenTemporal.png'
import AtenasAcademy from '../../../landing/images/AtenasAcademy.png'
import { NavLink } from "react-router-dom";
class ButtonsInteracction extends React.Component{
    render(){
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
                            <NavLink to={'/'} className='link'>
                                <p style={{color:'#616161'}}>Mi espacio <strong style={{color:'#0c5091'}}>ATENAS</strong></p>
                            </NavLink>
                        </IconButton>
                        {/* <Button className="spaceAtenas"> <p>Mi espacio <strong>ATENAS</strong></p></Button> */}
                    </CardContent>
                </Card>
                <Card className="cardContainerButtons2">
                    <CardContent className="cardContentButtons2">
                        <p>hola</p>
                    </CardContent>
                </Card>
                <Card className="cardContainerButtons3">
                    <CardContent className="cardContentButtons3">
                        <p>Descargables</p>
                        <IconButton className="IconButton3">
                            <NavLink to={'/home/courses'}>
                                <img className="imgButton3" src={AtenasAcademy} alt="Logo Atenas Academy" title=""/>
                            </NavLink>
                        </IconButton>
                    </CardContent>
                </Card>
            </Container>
        )
    }
}
export default ButtonsInteracction;
