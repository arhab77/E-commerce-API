import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Container, Grid } from "@mui/material";
import { FormControl } from "react-bootstrap";

const FooterComponent = () => {
    return(
        <div>
            <div style={{marginTop:'100px'}}>
                <Container>
                    <Grid container>
                        <Grid item sm={3} textAlign={'center'}>
                            <img src="BeboTech.png" alt="" />
                        </Grid>
                        <Grid item sm={6}>
                            <Grid container>
                                <Grid item sm={3.5}>
                                    <b style={{fontSize:'16px'}}>NAVIGASI</b>
                                    <div style={{color:'#6A6D71', fontSize:'14px'}}>
                                        <p>Smartphone <br />
                                        Laptop <br />
                                        Gaming <br />
                                        PC Desktop <br />
                                        Kamera <br />
                                        Audio</p>
                                    </div>
                                </Grid>
                                <Grid item sm={4}>
                                    <b style={{fontSize:'16px'}}>INFORMASI</b>
                                    <div style={{color:'#6A6D71', fontSize:'14px', marginBottom:'50px'}}>
                                        <p>About Us <br />
                                        Informasi Pengiriman <br />
                                        Privacy & Policy <br />
                                        Syarat & Ketentuan</p>
                                    </div>
                                    <b style={{fontSize:'16px'}}>Bahasa</b><br />
                                    <FormControl
                                        style={{width:'60%'}}
                                        placeholder="Indonesia"
                                    />
                                </Grid>
                                <Grid item sm={4.5}>
                                    <b style={{fontSize:'16px'}}>COSTUMER SERVICE</b>
                                    <div style={{color:'#6A6D71', fontSize:'14px'}}>
                                        <p>Costumer Service <br />
                                        Daftar atau Masuk <br />
                                        Referensi Gadget <br />
                                        Cookie <br />
                                        Keamanan Berbelanja </p>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={3}>
                            <div style={{fontSize:'16px'}}>
                                <b>Ikuti Kami</b>
                                <div style={{marginTop:'10px'}}>
                                    <Instagram/>
                                    <Facebook/>
                                    <Twitter/>
                                </div>
                            </div>
                            <div style={{fontSize:'16px', marginTop:'20px'}}>
                                <b>BeboTech App</b>
                                <div style={{marginTop:'5px'}}>
                                    <img src="App Store Badge.png" alt="" />
                                    <img src="Google Play Badge.png" alt="" />
                                </div>
                            </div>
                            <div style={{fontSize:'16px', marginTop:'20px'}}>
                                <b>Metode Pembayaran</b>
                                <div style={{marginTop:'5px'}}>
                                    <img src="visa.png" alt="" />
                                    <img src="mastercard.png" alt="" />
                                    <img src="american express.png" alt="" />
                                    <img src="paypal.png" alt="" />
                                    <img src="diners club.png" alt="" />
                                    <img src="discover.png" alt="" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div style={{marginTop:'80px', backgroundColor:'#EDEDEE'}}>
                <Container style={{alignItems:'center', height:'40px', display:'flex', justifyContent:'center'}}>
                    <div style={{fontSize:'14px', color:'#4A4A4A'}}>
                        All Rights Reserved © 2023
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default FooterComponent;