import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 3;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  background-color: #f5fbfd;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  width: 100%;
  object-fit: cover;
  z-index: 2;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #fff;
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {

  const handleCart = () => {

  }
  console.log(item);
  return (
    <div>
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          {/* <Icon>
            <ShoppingCartOutlined onClick={handleCart} />
          </Icon> */}
          <Icon>
            <Link to={`/product/${item._id}`}>
              <SearchOutlined />
            </Link>
          </Icon>
          <Icon>
            
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    </div>
  );
};

export default Product;
