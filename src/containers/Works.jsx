import React from 'react';
import styled from 'styled-components';
import { WorkCard } from '../components/WorkCard';
import weatherImage from './../images/weather.png';
import todoImage from './../images/todo.png';
import moviesImage from './../images/movies.png';
import companyImage from './../images/company.png';
import { SectionTitle } from '../components/SectionTitle';

const WorksSection = styled.div`    
    padding: 50px;

    @media (max-width: 768px) {
        padding: 20px 50px 50px 50px;
    }

    @media (max-width: 360px) {
        padding: 0 20px 20px 20px;
    }
`;

const Projects = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 50px;

    >div {
        width: 45%;
    }

    @media (max-width: 600px) {
        >div {
            width: 100%;
        }
    }
`

const allProjects = [
    {title: 'Weather', description: 'Search of weather around the world', labels: ['React', 'Redux'], image: weatherImage, path: 'https://vocal-bubblegum-2d9ff1.netlify.app/'},
    {title: 'To do', description: 'Manage tasks effectively', labels: ['React'], image: todoImage, path: 'https://viktoryiapiavets.github.io/toDo/'},
    {title: 'Startupz', description: 'Landing page for a company website', labels: ['React'], image: companyImage, path: 'https://viktoryiapiavets.github.io/startupz/'},
    {title: 'Movies', description: 'Search of movies with various filters', labels: ['React', 'Redux-toolkit'], image: moviesImage, path: 'https://lighthearted-hotteok-2eae19.netlify.app/?filter=popular&language=en-US&page=1'},    
]

const Works = () => {
    return (
        <section id={'works'}>
            <SectionTitle text={'My works'} />
            <WorksSection>                
                <Projects>
                    {
                        allProjects.map((project, index) => (
                            <WorkCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                labels={project.labels}
                                onClick={() => window.open(project.path, '_blank')}
                            />
                        ))
                    }
                </Projects>
            </WorksSection>
        </section>
    );
};

export {
    Works
}
