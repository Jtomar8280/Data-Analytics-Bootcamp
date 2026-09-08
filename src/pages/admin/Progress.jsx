import { useMemo, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import courseData from "../../data/courseData";

const totalLessons = courseData.reduce(
  (total, week) => total + week.days.length,
  0,
);

const progressData = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    currentWeek: 8,
    completedLessons: 42,
    progress: 50,
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    currentWeek: 10,
    completedLessons: 61,
    progress: 73,
    status: "On Track",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@example.com",
    currentWeek: 12,
    completedLessons: 84,
    progress: 100,
    status: "Completed",
  },
  {
    id: 4,
    name: "Neha Verma",
    email: "neha@example.com",
    currentWeek: 5,
    completedLessons: 24,
    progress: 29,
    status: "At Risk",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    email: "arjun@example.com",
    currentWeek: 3,
    completedLessons: 17,
    progress: 20,
    status: "At Risk",
  },
];

const weekProgressData = [92, 84, 71, 66, 61, 58, 54, 49, 44, 39, 35, 28];

function Progress() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredStudents = useMemo(() => {
    return progressData.filter((student) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        student.name.toLowerCase().includes(searchValue) ||
        student.email.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || student.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const averageProgress = Math.round(
    progressData.reduce((total, student) => total + student.progress, 0) /
      progressData.length,
  );

  const completedStudents = progressData.filter(
    (student) => student.progress === 100,
  ).length;

  const atRiskStudents = progressData.filter(
    (student) => student.status === "At Risk",
  ).length;

  return (
    <AdminLayout>
      <div className="admin-progress">
        <div className="admin-page-header progress-page-header">
          <div>
            <span>Analytics</span>

            <h2>Progress Analytics</h2>

            <p>
              Monitor student progress across the 12-week Data Analytics
              Bootcamp.
            </p>
          </div>
        </div>

        <div className="progress-summary">
          <div className="admin-stat-card">
            <span>Total Students</span>
            <h3>{progressData.length}</h3>
          </div>

          <div className="admin-stat-card">
            <span>Average Progress</span>
            <h3>{averageProgress}%</h3>
          </div>

          <div className="admin-stat-card">
            <span>Completed</span>
            <h3>{completedStudents}</h3>
          </div>

          <div className="admin-stat-card">
            <span>At Risk</span>
            <h3>{atRiskStudents}</h3>
          </div>
        </div>

        <div className="progress-layout">
          <section className="progress-panel">
            <div className="progress-panel-header">
              <div>
                <h3>Student Progress</h3>

                <p>{totalLessons} lessons available across the program.</p>
              </div>
            </div>

            <div className="progress-toolbar">
              <div className="progress-search">
                <input
                  type="text"
                  placeholder="Search students..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>

              <div className="progress-filter">
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                >
                  <option value="All">All Status</option>

                  <option value="On Track">On Track</option>

                  <option value="Active">Active</option>

                  <option value="Completed">Completed</option>

                  <option value="At Risk">At Risk</option>
                </select>
              </div>
            </div>

            <div className="progress-table-wrapper">
              <table className="progress-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Current Week</th>
                    <th>Lessons</th>
                    <th>Progress</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                      <tr key={student.id}>
                        <td>
                          <div className="progress-student">
                            <div className="progress-avatar">
                              {student.name.charAt(0)}
                            </div>

                            <div>
                              <strong>{student.name}</strong>

                              <span>{student.email}</span>
                            </div>
                          </div>
                        </td>

                        <td>Week {student.currentWeek}</td>

                        <td>
                          {student.completedLessons} / {totalLessons}
                        </td>

                        <td>
                          <div className="progress-cell">
                            <div className="progress-bar">
                              <div
                                className="progress-fill"
                                style={{
                                  width: `${student.progress}%`,
                                }}
                              />
                            </div>

                            <span>{student.progress}%</span>
                          </div>
                        </td>

                        <td>
                          <span
                            className={`progress-status ${student.status
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {student.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="progress-empty">
                        No students found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section className="progress-panel">
            <div className="progress-panel-header">
              <div>
                <h3>12-Week Progress Overview</h3>

                <p>Average learner progress by week.</p>
              </div>
            </div>

            <div className="weekly-progress-list">
              {weekProgressData.map((progress, index) => (
                <div className="weekly-progress-item" key={index}>
                  <div className="weekly-progress-label">
                    <span>Week {index + 1}</span>

                    <strong>{progress}%</strong>
                  </div>

                  <div className="weekly-progress-bar">
                    <div
                      className="weekly-progress-fill"
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Progress;
