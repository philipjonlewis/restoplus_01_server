import { CookieOptions, RequestHandler } from 'express';
import asyncHandler from '../handlers/asyncHandler';
import ErrorHandler from '../handlers/modifiedErrorHandler';
import CountModel from '../database/countDbModel';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

export const getCookieIdController = asyncHandler(async (req, res) => {
  const newUser = new CountModel({ count_value: 0 });

  newUser.save(function (err) {
    if (!err) {
      return res
        .status(200)

        .json({
          code: 200,
          status: true,
          message: 'Successfully obtained cookieId',
          cookie_id: newUser._id,
        });
    }

    //add error handler here
  });
}) as RequestHandler;
