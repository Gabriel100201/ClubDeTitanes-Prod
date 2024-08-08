import { CardCursos } from "./CardCursos";

export const Cursos = () => {
    return (
        <section className="relative w-full flex min-h-96  justify-center bg-alternative-950 items-center">
            {/* <Background /> */}
            <div className="z-10 w-full">
                <div className="w-full bg-secondary-950">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <p className="bg-gradient-to-b py-3 z-[100] from-primary-200 via-primary-400 to-primary-600 inline-block text-transparent bg-clip-text font-bold">CURSOS</p>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">La plataforma donde aprenderás todo acerca de negocios, mentalidad y expansión empresarial</h2>
                        <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Empezá hoy
                            </a>
                            <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                Ver más
                            </a>
                        </div>
                    </div>
                </div>
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Primeros pasos</h1>
                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                        <CardCursos title="Primeros pasos" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <CardCursos title="Primeros pasos" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    </div>
                </div>
            </div>
        </section>
    );
};
