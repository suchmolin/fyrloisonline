import NavBar from "@/components/NavBar/page";
import MenuHeader from "@/components/MenuHeader/page";
import HeaderPrincipal from "@/components/HeaderPrincipal/page";
import AniversarySection from "@/components/AniversarySection/page";
import TrabajamosCon from "@/components/TrabajamosCon/page";
import SeccionCursos from "@/components/SeccionCursos/page";
import SubSeccionCursos from "@/components/SubSeccionCursos/page";
import SeccionMiss from "@/components/SeccionMiss/page";
import ComoAprenderas from "@/components/ComoAprenderas/page";
import LlevaTuProyecto from "@/components/LlevaTuProyecto/page";
import Footer from "@/components/Footer/page";
import SeccionEventos from "@/components/SeccionEventos/page";
import SeccionBlog from "@/components/SeccionBlog/page";

export default function Home() {
  return (
    <main className="w-full font-[lato]">
      {/*<NavBar />*/}

      <HeaderPrincipal />
      <TrabajamosCon />
      <AniversarySection />
      <SeccionCursos />
      <SubSeccionCursos />
      <SeccionMiss />
      <ComoAprenderas />
      <SeccionBlog />
      <LlevaTuProyecto />
      <SeccionEventos />
    </main>
  );
}
