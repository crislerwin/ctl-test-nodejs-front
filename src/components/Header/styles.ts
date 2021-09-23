import styled from 'styled-components';


const Head = styled.div`
 flex: 1;
  background-color: #fff;
  padding: 20px;
  width: 100%;
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  margin: 0 20px;
  font-size: 24px;
  font-weight: 600
`

export { Head, HeaderTitle }