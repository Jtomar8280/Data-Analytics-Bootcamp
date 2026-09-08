import { useMemo, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";

const liveClassesData = [
  {
    id: 1,
    title: "Advanced SQL — Window Functions",
    week: "Week 6",
    day: "Day 6",
    instructor: "Data Analytics Team",
    date: "Aug 26, 2026",
    time: "10:00 AM",
    duration: "90 min",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Power BI — DAX Fundamentals",
    week: "Week 8",
    day: "Day 2",
    instructor: "Data Analytics Team",
    date: "Aug 27, 2026",
    time: "11:00 AM",
    duration: "90 min",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Python Functions Workshop",
    week: "Week 9",
    day: "Day 5",
    instructor: "Data Analytics Team",
    date: "Aug 28, 2026",
    time: "10:00 AM",
    duration: "120 min",
    status: "Upcoming",
  },
  {
    id: 4,
    title: "Pandas EDA Workshop",
    week: "Week 10",
    day: "Day 7",
    instructor: "Data Analytics Team",
    date: "Aug 22, 2026",
    time: "11:00 AM",
    duration: "120 min",
    status: "Completed",
  },
  {
    id: 5,
    title: "Mock Interview Session",
    week: "Week 12",
    day: "Day 6",
    instructor: "Placement Team",
    date: "Aug 30, 2026",
    time: "2:00 PM",
    duration: "60 min",
    status: "Upcoming",
  },
];

function LiveClasses() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredClasses = useMemo(() => {
    return liveClassesData.filter((liveClass) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        liveClass.title.toLowerCase().includes(searchValue) ||
        liveClass.instructor.toLowerCase().includes(searchValue) ||
        liveClass.week.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || liveClass.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <AdminLayout>
      <div className="admin-live-classes">
        <div className="admin-page-header live-class-page-header">
          <div>
            <span>Management</span>

            <h2>Live Classes</h2>

            <p>Manage instructor-led sessions, schedules and class status.</p>
          </div>

          <button type="button" className="admin-primary-btn">
            + Add Live Class
          </button>
        </div>

        <div className="live-class-summary">
          <div className="admin-stat-card">
            <span>Total Sessions</span>
            <h3>{liveClassesData.length}</h3>
          </div>

          <div className="admin-stat-card">
            <span>Upcoming</span>
            <h3>
              {
                liveClassesData.filter((item) => item.status === "Upcoming")
                  .length
              }
            </h3>
          </div>

          <div className="admin-stat-card">
            <span>Completed</span>
            <h3>
              {
                liveClassesData.filter((item) => item.status === "Completed")
                  .length
              }
            </h3>
          </div>

          <div className="admin-stat-card">
            <span>Instructors</span>
            <h3>
              {new Set(liveClassesData.map((item) => item.instructor)).size}
            </h3>
          </div>
        </div>

        <div className="live-classes-panel">
          <div className="live-classes-toolbar">
            <div className="live-class-search">
              <input
                type="text"
                placeholder="Search classes..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <div className="live-class-filter">
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option value="All">All Status</option>

                <option value="Upcoming">Upcoming</option>

                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="live-classes-table-wrapper">
            <table className="live-classes-table">
              <thead>
                <tr>
                  <th>Session</th>
                  <th>Week</th>
                  <th>Day</th>
                  <th>Instructor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredClasses.length > 0 ? (
                  filteredClasses.map((liveClass) => (
                    <tr key={liveClass.id}>
                      <td>
                        <div className="live-class-name">
                          <div className="live-class-icon">LC</div>

                          <strong>{liveClass.title}</strong>
                        </div>
                      </td>

                      <td>{liveClass.week}</td>

                      <td>{liveClass.day}</td>

                      <td>{liveClass.instructor}</td>

                      <td>{liveClass.date}</td>

                      <td>{liveClass.time}</td>

                      <td>{liveClass.duration}</td>

                      <td>
                        <span
                          className={`live-class-status ${liveClass.status.toLowerCase()}`}
                        >
                          {liveClass.status}
                        </span>
                      </td>

                      <td>
                        <div className="live-class-actions">
                          <button
                            type="button"
                            className="live-class-action-btn"
                          >
                            View
                          </button>

                          <button
                            type="button"
                            className="live-class-action-btn"
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="live-classes-empty">
                      No live classes found.
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

export default LiveClasses;
