/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <div
      style={{ width: "450px" }}
      className="text-sm mt-2 ml-2 rounded-md overflow-hidden"
    >
      <img
        style={{ width: "100%", height: "auto" }}
        src="/img/headEmail.png"
        alt=""
      />
      <h2 className="text-center ">
        Numero de transaccion: 123123123123123123
      </h2>

      <div
        style={{
          display: "flex",
          gap: "7px",
          paddingTop: "10px",
          justifyContent: "center",
          fontSize: "xs",
        }}
      >
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
      <div style={{ paddingLeft: "10" }}>
        <h3 className="font-bold text-gray-500">Pagado desde</h3>
        <p>Pagina web Fyr Lois</p>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "slate-100",
          fontSize: "xs",
          paddingLeft: "4",
          paddingRight: "4",
          paddingTop: "3",
          marginTop: "8",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "4",
            alignItems: "center",
            paddingTop: "2",
          }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src="/img/elementaryOnline.png"
            alt="product1"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>Elementary Online x 1</p>
            <p>$195.00</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "4",
            alignItems: "center",
            paddingTop: "2",
          }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src="/img/elementaryOnline.png"
            alt="product1"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>Elementary Online x 1</p>
            <p>$195.00</p>
          </div>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "3",
            fontWeight: "bold",
            color: "cyan-800",
          }}
        >
          <p className="">Monto Total</p>
          <p>$235.00</p>
        </div>
        <p style={{ color: "gray-500" }}>Numero de telefono : 04121111111</p>
      </div>
    </div>
  )
}
