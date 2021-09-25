import { NextApiRequest, NextApiResponse } from "next";
import profileConfig from "../../profile.config";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(profileConfig);
};
