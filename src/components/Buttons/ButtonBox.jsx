import LogoutButton from "./LogoutButton";
import ToggleButton from "./ToggleButton";

const ButtonBox = () => {
  return (
    <div className="button-box">
      <ToggleButton />
      <LogoutButton />
    </div>
  );
};

export default ButtonBox;
