"use client"

export default function SpartaBanner() {
  return (
    <div className="w-full bg-slate-800/80 backdrop-blur-md rounded-xl border border-indigo-500/30 p-6 mb-12 overflow-hidden relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Image block */}
        <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-[4/5] flex-shrink-0 mx-auto md:mx-0">
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/20">
            <img
              src="/gettyimages-174877238-612x612.jpg"
              alt="Valhalla artwork"
              className="w-full h-full object-cover object-center"
            />
          </div>


        </div>

        {/* Text */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          <p className="text-xl md:text-2xl lg:text-3xl text-cyan-300 font-display italic text-center md:text-left leading-relaxed">
            Programming is the art of shaping time; every software architecture is a miniature Valhalla, with Odin watching from the gaps.
          </p>

          <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-70" />
        </div>
      </div>
    </div>
  )
}
