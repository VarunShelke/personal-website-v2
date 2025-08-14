import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const StyledMainContainer = styled.main`
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
`;

const Archive = () => {
  return (
    <>
      <Helmet>
        <title>Archive | Varun Shelke</title>
        <meta name="description" content="A big list of things I've worked on." />
      </Helmet>

      <StyledMainContainer>
        <h1>Archive</h1>
        <p>A big list of things I've worked on.</p>
        <p>This page will be implemented in Phase 2.</p>
      </StyledMainContainer>
    </>
  );
};

export default Archive;
