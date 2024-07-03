import { NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";
import { Resend } from "resend";
import { cursosInfo } from "@/cursosInfo";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend("re_QpfqvXFg_7FY6LdA53EXGM5T22kSoFyCE");

export async function POST(request) {
  const body = await request.text();
  const headersList = headers();
  const sig = headersList.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.console.log(error.message);
    return NextResponse.error({ error: error.message });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      const productos = JSON.parse(session.metadata.data);
      const nombreCliente = session.customer_details.name;
      const correoCliente = session.customer_details.email;
      const total = session.amount_total / 100;
      const idTransaccion = session.payment_intent;

      const respuesta = await resend.emails.send({
        from: "no-reply@fyrlois.us",
        to: correoCliente,
        subject: "PAGO ONLINE Fyr Lois Online",
        html: `
                <h1>Hola, ${nombreCliente}</h1>
                <p>se ha registrado un pago con identificador: ${idTransaccion}</p>
                <p>en un lapso maximo de 48 horas, será contactado al correo: ${correoCliente} por un agente autorizado.</p>
                <p>informacion del pago:</p>
                ${productos.map((producto) => {
                  const curso = cursosInfo.find(
                    (curso) => curso.id === producto.id
                  );
                  return `
                        <div>
                            <h3>${curso.title}</h3>
                            <img width="100px" height="auto" src="https://fyrlois-us.vercel.app/_next/image?url=%2Fimg%2F${curso.img}&w=1920&q=75" />
                            <p>precio: ${curso.price}</p>
                            <p>cantidad: ${producto.cantidad}</p>
                        </div>
                    `;
                })}
                <hr />
                <h3>Total: ${total}</h3>
                `,
      });
      const respuesta2 = await resend.emails.send({
        from: "no-reply@fyrlois.us",
        to: "info@fyrlois.us",
        subject: "PAGO ONLINE Fyr Lois Online",
        html: `
                <h1>Cliente: ${nombreCliente}</h1>
                <p>se ha registrado un pago con identificador: ${idTransaccion}</p>
                <p>Correo Electronico: ${correoCliente}</p>
                <p>informacion del pago:</p>
                ${productos.map((producto) => {
                  const curso = cursosInfo.find(
                    (curso) => curso.id === producto.id
                  );
                  return `
                        <div>
                            <h3>${curso.title}</h3>
                            <img width="100px" height="auto" src="https://fyrlois-us.vercel.app/_next/image?url=%2Fimg%2F${curso.img}&w=1920&q=75" />
                            <p>precio: ${curso.price}</p>
                            <p>cantidad: ${producto.cantidad}</p>
                        </div>
                    `;
                })}
                <hr />
                <h3>Total: ${total}</h3>
                `,
      });

      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response(null, { status: 200 });
}
