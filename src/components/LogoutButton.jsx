const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div align="center" className="logout-button-box">
      <button onClick={handleLogout} type="submit" className="logout-button">
        <span>Logout</span>
      </button>
    </div>
  );
};

export default LogoutButton;
