"use client"

export default function SpartaBanner() {
  return (
    <div className="w-full bg-slate-800/80 backdrop-blur-md rounded-xl border border-indigo-500/30 p-6 mb-12 overflow-hidden relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Image block */}
        <div className="relative w-80 h-80 md:w-80 md:h-80 flex-shrink-0 mx-auto md:mx-0">
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-cyan-500/40">
            <img
              src="/images/yassine.png"
              alt="Portrait"
                  className="w-full h-full object-cover object-center object-[center_15%]"
            />
          </div>


        </div>

        {/* Text */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          <p className="text-xl md:text-2xl lg:text-3xl text-cyan-300 font-display italic text-center md:text-left leading-relaxed">
Role 1: Skipping tests is gambling with production.
          </p>

          <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-70" />
        </div>
      </div>
    </div>
  )
}
