import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  
`;

export const HeaderStyled = styled.header`
  flex-shrink: 0;
background-color: darkgray;
padding:0 50px 0 50px;

  
`;

export const MainStyled = styled.main`
  flex-grow: 1;
  margin-top:16px;
    padding: 16px 16px;
    margin-right: auto;
    display: flex;
    
    flex-direction: column;
    align-items: center;
    border: 6px groove gray;
    max-width: max-content;
    height:max-content;
    margin-left: auto;
`;

export const FooterStyled = styled.footer`
  flex-shrink: 0;

  padding-top: 16px;
  padding-bottom: 16px;
  
`;
