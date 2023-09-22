import { FacebookRounded, InfoOutlined, Instagram, LanguageOutlined, LocalPhone, Twitter } from "@mui/icons-material";
import { Container, Grid } from "@mui/material"

const Header = () => {
    return(
        <Container>
            <Grid container style={{marginTop:'10px', marginBottom:'10px'}}>
                <Grid item>
                    <LocalPhone color="disabled" fontSize="small"/>
                </Grid>
                <Grid item style={{marginLeft:'10px',marginTop:'3px', color:'rgba(0, 0, 0, 0.5)', fontSize:'14px'}}>
                    (021) 893457
                </Grid>
                <Grid item style={{marginLeft:'10px'}}>
                    <Instagram color="disabled" fontSize="small"/><span> </span>
                    <FacebookRounded color="disabled" fontSize="small"/><span> </span>
                    <Twitter color="disabled" fontSize="small"/>
                </Grid>
                <Grid item sm style={{textAlign:'right'}}>
                
                </Grid>
                <Grid>
                    <InfoOutlined color="disabled" fontSize="small"/>
                </Grid>
                <Grid style={{color:'rgba(0, 0, 0, 0.5)', marginLeft:'5px', marginTop:'3px', fontSize:'14px'}}>
                    Support
                </Grid>
                <Grid style={{marginLeft:'10px'}}>
                    <LanguageOutlined color="disabled" fontSize="small"/>
                </Grid>
                <Grid style={{color:'rgba(0, 0, 0, 0.5)', marginLeft:'5px', marginTop:'3px', fontSize:'14px'}}>
                    ID
                </Grid>
            </Grid>
        </Container>
    )
}

export default Header;