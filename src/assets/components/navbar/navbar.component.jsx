import { useState } from "react";
import {
  Nav,
  Logo,
  NavLink,
  Bars,
  NavMenu,
  Search,
  Cart,
  Notifications,
  OffCanvas,
  OffCanvasHeader,
  OffCanvasBody,
  OffCanvasFooter,
  Close,
} from "./navbar.styles";

export default function NavBar() {
  const [openCanvas, setOpenCanvas] = useState(false);
  console.log(openCanvas);
  const openNav = () => {
    setOpenCanvas(true);
    document.body.style.background = "rgba(0,0,0,0.4)";
  };
  const closeNav = () => {
    setOpenCanvas(false);
    document.body.style.background = "none";
  };
  return (
    <>
      <OffCanvas openCanvas={openCanvas}>
        <OffCanvasHeader>
          <Logo>Artsy.</Logo>

          <Close onClick={closeNav} />
        </OffCanvasHeader>
        <OffCanvasBody>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/marketplace">Marketplace</NavLink>
          <NavLink to="/auctions">Auctions</NavLink>
          <NavLink to="/drop">Drop</NavLink>
        </OffCanvasBody>
        <OffCanvasFooter>
          <Notifications
            style={{
              fontSize: "2em",
              border: "2px solid #000",
              borderRadius: "100px",
              padding: "10px",
              background: "black",
              color: "white",
            }}
          />
        </OffCanvasFooter>
      </OffCanvas>
      <Nav>
        <Bars onClick={openNav} />

        <Logo>Artsy.</Logo>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/marketplace">Marketplace</NavLink>
          <NavLink to="/auctions">Auctions</NavLink>
          <NavLink to="/drop">Drop</NavLink>
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
