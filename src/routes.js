import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
// import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import Academic from 'src/views/reports/AcademicView';
import UploadView from 'src/views/upload/UploadView';
import DownloadView from './views/download/DownloadView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'upload', element: <UploadView /> },
      { path: 'download', element: <DownloadView />},
      // { path: 'dashboard', element: <DashboardView /> },
      { path: 'dashboard/academic', element: <Academic /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/upload" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
