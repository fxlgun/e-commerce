import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import pic from "../art/login-background.jpg";
import '../art/gradientText.css'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:/*  linear-gradient(
      rgba(234, 41, 41, 0.5),
      rgba(255, 255, 255, 0.5)
    ), */ repeat-y url(${pic})
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "100%" })}
  ${mobile({ display: "block" })}
  
`;

const TitleWrapper = styled.div`
  width: 50%;
  padding: 5px;
  margin: auto;
  border-radius: 8%;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "78%" })}
  
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  margin: auto;
  background-color: #001219;
  border-radius: 8%;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "65%" })}
  ${mobile({ height: "320px" })}
`;

const BigTitle = styled.h1`
  
  font-size: 90px;
  margin: auto;
  ${mobile({ fontSize: "45px" })}
  ${mobile({ margin: "50px auto" })}
  
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  
  font-weight: 600;
  margin: 5px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  
`;
const Button = styled.button`
  width: 40%;
  border: none;
  border-radius: 16px;
  padding: 15px 20px;
  background-color: #ae2012;
  color: white;
  margin: 10px;
  &:disabled {
    color: teal;
    cursor: not-allowed;
  }
`;
const Input = styled.input`
  background-color: white;
  flex: 1;
  min-width: 40%;
  margin: 10px ;
  padding: 15px;
  border-radius: 16px;
  border: white 5px solid;
  outline: none;
  font-size: smaller;

  ::placeholder{
    color: #c6c6c6;
  }

  :focus{
    border: #0a9396 5px solid;
  }

`;

const Link = styled.a`
  margin: 7.5px ;
  
  font-size: 10px;
  text-decoration: none;
  cursor: pointer;
  color: white;

`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("lol");
    await login(dispatch, { username, password });
    setTimeout(() => {
      window.location.replace("https://e-commerce-fxlgun.vercel.app/");
      //http://localhost:3000/
    }, 2000);
  };

  return (
    <Container>
      <TitleWrapper>
        <BigTitle className="gradient-text" >Thaavki, welcomes you.</BigTitle>
      </TitleWrapper>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button disabled={isFetching} onClick={handleClick}>
            LOG IN
          </Button>
          {error && <Error>Something went wrong</Error>}
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
