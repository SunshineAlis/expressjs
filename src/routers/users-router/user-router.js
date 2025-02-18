import express from "express";
import { getUsers } from "../../controller/users/get-users.js";
import { postUsers } from "../../controller/users/post-users.js";
import { createUser } from "../../controller/users/create-users.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);
