import { MoreVertRounded } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader, Container, IconButton, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeaderComponent from "../../components/headerComponent"

function Videos() {
    const styles=StyleComponent()
    const prueba = [
        {id:0, name:'Nombre de Video', url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:2, name:'Nombre de Video', url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:3, name:'Nombre de Video',url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:4, name:'Nombre de Video', url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:5, name:'Nombre de Video', url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:6, name:'Nombre de Video',url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:7, name:'Nombre de Video', url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:8, name:'Nombre de Video', url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:9, name:'Nombre de Video',url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:10, name:'Nombre de Video', url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:11, name:'Nombre de Video', url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:12, name:'Nombre de Video',url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:13, name:'Nombre de Video', url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:14, name:'Nombre de Video', url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:15, name:'Nombre de Video',url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:16, name:'Nombre de Video', url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:17, name:'Nombre de Video', url:'https://www.youtube.com/embed/1lyu1KKwC74'},
        {id:18, name:'Nombre de Video',url:'https://www.youtube.com/embed/1lyu1KKwC74'},
    ]
    return(
        <Container className={styles.ContainerContentUser}>
            <HeaderComponent/>
            <Container className={styles.containerSources}>
                <Box className={styles.GridVideos}>
                <iframe width="100%" height="auto" style={{minHeight:250}} src="https://www.youtube.com/embed/videoseries?list=PLDPHmW2atQwHfG_4jubiVa90pm_-ghI_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {prueba.map((value)=>(
                        <Card className={styles.item}  key={value.id}>
                            <CardContent className={styles.ContentItem}>
                                <iframe width="100%" height="auto" style={{minHeight:250}} src={value.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <p>{value.name}</p>
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