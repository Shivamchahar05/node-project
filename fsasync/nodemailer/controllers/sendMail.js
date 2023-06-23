const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    const transporter = await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'jeffrey.heaney@ethereal.email',
            pass: 'HRUuvXTaPVGKDUuwTs'
        }
    });
    let info = await transporter.sendMail({
        from: '"Shivam chahar 👻" <foo@example.com>',
        to: "shivam.chahar@appinventiv.com",
        subject: "Hello ✔",
        text: "Hello shivam?",
        html: "<b>Hello shivam?</b>",
    });
    console.log("Message sent: %s", info.messageId);
    console.log("I am send mail");
    const data=JSON.stringify(info)
    const newdata =JSON.parse(data)
    res.json(newdata)

}
module.exports = sendMail