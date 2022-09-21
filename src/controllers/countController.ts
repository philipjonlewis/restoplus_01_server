import { RequestHandler } from 'express';
import asyncHandler from '../handlers/asyncHandler';
import ErrorHandler from '../handlers/modifiedErrorHandler';
import CountModel from '../database/countDbModel';

export const getCountValueController = asyncHandler(async (req, res) => {
  const { _id } = await req.query;
  console.log(await req.query);

  const count_data = await CountModel.findById(_id);

  return res.status(200).json({
    code: 200,
    status: true,
    message: 'Successfully obtained count data',
    payload: count_data,
  });
}) as RequestHandler;

export const postCountValueController = asyncHandler(async (req, res) => {
  const { _id, count_value } = await req.body;
  const { cookie_id } = await req.cookies;

  console.log(req.body);

  const updatedData = await CountModel.findByIdAndUpdate(
    _id,
    { count_value },
    { new: true }
  );

  return res.status(200).json(updatedData);
}) as RequestHandler;
