import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import ButtonBox from "./components/Buttons/ButtonBox";
import ChatEngineComponent from "./components/ChatFeed/ChatEngineComponent";
import Notes from "./components/Notes/Notes";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />; // To render components accordingly

  return (
    <div className="whole-container">
      <div className="toggle-container">
        {/* Switching components at every path change  */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ChatEngineComponent />} />
            <Route exact path="/notes" element={<Notes />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* Button box to toggle between different components  */}
      <ButtonBox />
    </div>
  );
};

export default App;
