import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        <span>Admin Panel</span>
        <h2>Data Analytics</h2>
      </div>

      <nav className="admin-navigation">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/students"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Students
        </NavLink>

        <NavLink
          to="/admin/courses"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Courses
        </NavLink>

        <NavLink
          to="/admin/curriculum"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Curriculum
        </NavLink>

        <NavLink
          to="/admin/assessments"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Assessments
        </NavLink>

        <NavLink
          to="/admin/live-classes"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Live Classes
        </NavLink>

        <NavLink
          to="/admin/progress"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Progress
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default AdminSidebar;