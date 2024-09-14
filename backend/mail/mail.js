import nodemailer from "nodemailer"


export async function mail( email, time, firstName,lastName, date ) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "krishnanastahouse6996@gmail.com",
            pass: "bokrvymypnwoimyf"
        }
    })

    const mailOptions = {
        from: 'krishnanastahouse6996@gmail.com',
        to: email,
        subject: 'Your reservation',
        text: `Hii there ${firstName} ${lastName},  this mail is sent in order to let you know that you have a reservation in our outlet at ${time} at on ${date}, So please do come!. In case if you want cancel a reservation please contact  9067794838` 
    }
    try {
        const result = await transporter.sendMail(mailOptions)
        console.log("Success")
    } catch (error) {
        console.log(error)
    }
}
