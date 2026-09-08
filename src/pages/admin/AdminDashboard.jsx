import AdminLayout from "../../components/admin/AdminLayout";

function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="admin-dashboard">

        <div className="admin-page-header">
          <span>Overview</span>

          <h2>
            Welcome back, Administrator
          </h2>

          <p>
            Manage your Data Analytics Bootcamp
            from one place.
          </p>
        </div>


        <div className="admin-stats">

          <div className="admin-stat-card">
            <span>Total Students</span>
            <h3>0</h3>
          </div>

          <div className="admin-stat-card">
            <span>Active Courses</span>
            <h3>1</h3>
          </div>

          <div className="admin-stat-card">
            <span>Active Students</span>
            <h3>0</h3>
          </div>

          <div className="admin-stat-card">
            <span>Pending Assessments</span>
            <h3>0</h3>
          </div>

        </div>


        <div className="admin-dashboard-grid">

          <section className="admin-panel-card">
            <div className="admin-panel-header">
              <h3>Recent Students</h3>

              <button type="button">
                View All
              </button>
            </div>

            <div className="admin-empty-state">
              No student activity available yet.
            </div>
          </section>


          <section className="admin-panel-card">
            <div className="admin-panel-header">
              <h3>Course Overview</h3>

              <button type="button">
                Manage
              </button>
            </div>

            <div className="admin-empty-state">
              Course analytics will appear here.
            </div>
          </section>

        </div>

      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;