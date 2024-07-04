import { Parallax } from 'react-scroll-parallax';
import './espacio-titanes.css';
import './button-brigth.css';

export const SectionProximamente = () => {

  return (
    <section className="bg-alternative-950 relative h-[calc(100vh-90px)] -mt-3 w-full flex justify-center items-center p-0 sm:p-8 py-32 lg:py-48">
      <Parallax speed={0} className='polygon bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-32 absolute top-[300px] -left-12 z-0 opacity-50'></Parallax>
      <Parallax speed={0} className='polygon bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-32 absolute top-[428px] -left-16 opacity-50'></Parallax>

      <Parallax speed={0} className='polygon hidden lg:block bg-gradient-to-b from-primary-500 to-primary-700 opacity-50 w-32 h-32 absolute top-[100px] right-0 z-0'></Parallax>
      <Parallax speed={0} className='polygon hidden lg:block bg-gradient-to-b from-primary-500 to-primary-700 opacity-50 w-32 h-32 absolute top-[228px] right-0'></Parallax>

      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto -left-[20px] right-0 z-0 -bottom-20 opacity-50'></div>
      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto left-0 right-0 z-0 bottom-0 opacity-50'></div>
      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto left-[250px] right-0 z-0 -bottom-20 opacity-50'></div>

      <div className="bg-gradient-to-b z-[100] espacio-titanes from-primary-200 via-primary-400 to-primary-600 inline-block text-center text-transparent bg-clip-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
        ¡PRÓXIMAMENTE!
      </div>
    </section>
  );
};
