import { cursosInfo } from "@/cursosInfo";
import Image from "next/image";
import CursoCard from "../CursoCard/page";

export default function CursosBox() {
  return (
    <div className="w-full flex gap-5">
      {cursosInfo.map((curso, index) => (
        <CursoCard data={curso} key={index} />
      ))}
    </div>
  );
}
