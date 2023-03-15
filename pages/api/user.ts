// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  surname: string;
  role: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.headers.authorization) {
    res.status(401).json({ message: "Invalid token" });
  }

  res.status(200).json({ name: "John", surname: "Doe", role: "Admin" });
}
