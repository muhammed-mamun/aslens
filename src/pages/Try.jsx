import { useState, useRef } from "react";

function Try() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
      setIsCameraOpen(true);
    } catch (error) {
      console.error("Error accessing the camera: ", error);
    }
  };

  const closeCamera = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setIsCameraOpen(false);
  };

  return (
    <div className="md:h-[calc(100vh-150px)]">
        <div className="h-full rounded-2xl lg:mt-30px  flex flex-col items-center justify-center">
   
      {/* Camera Feed */}
      {isCameraOpen ? (
        <div className="relative w-[80%] max-w-md">
          <video
            ref={videoRef}
            autoPlay
            className="w-full h-auto border-4 border-blue-500 rounded-lg shadow-lg"
          ></video>
          <button
            onClick={closeCamera}
            className="absolute top-4 right-4 bg-red-600 text-white p-3 rounded-full"
          >
            Close Camera
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4">Click below to start your camera feed.</p>
          <button
            onClick={openCamera}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
          >
            Open Camera
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default Try;
