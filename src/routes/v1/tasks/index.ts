import express, { Router } from "express";
import { listTasks, getTask } from "./controller";
import Authuser from "../../../middleware/authentication";

const tasks: Router = express.Router();
tasks.use(Authuser);
tasks.get("/", listTasks);
tasks.get("/:id", getTask);

export default tasks;
