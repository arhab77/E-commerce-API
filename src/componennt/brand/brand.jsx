import { Apple } from "@mui/icons-material";
import { Card, CardContent, Container, Grid } from "@mui/material"

const BrandComponent = () => {
    return(
        <Container>
            <Grid container marginTop={'100px'} alignItems={'center'} justifyContent={'center'}>
                <h3 style={{fontSize:'36px'}}>Brand Terkenal</h3>
            </Grid>
            <Grid container marginTop={'20px'} alignItems={'center'} justifyContent={'center'}>
                <p className="p">Cek produk terbaik dari brand berikut hanya di BebooTech</p>
            </Grid>
            <Grid container marginTop={'30px'} >
                <Grid item sm={3} textAlign={'center'} padding={'10px'}>
                    <Card style={{width:'100%', height:'150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CardContent>
                            <Apple fontSize="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={3} textAlign={'center'} padding={'10px'}>
                    <Card style={{width:'100%', height:'150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CardContent>
                            <Apple fontSize="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={3} textAlign={'center'} padding={'10px'}>
                    <Card style={{width:'100%', height:'150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CardContent>
                            <Apple fontSize="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={3} textAlign={'center'} padding={'10px'}>
                    <Card style={{width:'100%', height:'150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CardContent>
                            <Apple fontSize="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={3} textAlign={'center'} padding={'10px'}>
                    <Card style={{width:'100%', height:'150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CardContent>
                            <Apple fontSize="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={3} textAlign={'center'} padding={'10px'}>
                    <Card style={{width:'100%', height:'150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CardContent>
                            <Apple fontSize="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={3} textAlign={'center'} padding={'10px'}>
                    <Card style={{width:'100%', height:'150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CardContent>
                            <Apple fontSize="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={3} textAlign={'center'} padding={'10px'}>
                    <Card style={{width:'100%', height:'150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CardContent>
                            <Apple fontSize="large"/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default BrandComponent;