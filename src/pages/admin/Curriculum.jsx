import { useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import courseData from "../../data/courseData";

function Curriculum() {
  const [curriculum, setCurriculum] = useState(courseData);
  const [selectedWeekId, setSelectedWeekId] = useState(courseData[0].id);
  const [selectedDayId, setSelectedDayId] = useState(courseData[0].days[0].id);
  const [editing, setEditing] = useState(false);

  const selectedWeek =
    curriculum.find((week) => week.id === selectedWeekId) || curriculum[0];

  const selectedDay =
    selectedWeek.days.find((day) => day.id === selectedDayId) ||
    selectedWeek.days[0];

  const handleWeekChange = (week) => {
    setSelectedWeekId(week.id);
    setSelectedDayId(week.days[0]?.id || null);
    setEditing(false);
  };

  const handleDayChange = (day) => {
    setSelectedDayId(day.id);
    setEditing(false);
  };

  const updateDayField = (field, value) => {
    setCurriculum((current) =>
      current.map((week) => {
        if (week.id !== selectedWeek.id) {
          return week;
        }

        return {
          ...week,
          days: week.days.map((day) =>
            day.id === selectedDay.id
              ? {
                  ...day,
                  [field]: value,
                }
              : day,
          ),
        };
      }),
    );
  };

  const updateDayListItem = (field, index, value) => {
    const currentItems = selectedDay[field] || [];

    const updatedItems = [...currentItems];
    updatedItems[index] = value;

    updateDayField(field, updatedItems);
  };

  const addDayListItem = (field) => {
    const currentItems = selectedDay[field] || [];

    updateDayField(field, [...currentItems, ""]);
  };

  const removeDayListItem = (field, index) => {
    const currentItems = selectedDay[field] || [];

    updateDayField(
      field,
      currentItems.filter((_, itemIndex) => itemIndex !== index),
    );
  };

  const handleSave = () => {
    setEditing(false);
  };

  const renderEditableList = (field, title) => {
    const items = selectedDay[field] || [];

    return (
      <section className="curriculum-block curriculum-editor-block">
        <div className="curriculum-block-header">
          <h4>{title}</h4>

          <button
            type="button"
            className="curriculum-add-btn"
            onClick={() => addDayListItem(field)}
          >
            + Add
          </button>
        </div>

        {items.length > 0 ? (
          <div className="curriculum-editor-list">
            {items.map((item, index) => (
              <div className="curriculum-editor-item" key={`${field}-${index}`}>
                <span className="curriculum-editor-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <input
                  type="text"
                  value={item}
                  onChange={(event) =>
                    updateDayListItem(field, index, event.target.value)
                  }
                />

                <button
                  type="button"
                  className="curriculum-remove-btn"
                  onClick={() => removeDayListItem(field, index)}
                  aria-label={`Remove ${title} item`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="curriculum-empty">No content added yet.</p>
        )}
      </section>
    );
  };

  return (
    <AdminLayout>
      <div className="admin-curriculum">
        <div className="admin-page-header curriculum-page-header">
          <div>
            <span>Management</span>

            <h2>Curriculum</h2>

            <p>
              Manage the 12-week Data Analytics Bootcamp curriculum and daily
              learning content.
            </p>
          </div>
        </div>

        <div className="curriculum-layout">
          <aside className="curriculum-weeks">
            <div className="curriculum-sidebar-header">
              <span>Course</span>

              <h3>Data Analytics Bootcamp</h3>
            </div>

            <div className="curriculum-week-list">
              {curriculum.map((week) => (
                <button
                  type="button"
                  key={week.id}
                  className={selectedWeek.id === week.id ? "active" : ""}
                  onClick={() => handleWeekChange(week)}
                >
                  <span>{week.week}</span>

                  <strong>{week.title}</strong>
                </button>
              ))}
            </div>
          </aside>

          <section className="curriculum-content">
            <div className="curriculum-header">
              <div>
                <span>{selectedWeek.week}</span>

                <h3>{selectedWeek.title}</h3>

                <p>{selectedWeek.description}</p>
              </div>

              {!editing && (
                <button
                  type="button"
                  className="admin-primary-btn"
                  onClick={() => setEditing(true)}
                >
                  Edit Curriculum
                </button>
              )}

              {editing && (
                <div className="curriculum-header-actions">
                  <button
                    type="button"
                    className="curriculum-cancel-btn"
                    onClick={() => setEditing(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="admin-primary-btn"
                    onClick={handleSave}
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            <div className="curriculum-deliverable">
              <span>Final Deliverable</span>

              <strong>{selectedWeek.deliverable}</strong>
            </div>

            <div className="curriculum-days">
              <div className="curriculum-day-list">
                <h4>Learning Plan</h4>

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

              <div className="curriculum-day-content">
                <div className="curriculum-day-header">
                  <span>Day {selectedDay.id}</span>

                  {editing ? (
                    <input
                      type="text"
                      className="curriculum-title-input"
                      value={selectedDay.title}
                      onChange={(event) =>
                        updateDayField("title", event.target.value)
                      }
                    />
                  ) : (
                    <h3>{selectedDay.title}</h3>
                  )}
                </div>

                {editing ? (
                  <>
                    {renderEditableList("learn", "Self Learning")}

                    {renderEditableList(
                      "businessApplication",
                      "Business Application",
                    )}

                    {renderEditableList(
                      "practicalActivity",
                      "Practical Activity",
                    )}

                    <section className="curriculum-block curriculum-editor-block">
                      <h4>Expected Outcome</h4>

                      <textarea
                        rows="5"
                        value={selectedDay.outcome || ""}
                        onChange={(event) =>
                          updateDayField("outcome", event.target.value)
                        }
                      />
                    </section>
                  </>
                ) : (
                  <>
                    <section className="curriculum-block">
                      <h4>Self Learning</h4>

                      {selectedDay.learn?.length > 0 ? (
                        <ul>
                          {selectedDay.learn.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="curriculum-empty">
                          No self-learning content available.
                        </p>
                      )}
                    </section>

                    <section className="curriculum-block">
                      <h4>Business Application</h4>

                      {selectedDay.businessApplication?.length > 0 ? (
                        <ul>
                          {selectedDay.businessApplication.map(
                            (item, index) => (
                              <li key={index}>{item}</li>
                            ),
                          )}
                        </ul>
                      ) : (
                        <p className="curriculum-empty">
                          No business application content available.
                        </p>
                      )}
                    </section>

                    <section className="curriculum-block">
                      <h4>Practical Activity</h4>

                      {selectedDay.practicalActivity?.length > 0 ? (
                        <ul>
                          {selectedDay.practicalActivity.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="curriculum-empty">
                          No practical activity available.
                        </p>
                      )}
                    </section>

                    <section className="curriculum-block">
                      <h4>Expected Outcome</h4>

                      {selectedDay.outcome ? (
                        <p>{selectedDay.outcome}</p>
                      ) : (
                        <p className="curriculum-empty">
                          No outcome available.
                        </p>
                      )}
                    </section>
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Curriculum;
