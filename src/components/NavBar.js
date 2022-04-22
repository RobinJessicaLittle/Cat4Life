import { HeaderContainer, HeaderWrapper, Logo, NavbarRight, Crate, Crateimage, WelcomePage, WelcomeText, WelcomeImage, Sectionbreak} from './NavBar.styled';
import logo from '../logo.jpeg';
import welcome from '../welcome.jpeg';
import emptyCrate from '../emptyCrate.jpeg';
import Modal from './Modal';

const Navbar = ({ basket }) => {
	return (

		<HeaderContainer>
            <HeaderWrapper>
                <Logo src={logo}>

                </Logo>
                <NavbarRight>
                    <Crate> 
                        <Crateimage src={emptyCrate} alt = "shopping crate"/>
                        <Modal basket={basket} />

                    </Crate>
                </NavbarRight>
            </HeaderWrapper>

            <WelcomePage>
                <WelcomeText> Every year thousands of Cats are offered up for adoption. For many, YOU may be the only chance they have at better life in a loving home. </WelcomeText>
                <WelcomeImage src= {welcome} alt="group of kittens" />
            </WelcomePage>
            <Sectionbreak> View our current Orphans </Sectionbreak>
        </HeaderContainer>

        
	);
};

export default Navbar