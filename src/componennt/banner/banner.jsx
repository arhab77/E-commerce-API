import { WorkOutlineRounded } from "@mui/icons-material";
import { Card, CardContent, Container, Grid } from "@mui/material";
import { Button } from "react-bootstrap";


const Banner = () => {
    return(
        <Container>
            <Card variant="outlined" className="bg-dark" style={{borderRadius:'0px 0px 200px 0px', color:'white', margin:'20px 0px 20px 0px'}}>
                <CardContent>
                    <Grid container>
                        <Grid item sm={7} style={{textAlign:'center'}}>
                            <img src="pngwing 1.png" alt="" style={{marginTop:'50px', width:'70%'}}/>
                        </Grid>
                        <Grid item sm={5} style={{marginTop:'200px'}}>
                            <h5 style={{fontSize:'20px'}}>Best Seller</h5>
                            <h2 style={{fontSize:'48px'}}>Iphone 14 Pro</h2>
                            <p style={{color:'#C0C1C2'}}>Hingga saat ini, Apple masih menjadi favorit banyak orang <br /> 
                            dengan produk iphone series-nya, salah satunya adalah <br /> 
                            Iphone 14 pro</p>

                            <h4 style={{fontSize:'24px', color:'#EA3A3D'}}>Rp. 18.999.000</h4><br />
                            <Button variant="light">
                                <WorkOutlineRounded/> Masukkan ke Keranjang
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Banner;