import { useNavigate } from 'react-router-dom';
import './cursos.css'
import { FaLock } from "react-icons/fa6";

export const CardCursos = ({ title, desc, url, imageUrl }) => {
    const navigate = useNavigate();
    const handleCursoClick = () => {
        if (!url) {
            navigate('/subscription');
        }
        else {
            navigate(`/view-course/${url}`);
        }
    }

    return (
        <div className="lg:flex border border-secondary-700 bg-gray-800/20 rounded-lg shadow bgCursoCard">
            <img className="object-fill w-full h-auto rounded-tl-lg rounded-bl-lg lg:w-80" src={imageUrl} alt="" />
            <div className="flex flex-col justify-between py-6 lg:mx-6 px-3">
                <span className="text-xl font-semibold text-white">
                    {title}
                </span>
                <p className="text-gray-400">{desc}</p>
                <button onClick={handleCursoClick} target='_blank' className="px-6 py-2 flex items-center cursor-pointer justify-center gap-2 font-medium text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 mt-3">
                    <span>
                        Ver Curso
                    </span>
                    {!url && <FaLock />}
                </button>
                <span className="text-sm text-white"></span>
            </div>
        </div>
    )
}