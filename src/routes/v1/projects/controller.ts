import { Request, Response } from "express";
import prisma from "../../../prisma-client";
import EntityNotFoundError from "../../../errors/EntitiyNotFoundError";

export const listProjects = async (req: Request, res: Response) => {
  const projects = await prisma.project.findMany();
  res.status(200).json({ projects });
};

export const getProject = async (req: Request, res: Response) => {
  const project = await prisma.project.findUnique({
    where: { id: req.params.id },
  });
  if (!project) {
    throw new EntityNotFoundError({
      message: `Project with id ${req.params.id} not found`,
      statusCode: 404,
      code: "ERR_NF",
    });
  }
  res.status(200).json({ project });
};
