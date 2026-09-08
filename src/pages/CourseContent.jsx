import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import courseData from "../data/courseData";

function CourseContent() {
  const navigate = useNavigate();
  const { weekId, dayId } = useParams();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePath, setActivePath] = useState("self-learning");

  const urlWeek = courseData.find((week) => week.id === Number(weekId));

  const urlDay = urlWeek?.days.find((day) => day.id === Number(dayId));

  const selectedWeek = urlWeek || courseData[0];
  const selectedDay = urlDay || selectedWeek.days[0];

  useEffect(() => {
    const firstWeek = courseData[0];
    const firstDay = firstWeek.days[0];

    if (!weekId || !dayId) {
      navigate(`/course/content/week/${firstWeek.id}/day/${firstDay.id}`, {
        replace: true,
      });
      return;
    }

    if (!urlWeek) {
      navigate(`/course/content/week/${firstWeek.id}/day/${firstDay.id}`, {
        replace: true,
      });
      return;
    }

    if (!urlDay) {
      navigate(`/course/content/week/${urlWeek.id}/day/${urlWeek.days[0].id}`, {
        replace: true,
      });
    }
  }, [weekId, dayId, urlWeek, urlDay, navigate]);

  const handleWeekChange = (week) => {
    const firstDay = week.days?.[0];

    if (!firstDay) {
      return;
    }

    navigate(`/course/content/week/${week.id}/day/${firstDay.id}`);
  };

  const handleDayChange = (day) => {
    navigate(`/course/content/week/${selectedWeek.id}/day/${day.id}`);
  };

  return (
    <main
      className={`course-content-page ${
        sidebarOpen ? "sidebar-open" : "sidebar-collapsed"
      }`}
    >
      <aside className="course-sidebar">
        <button
          type="button"
          className="sidebar-toggle"
          onClick={() => setSidebarOpen((current) => !current)}
          aria-label={
            sidebarOpen
              ? "Collapse course navigation"
              : "Expand course navigation"
          }
        >
          {sidebarOpen ? "←" : "→"}
        </button>

        {sidebarOpen && (
          <>
            <div className="sidebar-header">
              <span>Course</span>
              <h2>Data Analytics</h2>
            </div>

            <div className="week-navigation">
              {courseData.map((week) => (
                <button
                  type="button"
                  key={week.id}
                  className={selectedWeek.id === week.id ? "active" : ""}
                  onClick={() => handleWeekChange(week)}
                >
                  <span className="week-number">{week.week}</span>

                  <strong className="week-title">{week.title}</strong>
                </button>
              ))}
            </div>
          </>
        )}
      </aside>

      <aside className="learning-sidebar">
        <div className="learning-sidebar-header">
          <span>{selectedWeek.week}</span>

          <h2>{selectedWeek.title}</h2>
        </div>

        <div className="day-navigation">
          <h3>Learning Plan</h3>

          <div className="day-buttons">
            {selectedWeek.days.map((day) => (
              <button
                type="button"
                key={day.id}
                className={selectedDay.id === day.id ? "active" : ""}
                onClick={() => handleDayChange(day)}
              >
                <span>Day {day.id}</span>

                <strong>{day.title}</strong>
              </button>
            ))}
          </div>
        </div>

        <div className="learning-mode-navigation">
          <h3>Learning Path</h3>

          <button
            type="button"
            className={activePath === "self-learning" ? "active" : ""}
            onClick={() => setActivePath("self-learning")}
          >
            📚 Self Learning
          </button>

          <button
            type="button"
            className={activePath === "live-classes" ? "active" : ""}
            onClick={() => setActivePath("live-classes")}
          >
            🎓 Live Classes
          </button>

          <button
            type="button"
            className={activePath === "offline-classes" ? "active" : ""}
            onClick={() => setActivePath("offline-classes")}
          >
            🏫 Offline Classes
          </button>

          <button
            type="button"
            className={activePath === "assessments" ? "active" : ""}
            onClick={() => setActivePath("assessments")}
          >
            📝 Assessments
          </button>
        </div>
      </aside>

      <section className="course-main">
        <div className="course-main-header">
          <span>
            {selectedWeek.week} • Day {selectedDay.id}
          </span>

          <h1>{selectedDay.title}</h1>

          <p>{selectedWeek.description}</p>
        </div>

        <div className="lesson-content">
          <div className="lesson-heading">
            <span>
              {selectedWeek.week} • Day {selectedDay.id}
            </span>

            <h2>{selectedDay.title}</h2>
          </div>

          {activePath === "self-learning" && (
            <div className="content-section">
              <div className="section-title">
                <span className="section-icon">📚</span>

                <div>
                  <span className="section-label">Self Learning</span>

                  <h3>What you will learn</h3>
                </div>
              </div>

              {selectedDay.learn?.length > 0 ? (
                <div className="topic-list">
                  {selectedDay.learn.map((item, index) => (
                    <div className="topic-item" key={index}>
                      <span className="topic-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-state">
                  No self-learning topics are available for this session yet.
                </p>
              )}
            </div>
          )}

          {activePath === "live-classes" && (
            <div className="content-section">
              <div className="section-title">
                <span className="section-icon">🎓</span>

                <div>
                  <span className="section-label">Live Classes</span>

                  <h3>Business Application</h3>
                </div>
              </div>

              {selectedDay.businessApplication?.length > 0 ? (
                <div className="topic-list">
                  {selectedDay.businessApplication.map((item, index) => (
                    <div className="topic-item" key={index}>
                      <span className="topic-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-state">
                  Live class information for this session will be added to the
                  schedule.
                </p>
              )}
            </div>
          )}

          {activePath === "offline-classes" && (
            <div className="content-section">
              <div className="section-title">
                <span className="section-icon">🏫</span>

                <div>
                  <span className="section-label">Offline Classes</span>

                  <h3>Practical Activity</h3>
                </div>
              </div>

              {selectedDay.practicalActivity?.length > 0 ? (
                <div className="topic-list">
                  {selectedDay.practicalActivity.map((item, index) => (
                    <div className="topic-item" key={index}>
                      <span className="topic-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-state">
                  No practical activity has been added for this session yet.
                </p>
              )}
            </div>
          )}

          {activePath === "assessments" && (
            <div className="content-section">
              <div className="section-title">
                <span className="section-icon">📝</span>

                <div>
                  <span className="section-label">Assessment</span>

                  <h3>Expected Outcome</h3>
                </div>
              </div>

              {selectedDay.outcome ? (
                <div className="outcome-box">
                  <p>{selectedDay.outcome}</p>
                </div>
              ) : (
                <p className="empty-state">
                  Assessment information for this session will be added later.
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default CourseContent;
