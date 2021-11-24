import { ChatEngine } from "react-chat-engine";
import ChatBox from "./ChatBox";
import "../../styles/App.css";

const ChatEngineComponent = () => {
  return (
    <>
      <ChatEngine
        height="97vh" //  Screen height
        projectID="a8fce3be-91ef-4f85-be73-b4edae85130c" //   Connection to ChatEngine
        userName={localStorage.getItem("username")} //   Currently logged in user
        userSecret={localStorage.getItem("password")} //    Password
        renderChatFeed={(props) => <ChatBox {...props} />}
        onNewMessage={
          () =>
            new Audio(
              "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
            ).play() // Sound effects
        }
      />
    </>
  );
};

export default ChatEngineComponent;
