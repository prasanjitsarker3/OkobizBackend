import { Request, Response } from "express";
import catchAsync from "../../UtlitisFunc/catchAsync";
import { cardService } from "./cardService";
import sendResponse from "../../UtlitisFunc/sendResponse";

const createCard = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await cardService.createCartIntoDB(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Card Generate successfully !",
    data: result,
  });
});

export const cardController = {
  createCard,
};
