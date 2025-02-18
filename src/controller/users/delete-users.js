// app.delete("/", (req, res) => {
//   users.pop(0, 1);
//   res.send(users);
// });

export const deleteUsers = (req, res) => {
  const { username } = req.query;
  //   if (!username) {
  //     return res.status(400).json({ message: "please enter username " });
  //   }
  //   const userExists = users.some((user) => user.username === username);
  //   if (userExists) {
  //     res.json({ message: "already used this username", available: false });
  //   } else {
  //     res.json({ message: "it's okay", available: true });
  //   }

  res.send(users);
};
