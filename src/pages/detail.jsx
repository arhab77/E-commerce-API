import { Container, FormControl, Grid, MenuItem, Select } from "@mui/material";
import Header from "../componennt/header/header"
import NavigationBar from "../componennt/navigationBar/navbar"
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ShoppingBagRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVariantProduct, productDetails } from "../app/action/productAction";

const DetailProductPage = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.product.product);
    const variantProducts = useSelector((state) => state.product.variant);
    const items = productDetail[0];
    const [age, setAge] = useState('');
    const [qty, setQty] = useState(1);

    const handleIncQty = () => {
        setQty(qty + 1);
    }

    const handleDecQty = () => {
        if(qty > 1) {
            setQty(qty - 1)
        }
    };

    useEffect(() => {
        dispatch(productDetails(productId));
        // dispatch(getVariantProduct(productId));
    }, [dispatch, productId]);

    useEffect(() => {
        dispatch(getVariantProduct(productId));
    }, [dispatch, productId])

    if(!items) {
        return null
    }

    const handleValueChange = (e) => {
        setAge(e.target.value)
    }

    return (
        <div>
            <Header/>
            <hr />
            <NavigationBar/>
            <Container>
                <Grid container style={{ marginTop: "50px", marginBottom: "10px" }}>
                    <Grid item sm={5.5} padding={'20px'}>
                        <img src={items.product_img} alt="" style={{width:'95%'}}/>
                    </Grid>
                    <Grid item sm={6.5} padding={'20px'}>
                        <h2>{items.product_name}</h2>
                        <h6 style={{marginTop:'20px'}}>Variant: </h6>
                        <FormControl sx={{ m: 1, minWidth: 60 }}>
                            <Select 
                                value={age}
                                onChange={handleValueChange}
                                displayEmpty
                                >
                                {
                                    variantProducts.map((varian) => (
                                        <MenuItem key={varian.varian_keyword_id} value={varian.varian_keyword_value}>
                                            {varian.varian_keyword_value}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <h6 style={{marginTop:'20px'}}>Qty: </h6>
                        <Button variant="outline-dark" onClick={handleDecQty}>-</Button>
                        <span>{' '} {qty} {' '}</span>
                        <Button variant="outline-dark" onClick={handleIncQty}>+</Button>
                        <h2 style={{marginTop:'20px', color:'red'}}>Rp. {parseFloat(items.product_price).toLocaleString('id-ID')}</h2>
                        <Button style={{width:'100%', marginTop:'20px', marginBottom:'20px'}} variant="dark">
                            <ShoppingBagRounded/> BUY
                        </Button>
                        <h5>Deskripsi</h5>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default DetailProductPage;