import styled from 'styled-components';

export const HeaderContainer = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 60vh;
    border-bottom: 5px solid black;
`;


export const HeaderWrapper = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    height: 15vh;
    border: 2px solid blue;
`

export const Logo = styled.img `
    width: 35%;
    height: 15vh;
`
export const NavbarRight = styled.nav `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
`
export const Crate = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 35%;
    border: 2px solid green;
` 
export const Crateimage = styled.img `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    width: 50%;
`
export const WelcomePage = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    border: 2px solid red;
`

export const WelcomeText = styled.h2 `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 50vh;
    font-size: 35px;
`
export const WelcomeImage = styled.img `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    image-size: 60%;
    width: 35%;
`
export const Sectionbreak = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 100%;
    background: black;
    color: white;

    font-size: 30px;
`