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



          <div className="w-[450px] text-sm mt-2 ml-2 rounded-md overflow-hidden">
            <img src="/img/headEmail.png" alt="" />
            <h2 className="text-center ">
              Numero de transaccion: ${idTransaccion}
            </h2>

            <div className="flex gap-7 py-10 justify-center text-xs">
              <div>
                <h3 className="font-bold text-gray-500">Monto Pagado</h3>
                <p>$${total}.00</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-500">Fecha de pago</h3>
                <p>${fecha}</p>
              </div>
              
            </div>
            <div className="px-10">
              <h3 className="font-bold text-gray-500">Pagado desde</h3>
              <p>Pagina web Fyr Lois</p>
            </div>

            <div className="w-full bg-slate-100 text-xs px-4 py-3 mt-8">
              ${productos.map((producto) => {
                const curso = cursosInfo.find(
                  (curso) => curso.id === producto.id
                )
                return `
                  <div className="flex gap-4 items-center py-2">
                    <img
                      className="w-[50px] h-[50px]"
                      src="/img/${curso.img}"
                      alt="${curso.title}"
                    />
                    <div className="flex justify-between w-full">
                      <p>${curso.title} x ${producto.cantidad}</p>
                      <p>$${curso.price}.00</p>
                    </div>
                  </div>
                  `
              })}
              
              <hr />
              <div className="flex justify-between py-3 font-bold text-cyan-800">
                <p className="">Monto Total</p>
                <p>$${total}.00</p>
              </div>
              <p className="text-gray-500">Numero de telefono : ${telefono}</p>
              <p className="text-gray-500">Correo Electrónico : ${correoCliente}</p>
            </div>
          </div>

                        
                        `,
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
