import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { Card, CardContent, Container, Grid } from "@mui/material";


const RecomendProduct = () => {
    return(
        <Container>
            <Grid container spacing={1}>
                <Grid item sm={1}>
                    <ChevronLeftOutlined />
                </Grid>
                <Grid item sm={10} container textAlign={"center"} spacing={1}>
                    <Grid item sm={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Grid container spacing={1}>
                                    <Grid item sm={4} style={{backgroundColor:'#EDEDEE'}}>
                                        <img src="image 2.png" alt="" style={{width:'100%', height:'100px'}}/>
                                    </Grid>
                                    <Grid item sm={8}>
                                        <p style={{textAlign:'left', color:'#6A6D71'}}>Smartphone</p>
                                        <h4 style={{fontSize:'24px', textAlign:'left'}}>Samsung Galaxy <br />S23 Ultra</h4>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Grid container spacing={1}>
                                    <Grid item sm={4} style={{backgroundColor:'#EDEDEE'}}>
                                        <img src="image 2.png" alt="" style={{width:'100%', height:'100px'}}/>
                                    </Grid>
                                    <Grid item sm={8}>
                                        <p style={{textAlign:'left', color:'#6A6D71'}}>Smartphone</p>
                                        <h4 style={{fontSize:'24px', textAlign:'left'}}>Samsung Galaxy <br />S23 Ultra</h4>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Grid container spacing={1}>
                                    <Grid item sm={4} style={{backgroundColor:'#EDEDEE'}}>
                                        <img src="image 2.png" alt="" style={{width:'100%', height:'100px'}}/>
                                    </Grid>
                                    <Grid item sm={8}>
                                        <p style={{textAlign:'left', color:'#6A6D71'}}>Smartphone</p>
                                        <h4 style={{fontSize:'24px', textAlign:'left'}}>Samsung Galaxy <br />S23 Ultra</h4>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item sm={1} textAlign="right">
                    <ChevronRightOutlined />
                </Grid>
            </Grid>
      </Container>
    )
}

export default RecomendProduct;