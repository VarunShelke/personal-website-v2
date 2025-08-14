import {Helmet} from 'react-helmet-async';
import styled from 'styled-components';

// Import sections
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Jobs from '@components/sections/Jobs';
import Featured from '@components/sections/Featured';
import Projects from '@components/sections/Projects';
import Contact from '@components/sections/Contact';

const StyledMain = styled.main`
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    counter-reset: section;

    &.fillHeight {
        padding: 0 150px;

        @media (max-width: 1080px) {
            padding: 0 100px;
        }
        @media (max-width: 768px) {
            padding: 0 50px;
        }
        @media (max-width: 480px) {
            padding: 0 25px;
        }
    }
`;

const Home = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Varun Shelke",
        "jobTitle": "Backend Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "AWS Cloud Innovation Center"
        },
        "url": "https://varunshelke.com",
        "sameAs": [
            "https://github.com/VarunShelke",
            "https://www.linkedin.com/in/vashelke"
        ],
        "knowsAbout": [
            "JavaScript",
            "Python",
            "React",
            "Node.js",
            "AWS",
            "MongoDB",
            "Express",
            "Streamlit"
        ],
        "description": "Software engineer specializing in building exceptional digital experiences with modern web technologies and cloud platforms."
    };

    return (
        <>
            <Helmet>
                <title>Varun Shelke - Software Engineer</title>
                <meta name="description"
                      content="Varun Shelke is a software engineer who specializes in building exceptional digital experiences. Currently working at AWS Cloud Innovation Center."/>
                <meta name="keywords"
                      content="Varun Shelke, software engineer, web developer, javascript, python, react, aws, backend developer"/>
                <meta name="author" content="Varun Shelke"/>

                {/* Enhanced Open Graph */}
                <meta property="og:title" content="Varun Shelke - Software Engineer"/>
                <meta property="og:description"
                      content="Software engineer specializing in building exceptional digital experiences with modern web technologies and cloud platforms."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://varunshelke.com"/>
                <meta property="og:image" content="https://varunshelke.com/og.png"/>
                <meta property="og:site_name" content="Varun Shelke"/>

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Varun Shelke - Software Engineer"/>
                <meta name="twitter:description"
                      content="Software engineer specializing in building exceptional digital experiences with modern web technologies and cloud platforms."/>
                <meta name="twitter:image" content="https://varunshelke.com/og.png"/>

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>

                {/* Preload critical resources */}
                <link rel="preload" href="/images/me.jpg" as="image"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            </Helmet>

            <StyledMain className="fillHeight">
                <Hero/>
                <About/>
                <Jobs/>
                <Featured/>
                <Projects/>
                <Contact/>
            </StyledMain>
        </>
    );
};

export default Home;
