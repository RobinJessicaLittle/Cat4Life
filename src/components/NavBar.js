import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  NavbarRight,
  Crate,
  Crateimage,
  WelcomePage,
  WelcomeText,
  Sectionbreak,
} from "./NavBar.styled";
import logo from "../logo.jpeg";
import emptyCrate from "../emptyCrate.jpeg";
import Modal from "./Modal";

const Navbar = ({ basket, removeItemFromBasket }) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo src={logo}></Logo>
        <NavbarRight>
          <Crate>
            <Crateimage src={emptyCrate} alt="shopping crate" />
            <Modal
              basket={basket}
              removeItemFromBasket={removeItemFromBasket}
            />
          </Crate>
        </NavbarRight>
      </HeaderWrapper>

      <WelcomePage>
        <WelcomeText>
          {" "}
          Every year thousands of Cats are offered up for adoption. For many,
          YOU may be the only chance they have at better life in a loving home.{" "}
        </WelcomeText>
      </WelcomePage>
      <Sectionbreak> View our current Orphans </Sectionbreak>
    </HeaderContainer>
  );
};

export default Navbar;