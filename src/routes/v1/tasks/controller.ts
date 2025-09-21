import { NextFunction, Request, Response } from "express";
import EntityNotFoundError from "../../../errors/EntitiyNotFoundError";

export const listTasks = (req: Request, res: Response) => {
  res.status(200).json({ message: "List of tasks" });
};

export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.params.id !== "1") {
    throw new EntityNotFoundError({
      message: "Task not found",
      statusCode: 404,
      code: "ERR_NF",
    });
  }
  res.status(200).json({ id: 1, name: "Sample Task 1" });
};
