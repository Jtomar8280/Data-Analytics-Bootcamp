import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import CourseOverview from "./pages/CourseOverview";
import CourseContent from "./pages/CourseContent";

import AdminDashboard from "./pages/admin/AdminDashboard";
import Students from "./pages/admin/Students";
import Courses from "./pages/admin/Courses";
import Curriculum from "./pages/admin/Curriculum";
import Assessments from "./pages/admin/Assessments";
import LiveClasses from "./pages/admin/LiveClasses";
import Progress from "./pages/admin/Progress";

function AppContent() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className={isAdminRoute ? "admin-app" : "app"}>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<CourseOverview />} />

        <Route path="/course" element={<CourseOverview />} />

        <Route path="/course/content" element={<CourseContent />} />

        <Route
          path="/course/content/week/:weekId/day/:dayId"
          element={<CourseContent />}
        />

        <Route
          path="/admin"
          element={<Navigate to="/admin/dashboard" replace />}
        />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/admin/students" element={<Students />} />

        <Route path="/admin/courses" element={<Courses />} />

        <Route path="/admin/curriculum" element={<Curriculum />} />

        <Route path="/admin/assessments" element={<Assessments />} />

        <Route path="/admin/live-classes" element={<LiveClasses />} />

        <Route path="/admin/progress" element={<Progress />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
