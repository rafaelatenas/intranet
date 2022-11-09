import { Box, Button, Card, CardContent, Container, IconButton, Modal, Portal } from "@mui/material";
import React, { useEffect, useState } from "react";
import './interactionsHome.css'
import temporal from '../../../landing/images/comprimido/imagenTemporal.png'
import AtenasAcademy from '../../../landing/images/comprimido/AtenasAcademy.png'
import AtenasLogo from '../../../landing/images/comprimido/ats_logo.png'
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2'
function ButtonsInteracction(props){

    const MySwal = withReactContent(Swal)
    const toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
    });
    const style = styles()
    const cedula=sessionStorage.getItem('cedula')
    const token=sessionStorage.getItem('token')

    const [data, setData] = useState([]);
    useEffect(() => {
        const PeticionUsuario = async () => {
        try {
            await axios.get(process.env.REACT_APP_API_ENDPOINT + `ListarEmpleadosCedula/${cedula}`, {
            headers: { 'Authorization': `Bearer ${token}` },
            })
            .then(response => {
            if (response.data.message) {
                toast.fire({
                icon: 'warning',
                title: '' + response.data.message,
                })
            } else {
                setData(response.data.data[0]);
            }
            })
        } catch(error){
            if (error.response.status === 400 || 500) {
            toast.fire({
                icon: 'error',
                title: '' + error.response.data.message,
            })
            }
            console.log(error.response.data.message);
            console.log(error.response.status);
            console.log(error.response.headers);
        }

        }
        PeticionUsuario();
    }, []);
    console.log(data)
    const cardContainerButtons3 = 
        <Card className={style.cardContainerButtons3}>
            <CardContent className={style.cardContentButtons3}>
                <p>Cotizador</p>
                <IconButton className={style.IconButton3} onClick={()=>props.evento(1)}>
                    <NavLink to={'/home/resources'}>
                        <img className={style.imgButton3} src={AtenasAcademy} alt="Logo Atenas Academy" title=""/>
                    </NavLink>
                </IconButton>
            </CardContent>
            <CardContent className={style.cardContentButtons3}>
                <p>Descargables</p>
                <IconButton className={style.IconButton3} onClick={()=>props.evento(1)}>
                    <NavLink to={'/home/resources'}>
                        <img className={style.imgButton3} src={AtenasAcademy} alt="Logo Atenas Academy" title=""/>
                    </NavLink>
                </IconButton>
            </CardContent>
        </Card>;
        return(
            <Container className={style.containerButtons}>
                <Card className={style.cardContainerButtons1}>
                    <CardContent className={style.cardContentButtons1}>
                        <div className={style.descriptionButton}>
                            <p className={style.nameButton}>{data.Primer_Nombre+' '+data.Primer_Apellido}</p>
                            <p className={style.chargeButton}>{data.Cargo}</p>
                        </div>
                        {data.Avatar?<img src={process.env.REACT_APP_API_URL_IMG+`/avatar/${data.Cedula}/${data.Avatar}`} alt={data.Primer_Nombre+''+data.Primer_Apellido} title="" className={style.personButton}/>:<img src={AtenasLogo} alt="Nombre de Usuario" title="" className={style.personButton}/>}
                        <IconButton className={style.spaceAtenas}>
                            <NavLink to={'/home/profile'} className={style.link}>
                                <p style={{color:'#616161'}}>Mi espacio <strong style={{color:'#0c5091'}}> ATENAS</strong></p>
                            </NavLink>
                        </IconButton>
                    </CardContent>
                </Card>
                {cardContainerButtons3}
            </Container>
        )
    }
export default ButtonsInteracction;

