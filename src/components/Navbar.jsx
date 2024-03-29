import { Search, ShoppingCartOutlined, LogoutOutlined } from "@mui/icons-material";
import Sidebar from './Sidebar'
import { Badge } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  ${mobile({ padding: "0px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ display: "none" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 43px;
  padding: 0px 0px 10px;
  font-family: "Kalnia", serif;
  font-weight: bold;
  ${mobile({ fontSize: "40px", marginLeft: "10px", paddingBottom: "0px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "15px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.user.currentUser);
  const quantity = useSelector(state => state.user.cart.quantity)
  return (

    <Container>
      <Wrapper>
        <Left>
          <Sidebar />
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo><Link style={{ textDecoration: "none", fontFamily:"Kalnia" }} to="/">
T</Link>
          </Logo>

        </Center>
        <Right>
          <MenuItem><b>{user.others.username}</b></MenuItem>
          <MenuItem><LogoutOutlined color="" /></MenuItem>
          <MenuItem>
            <Link to="/cart"><Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined color="" />
            </Badge>
            </Link>

          </MenuItem>
        </Right>
      </Wrapper>

    </Container>
  );
};

export default Navbar;
