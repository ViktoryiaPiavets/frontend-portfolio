import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;    
    align-items: center;
    justify-content: center;    
    padding: 50px;
    background-color: ${(props) => props.theme.palette.secondary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};

    >p {
        font-size: 0.9rem;
    }
    
    @media (max-width: 360px) {
        padding: 20px;
        margin-top: 20px;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2024 Viktoryia Piavets</p>
        </FooterContainer>
    );
};

export {
    Footer
}
