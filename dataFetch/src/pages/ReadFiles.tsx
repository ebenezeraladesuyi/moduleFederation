import styled from "styled-components";
import { Link } from "react-router-dom";
import { PropsWithChildren } from "react"


const ReadFiles:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div style={{width:"100%", minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>

      <div style={{width:"80%", display:"flex", alignItems:"center", justifyContent:"center", marginTop:'50px'}}>

        <Button
                to="/" bg="green"
                  >Use Effect</Button>
        <Button
                to="/tanstack" bg="darkorange"
                  >TanStack</Button>
        <Button
                to="/swr" bg="purple"
                  >SWR</Button>

      </div>

      <Holder>
        {children}
      </Holder>

    </div>
  )
}

export default ReadFiles;

const Holder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 40px;
`;

const Button = styled(Link)<{
  bg: string;
}>`
padding: 10px 25px;
background-color: ${({ bg }) => bg};
border-radius: 4px;
text-transform: uppercase;
font-weight: bold;
font-size: 12px;
transform: all 350ms;
text-decoration: none;
color: white;
margin: 0 15px;

:hover {
  cursor: pointer;
  transform: translate(0px, -10px)
}
`;
