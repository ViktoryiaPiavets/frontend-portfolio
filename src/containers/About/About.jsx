import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import {
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
} from './About.styled';
import { Skill } from '../../components/Skill';
import { SectionTitle } from '../../components/SectionTitle';

const skills = [
    { title: 'React.js', path: 'react' },
    { title: 'Redux', path: 'redux' },
    { title: 'JavaScript', path: 'js' },
    { title: 'Typescript', path: 'ts' },
    { title: 'HTML', path: 'html' },
    { title: 'CSS', path: 'css' },
    { title: 'Docker', path: 'docker' },
    { title: 'Git', path: 'git' },
    { title: 'Jest', path: 'jest' },
    { title: 'Styled components', path: 'styledcomponents' },
    { title: 'Node JS', path: 'nodejs' },
    { title: 'Webpack', path: 'webpack' },
    { title: 'Babel', path: 'babel' },
    { title: 'Material UI', path: 'materialui' },
    { title: 'Figma', path: 'figma' }
];

const About = () => {
    const skillWrapperRef = useRef(null);

    useEffect(() => {
        const skillWrapper = skillWrapperRef.current;
        const items = [...skillWrapper.children];

        items.forEach((item) => {
            const clone = item.cloneNode(true);
            skillWrapper.appendChild(clone);
        });

        const totalWidth = skillWrapper.scrollWidth;

        gsap.to(skillWrapper, {
            x: `-=${totalWidth / 2}`,
            duration: 50,
            ease: 'none',
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2))
            }
        });

    }, []);

    return (
        <section id={'about'}>
            <SectionTitle text={'About me'} />
            <AboutSection>
                <Experience>
                    <Job>
                    <JobPlace>
                        <p>2025 - now</p>
                        <div>
                            <p>Software Engineer Intern</p>
                            <p>Motorola Solutions</p>
                        </div>    
                    </JobPlace>
                    <JobPlace>
                        <p>2024 - 2025</p>
                        <div>
                            <p>Frontend developer</p>
                            <p>Freelance</p>
                        </div>    
                    </JobPlace>
                    <JobPlace>
                        <p>2021 - 2024</p>
                        <div>
                            <p>Frontend developer</p>
                            <p>Epam Systems</p>
                        </div>                
                    </JobPlace>                              
                    </Job>            
                    <TotalNumbers>
                        <p><span>4 &nbsp; </span>Years</p>
                        <p><span>10+ &nbsp; </span>Projects</p>
                    </TotalNumbers>
                </Experience>
                <Description>
                    <Details>
                        <p>As a Frontend developer with 4 years of experience, I specialize in building responsive and dynamic 
                            web applications using React.js, Redux, Typescript, HTML and CSS. I also have hands-on experience working with 
                            Oracle Cloud Commerce (OCC) and Open Storefront Framework (OSF).
                        </p>
                        <p>My expertise extends to writing unit tests with Jest and utilizing popular React component libraries such as 
                            Ant Design and Material UI. I have a strong background in collaborating within cross-functional, multinational
                            teams of various sizes, ensuring seamless project execution.
                        </p>
                        <p>Passionate about continuous learning and professional growth, I am  always eager to expand my skill set and
                            embrace new opportunities in frontend development.</p>
                    </Details>
                    <Stack>
                        <h3>My Stack</h3>                                         
                        <SkillBox>
                            <SkillWrapper ref={skillWrapperRef}>
                                {skills.map((skill, index) => (
                                    <Skill key={index} title={skill.title} path={skill.path} />
                                ))}
                            </SkillWrapper>                                                            
                        </SkillBox>            
                    </Stack>
                </Description>                  
            </AboutSection>        
        </section>
    );
};

export {
    About
};
