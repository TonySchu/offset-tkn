import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
require("dotenv").config();

type Data = {
  response: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Process a POST request
  if (req.method === "POST") {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
    const { userEmail } = req.body;

    console.log(req.body);

    const msg = {
      to: userEmail, // TODO: Change to your recipient
      from: "john.einicke@teclead.de", // TODO: Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    sgMail
      .send(msg)
      .then(() => {
        res.status(200).json({ response: "Email sent" });
      })
      .catch((error) => {
        res.status(401).json({ response: error });
      });
  }
}
