import { BsList, BsSearch, BsCart2, BsBell, BsXLg } from 'react-icons/bs';
import styled from 'styled-components';
const defaultIconStyles = {
    color: "#000",
    fontSize: "1.2rem",
    fontWeight: 400,
    cursor: "pointer",
    marginLeft: "10px"
}
export const Nav = styled.nav`
display: flex;
justify-content: space-around;
padding: 2rem 1.2rem;
`;
export const NavMenu = styled.div`
display: none;
align-items: center;
@media screen and (min-width: 768px) {
	display: flex;
}
`;
export const Logo = styled.div`
font-weight: 600;
text-transform: uppercase;
font-size: 1.5em;
font-family: "Times New Roman";
display: flex;
align-items: center
`

export const NavLink = styled.a`
color: #000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
}
`;



export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled.a`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;

export const Bars = styled(BsList)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	font-size: 1.5rem;
	cursor: pointer;
}
`;

export const Search = styled(BsSearch)`
@include ${defaultIconStyles}
`;

export const Cart = styled(BsCart2)`
@include ${defaultIconStyles}

`;
export const Close = styled(BsXLg)`
@include ${defaultIconStyles}

`
export const Notifications = styled(BsBell)`
@include ${defaultIconStyles},
`;

export const OffCanvas = styled.div`
position: fixed;
width: 100%;
top: 0;
left: ${props => props.openCanvas ? 0 : "-100%"};
background: #fff;
color: #000;
z-index: 2;
height: 70vh;
-webkit-transition: left .2s ease-in;
`
export const OffCanvasHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 1.5rem 1.2rem;
`
export const OffCanvasBody = styled.div`
 display: flex;
 flex-direction: column;
 padding: 0 1.2rem;
 justify-content: space between;
 height: 70%;
`
export const OffCanvasFooter = styled.div`
 display: flex;
 justify-content: right;
 padding: 0 3rem;
`

