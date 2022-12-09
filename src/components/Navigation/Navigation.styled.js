import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 20px;
  font-weight: 700;
  font-size:24px;
  color: #2a363b;

  &.active {
    color: #0eedc4f2;
    text-decoration:revert;
  }
`;
