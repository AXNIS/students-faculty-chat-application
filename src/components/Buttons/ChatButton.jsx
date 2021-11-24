// Notes ----> Chats

import { useNavigate } from "react-router-dom";

const ChatButton = () => {
  const navigate = useNavigate();
  const Switching = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <button onClick={Switching} type="submit" className="button-design">
      <span>Chats</span>
    </button>
  );
};

export default ChatButton;
