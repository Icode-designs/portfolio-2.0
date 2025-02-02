import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
  padding: 3rem 1.5rem;
  padding-bottom: 0;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 100px;
  height: fit-content;

  img {
    width: 100%;
  }
`;

export const Navigation = styled.nav``;

export const Navbtn = styled.button`
  width: fit-content;
  color: #333;
  background: none;
  border: none;
  font-size: 1.5rem;
  position: relative;
  z-index: 10;
`;

export const NavMenuContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #7eadfc;
  z-index: 5;
  left: 0;
  top: 0;
  animation: slideIn 0.5s ease-in-out;

  @keyframes slideIn {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

export const NavList = styled.ul`
  margin: auto;
  list-style: none;
  text-align: center;

  li {
    line-height: 4rem;
  }

  a:link {
    text-decoration: none;
    color: #333;
    font-size: 2rem;
    font-weight: bolder;
  }
`;
