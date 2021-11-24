// Chats ---> Notes

import { useNavigate } from "react-router-dom";

const NotesButton = () => {
  const navigate = useNavigate();
  const Switching = () => {
    navigate("/notes");
    window.location.reload();
  };

  return (
    <button onClick={Switching} type="submit" className="button-design">
      <span>Notes</span>
    </button>
  );
};

export default NotesButton;
