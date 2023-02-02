import nodemailer from "nodemailer";

export default function sendEmail() {
  var sender = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vigneshkumarait@gmail.com",
      pass: "vfaowfnfdcortvnq",
    },
  });

  var composemail = {
    from: "vigneshkumarait@gmail.com",
    to: "join-us@kskinfo.com",
    subject: "Sending Email using Node.js",
    text: "Hi, this is Vignesh.Thanks for give this oppurtunity. I hope i will join immediately in this job.",
  };

  sender.sendMail(composemail, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully: " + info.response);
    }
  });
}
