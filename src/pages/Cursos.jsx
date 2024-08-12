import { BannerCursos } from "../components/Cursos/BannerCursos";
import { SectionCursos } from "../components/Cursos/SectionCursos";

export const Cursos = () => {
    return (
        <section className="relative w-full flex min-h-96 justify-center bg-alternative-950 items-center">
            <div className="z-10 w-full">
                <BannerCursos />
                <SectionCursos />
            </div>
        </section>
    );
};
