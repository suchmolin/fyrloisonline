import { NextResponse } from "next/server"
import Stripe from "stripe"
import { headers } from "next/headers"
import { Resend } from "resend"
import { cursosInfo } from "@/cursosInfo"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const resend = new Resend("re_QpfqvXFg_7FY6LdA53EXGM5T22kSoFyCE")

export async function POST(request) {
  const body = await request.text()
  const headersList = headers()
  const sig = headersList.get("stripe-signature")

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (error) {
    console.console.log(error.message)
    return NextResponse.error({ error: error.message })
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object
      const productos = JSON.parse(session.metadata.data)
      const nombreCliente = session.customer_details.name
      const correoCliente = session.customer_details.email
      const total = session.amount_total / 100
      const idTransaccion = session.payment_intent
      const fecha = JSON.parse(event.created)
      const telefono = session.custom_fields[0].numeric.value
      console.log(
        new Date(fecha * 1000).toLocaleDateString("es-ES", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
        })
      )

      const respuesta = await resend.emails.send({
        from: "no-reply@fyrlois.us",
        to: correoCliente,
        subject: "PAGO ONLINE Fyr Lois Online",
        html: `

              <h1>Hola, ${nombreCliente}</h1>
                <p>se ha registrado un pago con identificador: ${idTransaccion}</p>
                <p>en un lapso maximo de 48 horas, será contactado al correo: ${correoCliente} por un agente autorizado.</p>



          <div style="width: 450px; font-size: 12px; line-height: 16px; margin-left: 8px; border-radius: 6px; overflow: hidden;">
        <img style="width: 100%; height: auto;" src="https://fyrlois-us.vercel.app/_next/image?url=%2Fimg%2FheadEmail.png&w=1920&q=75" alt="" />
        <h2 style="text-align: center;">
          Numero de transaccion: ${idTransaccion}
        </h2>

        <div style="display: flex; gap: 28px; padding-top: 40px; padding-bottom: 40px; justify-content: center; font-size: 12px; line-height: 16px;" >
          <div>
            <h3 style="font-weight: bold; color: rgb(107 114 128);" >Monto Pagado</h3>
            <p>$${total}.00</p>
          </div>
          <div>
            <h3 style="font-weight: bold; color: rgb(107 114 128);" >Fecha de pago</h3>
            <p>${fecha}</p>
          </div>
          
        </div>
        <div style="padding-left: 40px; padding-right: 40px;">
          <h3 style="font-weight: bold; color: rgb(107 114 128);" >Pagado desde</h3>
          <p>Pagina web Fyr Lois</p>
        </div>

        <div style="width: 100%; background-color: rgb(241 245 249); font-size: 14px; line-height: 16px; padding: 12px 16px; margin-top: 12px;">
          ${productos.map((producto) => {
            const curso = cursosInfo.find((curso) => curso.id === producto.id)
            return `
              <div style="display: flex; gap: 16px; align-items: center; padding-top: 16px; padding-bottom: 16px;" >
                <img
                style="width: 50px; height: 50px;"
                  
                  src="https://fyrlois-us.vercel.app/_next/image?url=%2Fimg%2F${curso.img}&w=1920&q=75"
                  alt="${curso.title}"
                />
                <div style="display: flex; justify-content: space-between; width: 100%;">
                  <p>${curso.title} x ${producto.cantidad}</p>
                  <p>$${curso.price}.00</p>
                </div>
              </div>
              `
          })}
          
          <hr />
          <div style="display: flex; justify-content: space-between; padding: 12px 0; font-weight: bold; color: rgb(21 94 117);;" >
            <p>Monto Total</p>
            <p>$${total}.00</p>
          </div>
          <p style="color: rgb(107 114 128);">Numero de telefono : ${telefono}</p>
          <p style="color: rgb(107 114 128);">Correo Electrónico : ${correoCliente}</p>
        </div>
      </div>`,
      })
      /*
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
                      */
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return new Response(null, { status: 200 })
}
