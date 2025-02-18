import { users } from "./get-users.js";
// export let text = [{ id: 1, username: String, password: Number }];

export const postUsers = (req, res) => {
  const { username, secondName, password } = req.body;

  users.push({ username, secondName, password });
  res.json({ message: "success" });

  // const usernameRegex = /^[A-Za-z]{1,30}$/;
  // if (!username) {
  //   return res.status(400).json({ message: "Please enter a username" });
  // }

  // if (!usernameRegex.test(username)) {
  //   return res.status(400).json({
  //     message:
  //       "Username must be between 1 and 30 characters and contain only letters A-Z, a-z",
  //   });
  // }

  // const userExists = users.find((user) => user.username === username);
  // if (userExists) {
  //   res.json({ message: "Username is already taken", available: false });
  // } else {
  //   res.json({ message: "Username is available", available: true });
  // }
  // const secondNameRegex = /^[A-Za-z]{1,30}$/;
  // if (!secondName) {
  //   return res.status(400).json({ message: "Please enter a username" });
  // }

  // if (!secondNameRegex.test(secondName)) {
  //   return res.status(400).json({
  //     message:
  //       "secondName must be between 1 and 30 characters and contain only letters A-Z, a-z",
  //   });
  // }

  // const secondExists = users.some((user) => user.secondName === secondName);
  // if (secondExists) {
  //   res.json({ message: "secondName is already taken", available: false });
  // } else {
  //   res.json({ message: "secondName is available", available: true });
  // }
};
