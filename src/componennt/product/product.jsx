import { Loop, WorkOutlineRounded } from "@mui/icons-material";
import { Card, CardContent, Container, Grid } from "@mui/material"
import { Button } from "react-bootstrap";
import '../product/product.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../../app/action/productAction";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const product = useSelector((state) => state.product.product);
    const selectedCategoryId = useSelector((state) => state.product.selectedCategory);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct(selectedCategoryId));
    }, [dispatch, selectedCategoryId])

    // console.log(product);

    return (
        <Container>
            <Grid container marginTop={'30px'}>
                <Grid item sm={4.5}>
                    <hr />
                </Grid>
                <Grid item sm={3} textAlign={'center'}>
                    <h3 style={{fontSize:'36px'}}>List Produk</h3>
                </Grid>
                <Grid item sm={4.5}>
                    <hr />
                </Grid>
            </Grid>
            <Grid container marginTop={'30px'}>
                {
                    product.map((item, id) => (
                        <Grid item sm={3} padding={'5px'} key={id}>
                            <Card className="card-container">
                                <CardContent>
                                    <img src={item.photo} alt="" style={{width:'250px'}}/>
                                    <h5 style={{fontSize:'20px', marginTop:'10px'}}>{item.name}</h5>
                                    <p><span style={{color:'#85888A', fontSize:'14px'}}>Stock: {item.stock}</span></p>
                                    <h5 style={{fontSize:'20px', color:'red'}}>Rp. {item.price}</h5>
                                    <Link to={`/detail/${item.id}`} style={{textDecoration:'none', color:'black'}}>
                                        <Button variant="dark" className="button">
                                            <WorkOutlineRounded/> Masukkan ke Keranjang
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>

            <Grid container marginTop={'50px'}>
                <Grid item xs={12} textAlign={'center'}>
                    <Button variant="outline-dark">
                        <Loop/>Muat Produk Lainnya
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductComponent;