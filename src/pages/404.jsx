import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 150px;
  text-align: center;
  
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

const StyledTitle = styled.h1`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;

const StyledSubtitle = styled.h2`
    font-size: clamp(30px, 5vw, 50px);
    font-weight: 400;
`;

const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Varun Shelke</title>
        <meta name="description" content="Page not found" />
      </Helmet>

      <StyledMainContainer className="fillHeight">
        <StyledTitle>404</StyledTitle>
        <StyledSubtitle>Page Not Found</StyledSubtitle>
        <StyledHomeButton to="/">Go Home</StyledHomeButton>
      </StyledMainContainer>
    </>
  );
};

export default NotFound;
