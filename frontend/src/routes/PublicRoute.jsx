// react modules imnport
import React from "react";

// packages import
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

//pages import

import Sidebar from "../components/Student/Sidebar";
import SidebarInstructor from "../components/Instructor/SidebarInstructor";
import Dashboard from "../pages/app/dashboard/Dashboard";
import DashboardInstructor from "../pages/app/dashboard/DashboardInstructor";
import CodeEditor from "../pages/app/Editor/CodeEditor";
import Certificate from "../pages/app/certifications/Certificate";
import LandingPage from "../pages/app/starter/LandingPage";
import ExploreCourses from "../pages/app/Learner/courses/ExploreCourses";
import CourseDetails from "../pages/app/Learner/courses/CourseDetails";
import MyCourses from "../pages/app/Learner/courses/MyCourses";
import SingleCourse from "../pages/app/Learner/courses/SingleCourse";
import Register from "../pages/app/(auth)/Learner/Register";
import Login from "../pages/app/(auth)/Learner/Login";
import LoginInstructor from "../pages/app/(auth)/Instructor/LoginInstructor";
import RegisterInstructor from "../pages/app/(auth)/Instructor/RegisterInstructor";
import InstructorHome from "../pages/app/Instructor/InstructorHome";
import HomeStudent from "../pages/app/Learner/HomeStudent";
import NoPerson from "../Proctor/NoPerson";
import Eye from "../Proctor/Eye";
import Candidate from "../Proctor/Candidate";
import Proctor from "../Proctor/Proctor";
const PublicRoute = () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        {/* {!["/", "/student/account/login", "/student/account/register"].includes(
          window.location.pathname
        ) && <Sidebar />} */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* student */}
          <Route exact path="/student/account/login" element={<Login />} />
          <Route
            exact
            path="/student/account/register"
            element={<Register />}
          />
          <Route
            exact
            path="/student/dashboard"
            element={
              <>
                <Sidebar />
                <Dashboard />
              </>
            }
          />
          <Route
            exact
            path="/student/code-editor"
            element={
              <>
                <Sidebar />
                <CodeEditor />
              </>
            }
          />
          <Route
            exact
            path="/student/certificate"
            element={
              <>
                <Sidebar />
                <Certificate />
              </>
            }
          />
          <Route
            exact
            path="/student/explore-courses"
            element={
              <>
                <Sidebar />
                <ExploreCourses />
              </>
            }
          />
          <Route
            exact
            path="/student/explore-courses/:id"
            element={
              <>
                <Sidebar />
                <CourseDetails />
              </>
            }
          />
          <Route
            exact
            path="/student/my-courses"
            element={
              <>
                <Sidebar />
                <MyCourses />
              </>
            }
          />
          <Route
            exact
            path="/student/my-courses/:myCourseId"
            element={
              <>
                <Sidebar />
                <SingleCourse />
              </>
            }
          />
          <Route
            exact
            path="/student/home"
            element={
              <>
                <Sidebar />
                <HomeStudent />
              </>
            }
          />
          {/* for the instructors  */}
          <Route
            exact
            path="/instructor/account/login"
            element={
              <>
                {/* <SingleCourse /> */}
                <LoginInstructor />
              </>
            }
          />
          <Route
            exact
            path="/instructor/account/register"
            element={
              <>
                {/* <SingleCourse /> */}

                <RegisterInstructor />
              </>
            }
          />
          <Route
            exact
            path="/instructor/dashboard"
            element={
              <>
                <SidebarInstructor />
                <DashboardInstructor />
              </>
            }
          />
          <Route
            exact
            path="/instructor/Home"
            element={
              <>
                <SidebarInstructor />
                <InstructorHome />
              </>
            }
          />
          <Route
            exact
            path="/no-person"
            element={
              <>
                {/* <SidebarInstructor />
                <InstructorHome /> */}

                <NoPerson />
              </>
            }
          />
          <Route
            exact
            path="/eye"
            element={
              <>
                {/* <SidebarInstructor />
                <InstructorHome /> */}

                <Eye />
              </>
            }
          />
          // PROCTORING
          <Route
            exact
            path="/candidate"
            element={
              <>
                {/* <SidebarInstructor />
                <InstructorHome /> */}

                <Candidate />
              </>
            }
          />
          <Route
            exact
            path="/proctor"
            element={
              <>
                {/* <SidebarInstructor />
                <InstructorHome /> */}

                <Proctor />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
};
export default PublicRoute;
