import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledErrorBoundary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    padding: 2rem;
    text-align: center;

    h2 {
        color: var(--green);
        margin-bottom: 1rem;
    }

    p {
        color: var(--light-slate);
        margin-bottom: 2rem;
        max-width: 500px;
    }

    button {
        ${({theme}) => theme.mixins.button};
    }
`;

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, error: null};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true, error};
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <StyledErrorBoundary>
                    <h2>Oops! Something went wrong</h2>
                    <p>
                        We're sorry, but something unexpected happened. Please try refreshing the page.
                    </p>
                    <button onClick={this.handleReload}>
                        Refresh Page
                    </button>
                </StyledErrorBoundary>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
