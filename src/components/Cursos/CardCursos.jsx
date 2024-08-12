import './cursos.css'
import { FaLock } from "react-icons/fa6";


export const CardCursos = ({ title, desc, url }) => {
    return (
        <div className="lg:flex border border-secondary-700 bg-gray-800/20 rounded-lg shadow bgCursoCard">
            <img className="object-cover w-full h-56 rounded-tl-lg rounded-bl-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <div className="flex flex-col justify-between py-6 lg:mx-6">
                <span className="text-xl font-semibold text-white">
                    {title}
                </span>
                <p className="text-gray-400">{desc}</p>
                <a href={url} target='_blank' className="px-6 py-2 flex items-center justify-center gap-2 font-medium text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    <span>
                        Ver Curso
                    </span>
                    {!url && <FaLock />}
                </a>
                <span className="text-sm text-white"></span>
            </div>
        </div>
    )
}