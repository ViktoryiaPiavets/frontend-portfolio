import styled from 'styled-components';

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    background: ${(props) => props.theme.palette.secondary.light};
    padding: 20px;
    border-radius: 10px;
    color: ${(props) => props.theme.palette.primary.light};

    >img {
        margin-right: 10px;
    }
`

const Skill = ({ path, title }) => {
    return (
        <SkillItem>
            <img src={`https://skillicons.dev/icons?i=${path}`} alt={`${title} skill icon`} />
            <p>{title}</p>
        </SkillItem>
    )
}

export {
    Skill
}