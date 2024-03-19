// import nodemailer from "nodemailer";
// import Mailgen from "mailgen";
// const sendMail = (data) => {
//   let config = {
//     service: "gmail",
//     auth: {
//       user: "2100031411klucse@gmail.com",
//       pass: "kepf nhoj cnyd czpk",
//     },
//   };

//   let transporter = nodemailer.createTransport(config);

//   let MailGenerator = new Mailgen({
//     theme: "default",
//     product: {
//       name: "Harsha Pingali",
//       link: "https://mailgen.js",
//     },
//   });
//   let response = {
//     body: {
//       name: data?.name,
//       intro: "Welcome to Blik Chat",
//       outro: `You are receiving this mail just to inform you about your recent account creation  for Blink Chat
//         <br/>
//         Current Date: ${new Date()}
//         <br/>
//         `,
//     },
//   };

//   let mail = MailGenerator.generate(response);

//   let message = {
//     from: data.mail,
//     to: "2100031411klucse@gmail.com",
//     subject: "Account Creation",
//     html: mail,
//   };

//   transporter
//     .sendMail(message)
//     .then(() => {
//       console.log("You Should Recieve An Email");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export default sendMail;