const styles = makeStyles(()=>({
    containerButtons:{
        height: '100%',
        display: 'flex !important',
        maxwidth: 'none !important',
        padding: '0 !important',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    '@media screen and (orientation:portrait)':{
        containerButtons:{
            flexDirection: 'column',
        },
        cardContainerButtons1:{
            height: '40%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'none !important',
            maxWidth: 300,
            maxHeight: 300,
            padding:'5%'
        },
        cardContentButtons1:{
            width: '100%',
            height: '80%',
            display: 'grid',
            gridTemplateColumns: '60% 40%',
            gridTemplateRows: '70% 30%',
            alignItems: 'end',
            padding: '0 !important',
        },
        descriptionButton:{
            gridColumn: '1/2',
            gridRow: '1/2',
            height: '45%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '& p':{
                margin: 0,
                color: '#616161',
                fontSize: 14
            }
        },
        chargeButton:{
            fontSize: 14,
        },
        personButton:{
            gridColumn:'2/3',
            gridRow:'1/2',
            height:'90%',
            width:'100%',
            borderRadius: '1.2em'
        },
        spaceAtenas:{
            gridColumn: '1/3',
            gridWow: '2/3',
            width: '100%',
            height:'70%',
            borderRadius:'1em !important',
            border: '2px solid #0c5091 !important',
            padding: '0 !important',
        },
        link:{
            width: '100%',
            height: 'auto',
            textDecoration: 'none',
            '& p':{
                margin: 0,
                fontSize: '0.65em',
                fontWeight: 'bold'
            }
        },
        cardContainerButtons3:{
            width: 'auto',
            height: '40%',
            boxShadow: 'none !important',
            maxWidth: 400
        },
        cardContentButtons3:{
            padding: '0 !important',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '& p':{
                margin: 0,
                width: 'auto',
                height: '10%',
                color: '#616161',
                fontWeight: 'bold',
                fontSize: '18px',
            }, 
        },
        IconButton3:{
            padding: '0 !important',
            width: '100%',
            borderRadius: '1.2 em !important',
            color: 'transparent !important',
            border: '1px solid #61616145 !important',
            maxWidth: 240
        },
        imgButton3:{
            width: '100%',
            height: '100%',
        },
        '@media screen and (min-width:768px), screen and (min-height: 800px)':{
            containerButtons:{
                flexDirection: 'row-reverse'
            },        
            cardContainerButtons1:{
                height: '100%',
                padding:0,
                maxWidth: 325,
                maxHeight: 325,
            },
            cardContainerButtons3:{
                width: 'auto',
                height: '100%',
                boxShadow: 'none !important',
                maxWidth: 400,
            },
            cardContentButtons3:{
                padding: '0 !important',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '& p':{
                    margin: 0,
                    width: 'auto',
                    height: '10%',
                    color: '#616161',
                    fontWeight: 'bold',
                }
            },
            IconButton3:{
                padding: '0 !important',
                width: '100%',
                height: '80%',
                borderRadius: '1.2em !important',
                color: 'transparent !important',
                border: '1px solid #61616145 !important',
                maxWidth: 195,
            },
            imgButton3:{
                width: '100%',
                height: '100%',
            }
        }
    },
    '@media screen and (orientation:landscape)':{
        cardContainerButtons1:{
            height: '30%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'none !important',
            maxWidth: 300,
            maxHeight: 300,
            padding:'5%',
        },
        cardContentButtons1:{
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '60% 40%',
            gridTemplateRows: '70% 30%',
            alignItems: 'end',
            padding: '0 !important',
            justifyItems: 'center',
        },
        descriptionButton:{
            gridColumn: '1/2',
            gridWow: '1/2',
            height: '45%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        nameButton:{
            margin: 0,
            color: '#616161',
            fontWeight: 'bold',
            fontSize:14
        },
        chargeButton:{
            margin: 0,
            color: '#616161',
            fontWeight: 'bold',
            fontSize:12
        },
        personButton:{
            gridColumn: '2/3',
            gridRow: '1/2',
            height: '80%',
            width: 'auto',
            borderRadius: '1.2em',
        },
        spaceAtenas:{
            gridColumn: '1/3',
            gridWow: '2/3',
            width: '100%',
            height: '70%',
            borderRadius:'1em !important',
            border: '2px solid #0c5091 !important',
            padding: '0 !important',
        },
        link:{
            width: '100%',
            height: 'auto',
            textDecoration: 'none',
                '& p':{
                margin: 0,
                fontSize: '0.65em',
                fontWeight: 'bold'
            }
        },
        cardContainerButtons3:{
            height: '20%',
            boxShadow: 'none !important',
            maxWidth: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            maxHeight: 130
        },
        cardContentButtons3:{
            padding: '0 !important',
            width: '40%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            '& p':{
                margin: 0,
                width: '100%',
                height: 'auto',
                color: '#616161',
                fontWeigh: 'bold',
                fontSize: 14,
                textAlign:'center',
            },
        },
        IconButton3:{
            width: '100%',
            height: '80%',
            borderRadius: '.75em !important',
            color: 'transparent !important',
            border: '1px solid #61616145 !important',
            maxWidth: 240,
            maxHeight: 130,
        },
        imgButton3:{
            width: '100%',
            height: '100%',
        },
        '@media screen and (min-width:1024px)':{
            cardContainerButtons1:{
                width: '85%',
                maxWidth: 330,
                padding:'0%',
            },
            descriptionButton:{
                height: '30%'
            },
            spaceAtenas:{
                maxWidth: 330,
            },
            link:{
                '& p':{
                    fontSize: 18
                }
            },
            '@media screen and (min-width:1500px)':{
                descriptionButton:{
                    '& p':{
                        fontSize: 15,
                        maxWidth: 330,
                    }
                },
                cardContentButtons3:{
                    '& p':{
                        fontSize: 22
                    }
                },
                IconButton3:{
                    maxWidth: 300
                }
            }
        }
    },
}))
