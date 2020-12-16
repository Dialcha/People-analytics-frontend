import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import { useAuth0 } from "@auth0/auth0-react";

// Componentes
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import UploadView from 'src/views/upload/UploadView';
import DownloadView from './views/download/DownloadView';


const App = () => {

  const { isLoading, error, isAuthenticated } = useAuth0();

  // NOTA: NO TOCAR!! , se cargan las rutas acá y no en otro archivo para usar el ternario en el path / y renderizar el dashboard o el login
  const routes = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: 'login', element: <LoginView /> },
        { path: '404', element: <NotFoundView /> },
        { path: '/', element: isAuthenticated ? <Navigate to="/app/upload" /> : <Navigate to="/login" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: 'app',
      element: <DashboardLayout />,
      children: [
        { path: 'account', element: <AccountView /> },
        { path: 'upload', element: <UploadView/>  },
        { path: 'download', element: <DownloadView />},
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
  ];

  const routing = useRoutes(routes);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <h3>Cargando</h3>
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
