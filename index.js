import express from "express";
import cors from "cors";
const PORT = 3001;

const app = express();
app.listen(PORT, () => {
  console.log(`we are on air on port ${PORT}`);
});
app.use(cors({ origin: "*" }));
app.use(express.json());
const chats = [
  {
    chatID: 1,
    chatName: "First Chat",
    messages: [
      {
        chatID: 1,
        messageID: Math.random(),
        author: "John",
        text: "HEllo from jon",
      },
      {
        chatID: 1,
        messageID: Math.random(),
        author: "Ken",
        text: "HEllo from ken",
      },
      {
        chatID: 1,
        messageID: Math.random(),
        author: "Dave",
        text: "HEllo from dave",
      },
      {
        chatID: 1,
        messageID: Math.random(),
        author: "Stever",
        text: "HEllo from stew",
      },
      {
        chatID: 1,
        messageID: Math.random(),
        author: "John",
        text: "Buyr from jon",
      },
    ],
  },
  {
    chatID: 2,
    chatName: "Second Chat",
    messages: [
      {
        chatID: 2,
        messageID: Math.random(),
        author: "John",
        text: "PRiv from jon",
      },
      {
        chatID: 2,
        messageID: Math.random(),
        author: "Ken",
        text: "PRiv from ken",
      },
      {
        chatID: 2,
        messageID: Math.random(),
        author: "Dave",
        text: "PRiv from dave",
      },
      {
        chatID: 2,
        messageID: Math.random(),
        author: "Stever",
        text: "PRiv from stew",
      },
      {
        chatID: 2,
        messageID: Math.random(),
        author: "John",
        text: "Buyr from jon",
      },
    ],
  },
];
const users = [
  {
    userID: 1,
    name: "Defauel",
    chats: [
      { chatID: 1, chatName: "First Chat" },
      { chatID: 2, chatName: "Second Chat" },
    ],
  },
];
app.get("/users/:userID", function (req, res) {
  const { userID } = req.params;
  res.send(JSON.stringify(users[userID]));
});
app.get("/chats", function (req, res) {
  res.send(JSON.stringify(chats));
});
app.get("/chats/:chatID", function (req, res) {
  const { chatID } = req.params;
  res.send(JSON.stringify(chats[chatID]));
});
app.post("/chats/:chatID", function (req, res) {
  const { message, author } = req.body;
  const { chatID } = req.params;
  chats[chatID].messages.push({
    chatID,
    author,
    text: message,
    messageID: Math.random(),
  });
  res.send(JSON.stringify(chats[chatID]));
});
