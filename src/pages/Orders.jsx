import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";



const Container = styled.div``;



const OrderItem = styled.div`
display: flex;
background-color: black;
margin: 1% 2%;
height: 10%;

`;

const Orders = () => {
    const [order, SetOrder] = useState([]);
    const user = useSelector(state => state.user)
    const [products, setProducts] = useState([])

    useEffect (() => {
        if(user.currentUser){
            const userId = user.currentUser.others._id;
            const token = user.currentUser.accessToken;
            publicRequest.get(`/order/find/${userId}`, {
                headers:{
                    "token": `Bearer ${token}`
                }
            }).then((res) => {
                SetOrder(res.data)
                res.data.products.map((product) => {
                    const productId = product.productId;
                    publicRequest.get(`/products/find/${productId}`).then((res) => {
                      
                        setProducts((products) => {
                          products.push(res.data);
                          return products
                        })
                      }
                        
                    )
                })
            })
            
        
      }
    })
    
    console.log(order);
    console.log(products);


  return (
    <Container>
      <Navbar />
      <Announcement />
      {products?.map((product) => <OrderItem>{product._id}</OrderItem>)}
      <Newsletter />
      <Footer />
    </Container>
  );
  }


export default Orders;
