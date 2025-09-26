import { NextFunction, Request, Response } from "express";
import EntityNotFoundError from "../../../errors/EntitiyNotFoundError";
import prisma from "../../../prisma-client";

export const listTasks = async (req: Request, res: Response) => {
  const task = await prisma.task.findMany({
    where: { user_id: req.auth?.payload.sub },
  });
  res.status(200).json({ task });
};

export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const task = await prisma.task.findUnique({
    where: { id: req.params.id, user_id: req.auth?.payload.sub },
  });

  if (!task) {
    throw new EntityNotFoundError({
      message: "Task not found",
      statusCode: 404,
      code: "ERR_NF",
    });
  }
  res.status(200).json({ task });
};
