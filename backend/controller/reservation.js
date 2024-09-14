import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";
import { mail } from '../mail/mail.js';

const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    const reservation = await Reservation.create({ firstName, lastName, email, date, time, phone });
    
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });

    try {
      await mail(reservation.email, reservation.time, reservation.firstName, reservation.lastName,  reservation.date);
      console.log("mail sent successfully")
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Optionally, you can handle email sending errors here
    }

  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }
    // Handle other errors
    return next(error);
  }
};

export default send_reservation;
