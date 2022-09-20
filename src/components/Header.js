import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg={"dark"} className="mb-3">
      <Navbar.Brand href="#home" className="text-success px-2">
        SHARKZTECH
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
