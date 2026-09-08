import { useMemo, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";

const studentsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    course: "Data Analytics Bootcamp",
    progress: 82,
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    course: "Data Analytics Bootcamp",
    progress: 64,
    status: "Active",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@example.com",
    course: "Data Analytics Bootcamp",
    progress: 100,
    status: "Completed",
  },
  {
    id: 4,
    name: "Neha Verma",
    email: "neha@example.com",
    course: "Data Analytics Bootcamp",
    progress: 38,
    status: "Active",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    email: "arjun@example.com",
    course: "Data Analytics Bootcamp",
    progress: 12,
    status: "Inactive",
  },
];

function Students() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredStudents = useMemo(() => {
    return studentsData.filter((student) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        student.name.toLowerCase().includes(searchValue) ||
        student.email.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" ||
        student.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <AdminLayout>
      <div className="admin-students">

        <div className="admin-page-header">
          <span>Management</span>

          <h2>Students</h2>

          <p>
            Manage students, enrollment status and
            course progress.
          </p>
        </div>


        <div className="student-summary">

          <div className="admin-stat-card">
            <span>Total Students</span>
            <h3>{studentsData.length}</h3>
          </div>

          <div className="admin-stat-card">
            <span>Active</span>
            <h3>
              {
                studentsData.filter(
                  (student) => student.status === "Active"
                ).length
              }
            </h3>
          </div>

          <div className="admin-stat-card">
            <span>Completed</span>
            <h3>
              {
                studentsData.filter(
                  (student) => student.status === "Completed"
                ).length
              }
            </h3>
          </div>

          <div className="admin-stat-card">
            <span>Inactive</span>
            <h3>
              {
                studentsData.filter(
                  (student) => student.status === "Inactive"
                ).length
              }
            </h3>
          </div>

        </div>


        <div className="students-panel">

          <div className="students-toolbar">

            <div className="student-search">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>


            <div className="student-filter">

              <select
                value={statusFilter}
                onChange={(event) =>
                  setStatusFilter(event.target.value)
                }
              >
                <option value="All">
                  All Status
                </option>

                <option value="Active">
                  Active
                </option>

                <option value="Completed">
                  Completed
                </option>

                <option value="Inactive">
                  Inactive
                </option>
              </select>

            </div>

          </div>


          <div className="students-table-wrapper">

            <table className="students-table">

              <thead>
                <tr>
                  <th>Student</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Progress</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (

                    <tr key={student.id}>

                      <td>
                        <div className="student-name">
                          <div className="student-avatar">
                            {student.name.charAt(0)}
                          </div>

                          <strong>
                            {student.name}
                          </strong>
                        </div>
                      </td>

                      <td>
                        {student.email}
                      </td>

                      <td>
                        {student.course}
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

                          <span>
                            {student.progress}%
                          </span>

                        </div>
                      </td>

                      <td>
                        <span
                          className={`student-status ${student.status.toLowerCase()}`}
                        >
                          {student.status}
                        </span>
                      </td>

                      <td>
                        <button
                          type="button"
                          className="student-action-btn"
                        >
                          View
                        </button>
                      </td>

                    </tr>

                  ))
                ) : (

                  <tr>
                    <td
                      colSpan="6"
                      className="students-empty"
                    >
                      No students found.
                    </td>
                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Students;