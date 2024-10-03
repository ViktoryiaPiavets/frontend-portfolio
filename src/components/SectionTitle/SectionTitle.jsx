import styled from 'styled-components';

const Title = styled.div`
    font-size: 2rem;
    text-align: center;

    @media (max-width: 360px) {
        font-size: 1.2rem;
    }
`

const SectionTitle = ({ text }) => {
    return (
        <Title>{text}</Title>
    )
}

export {
    SectionTitle
}