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
                            <p>2021 - now</p>
                            <div>
                                <p>Frontend developer</p>
                                <p>Epam Systems</p>
                            </div>                
                        </JobPlace>
                        <JobPlace>
                            <p>2020 - 2021</p>
                            <div>
                                <p>Content Manager</p>
                                <p>Epam Systems</p>
                            </div>                
                        </JobPlace>                
                    </Job>            
                    <TotalNumbers>
                        <p><span>3+ &nbsp; </span>Years</p>
                        <p><span>10+ &nbsp; </span>Projects</p>
                    </TotalNumbers>
                </Experience>
                <Description>
                    <Details>
                        As a Frontend Developer, I have experience building responsive and dynamic web applications using React.js,
                        Redux, Typescript. I have been working with HTML and CSS during more than 4 years. My expertise also
                        includes writing unit tests with Jest as well as using libraries of react components (Ant Design, Material UI).
                        I used to working inside cross-funсtional and multinational teams of different size.
                        And I am constantly learning, developing my skills and open to new opportunities.
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
