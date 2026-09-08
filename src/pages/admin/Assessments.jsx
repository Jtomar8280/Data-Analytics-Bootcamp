import { useMemo, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import courseData from "../../data/courseData";

const assessmentsData = [
  {
    id: 1,
    title: "Week 2 Excel Lookup Challenge",
    week: "Week 2",
    day: "Day 6",
    type: "Practical",
    status: "Published",
  },
  {
    id: 2,
    title: "Week 5 SQL Practice",
    week: "Week 5",
    day: "Day 7",
    type: "Technical",
    status: "Published",
  },
  {
    id: 3,
    title: "Week 8 Business Performance Dashboard",
    week: "Week 8",
    day: "Day 7",
    type: "Project",
    status: "Draft",
  },
  {
    id: 4,
    title: "Week 10 Python EDA Project",
    week: "Week 10",
    day: "Day 7",
    type: "Project",
    status: "Published",
  },
  {
    id: 5,
    title: "Week 12 Mock Interview",
    week: "Week 12",
    day: "Day 6",
    type: "Interview",
    status: "Published",
  },
];

function Assessments() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredAssessments = useMemo(() => {
    return assessmentsData.filter((assessment) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        assessment.title.toLowerCase().includes(searchValue) ||
        assessment.week.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || assessment.status === statusFilter;

      const matchesType =
        typeFilter === "All" || assessment.type === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [search, statusFilter, typeFilter]);

  return (
    <AdminLayout>
      <div className="admin-assessments">
        <div className="admin-page-header assessment-page-header">
          <div>
            <span>Management</span>

            <h2>Assessments</h2>

            <p>
              Manage quizzes, practical tasks, projects and interview
              assessments.
            </p>
          </div>

          <button type="button" className="admin-primary-btn">
            + Add Assessment
          </button>
        </div>

        <div className="assessment-summary">
          <div className="admin-stat-card">
            <span>Total Assessments</span>

            <h3>{assessmentsData.length}</h3>
          </div>

          <div className="admin-stat-card">
            <span>Published</span>

            <h3>
              {
                assessmentsData.filter(
                  (assessment) => assessment.status === "Published",
                ).length
              }
            </h3>
          </div>

          <div className="admin-stat-card">
            <span>Drafts</span>

            <h3>
              {
                assessmentsData.filter(
                  (assessment) => assessment.status === "Draft",
                ).length
              }
            </h3>
          </div>

          <div className="admin-stat-card">
            <span>Weeks Covered</span>

            <h3>{courseData.length}</h3>
          </div>
        </div>

        <div className="assessments-panel">
          <div className="assessments-toolbar">
            <div className="assessment-search">
              <input
                type="text"
                placeholder="Search assessments..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <div className="assessment-filters">
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option value="All">All Status</option>

                <option value="Published">Published</option>

                <option value="Draft">Draft</option>
              </select>

              <select
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value)}
              >
                <option value="All">All Types</option>

                <option value="Technical">Technical</option>

                <option value="Practical">Practical</option>

                <option value="Project">Project</option>

                <option value="Interview">Interview</option>
              </select>
            </div>
          </div>

          <div className="assessments-table-wrapper">
            <table className="assessments-table">
              <thead>
                <tr>
                  <th>Assessment</th>
                  <th>Week</th>
                  <th>Day</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredAssessments.length > 0 ? (
                  filteredAssessments.map((assessment) => (
                    <tr key={assessment.id}>
                      <td>
                        <div className="assessment-name">
                          <div className="assessment-icon">AS</div>

                          <strong>{assessment.title}</strong>
                        </div>
                      </td>

                      <td>{assessment.week}</td>

                      <td>{assessment.day}</td>

                      <td>
                        <span
                          className={`assessment-type ${assessment.type.toLowerCase()}`}
                        >
                          {assessment.type}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`assessment-status ${assessment.status.toLowerCase()}`}
                        >
                          {assessment.status}
                        </span>
                      </td>

                      <td>
                        <div className="assessment-actions">
                          <button
                            type="button"
                            className="assessment-action-btn"
                          >
                            View
                          </button>

                          <button
                            type="button"
                            className="assessment-action-btn"
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="assessments-empty">
                      No assessments found.
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

export default Assessments;
