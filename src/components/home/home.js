import { Box, Button, Container, IconButton } from "@mui/material"
import React, { useState } from "react"
import Ateniense from "./homeComponents/ateniense"
import ButtonsInteracction from "./homeComponents/interactionsHome"
import HeaderComponent from "../components/headerComponent"
import {AddPhotoAlternateRounded} from "@mui/icons-material"
import ModalAteniense from "./homeComponents/modalAteniense"
import { makeStyles } from "@mui/styles"

function Home(props){
    const style = styles()
    const [activo, setActivo]=useState('')
    const [openModal, setOpenModal]=useState(false)

    const handleActiveClick=(data)=>{
        setActivo(data)
    }
    const handleNew=(e)=>{
        setOpenModal(!openModal)
    }
    return(
        <Container className={style.containerHome}>
            <HeaderComponent data={activo}/>
                <Box className={style.boxContainer}>
                    <Container className={style.atenienseContainer} sx={{display:'flex',flexDirection:'column',alignItems: 'flex-end'}}>
                        <Button className={style.adminButon} onClick={handleNew}>
                            <AddPhotoAlternateRounded/>
                        </Button>
                        <ModalAteniense
                            openModal={openModal}
                            closemodal={()=>handleNew()}
                        />
                        <Ateniense/>
                    </Container>
                    <Container className={style.buttonsContainer}>
                            <ButtonsInteracction
                                evento={handleActiveClick}
                            />
                    </Container>
                </Box>
            </Container>
        )
    }
export default Home;

const styles = makeStyles(()=>({
    containerHome:{
        maxWidth: 'none !important',
        padding: '0 !important',
        height: '100%'
    },
    boxContainer:{
        maxWidth: 'none !important',
        padding: '0 !important',
        height: '100%'
    },
    atenienseContainer:{
        maxWidth: 'none !important',
        padding: '0 !important',
        height: '100%'
    },
    buttonsContainer:{
        maxWidth: 'none !important',
        padding: '0 !important',
        height: '100%'
    },
    adminButon:{
        position:'absolute !important'
    },
    '@media screen and (orientation:portrait)':{
        containerHome:{
            width: '100%',
            height: '100%',
            display: 'grid !important',
            margin: 0,
            gridTemplateRows: '10% 1fr',
            gridTemplateColumns: '100%',
        },
        boxContainer:{
            display: 'grid !important',
            gridRow: '2/3',
        },
        atenienseContainer:{
            display: 'block !important',
        },
        buttonsContainer:{
            display: 'none !important',
            
        },
        adminButon:{
            display: 'none !important',
        },
        cardContentButtons2:{
            display: 'none !important',
        },
        
        '@media screen and (min-width:768px) , screen and (min-height: 800px)':{
            containerHome:{
                gridTemplateRows: '15% 1fr',
            },
            atenienseContainer:{
                gridColumn: '1/2',
                gridRow: '2/3',
                display: 'block !important',
            },
            buttonsContainer:{
                gridColumn: '1/2',
                gridRow: '1/2',
            },
        },
       ' @media screen and (min-width:1024px)':{
            boxContainer:{
                gridTemplateColumns: '75% 25%',
                gridTemplateRows: '100%',
            },
            atenienseContainer:{
                gridColumn: '1/2',
                gridRow: '1/2',
                display: 'block !important',
            },
            buttonsContainer:{
                gridColumn: '2/3',
                gridRow: '1/2',
                adminButon:{
                    display: 'block !important',
                },
            },
            cardContentButtons2:{
                display: 'block !important',
            }
        }
    },
    '@media screen and (orientation:landscape)': {
        containerHome:{
            width: '100%',
            height: '100%',
            display: 'grid !important',
            margin: 0,
            gridTemplateRows: '15% 1fr',
            gridTemplateColumns: '100%',
        },
        boxContainer:{
            display: 'grid !important',
            gridRow:'2/3',
            gridTemplateColumns: '70% 30%',
            gridTemplateRows: '100%',
            display: 'grid',
            alignItems: 'center',
        },
        atenienseContainer:{
            width: '100%',
            height: '100%',
            gridColumn: '1/2',
            gridRow: '1/2',
        },
        '@media screen and (min-width:1024px)':{
            boxContainer:{
                gridTemplateColumns: '80% 20% !important',
            }
        }
    }
    
}))
