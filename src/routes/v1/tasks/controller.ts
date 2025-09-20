import { NextFunction, Request, Response } from "express";

export const listTasks = (req: Request, res: Response) => {
  res.status(200).json({ message: "List of tasks" });
};

export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  throw new Error("OOPS! Something went wrong.");
  res.status(200).json({ id: 1, name: "Sample Task 1" });
};
