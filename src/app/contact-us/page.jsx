import FAQBox from "@/components/FAQBox/page";
import FormContactUs from "@/components/FormContactUs/page";
import LlevaTuProyecto from "@/components/LlevaTuProyecto/page";
import MasInfoContactUs from "@/components/MasInfoContactUs/page";

export default function ContactUsPage() {
  const data = [
    {
      title: "¿Cuáles son los métodos de pago?",
      content:
        "Puedes pagar por tarjeta de crédito o débito,  transferencia bancaria, Zelle, Paypal, WesternUnion o Moneygram.",
    },
    {
      title: "¿Cuándo fue fundada la academia?",
      content:
        "Fyr Lois se fundó el 11 de enero del 1998, tenemos más de 20 años de experiencia en la enseñanza de idiomas.",
    },
    {
      title: "¿Puedo pagar el curso en cuotas?",
      content:
        "Sí, contamos con diferentes planes para facilitarte estudiarcon nosotros.",
    },
    {
      title: "¿Brindan descuentos para estudiantes?",
      content: "Sí, escríbenos para más información.",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <FormContactUs />
      <MasInfoContactUs />
      <div className="w-11/12 md:w-9/12 py-20">
        <h3 className="text-4xl text-[#000b7a] py-4 text-center">
          Preguntas frecuentes
        </h3>
        <FAQBox data={data} />
      </div>
      <div className=" w-full">
        <LlevaTuProyecto />
      </div>
    </div>
  );
}
