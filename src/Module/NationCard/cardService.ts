import { generateSixDigitNumber } from "../../UtlitisFunc/GenerateIdNumber";
import { Card } from "./cardModel";

const createCartIntoDB = async (payload: unknown) => {
  const result = await Card.create(payload);
  const nationId = await generateSixDigitNumber();
  const barCodeDetails = {
    name: result.name,
    icon: result.signatureImage,
    code: nationId,
  };
  return {
    result,
    nationId,
    barCodeDetails,
  };
};

export const cardService = {
  createCartIntoDB,
};
