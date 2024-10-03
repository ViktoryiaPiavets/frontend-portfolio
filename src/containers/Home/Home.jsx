import React, { useEffect, useRef } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import {
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
} from './Home.styled';
import photo from './../../images/photo.png';
import { theme } from '../../theme';

gsap.registerPlugin(TextPlugin, ScrollToPlugin);

const Home = () => {
    const firstLineTitleRef = useRef(null);
    const secondLineTitleRef = useRef(null);
    const ConnectButtonRef = useRef(null);
    const DownloadButtonRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl
            .from(firstLineTitleRef.current, {
                duration: 5,
                text: "",
                ease: 'power2.inOut',
                stagger: 0.05
            }, 0)
            .from(secondLineTitleRef.current, {
                duration: 4,
                text: "",
                ease: 'power2.inOut',
                stagger: 0.05,
            }, '>-0.2')
            .from(ConnectButtonRef.current, {
                duration: 0.7,
                opacity: 0,
                scale: 0.9,
                ease: 'power2.inOut',
            }, '>-0.3')
            .from(DownloadButtonRef.current, {
                duration: 0.7,
                opacity: 0,
                scale: 0.9,
                ease: 'power2.inOut',
            }, '>-0.1')            
    });

    useEffect(() => {
        const internalLinks = document.querySelectorAll("a[href^='#']");
        
        internalLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetElement,
                        offsetY: 20
                    },
                    ease: 'power2.inOut'
                });
            });
        });

        return () => {
            internalLinks.forEach((link) => {
                link.removeEventListener('click', null);
            });
        };
    }, []);

    return (
        <header id={'header'}>
            <Nav>
                <NavLinks>
                    <Link href="#about">About</Link>
                    <Link href="#works">Works</Link>                    
                </NavLinks>
                <NavLinks>
                    <Link href="#header"><HomeIcon sx={[{ color: theme.palette.info.main }, { '&:hover': { scale: 1.2 } }]} /></Link>
                </NavLinks>
                <NavLinks>
                    <a href="mailto:pevets333@gmail.com"><MailIcon sx={[{ color: theme.palette.primary.contrastText }, { '&:hover': { color: theme.palette.primary.light } }]} /></a>
                    <a href="https://linkedin.com/in/viktoryiapiavets"><LinkedInIcon sx={[{ color: theme.palette.primary.contrastText }, { '&:hover': { color:  theme.palette.primary.light } }]} /></a>
                    <a href="https://t.me/vpiavets"><TelegramIcon sx={[{ color: theme.palette.primary.contrastText }, { '&:hover': { color:  theme.palette.primary.light } }]} /></a>
                </NavLinks>
            </Nav>
            <Hero>
                <HeroText>
                    <Titleline>                   
                    <Title ref={firstLineTitleRef}>My name is Viktoryia Piavets<Dot>.</Dot></Title>
                    </Titleline>    
                    <Titleline>            
                    <Title ref={secondLineTitleRef}>I am a Frontend developer<Dot>.</Dot></Title>   
                    </Titleline>                
                    <p>
                        <ConnectButton ref={ConnectButtonRef} href="tel:+48571315850">Let's Talk</ConnectButton>
                        <DownloadButton ref={DownloadButtonRef} href='/assets/Resume.pdf' download>Get CV</DownloadButton>
                    </p>
                </HeroText>
                <HeroImage src={photo} />
            </Hero>           
        </header>
    );
};

export { Home };
