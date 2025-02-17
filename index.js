const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [
  {
    firstName: "nara",
    secondName: "chris",
  },
];

app.get("/", (req, res) => {
  res.send(users);
});

app.post("/users", (request, res) => {
  console.log(request.body);

  users.push(req.body);

  res.send(users);
});

app.delete("/", (req, res) => {
  users.pop(0, 1);
  res.send(users);
});

app.put("/", (req, res) => {
  users = users.map((user) => {
    if (user.firstName == "nara") {
      user.firstName = "bat";
    }
    return user;
  });
  res.send(users);
  console.log(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
