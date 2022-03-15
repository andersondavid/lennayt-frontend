import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
    color: inherit;
    text-decoration: none;
}

body, html {
  background: ${(props) => props.theme.color.background};
  font-family: sans-serif;
  height: 100vh;
}
`;

export const Wrapper = styled.div`
  padding: 3em 0;
  height: 100vh;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const Container = styled.div`
  max-width: 500px;
  width: 70%;
  margin: auto;
  border-radius: 12px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff4d
  padding: 50px 0 0px 0;
  @media (max-width: 500px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

export const Logo = styled.div`
  text-align: center;
  margin: 0 0 30px 0;
`;

export const LogoName = styled.h1`
  font-family: 'Alegreya Sans', sans-serif;
  font-family: 'Kaushan Script', cursive;
  color: #fdfdfd;
  font-size: 2em;
`;

export const GithubLink = styled.div`
  text-align: center;
  bottom: 0;
  padding: 15px;
  a {
    margin: 10px;
    color: #8d8d8d;
  }
  @media (max-width: 500px) {
    bottom: 0;
    right: 0;
    position: absolute;
  }
`;
