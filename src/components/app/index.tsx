import React, { FC } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeComponent from '../home';
import FormComponent from '../form';
import SymptomsComponent from '../symptoms';
import GeneralComponent from '../general';
import GynecologyComponent from '../gynecology';
import CardiologyComponent from '../cardiology';
import NeurologyComponent from '../neurology';
import OrthopedicsComponent from '../orthopedics';
import OthersComponent from '../others';

import AlertComponent from '../alert';
import AuthGuard from '../auth-guard';
import FooterComponent from '../footer';
import HeaderComponent from '../header';
import NotFoundComponent from '../not-found';
import AuthComponent from '../authentication';
import ProfileProvider from 'src/providers/profile';

export const themeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#673ab7',
        },
        secondary: {
            main: '#00e5ff',
        },
        text: {
            primary: '#000000',
        },
    },
};

const theme = createTheme(themeOptions);

const Main = styled('main')(() => ({
    margin: 'auto 2em'
}))

const AppFeature: FC<unknown> = () => (
    <ProfileProvider>
        <ThemeProvider theme={theme}>
            <Router>
                <HeaderComponent />
                    <Main>
                        <Routes>
                            <Route path="/" element={<AuthComponent />}/>
                            <Route path="/home" element={<AuthGuard to="/"><HomeComponent /></AuthGuard>}/>
                            <Route path="/form" element={<AuthGuard to="/"><FormComponent /></AuthGuard>}/>
                    
                            <Route path="/symptoms" element={<AuthGuard to="/"><SymptomsComponent /></AuthGuard>}/>
                            <Route path="/general" element={<AuthGuard to="/"><GeneralComponent /></AuthGuard>}/>
                            <Route path="/gynecology" element={<AuthGuard to="/"><GynecologyComponent /></AuthGuard>}/>
                            <Route path="/cardiology" element={<AuthGuard to="/"><CardiologyComponent /></AuthGuard>}/>
                            <Route path="/neurology" element={<AuthGuard to="/"><NeurologyComponent /></AuthGuard>}/>
                            <Route path="/orthopedics" element={<AuthGuard to="/"><OrthopedicsComponent /></AuthGuard>}/>
                            <Route path="/others" element={<AuthGuard to="/"><OthersComponent /></AuthGuard>}/>
                            <Route path="*" element={<NotFoundComponent />}/>
                        </Routes>
                    </Main>
                <FooterComponent />
                <AlertComponent />
            </Router>
        </ThemeProvider>
    </ProfileProvider>
);

export default AppFeature;