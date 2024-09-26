import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { FaBackward, FaForward, FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export const ViewCourse = () => {
  const { id } = useParams(); // Obtener el id de la URL
  const videoUrl = `https://www.youtube.com/watch?v=${id}`; // URL de YouTube
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [error, setError] = useState(false); // Estado para manejar el error del video
  const playerRef = useRef(null);

  // Función para manejar play/pause
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Funciones de avance y retroceso
  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10, 'seconds');
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10, 'seconds');
  };

  // Función para controlar el progreso del video
  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  // Función para controlar el cambio de progreso desde el slider
  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
    playerRef.current.seekTo(parseFloat(e.target.value));
  };

  // Función para manejar el volumen
  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  // Función para silenciar o activar el sonido
  const toggleMute = () => {
    setMuted(!muted);
  };

  // Función para manejar errores del video
  const handleError = () => {
    setError(true); // Marcar que hubo un error en la carga del video
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] font-sans bg-texture-2 text-center p-6">
        <h2 className="text-4xl text-white mb-4 font-semibold">Tendras acceso a este video pronto</h2>
        <p className="text-white">Estamos trabajando para habilitar el acceso. Por favor, vuelva más tarde.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-texture-2 min-h-[calc(100vh-180px)] font-sans">
      <div className="lg:max-w-7xl w-full lg:p-10">
        {/* Reproductor de video */}
        <div className="relative w-full h-0 pb-[56.25%] bg-alternative-200 rounded-t-lg shadow-lg overflow-hidden">
          <ReactPlayer
            ref={playerRef}
            className="absolute top-0 left-0 w-full h-full"
            url={videoUrl}
            playing={isPlaying}
            volume={volume}
            muted={muted}
            onProgress={handleProgress}
            onError={handleError} // Manejar el error del video
            controls={false} // No usar controles nativos de YouTube
            width="100%"
            height="100%"
          />
        </div>
        {/* Controles personalizados */}
        <div className="flex flex-col items-center space-y-1 bg-gradient-to-t from-alternative-950/50 to-alternative-950 p-4 rounded-b-lg shadow-lg">
          {/* Slider de progreso */}
          <input
            type="range"
            min={0}
            max={1}
            step="0.01"
            value={played}
            onChange={handleSeekChange}
            className="w-full"
          />
          <div className='w-full flex flex-col md:flex-row'>
            {/* Botones de control */}
            <div className="flex items-center justify-center md:justify-start w-full space-x-4">
              <button
                className="text-white px-4 py-5 shadow-lg hover:bg-alternative-900 transition-all"
                onClick={handleRewind}
              >
                <FaBackward />
              </button>
              <button
                className="text-white px-6 py-5 shadow-lg hover:bg-alternative-900 transition-all"
                onClick={handlePlayPause}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button
                className="text-white px-4 py-5 shadow-lg hover:bg-alternative-900 transition-all"
                onClick={handleFastForward}
              >
                <FaForward />
              </button>
            </div>

            {/* Control de volumen */}
            <div className="flex items-center space-x-2">
              <button
                className="text-white px-4 py-4 shadow-lg rounded-lg hover:bg-alternative-900 transition-all"
                onClick={toggleMute}
              >
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
