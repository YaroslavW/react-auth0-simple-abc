import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Nav = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
`;
export const NavLink = styled(Link)`
  color:#827d82;
  font-size: 22px;
  font-weight: 800;
  text-decoration: none;
  margin: 0 20px;
`;