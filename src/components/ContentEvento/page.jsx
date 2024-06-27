import Image from "next/image";

export default function ContentEvento({ data }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-11/12 md:w-7/12 flex flex-col py-5 md:py-20 border-gray-200 border-b-2">
        {data.map((item, i) => (
          <>
            {item.titulo && (
              <h2
                key={"titulo" + i}
                className="text-[#000b7a] text-5xl py-10 px-5 text-center"
              >
                {item.titulo}
              </h2>
            )}
            {item.texto &&
              item.texto.map((item, i) => (
                <p
                  key={"texto" + i}
                  className="text-gray-500 text-lg py-5 px-1 md:px-5"
                >
                  {item}
                </p>
              ))}
            {item.img && (
              <div className="w-full flex justify-center">
                <Image
                  key={"img" + i}
                  width={800}
                  height={300}
                  src={`/img/${item.img}`}
                  alt={item.titulo}
                  className="rounded-2xl"
                />
              </div>
            )}
            {item.ul && (
              <ul
                key={"ul" + i}
                className="text-gray-500 text-lg py-5 list-disc pl-10"
              >
                {item.ul?.map((li, j) => (
                  <li key={"li" + j}>{li}</li>
                ))}
              </ul>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
