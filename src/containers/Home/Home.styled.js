import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;
    background-color: ${(props) => props.theme.palette.secondary.main};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    gap: 50px;
    
    @media (max-width: 360px) {
        padding: 20px;
        gap: 20px;
    }
`

const NavLinks = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    
`;

const DownloadButton = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.light};
    border: solid 1px ${(props) => props.theme.palette.primary.contrastText};
    text-decoration: none;
    border-radius: 5px;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0.2em 0.2em 0.5em ${(props) => props.theme.palette.primary.contrastText};
    }
`;

const Hero = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 180px 70px;
    min-height: 100vh;
    width: 100%;
    max-width: 1500px;

    @media (max-width: 1175px) {
        flex-direction: column-reverse;
        padding: 120px 50px;
        justify-content: center;
    }

    @media (max-width: 360px) {        
        padding: 20px;
    }
`;

const HeroText = styled.div`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 50px;
    }
`;

const HeroImage = styled.img`
    object-fit: cover;
    object-position: top;
    width: 400px;
    height: 400px;
    border: solid 20px ${(props) => props.theme.palette.info.main};
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 300px;
        height: 300px;
    }

    @media (max-width: 360px) {
        width: 200px;
        height: 200px;
    }
`;

const ConnectButton = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.palette.info.main};
    color: ${(props) => props.theme.palette.primary.dark};
    text-decoration: none;
    border-radius: 5px;
    margin-right: 40px;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0.2em 0.2em 0.5em rgba(93, 232, 232, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6);
    }
`;

const Link = styled.a`
    color: ${(props) => props.theme.palette.primary.contrastText};
    text-decoration: none;

    &:hover {
        color: ${(props) => props.theme.palette.primary.light};
    }
`;

const Titleline = styled.div`
    display: flex;
    align-items: center;
    height: 5rem;

    &:last-of-type>h1 {
        margin-bottom: 60px;
    }
    @media (max-width: 360px) {
        height: 3.5rem;       
    }
`

const Title = styled.h1`
    font-size: 2.5rem;    
    white-space: nowrap;    

    @media (max-width: 768px) {
        text-align: center;
    }

    @media (max-width: 360px) {
        font-size: 1.1rem;
    }
`

const Dot = styled.span`    
    color: ${(props) => props.theme.palette.info.main};
    font-size: 2rem;
`

export {
    Nav,
    NavLinks,
    DownloadButton,
    Hero,
    HeroText,
    HeroImage,
    ConnectButton,
    Link,
    Titleline,  
    Title,
    Dot
}