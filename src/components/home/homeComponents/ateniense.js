import { Box, Container, IconButton, Modal, Skeleton } from "@mui/material";
import React, { useState } from "react";
import logoAteniense from '../../../landing/images/normal/Ateniense.png'
import xxs from '../../../landing/images/noticias/1.0-xxs.jpg'
import xs from '../../../landing/images/noticias/1.1-xs.jpg'
import s from '../../../landing/images/noticias/1.2s.jpg'
import m from '../../../landing/images/noticias/2m.jpg'
import l from '../../../landing/images/noticias/3.0l.jpg'
import xl from '../../../landing/images/noticias/3.1xl.jpg'
import xxl from '../../../landing/images/noticias/unaanamed.png'
import {AddPhotoAlternateRounded} from '@mui/icons-material';
import './ateniense.css'

export default function Ateniense() {
    const visible = true
    const [open, setOpen]=useState(false)
    /* Funcion Tiempo */
    const fecha = new Date();
    const annoActual = fecha.getFullYear();
    const mesActual = fecha.getMonth() + 1;
    function obtenerNombreMes (numero) {
        let miFecha = new Date();
        if (0 < numero && numero <= 12) {
          miFecha.setMonth(numero - 1);
          return new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(miFecha);
        } else {
          return null;
        }
    }

    const handleAdmin=()=>{
        setOpen(!open)
    }
    const BotonAteninese = 
    <IconButton className="adminAteniense" onClick={handleAdmin}>
        <AddPhotoAlternateRounded/>
    </IconButton>;
    return(
        <Box className="boxateniense">
            {/* { visible?BotonAteninese:''} */}
            <Box className="containerBody">
                <div className="headerAteniense">
                    <img className="logoateninese" src={logoAteniense} alt="Logo Ateniense" title=""/>
                    <h3 style={{margin:0, opacity:.6}}>{obtenerNombreMes(mesActual)+' '+annoActual}</h3>
                </div>
                <Box className="containerBody1">
                    
                    <img style={{width:'100%', height:'auto'}} src={xxl} alt="Logo Ateniense" title=""/>
                    <img style={{width:'100%', height:'auto'}} src={xl} alt="Logo Ateniense" title=""/>
                    <img style={{width:'100%', height:'auto'}} src={l} alt="Logo Ateniense" title=""/>
                    <img style={{width:'100%', height:'auto'}} src={m} alt="Logo Ateniense" title=""/>
                    <img style={{width:'100%', height:'auto'}} src={s} alt="Logo Ateniense" title=""/>
                    <img style={{width:'100%', height:'auto'}} src={xs} alt="Logo Ateniense" title=""/>
                    <img style={{width:'100%', height:'auto'}} src={xxs} alt="Logo Ateniense" title=""/>
                </Box>
            </Box>

            <Modal
            open={open}
            onClose={handleAdmin}
            aria-labelledby="Modal Administrativo Ateniense"
            aria-describedby="Modal Administrativo para gestión del Ateniense"
            >
                <Box className="boxModalAteniense">
                    <h3 style={{textAlign:'center'}}>Panel Administrativo de <strong style={{color:"#0c508f"}}>El Ateniense</strong></h3>
                </Box>
            </Modal>
        </Box>
    )
}

