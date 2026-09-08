import { useMemo, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import courseData from "../../data/courseData";

const coursesData = [
  {
    id: 1,
    name: "Data Analytics Bootcamp",
    category: "Data Analytics",
    duration: "12 Weeks",
    students: 0,
    status: "Published",
    created: "Aug 2026",
  },
];

function Courses() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        course.name.toLowerCase().includes(searchValue) ||
        course.category.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || course.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <AdminLayout>
      <div className="admin-courses">
        <div className="admin-page-header course-page-header">
          <div>
            <span>Management</span>

            <h2>Courses</h2>

            <p>Manage courses, enrollment and publishing status.</p>
          </div>

          <button type="button" className="admin-primary-btn">
            + Add Course
          </button>
        </div>

        <div className="course-summary">
          <div className="admin-stat-card">
            <span>Total Courses</span>
            <h3>{coursesData.length}</h3>
          </div>

          <div className="admin-stat-card">
            <span>Published</span>
            <h3>
              {
                coursesData.filter((course) => course.status === "Published")
                  .length
              }
            </h3>
          </div>

          <div className="admin-stat-card">
            <span>Total Students</span>
            <h3>
              {coursesData.reduce(
                (total, course) => total + course.students,
                0,
              )}
            </h3>
          </div>

          <div className="admin-stat-card">
            <span>Weeks Available</span>
            <h3>{courseData.length}</h3>
          </div>
        </div>

        <div className="courses-panel">
          <div className="courses-toolbar">
            <div className="course-search">
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <div className="course-filter">
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option value="All">All Status</option>

                <option value="Published">Published</option>

                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>

          <div className="courses-table-wrapper">
            <table className="courses-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Category</th>
                  <th>Duration</th>
                  <th>Students</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <tr key={course.id}>
                      <td>
                        <div className="course-name">
                          <div className="course-icon">DA</div>

                          <strong>{course.name}</strong>
                        </div>
                      </td>

                      <td>{course.category}</td>

                      <td>{course.duration}</td>

                      <td>{course.students}</td>

                      <td>
                        <span
                          className={`course-status ${course.status.toLowerCase()}`}
                        >
                          {course.status}
                        </span>
                      </td>

                      <td>{course.created}</td>

                      <td>
                        <div className="course-actions">
                          <button type="button" className="course-action-btn">
                            View
                          </button>

                          <button type="button" className="course-action-btn">
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="courses-empty">
                      No courses found.
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

export default Courses;
