import { Navigate, useRoutes } from 'react-router-dom';
// auth
import AuthGuard from '../auth/AuthGuard';
import GuestGuard from '../auth/GuestGuard';
// layouts


import DashboardLayout from '../layouts/dashboard';
// config
import { PATH_AFTER_LOGIN } from '../config-global';
//
import {
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  GeneralAppPage,
  UserAccountPage,
  UserListPage,
  EcommerceShopPage,
  EcommerceCheckoutPage,
  EcommerceProductDetailsPage,
  InvoiceListPage,
  MembershipListPage,
  ProductPage,
  NewPasswordPage,
  OrderListPage,
  DiscountWheel,
  PopUpBannerPage,
  UserCreatePage,
  UserEditPage,
  EcommerceProductCreatePage,
  EcommerceProductEditPage
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth
    {
      path: 'auth',
      children: [
        {
          path: 'AUTHENTICATION',
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          ),
        },
        {
          path: 'reset-password',
          element: (
            <GuestGuard>
              <ResetPasswordPage />
            </GuestGuard>
          ),
        },
        {
          path: 'new-password',
          element: (
            <GuestGuard>
              <NewPasswordPage />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <LoginPage /> },
        { path: 'register-unprotected', element: <RegisterPage /> },
        
      ],
    },

    // Dashboard
    {
      path: '/auth/login',
      element: (
        <GuestGuard>
          <LoginPage />
        </GuestGuard>
      ),
    },
    {
      path: '/',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children : [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'app', element: <GeneralAppPage /> },
      ]
    },
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'app', element: <GeneralAppPage /> },
        // { path: 'ecommerce', element: <GeneralEcommercePage /> },
        {
          path: 'e-commerce',
          children: [
            { element: <Navigate to="/dashboard/e-commerce/shop" replace />, index: true },
            { path: 'shop', element: <EcommerceShopPage /> },
            { path: 'product/:name', element: <EcommerceProductDetailsPage /> },
            { path: 'product/:name/edit', element: <EcommerceProductEditPage /> },
            { path: 'product/new-product', element: <EcommerceProductCreatePage /> },
            { path: 'list', element: <OrderListPage /> },
            { path: 'checkout', element: <EcommerceCheckoutPage /> },
          ],
        },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
            { path: 'account', element: <UserAccountPage /> },
            { path: 'list', element: <UserListPage /> },
            { path: 'manage-product', element: <ProductPage /> },
            { path: 'coupon', element: <DiscountWheel /> },
            { path: 'new', element: <UserCreatePage /> },
            { path: ':name/edit', element: <UserEditPage /> },
            { path: 'popup-banner', element: <PopUpBannerPage /> },
          ],
        },
        {
          path: 'invoice',
          children: [
            { element: <Navigate to="/dashboard/invoice/list" replace />, index: true },
            { path: 'list', element: <InvoiceListPage /> },
          ],
        },
        {
          path : 'extra',
          children : [
            {element : <Navigate to='/dashboard/extra/banner' replace />, index : true},
            {path : 'banner', element : <PopUpBannerPage />},
            {path : 'coupon', element : <DiscountWheel />},
            {path : 'notify', element : <PopUpBannerPage />},
          ]
        }

      ],
    }
  
  ]);
}
