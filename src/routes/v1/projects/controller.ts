import { Request, Response } from "express";

export const listProjects = (req: Request, res: Response) => {
  res.status(200).json({ message: "List projects" });
};

export const getProject = (req: Request, res: Response) => {
  res.status(200).json({ id: req.params.id, name: "Sample Project 1" });
};
