import "dotenv/config";
import nodemailer from "nodemailer";

const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PWD = process.env.MAIL_PWD;

// const MAIL_HOST = process.env.MAIL_HOST || "smtp.ethereal.email";
// const MAIL_USER = process.env.MAIL_USER || "jude.mccullough@ethereal.email";
// const MAIL_PWD = process.env.MAIL_PWD || "37pY6hu6beQJMT7gY3";

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PWD,
  },
});

interface MailData {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

const mailSend = async (data: MailData) => {
  const info = await transporter.sendMail({
    from: `"n0q" <${MAIL_USER}>`,
    to: MAIL_USER,
    subject: `n0q - connect - ${data.first_name}`,
    text: `first name: ${data.first_name}\nlast name: ${data.last_name}\nemail: ${data.email} Message: ${data.message}`,
    html: `<div>
              <div>first name: ${data.first_name}</div>
              <div>last name: ${data.last_name}</div>
              <div>email: ${data.email}</div>
              <div>message: ${data.message}</div>
          </div>`,
  });
  console.log("Message sent: %s", info.messageId);
};

export default mailSend;
