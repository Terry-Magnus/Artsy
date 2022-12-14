import {
  Nav,
  Logo,
  NavLink,
  Bars,
  NavMenu,
  Search,
  Cart,
  Notifications,
} from "./navbar.styles";

export default function NavBar() {
  return (
    <>
      <Nav>
        <Bars />

        <Logo>Artsy.</Logo>
        <NavMenu>
          <NavLink to="/team">Home</NavLink>
          <NavLink to="/blogs">Marketplace</NavLink>
          <NavLink to="/sign-up">Auctions</NavLink>
          <NavLink to="/sign-up">Drop</NavLink>
        </NavMenu>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Search />
          <Cart />
          <Notifications />
        </div>
      </Nav>
    </>
  );
}
