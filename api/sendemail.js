const nodemailer = require("nodemailer");

module.exports = (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const body = `<div>
  <h3>Sender's Email: ${email}</h3>
  <h3>Message: ${message}</h3>
  </div>`;

  transporter
    .sendMail({
      from: email,
      to: "shreyamin75@gmail.com",
      subject: `Website Contact from ${firstName} ${lastName}`,
      html: body,
    })
    .then((mailResp) => {
      res.json({
        success: true,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        error,
      });
    });
};
