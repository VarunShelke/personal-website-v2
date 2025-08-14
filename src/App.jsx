import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {ThemeProvider} from 'styled-components';
import usePageTracking from "@hooks/usePageTracking.js";

import {GlobalStyle, theme} from '@styles';

import {ErrorBoundary, Layout} from '@components';

import Home from '@pages/Home';
import Archive from '@pages/Archive';
import NotFound from '@pages/404';

function TrackedRoutes() {
    usePageTracking();

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/archive" element={<Archive/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Layout>
    );
}

function App() {
    React.useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      #root {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <ErrorBoundary>
            <HelmetProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyle/>
                    <div
                        id="root"
                        style={{
                            minHeight: '100vh',
                            display: 'grid',
                            gridTemplateRows: '1fr auto',
                            gridTemplateColumns: '100%',
                            width: '100%',
                            margin: 0,
                            padding: 0,
                            boxSizing: 'border-box'
                        }}
                    >
                        <Router>
                            <TrackedRoutes/>
                        </Router>
                    </div>
                </ThemeProvider>
            </HelmetProvider>
        </ErrorBoundary>
    );
}

export default App;
