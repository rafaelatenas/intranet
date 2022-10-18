import { MoreVertRounded } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardHeader, Container, IconButton, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import HeaderComponent from "../../components/headerComponent"

function Videos() {
    const styles=StyleComponent()
    const [dataVideos, setDataVideos]=useState([]);
    console.log(dataVideos)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios({
              url: process.env.REACT_APP_API_URL
            });
            console.log(response.data)
            setDataVideos(response.data.items);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, [setDataVideos]);




    
    return(
        <Container className={styles.ContainerContentUser}>
            <HeaderComponent/>
            <Container className={styles.containerSources}>
                <Box className={styles.GridVideos}>
                {/* <iframe width="100%" height="auto" style={{minHeight:250}} src="https://www.youtube.com/embed/videoseries?list=PLDPHmW2atQwHfG_4jubiVa90pm_-ghI_w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    {dataVideos.map((value)=>( console.log(`https://www.youtube.com/embeb/${value.id.videoId}`),
                        <Card className={styles.item}>
                            <CardContent className={styles.ContentItem}>
                                <iframe width="100%" height="auto" style={{minHeight:250}} src={`https://www.youtube.com/embed/${value.id.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <p>{value.snippet.title}</p>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Container>
    )
}
export default Videos;

const StyleComponent=makeStyles(()=>({
    ContainerContentUser:{
        width: '100%',
        height: '100%',
        display: 'grid !important',
        gridTemplateColumns: '100%',
        gridTemplateRows: '15% 85%',
        maxWidth: 'none !important',
        padding: '0 !important',
        margin: '0 !important',
    },
    containerSources:{
        width: '100%',
        height: '100%',
        gridColumn: '1/2',
        gridRow: '2/3',
        maxWidth: 'none !important',
        padding: '0 !important',
        margin: '0 !important',
        display: 'flex !important',
        alignItems: 'center',
        flexDirection: 'column',
    },
    GridVideos:{
        marginTop:'1.7%',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(95px, 24%))',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    item:{
        width: '95%',
        height: 'auto',
        minWidth: 250,
        overflow:'visible !important'
    },
    ContentItem:{
        padding:'0 !important',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 'auto'
    },
}))