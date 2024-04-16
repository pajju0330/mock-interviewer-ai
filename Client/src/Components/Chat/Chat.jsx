import { useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import "./chat.css";
import React from "react";

// import useSpeechRecognition from "../../hooks/useSpeechRecognition";

const Chat = ({questions}) => {
  const dummy = useRef();
  console.log(questions);
  const messages = [
    {
      id: 1,
      text: questions?.companyInfo,
      uid: "456",
      photoURL: "https://i.redd.it/bcyq3rjk2w071.png",
    },
    {
      id: 3,
      text: "Hey!",
      uid: "123",
      photoURL:
        "https://wallpapers.com/images/hd/shadow-boy-white-eyes-unique-cool-pfp-nft-13yuypusuweug9xn.jpg",
    },
    {
      id: 4,
      text: "Hello!",
      uid: "456",
      photoURL: "https://i.redd.it/bcyq3rjk2w071.png",
    },
  ];

  const [formValue, setFormValue] = useState("");
  const [msgs, setMsgs] = useState(messages);
  const sendMessage = async (e) => {
    e.preventDefault();
    const now = new Date();
    const uid = "123";
    const photoURL =
      "https://wallpapers.com/images/hd/shadow-boy-white-eyes-unique-cool-pfp-nft-13yuypusuweug9xn.jpg";
    setMsgs([
      ...msgs,
      {
        id: msgs.length + 1,
        text: formValue,
        uid,
        photoURL,
      },
    ]);
    console.log(msgs);

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  const [start, setStart] = useState(false);
  const handleRecord = () => {
    if (!start) {
      startListening();
    } else {
      stopListening();
    }
  };
  return (
    <div className="container">
      <h2
        style={{
          width: "100vw",
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#282c34",
        }}
      >
        Welcome to your mock interview
      </h2>
      <main>
        {msgs && msgs.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage} className="formContainer">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type or record your answer here!"
        />
        <button type="submit" disabled={!formValue}>
          {">"}
        </button>
      </form>
    </div>
  );
};

export default Chat;