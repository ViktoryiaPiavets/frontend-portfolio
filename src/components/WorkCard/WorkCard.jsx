import {
    Project,
    Preview,
    ProjectTitle,
    ProjectDescription,
    Labels,
    Label
} from './WorkCard.styled';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const WorkCard = ({ title, description, labels, image, onClick }) => {
    return (
        <Project onClick={onClick} image={image}>
            <Labels>{labels.map((l, index) => <Label key={index}>{l}</Label>)}</Labels>
            <Preview image={image} />  
            <ProjectTitle>{title} <ArrowOutwardIcon /></ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
        </Project>
    )
}

export {
    WorkCard
}