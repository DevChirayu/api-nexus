import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import config from "../config";
import AuthenticationError from "../errors/AuthenticationError";

const Authuser = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AuthenticationError({
      message: "Authorization header missing or malformed",
      statusCode: 401,
      code: "ERR_AUTH",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decode = jwt.verify(token, config.jwts!) as JwtPayload;
    req.auth = { payload: decode, token };
    next();
  } catch (error) {
    throw new AuthenticationError({
      message: "You are not authorized too access this route",
      statusCode: 403,
      code: "ERR_AUTH",
    });
  }
};

export default Authuser;
