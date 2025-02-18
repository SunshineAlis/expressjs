export let users = [
  { id: 1, username: "bat", secondName: "Mum", password: "12345678" },
  { id: 2, username: "bold", secondName: "nar", password: "4567" },
];
import fs from "fs";

export const getUsers = (req, res) => {
  const rawUserData = fs.readFileSync("src/db/users.json");
  res.send(JSON.parse(rawUserData));
  // res.json(users);
  // const { username } = req.body;
  // if (!username) {
  //   return res.status(400).json({ message: "please enter username " });
  // }
  // const userExists = users.some((user) => user.username === username);
  // if (userExists) {
  //   res.json({ message: "already used this username", available: false });
  // } else {
  //   res.json({ message: "it's okay", available: true });
  // }

  // res.send(users);
};
