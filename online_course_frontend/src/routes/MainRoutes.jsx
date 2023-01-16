import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Courses } from "../Pages/Courses/Courses";
import Login from "../Pages/Auth/Login";
import { Register } from "../Pages/Auth/Register";
import { ForgetPassword } from "../Pages/Auth/ForgetPassword";
import { ResetPassword } from "../Pages/Auth/ResetPassword";
import { Contact } from "../Pages/Contact/Contact";
import { Request } from "../Pages/Request_Course/Request";
import { About } from "../Pages/About/About";
import { NotFound } from "../components/NotFound";
import { Subscribe } from "../Pages/Payment/Subscribe";
import { PaymentFail } from "../Pages/Payment/PaymentFail";
import { PaymentSucess } from "../Pages/Payment/PaymentSucess";
import { CoursePage } from "../Pages/CoursePage/CoursePage";
export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/courses/:id" element={<CoursePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/resetpassword/:token" element={<ResetPassword />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/request" element={<Request />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/subscribe" element={<Subscribe />}></Route>
        <Route path="/paymentfail" element={<PaymentFail />}></Route>
        <Route path="/paymentsucess" element={<PaymentSucess />}></Route>
      </Routes>
    </>
  );
};
