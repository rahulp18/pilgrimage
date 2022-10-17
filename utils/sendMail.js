import nodemailer from "nodemailer";

export const sendMail = async (options) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "qurinoumsolution@gmail.com",
      pass: "caijhmdevozaiora",
    },
  });

  var mailOptions = {
    from: "qurinoumsolution@gmail.com",
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
