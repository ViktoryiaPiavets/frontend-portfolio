import styled from 'styled-components';

const AboutSection = styled.div`
    padding: 50px 50px 110px 50px;
    display: flex;
    gap: 50px;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 360px) {
        padding: 20px 20px 70px 20px;
    }
`;

const Experience = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Job = styled.div`
    padding: 20px;    
    border-radius: 10px;
    background: ${(props) => props.theme.palette.secondary.dark};
    margin-bottom: 54px;

    @media (max-width: 360px) {
        padding: 10px;
        margin-bottom: 30px;
    }
`

const JobPlace = styled.div`
    display: flex;
    background: ${(props) => props.theme.palette.secondary.light};
    border-radius: 10px;    
    padding: 20px;

    &:first-child {
        border: solid 1px ${(props) => props.theme.palette.info.main};
    }

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    >p {
    width: 110px;
    }

    >div>p:first-child {
        margin-bottom: 20px;
    }

    >div>p:last-child {
        color: ${(props) => props.theme.palette.primary.contrastText};
        font-size: 0.9rem;
    }
`

const TotalNumbers = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10%;

    >p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45%;
        height: 100px;
        background: ${(props) => props.theme.palette.secondary.dark};
        border-radius: 10px;

        >span {
            font-size: 1.3rem;
        }
    }
`

const Description = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Details = styled.p`
    padding: 30px;
    border-radius: 10px;
    background: ${(props) => props.theme.palette.info.main};
    color: ${(props) => props.theme.palette.primary.dark};
    line-height: 30px;
    text-align: justify;

    @media (max-width: 360px) {
        padding: 20px;
    }
`

const Stack = styled.div`
    padding: 20px;
    margin-top: 60px;
    background: ${(props) => props.theme.palette.secondary.dark};
    border-radius: 10px;
    position: relative;

    @media (max-width: 768px) {
        margin-top: 40px;
    }
    
    >h3 {
        color: ${(props) => props.theme.palette.primary.contrastText};
        text-align: center;
        margin-bottom: 30px;
        font-size: 1.3rem;

        @media (max-width: 768px) {
            font-size: 1.1rem;
        }
    }

    &:before, &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100px;
        z-index: 1;
        pointer-events: none;
        border-radius: 10px;
    }

    &:before {
        left: 0;
        box-shadow: inset 30px 40px 20px 4px rgba(21,21,21, 0.7);
        background: linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent);
    }

    &:after {
        right: 0;
        box-shadow: inset -30px 40px 20px 4px rgba(21,21,21, 0.7);
        background: linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent);
    }
`;

const SkillBox = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    position: relative;
`


const SkillWrapper = styled.div`
    display: flex;
    gap: 40px;
    border-radius: 10px;
`

export {
    AboutSection,
    Experience,
    Job,
    JobPlace,
    TotalNumbers,
    Description,
    Details,
    Stack,
    SkillBox,
    SkillWrapper
}