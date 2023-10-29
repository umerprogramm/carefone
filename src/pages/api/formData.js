import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { name, number,addreas ,productName } = req.body; 
        console.log(productName)

        var transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: 'umerprogrammer@gmail.com',
              pass: process.env.NEXT_PUBLIC_Pass
          }
      });
      
      console.log('created');
      transporter.sendMail({
      from: 'umerprogrammer@gmail.com',
        to: 'humlog1864@gmail.com',
        subject: 'customer info',
        text: `Here is the Full Name:${name} and here is phone number: ${number} addreas: ${addreas} , product: ${productName}`
      }, (error, info) => {
        if (error) {
          console.log(error);
          res.send('Error occurred while sending email.');
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  
        res.status(200).json({ name, email });
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }