import { Container, Grid } from "@mui/material";

const ServiceComponent = () => {
    return(
        <div style={{backgroundColor:'#EDEDEE', marginTop:'80px'}}>
            <Container>
                <Grid container>
                    <Grid item sm={3} textAlign={'center'} marginTop={'50px'} marginBottom={'30px'} padding={'10px'}>
                        <Grid container>
                            <Grid item sm={6}>
                                <img src="icn_Shipping.png" alt="" style={{marginTop:'10px'}}/>
                            </Grid>
                            <Grid item sm={6} fontSize={'14px'} textAlign={'left'}>
                                <b>Gratis Ongkir</b>
                                <p>Tanpa minimal belanja</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={3} textAlign={'center'} marginTop={'50px'} padding={'10px'}>
                        <Grid container>
                            <Grid item sm={6}>
                                <img src="icn_callUs.png" alt="" />
                            </Grid>
                            <Grid item sm={6} fontSize={'14px'} textAlign={'left'}>
                                <b>24/7 Costumer Service</b>
                                <p>(021) 893457</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={3} textAlign={'center'} marginTop={'50px'} padding={'10px'}>
                        <Grid container>
                            <Grid item sm={6}>
                                <img src="icn_chat.png" alt="" />
                            </Grid>
                            <Grid item sm={6} fontSize={'14px'} textAlign={'left'}>
                                <b>Chat dengan kami </b>
                                <p>Layanan chat online 24 Jam</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={3} textAlign={'center'} marginTop={'50px'} padding={'10px'}>
                        <Grid container>
                            <Grid item sm={6}>
                                <img src="icn_giftCards.png" alt="" />
                            </Grid>
                            <Grid item sm={6} fontSize={'14px'} textAlign={'left'}>
                                <b>Voucher menarik</b>
                                <p>Untuk kamu yang sering berbelanja</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ServiceComponent;