export default function Hero() {
    return (
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 py-2 lg:py-10 px-6 lg:min-h-96 justify-center items-center">
        <div>
            <p className="text-7xl font-semibold text-white">Sign Language Made Simple <span className="text-5xl text-blue-700">Powered by AI</span></p>
        </div>
        <div className="grid grid-cols-1 gap-4"> 
                <p className="text-[19px]">
                Unlock the power of sign language with interactive lessons, real-time feedback, and personalized paths. Connect with virtual partners and a supportive community. <br /> <br />Join us to make learning accessible and fun!
                </p>
               <div className="w-full flex justify-center">
               <button className="btn text-white rounded-3xl bg-blue-700 hover:bg-blue-900 font-bold">Learn More</button>
               </div>
        </div>
      </div>
    )
  }