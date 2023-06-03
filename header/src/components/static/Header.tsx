import styled from "styled-components"

const Header = () => {
  return (
    <div>
        <Head>
            <Logo>LOGO</Logo>

            <Navs>
                <Nav>Home</Nav>
                <Nav>DataFetch</Nav>
                <Nav>Todo</Nav>
            </Navs>

            <Buttons>
                <Reg>Register</Reg>
                {/* <Reg2>Sign in</Reg2> */}
            </Buttons>

        </Head>
        
    </div>
  )
}

export default Header;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Reg2 = styled.button`
// width: 100px;
// height: 35px;
// border-radius: 7px;
// margin-right: 40px;
// border: 1px solid black;
// background: transparent;
// font-weight: 700;

// :hover{
//     border: none;
//     background: black;
//     color: white;
// }
// `;

const Reg = styled.button`
width: 100px;
height: 35px;
border-radius: 7px;
margin-right: 20px;
border: none;
background: black;
color: white;
font-weight: 700;

:hover{
    border: 1px solid black;
    background: transparent;
    color: black;
}
`;

const Buttons = styled.div`
`;

const Nav = styled.div`
font-weight: 700;
font-size: 16px;
margin-left: 20px;
`;

const Navs = styled.div`
display: flex;
`;

const Logo = styled.div`
margin-left: 40px;
font-size: 25px;
font-weight: 700;
`;

const Head = styled.div`
width: 100%;
height: 70px;
box-shadow: 0 0 3px gray;
display: flex;
justify-content: space-between;
align-items: center;
`;
