/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <div className="w-[450px] text-sm mt-2 ml-2 rounded-md overflow-hidden">
      <img src="/img/headEmail.png" alt="" />
      <h2 className="text-center ">
        Numero de transaccion: 123123123123123123
      </h2>

      <div className="flex gap-7 py-10 justify-center text-xs">
        <div>
          <h3 className="font-bold text-gray-500">Monto Pagado</h3>
          <p>$235.00</p>
        </div>
        <div>
          <h3 className="font-bold text-gray-500">Fecha de pago</h3>
          <p>12/12/2021 4:59 pm</p>
        </div>
        <div>
          <h3 className="font-bold text-gray-500">Método de pago</h3>
          <p>Visa</p>
        </div>
      </div>
      <div className="px-10">
        <h3 className="font-bold text-gray-500">Pagado desde</h3>
        <p>Pagina web Fyr Lois</p>
      </div>

      <div className="w-full bg-slate-100 text-xs px-4 py-3 mt-8">
        <div className="flex gap-4 items-center py-2">
          <img
            className="w-[50px] h-[50px]"
            src="/img/elementaryOnline.png"
            alt="product1"
          />
          <div className="flex justify-between w-full">
            <p>Elementary Online x 1</p>
            <p>$195.00</p>
          </div>
        </div>
        <div className="flex gap-4 items-center py-2">
          <img
            className="w-[50px] h-[50px]"
            src="/img/elementaryOnline.png"
            alt="product1"
          />
          <div className="flex justify-between w-full">
            <p>Elementary Online x 1</p>
            <p>$195.00</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between py-3 font-bold text-cyan-800">
          <p className="">Monto Total</p>
          <p>$235.00</p>
        </div>
        <p className="text-gray-500">Numero de telefono : 04121111111</p>
      </div>
    </div>
  )
}
