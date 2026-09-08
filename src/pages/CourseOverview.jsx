import React from "react";
import { Link } from "react-router-dom";

export default function CourseOverview() {

  return (
    <main className="course-overview">
      <section className="hero-section">
        <span className="course-badge">12 Week Program</span>

        <h1>Data Analytics Bootcamp</h1>

        <p>
          Build practical data analytics skills through structured learning,
          live classes, offline sessions, hands-on projects, and assessments.
          
        </p>

        <Link to="/course/content" className="course-content-btn">
          Explore Course Content
        </Link>
      </section>

      <section className="course-stats">
        <div className="stat-card">
          <h3>12</h3>
          <p>Weeks</p>
        </div>

        <div className="stat-card">
          <h3>Live</h3>
          <p>Instructor Classes</p>
        </div>

        <div className="stat-card">
          <h3>Offline</h3>
          <p>Practical Learning</p>
        </div>

        <div className="stat-card">
          <h3>Multiple</h3>
          <p>Assessments</p>
        </div>
      </section>

      <section className="overview-section">
        <h2>About the Program</h2>

        <p>
          This 12-week Data Analytics Bootcamp is designed to provide a
          structured learning path from fundamentals to practical analytics
          projects.
        </p>
      </section>

      <section className="learning-section">
        <h2>What You'll Learn</h2>

        <div className="learning-grid">
          <div className="learning-card">
            <h3>Excel</h3>
            <p>Data cleaning, analysis and visualization.</p>
          </div>

          <div className="learning-card">
            <h3>SQL</h3>
            <p>Query databases and extract meaningful insights.</p>
          </div>

          <div className="learning-card">
            <h3>Power BI</h3>
            <p>Create interactive dashboards and reports.</p>
          </div>

          <div className="learning-card">
            <h3>Python</h3>
            <p>Analyze and visualize data using Python.</p>
          </div>

          <div className="learning-card">
            <h3>Statistics</h3>
            <p>Understand statistical concepts for analytics.</p>
          </div>

          <div className="learning-card">
            <h3>Projects</h3>
            <p>Apply your skills to real-world datasets.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
