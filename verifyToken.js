import jwt from "jsonwebtoken";
import { CreateError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  // console.log(token);
  if (!token) return next(CreateError(401, "you are authenticated!"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(CreateError(403, "Token is not valid"));
    }
    req.user = user;
    next();
  });
};
