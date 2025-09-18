import { Request, Response } from "express";

export const listTasks = (req: Request, res: Response) => {
  res.status(200).json({ message: "List of tasks" });
};

export const getTask = (req: Request, res: Response) => {
  res.status(200).json({ id: 1, name: "Sample Task 1" });
};
