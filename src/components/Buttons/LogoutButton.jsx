const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  };

  return (
    <button onClick={handleLogout} type="submit" className="button-design">
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
