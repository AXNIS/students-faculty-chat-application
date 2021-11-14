import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatBox from "./components/ChatFeed/ChatBox";

const App = () => {
  return (
    <ChatEngine
      height="100vh" //  Entire screen
      projectID="a8fce3be-91ef-4f85-be73-b4edae85130c" //   Connection to ChatEngine
      userName="axnis" //   Currently logged in user
      userSecret="123" //    Password
      renderChatFeed={(props) => <ChatBox {...props} />}
    />
  );
};

export default App;
