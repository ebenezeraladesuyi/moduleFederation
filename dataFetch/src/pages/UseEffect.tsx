import styled from "styled-components";
import { UseFetch } from "../hooks/UseFetch";



const UseEffect = () => {

    const state = UseFetch();

    console.log(state)


  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }} >

        <div style={{marginBottom:"20px", fontWeight:"700", fontSize:"18px"}}>UseEffect</div>

        <div>
            <Container>

                {
                    state?.map((props: any) => (
                        <Card>
                            <Image src={props.images[0]} 
                            loading="lazy"/>

                            <Name>{props.category.name} Province
                            </Name>

                            <Price>Cost of Visit: ${props.price}</Price>
                        </Card>
                    ))
                }

            </Container>
        </div>

    </div>
  )
}

export default UseEffect;

const Price = styled.div`
// text-align: center;
font-weight: 700;
color: purple;
margin-left: 10px;
`;

const Name = styled.div`
// text-align: center;
margin-left: 10px;
font-weight: 700;
color: purple;
`;

const Image = styled.img`
width: 100%;
height: 85%;
// object-fit: cover;
`;

const Card = styled.div`
border-radius: 5px;
width: 250px;
height: 350px;
box-shadow: 0 0 4px gray;
margin: 10px;
overflow: hidden;
padding-bottom: 10px;
`;

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
