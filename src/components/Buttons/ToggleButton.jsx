// Notes page : Chats button will appear (Notes ---> Chats)
// Chats page : Notes button will appear (Chats ---> Notes)

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import NotesButton from "./NotesButton";
import ChatButton from "./ChatButton";

const ToggleButton = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NotesButton />} />
        <Route exact path="/notes" element={<ChatButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ToggleButton;
