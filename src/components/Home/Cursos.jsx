import { CardCursos } from "./CardCursos";
export const Cursos = () => {
    return (
        <section className="flex flex-col gap-12 px-5 sm:px-32 py-48 cardBG" id='cursos'>
            <div>
                <h3 className="text-gray-200 font-semibold text-2xl lg:text-3xl text-center">CURSOS</h3>
            </div>
            <div className="w-full mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-9">
                <CardCursos />
                <CardCursos />
                <CardCursos />
                <CardCursos />
            </div>
        </section>
    )
}