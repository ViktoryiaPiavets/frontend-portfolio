import styled from 'styled-components';

const Project = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    background: ${(props) => props.theme.palette.secondary.dark};
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        border: 1px solid ${(props) => props.theme.palette.info.main};
        box-shadow: 0 4px 15px rgba(93, 232, 232, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6);
    }
`

const Preview = styled.div`
    height: 310px;    
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;    
    opacity: 0.7;

    @media (max-width: 768px) {
        height: 200px;
        background-size: contain;
    }
`

const Labels = styled.div`
    display: flex;
    gap: 10px;
`

const Label = styled.p`
    background: ${(props) => props.theme.palette.secondary.light};
    font-size: 0.8rem;
    color: ${(props) => props.theme.palette.primary.contrastText};
    border-radius: 5px;
    padding: 10px;
`

const ProjectTitle = styled.span`
    display: flex;
    align-items: center;

    >svg {
        margin-left: 10px;
    }
`

const ProjectDescription = styled.span`
    font-size: 0.9rem;
    color: ${(props) => props.theme.palette.primary.contrastText};
`

export {
    Project,
    Labels,
    Label,
    Preview,
    ProjectTitle,
    ProjectDescription
}

