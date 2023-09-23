import { Card, CardContent, Container, Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initCart } from "../store/action/productAction";

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.product.cart);

    useEffect(() => {
        dispatch(initCart())
    },[dispatch])

    return (
        <div>
            <Container>
                <Grid container marginTop={'20px'}>
                    <Grid item sm={12}>
                        <Card>
                            <CardContent>
                                <Table style={{textAlign:'center'}}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{fontWeight:'bold', fontSize:'16px'}}>Product</TableCell>
                                            <TableCell style={{fontWeight:'bold', fontSize:'16px'}}>Name</TableCell>
                                            <TableCell style={{fontWeight:'bold', fontSize:'16px'}}>Quantity</TableCell>
                                            <TableCell style={{fontWeight:'bold', fontSize:'16px'}}>Harga</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            cartItems.map((item, id) => (
                                                <TableRow key={id}>
                                                    <TableCell>
                                                        <img 
                                                            src={`https://sistemtoko.com/img/user/demo/product/${item.product?.product_img}`} 
                                                            alt="" 
                                                            style={{width:'150px', height:'150px'}}
                                                        />
                                                    </TableCell>
                                                    <TableCell>{item.product?.product_name}</TableCell>
                                                    <TableCell>{item.qty}</TableCell>
                                                    <TableCell>
                                                        Rp. {parseFloat(item.product?.product_price * item.qty).toLocaleString('id-ID')}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default CartPage;