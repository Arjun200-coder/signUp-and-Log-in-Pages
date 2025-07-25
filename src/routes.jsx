import { Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { ForgotPasswordPage, ResetPasswordPage, LoginPage, RegisterPage } from './pages/Auth';
import { AboutUsPage } from './pages/AboutUs';
import { BlogPage } from './pages/Blog';
import { ContactUsPage } from './pages/ContactUs';
import { HomePage } from './pages/Home';
import { ProductsPage } from './pages/Products';
import { ServicesPage } from './pages/Services';
import { PublicLayoutPage } from './layout';

function AppRoutes() {
  return (
    <Suspense fallback={<div className="text-black">loading...</div>}>
      <Routes>
        <Route element={<PublicLayoutPage />}>
          <Route path="Login" element={<LoginPage />} />
          <Route path="Register" element={<RegisterPage />} />
          <Route path="Forgot-password" element={<ForgotPasswordPage />} />
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
