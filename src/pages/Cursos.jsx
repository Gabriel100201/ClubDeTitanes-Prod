import { BannerCursos } from "../components/Cursos/BannerCursos";
import { SectionCursos } from "../components/Cursos/SectionCursos";
import './cursos.css'
export const Cursos = () => {
    return (
        <section className="relative w-full flex min-h-96 justify-center bg-texture items-center">
            <div className="z-10 w-full">
                <BannerCursos />
                <SectionCursos />
            </div>
        </section>
    );
};
