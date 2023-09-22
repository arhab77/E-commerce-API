import { WorkOutlineRounded } from "@mui/icons-material";
import { Card, CardContent, Container, Grid } from "@mui/material"
import { Button } from "react-bootstrap";

const PromoComponent = () => {
    return(
        <Container style={{marginTop:'80px'}}>
            <Grid container>
                <Grid item sm={10}>
                    <h3 style={{fontSize:'36px'}}>Promo Untukmu</h3>
                </Grid>
                <Grid item sm={2}>
                    <Button variant="outline-dark">
                        Lihat Semua
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={1} marginTop={'30px'}>
                <Grid item sm={6} style={{padding:'10px'}}>
                    <Card style={{backgroundColor:'#1D2227', padding:'20px'}}>
                        <CardContent style={{textAlign:'center'}}>
                            <img src="image 3.png" alt="" />
                            <h5 style={{color:'red', fontSize:'20px', textAlign:'left'}}>Save up to 30% off</h5>
                            <h2 style={{fontSize:'48px', color:'white', textAlign:'left'}}>Macbook Air M2</h2>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6}>
                    <Grid container textAlign={"center"}>
                        <Grid item sm={6} style={{padding:'10px'}}>
                            <Card style={{backgroundColor:'#1D2227', textAlign:'center'}}>
                                <CardContent>
                                    <img src="image 4.png" alt="" style={{width:'250px'}}/>
                                    <p style={{fontSize:'16px', color:'red'}}>Save up to 30% off</p>
                                    <h4 style={{fontSize:'24px', color:'white'}}>Macbook Air M2</h4>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={6} style={{padding:'10px'}}>
                            <Card style={{backgroundColor:'#EDEDEE'}}>
                                <CardContent>
                                    <p style={{fontSize:'16px', color:'red', marginTop:'20px'}}>Save up to 30% off</p>
                                    <h4 style={{fontSize:'24px', color:'black', marginBottom:'25px'}}>Xiaomi 12 Pro</h4>
                                    <img src="image 5.png" alt="" style={{width:'230px'}}/>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container style={{padding:'10px'}}>
                        <Card style={{backgroundColor:'#DDDEDF', width:"100%", padding:'20px'}}>
                            <h5 style={{color:'red', fontSize:'20px', textAlign:'left'}}>Save up to 30% off</h5>
                            <h4 style={{fontSize:'36px', color:'black'}}>Nintendo Switch</h4>
                            <img src="image 6.png" alt="" style={{width:'260px', marginTop:'8px'}}/>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Card style={{backgroundColor:'#1D2227', marginTop:'50px'}}>
                <Grid container>
                    <Grid item sm={4.5}>
                        <img src="young-asian-woman-wearing-casual-t-shirt-posing 1.png" alt="" style={{width:'450px'}}/>
                    </Grid>
                    <Grid item sm={4.5} marginTop={'50px'} padding={'20px'}>
                        <h5 style={{fontSize:'20px', color:'white'}}>Audio</h5>
                        <h2 style={{fontSize:'48px', color:'white'}}>Headphone Sony WH-1000XM4</h2>
                        <h4 style={{fontSize:'24px', color:'red'}}>Rp. 4.499.000</h4>
                        <Button variant="light ">
                            <WorkOutlineRounded/> Masukkan ke Keranjang
                        </Button>
                    </Grid>
                    <Grid item sm={3} marginTop={'80px'} padding={'0px'}>
                        <img src="image 13.png" alt="" style={{width:'200px'}} />
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default PromoComponent;