export const CardCursos = ({ title, desc }) => {
    return (    
                    <div className="lg:flex border border-secondary-700 rounded-lg hover:shadow-secondary-900 shadow hover:transition-all">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                {title}
                            </a>
                            <p className="text-gray-500 dark:text-gray-300">{desc}</p>
                            <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Ver Curso
                            </button>
                            <span className="text-sm text-gray-500 dark:text-gray-300"></span>
                        </div>
                    </div>
    )
}