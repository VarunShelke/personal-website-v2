import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {srConfig} from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
    max-width: 900px;

    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 50px;

        @media (max-width: 768px) {
            display: block;
        }
    }
`;

const StyledText = styled.div`
    ul.skills-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        grid-gap: 0 10px;
        padding: 0;
        margin: 20px 0 0 0;
        overflow: hidden;
        list-style: none;

        li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 20px;
            font-family: var(--font-mono);
            font-size: var(--fz-xs);

            &:before {
                content: '▹';
                position: absolute;
                left: 0;
                color: var(--green);
                font-size: var(--fz-sm);
                line-height: 12px;
            }
        }
    }
`;

const StyledPic = styled.div`
    position: relative;
    max-width: 300px;

    @media (max-width: 768px) {
        margin: 50px auto 0;
        width: 70%;
    }

    .wrapper {
        ${({theme}) => theme.mixins.boxShadow};
        display: block;
        position: relative;
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: var(--border-radius);
        background-color: var(--green);

        &:hover,
        &:focus {
            outline: 0;
            transform: translate(-4px, -4px);

            &:after {
                transform: translate(8px, 8px);
            }

            .img {
                filter: none;
                mix-blend-mode: normal;
            }
        }

        .img {
            position: relative;
            border-radius: var(--border-radius);
            mix-blend-mode: multiply;
            filter: grayscale(100%) contrast(1);
            transition: var(--transition);
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 1 / 1;
        }

        &:before,
        &:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: var(--border-radius);
            transition: var(--transition);
        }

        &:before {
            top: 0;
            left: 0;
            background-color: var(--navy);
            mix-blend-mode: screen;
        }

        &:after {
            border: 2px solid var(--green);
            top: 14px;
            left: 14px;
            z-index: -1;
        }
    }
`;

const About = () => {
    const revealContainer = useRef(null);

    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig());
    }, []);

    const skills = [
        'Java',
        'Python',
        'Spring Boot',
        'FastAPI',
        'TypeScript',
        'AWS (Lambda, S3, Bedrock, CDK)',
    ];

    return (
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2 className="numbered-heading">About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>
                            Hello! I’m Varun, a software developer passionate about building impactful digital
                            experiences. My journey into software development began in college when I started
                            experimenting with Java and Spring Boot to create small web applications. Over time,
                            curiosity turned into a career, and I’ve now spent over four years working across
                            enterprise-level platforms and innovative projects.
                        </p>

                        <p>
                            Fast-forward to today, and I’ve had the privilege of working at{' '}
                            <a href="https://www.nagarro.com/en/" target="_blank" rel="noopener noreferrer">
                                Nagarro
                            </a>
                            , and{' '}
                            <a href="https://www.cognizant.com/us/en" target="_blank" rel="noopener noreferrer">
                                Cognizant Consulting
                            </a>
                            . My main focus these days is building open-source AI Powered Health Sciences and
                            Sports Analytics Solutions at{' '}
                            <a href="https://digital.pitt.edu/cio/cic" target="_blank" rel="noopener noreferrer">
                                AWS Cloud Innovation Center
                            </a>
                            .
                        </p>

                        <p>
                            Recently, I’ve worked on the{' '}
                            <a
                                href="https://github.com/pitt-cic/diving-analytics-platform"
                                target="_blank"
                                rel="noopener noreferrer">
                                Diving Analytics Platform
                            </a>{' '}
                            - An AI-powered platform that streamlines the analysis of diving training data.
                            Leveraging modern large language models (LLMs), it transforms unstructured training
                            notes into structured, actionable insights. Built on a robust backend powered by AWS
                            services like Lambda, Bedrock, and S3. The solution combines my expertise in Python,
                            TypeScript, and AWS to deliver a scalable, high-performance application.
                        </p>

                        <p>Here are a few technologies I’ve been working with recently:</p>
                    </div>

                    <StyledText>
                        <ul className="skills-list">
                            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                        </ul>
                    </StyledText>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <img
                            className="img"
                            src="/images/me.jpg"
                            alt="Headshot"
                            loading="lazy"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                console.warn('Personal photo failed to load');
                            }}
                        />
                    </div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    );
};

export default About;
