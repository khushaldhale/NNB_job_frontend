import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import JobsContainer from "./components/jobs/JobsContainer";
import AddJobs from "./components/jobs/AddJobs";
import Application from "./components/applications/Application";
import Header from "./components/common/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import NoFound from "./components/NoFound";
import ParticularJob from "./components/jobs/particularJob/ParticularJob";
import Register from "./pages/Register";
import Home from "./pages/Home";
import UpdateJob from "./components/jobs/UpdateJob";
import AppliedJobs from "./components/jobs/appliedJobs/AppliedJobs";
import { ToastContainer, toast } from "react-toastify";
import FilterApplications from "./components/applications/filter/FilterApplications";

function App() {
  // protected routes as   for admin and  for  user also
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/* open routes */}
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* authenticated routes  */}
        <Route path="/dashboard" element={<DashBoard />}>
          <>
            <Route
              path="jobs"
              element={
                <ProtectedRoute adminRoute={true} noAuthorization={true}>
                  <JobsContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="jobs/applications"
              element={
                <ProtectedRoute adminRoute={true}>
                  <JobsContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="jobs/:id/applications"
              element={
                <ProtectedRoute adminRoute={true}>
                  <Application />
                </ProtectedRoute>
              }
            />

            <Route
              path="jobs/:id/applications/filter"
              element={
                <ProtectedRoute adminRoute={true}>
                  <FilterApplications></FilterApplications>
                </ProtectedRoute>
              }
            />

            <Route
              path="jobs/create"
              element={
                <ProtectedRoute adminRoute={true}>
                  <AddJobs />
                </ProtectedRoute>
              }
            />
            <Route
              path="jobs/:id/update"
              element={
                <ProtectedRoute adminRoute={true}>
                  <UpdateJob />
                </ProtectedRoute>
              }
            />

            <Route
              path="jobs/:id"
              element={
                <ProtectedRoute adminRoute={true}>
                  <ParticularJob></ParticularJob>
                </ProtectedRoute>
              }
            />

            <Route
              path="jobs/applied"
              element={
                <ProtectedRoute adminRoute={false}>
                  <AppliedJobs></AppliedJobs>
                </ProtectedRoute>
              }
            />
          </>
        </Route>

        {/* Route for No URL */}
        <Route path="*" element={<NoFound></NoFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
