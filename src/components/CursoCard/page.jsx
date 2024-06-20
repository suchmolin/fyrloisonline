import Image from "next/image";

export default function CursoCard(props) {
  const { data, key } = props;
  return (
    <a
      key={key}
      href={data.redirect}
      className="flex flex-col justify-between min-h-[400px] w-3/12 rounded-lg shadow-2xl overflow-hidden hover:scale-[0.98] transition-all duration-300"
    >
      <Image
        width={300}
        height={100}
        src={`/img/${data.img}`}
        alt={data.title}
      />
      <div className="mx-5 py-3 ">
        <h4 className="text-xl font-bold text-[#000b7a] py-2">{data.title}</h4>
        <p className="text-gray-500 pb-6">{data.description}</p>
      </div>
      <div className="mx-4 py-5 text-xl text-[#000b7a] font-bold border-t-[1px] border-gray-500">
        <p>$ {data.price}.00 USD</p>
      </div>
    </a>
  );
}
