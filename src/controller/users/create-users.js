import fs from "fs";
export const createUser = (req, res) => {
  console.log(req.body);

  const rawUserData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUserData);
  users.push(req.body);
  console.log(users);
  fs.writeFileSync("src/db/users.json", JSON.stringify(users));
  res.json({ message: "success" });
};
