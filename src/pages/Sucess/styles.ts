import styled from "styled-components";


const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
margin: 0 auto;
`;

const Title = styled.h1`
color: ${p => p.theme.colors.text};
font-size: 14px;
font-weight: 700;


`;
const Paragraph = styled.p`
color: black;
font-size: 14px;
font-weight: 400;

`;




export { Container, Title, Paragraph };