export default function Logo() {
    return (
        <div className="relative w-[250px] h-[250px] flex justify-center items-center">
            <div className="absolute w-[20%] h-[20%] bg-red-600 rounded-full border-8 border-black -z-10"></div>
            <div className="relative w-[180px] h-[180px] bg-red-600 rounded-full border-8 border-black">
                <img 
                    src="/tiger.png" 
                    alt="Tiger Logo" 
                    className="absolute w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
                />
            </div>
            <svg viewBox="0 0 300 300" className="absolute w-full h-full animate-[rotate_20s_linear_infinite] block">
                <path id="textPath" d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" fill="transparent"/>
                <text className="text-[20px] fill-black transition-[fill] duration-300">
                    <textPath href="#textPath" startOffset="25%" text-anchor="middle" style={{ letterSpacing: '2px' }}>
                        Carrillo's Karate Do Studio
                    </textPath>
                    <textPath href="#textPath" startOffset="75%" text-anchor="middle" style={{ letterSpacing: '4px', fontWeight: "bolder", fontFamily: "'Shippori Mincho', serif" }}>
                        カリロ空手道場
                    </textPath>
                </text>
            </svg>
        </div>
    );
}