// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    access_token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE1MjY1LCJpYXQiOjE2Nzg4MTUxMzEsIm5iZiI6MTY3ODgxNTEzMSwianRpIjoiODJiNjBmY2EtZDIyZS00MzRlLWE5YzAtNjRlMmMxZGIxNDIyIiwiZXhwIjoxNjc4OTAxNTMxLCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlLCJpZCI6MTUyNjUsImRhdGEiOnsibWFuYWdlcl9pZCI6MTUyNjUsImNvbXBhbnlfaWQiOjMsInBhcnRuZXJfaWQiOjAsInZlcmlmeSI6bnVsbH19.yteDubfbbBTGySLmZuXCkQKiYQg2l4Cmw225X1n8L78",
  });
}
