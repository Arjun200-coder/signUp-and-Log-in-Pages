import React, { Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import {
  ProductsPage, HomePage, ContactUsPage,ServicesPage, BlogPage,
  AboutUsPage, LoginPage, RegisterPage, ResetPasswordPage, ForgetPasswordPage
} from './pages/About Us';

import { AuthLayoutPage, ProductLayoutPage, PublicLayoutPage } from './layout/AuthLayout';

function AppRoutes() {
  return (
    <Suspense fallback={<div className="text-black">loading...</div>}>
      <Routes>
        <Route element={<PublicLayoutPage />}>
          <Route path="Login" element={<LoginPage />} />
          <Route path="Register" element={<RegisterPage />} />
          <Route path="Forgot-password" element={<ForgetPasswordPage />} />
          <Route path="Reset-password" element={<ResetPasswordPage />} />
        </Route>

        <Route element={<PublicLayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about_us_page" element={<AboutUsPage />} />
          <Route path="/product_page" element={<ProductsPage />} />
          <Route path="/blog_page" element={<BlogPage />} />
          <Route path="/contact_us_page" element={<ContactUsPage />} />
          <Route path="/services_page" element={<ServicesPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
