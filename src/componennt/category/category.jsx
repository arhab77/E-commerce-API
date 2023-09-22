import { Card, Container, Grid } from "@mui/material"
import { Button } from "react-bootstrap"

const CategoryComponent = () => {
    return(
        <Container style={{marginTop:'80px'}}>
            <Grid container>
                <Grid item sm={10}>
                    <h3 style={{fontSize:'36px'}}>Jelajahi Kategori</h3>
                </Grid>
                <Grid item sm={2}>
                    <Button variant="outline-dark">
                        Lihat Semua
                    </Button>
                </Grid>
            </Grid>
            <Grid container textAlign={'center'} marginTop={'30px'}>
                <Grid item sm={4}>
                    <Card style={{padding:'10px'}}>
                        <img src="image 8.png" alt="" />
                        <h5>Smartphone & Accessoris</h5>
                        <p style={{color:'#6A6D71'}}>5,6k Produk</p>
                    </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card style={{padding:'10px'}}>
                        <img src="image 8.png" alt="" />
                        <h5>Smartphone & Accessoris</h5>
                        <p style={{color:'#6A6D71'}}>5,6k Produk</p>
                    </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card style={{padding:'10px'}}>
                        <img src="image 8.png" alt="" />
                        <h5>Smartphone & Accessoris</h5>
                        <p style={{color:'#6A6D71'}}>5,6k Produk</p>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CategoryComponent