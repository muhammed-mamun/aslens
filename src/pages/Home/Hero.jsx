export default function Hero() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 py-2 lg:py-10 px-6 lg:h-screen justify-center items-center">
      <div>
        <p className="lg:text-7xl pt-4 text-5xl font-semibold text-white">Sign Language Made Simple <span className="text-5xl text-blue-700">Powered by AI</span></p>
      </div>
      <div className="grid grid-cols-1 gap-4">
     
        <p className="text-[19px]">
          Unlock the power of sign language with interactive lessons, real-time feedback, and personalized paths. Connect with virtual partners and a supportive community. 
        </p>
        <div className="w-full flex justify-start">
          
            <button className="btn text-white rounded-xl bg-blue-700 hover:bg-blue-900 font-bold">Learn More</button>
        </div>
      </div>

    </div>
    <div className="w-full flex justify-center mt-20 ">
    <iframe
        className="w-full p-4 h-full lg:w-[800px] lg:h-[600px] sm:hidden lg:block"
        src="https://www.youtube.com/embed/rkQZQhloXuE?autoplay=1&mute=1"
        title="Basic Sign Language for Caregivers of the Deaf/Hard of Hearing"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    </>
  )
}