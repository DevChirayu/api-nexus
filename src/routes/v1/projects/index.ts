import express, { Router } from "express";
import { listProjects, getProject } from "./controller";
import Authuser from "../../../middleware/authentication";

const projects: Router = express.Router();

projects.use(Authuser);
projects.get("/", listProjects);
projects.get("/:id", getProject);

export default projects;
