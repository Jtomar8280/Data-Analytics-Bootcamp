function AdminNavbar() {
  return (
    <header className="admin-navbar">
      <div className="admin-navbar-left">
        <h1>Dashboard</h1>
      </div>

      <div className="admin-navbar-right">
        <span className="admin-user">
          Administrator
        </span>

        <button type="button">
          Logout
        </button>
      </div>
    </header>
  );
}

export default AdminNavbar;