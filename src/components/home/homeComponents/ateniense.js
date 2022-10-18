import { Box, Button, Container, IconButton, Modal, Skeleton } from "@mui/material";
import React, { useState } from "react";
import logoAteniense from '../../../landing/images/comprimido/logo_ateniense.png'
import xxs from '../../../landing/images/noticias/1.0-xxs.jpg'
import xs from '../../../landing/images/noticias/1.1-xs.jpg'
import s from '../../../landing/images/noticias/1.2s.jpg'
import m from '../../../landing/images/noticias/2m.jpg'
import l from '../../../landing/images/noticias/3.0l.jpg'
import xl from '../../../landing/images/noticias/3.1xl.jpg'
import xxl from '../../../landing/images/noticias/unaanamed.png'
import { AddPhotoAlternateRounded } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";

export default function Ateniense() {
    const style = styles()
    const visible = true
    const [open, setOpen] = useState(false)
    /* Funcion Tiempo */
    const fecha = new Date();
    const annoActual = fecha.getFullYear();
    const mesActual = fecha.getMonth() + 1;
    function obtenerNombreMes(numero) {
        let miFecha = new Date();
        if (0 < numero && numero <= 12) {
            miFecha.setMonth(numero - 1);
            return new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(miFecha);
        } else {
            return null;
        }
    }

    const handleAdmin = () => {
        setOpen(!open)
    }
    const BotonAteninese =
        <IconButton className={style.adminAteniense} onClick={handleAdmin}>
            <AddPhotoAlternateRounded />
        </IconButton>;
    return (
        <Box className={style.boxateniense}>
            {/* { visible?BotonAteninese:''} */}
            <Box className={style.containerBody}>
                <div className={style.headerAteniense}>
                    <img className={style.logoateninese} src={logoAteniense} alt="Logo Ateniense" title="" />
                    <h3 style={{ margin: 0, opacity: .6 }}>{obtenerNombreMes(mesActual) + ' ' + annoActual}</h3>
                </div>
                <Box className={style.containerBody1}>
                    <img style={{ width: '100%', height: 'auto' }} src={xxl} alt="Logo Ateniense" title="" />
                    <img style={{ width: '100%', height: 'auto' }} src={xl} alt="Logo Ateniense" title="" />
                    <img style={{ width: '100%', height: 'auto' }} src={l} alt="Logo Ateniense" title="" />
                    <img style={{ width: '100%', height: 'auto' }} src={m} alt="Logo Ateniense" title="" />
                    <img style={{ width: '100%', height: 'auto' }} src={s} alt="Logo Ateniense" title="" />
                    <img style={{ width: '100%', height: 'auto' }} src={xs} alt="Logo Ateniense" title="" />
                    <img style={{ width: '100%', height: 'auto' }} src={xxs} alt="Logo Ateniense" title="" />
                </Box>
            </Box>
        </Box>
    )
}

const styles = makeStyles(() => ({
    boxateniense: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        background: '#fff',
        justifyContent: 'center',
    },
    headerAteniense: {
        width: '100%',
        height: '15%',
        minHeight: 91,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        background: '#fff',
        borderTopLeftRadius: '2em',
        borderTopRightRadius: '2em',
    },
    logoateninese: {
        width: '50%',
        height: 'auto',
    },
    containerBody: {
        width: '100%',
        height: '100%',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'visible',
    },
    containerBody1: {
        width: '100%',
        height: '100%',
        gridColumn: '1/3',
        gridRow: '1/3',
        background: '#fff',
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        /* ===== Scrollbar CSS ===== */
            /* Firefox */
                "& :hover":{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#b3b3b3 #ffffff',
                },
                /* Chrome, Edge, and Safari */
                "& ::-webkit-scrollbar":{
                    display: 'none',
                },
                "& :hover, &::-webkit-scrollbar":{
                    width: 16,
                    display: 'block',
                },
                "& :hover, &::-webkit-scrollbar-track":{
                    background: '#ffffff',
                },
                "& :hover, &::-webkit-scrollbar-thumb":{
                    backgroundColor: '#b3b3b3',
                    borderRadius: 10,
                    border: '3px solid #ffffff'
                }
    },
    adminAteniense:{
        gridColumn: '2/3',
        gridRow: '1/2',
    },
    boxModalAteniense:{
        position: 'absolute',
        top:'15%',
        left:'25%',
        width:'50%',
        height:'70%',
        background:'#fff',
        borderRadius:'1.5em',
    },
    '@media screen and(orientation: portrait)':{
        containerBody1:{
            scrollbarWidth:'none',
            "& ::-webkit-scrollbar":{
                display:'none',
            }
        },
    },
    '@media screen and(orientation: landscape)':{
        containerBody:{
            paddingTop: '1.5%',
        },
        /*Administracion Ateniense*/
        buttonNews:{
            minWidth: 150,
            minHeight: 150,
            maxWidth: 200,
        },
        buttonNews:{
            img:{
                width: '100%',
                height: 'auto'
            }
        }
    }
}))

