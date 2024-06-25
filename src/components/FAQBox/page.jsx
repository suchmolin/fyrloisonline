import { FaWhatsapp } from "react-icons/fa";
export default function FAQBox(props) {
  const { data } = props;
  return (
    <div className="relative w-full bg-white px-6 pt-3 pb-3 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg sm:px-10 font-[lato]">
      <div className="mx-auto">
        <div className="mx-auto grid divide-y divide-neutral-200">
          {data.map((item, index) => (
            <div key={index} className="py-10">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span className="text-xl text-[#000b7a]">{item.title}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600 flex items-center gap-2">
                  {item.content}
                </p>
                {item.extracontent && (
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600  flex items-center gap-2">
                    {item.extracontent}
                  </p>
                )}
                {item.extracontent2 && (
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    {item.extracontent2}
                  </p>
                )}
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
