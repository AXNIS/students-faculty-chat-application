import MsgForm from "./MsgForm";
import MyMsg from "./MyMsg";
import TheirMsg from "./TheirMsg";

const ChatBox = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat]; // If chats exists

  const generatingMessages = () => {
    const keys = Object.keys(messages); // keys are the IDs of the specific msgs

    return keys.map((key, index) => {
      const message = messages[key]; // Dynamically takes the message
      const lastMsgKey = index === 0 ? null : keys[index - 1];
      const isMyMsg = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMsg ? (
              <MyMsg message={message} />
            ) : (
              <TheirMsg message={message} lastMessage={messages[lastMsgKey]} />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMsg ? "18px" : "0px",
              marginLeft: isMyMsg ? "0px" : "68px",
            }}
          >
            read-receipts
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {generatingMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        {/* Field for writing messages */}
        <MsgForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatBox;
