import { Resend } from 'resend';

const resend = new Resend('re_HqojxxBF_2Jzs8EGNdeZM511pHgADc8Hy');
// const fromEmail = process.env.FROM_EMAIL;

export async function POST( req , res ) {
  const body = await req.json();
  const { email , subject , message } = body;
  
  try {
    const { data, error } = await resend.emails.send({
      // from: 'Snehal <snehalrk2899@gmail.com>',
      // from: fromEmail,
      from: 'delivered-to-sandbox@resend.dev',    // Testing domain
      to: ["snehalrk2899@gmail.com" , email],
      subject: subject,
      react: (
        <>
            <h1> { subject } </h1>
            <h6> from {email} </h6>
            <p> { message } </p>
        </>
      )
    });

    console.log(" Resend data : ", {data ,error});

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}