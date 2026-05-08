"use client";
import { useParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";

const ModelViewer = dynamic(() => import("@/components/ModelViewer"), { 
  ssr: false,
  loading: () => <div className="h-full w-full flex items-center justify-center bg-zinc-900 text-white/20">Đang tải mô hình...</div>
});

const carData = {
  "audi-rs7": {
    name: "Audi RS7 Sportback",
    tag: "Performance",
    desc: "Mẫu xe kết hợp hoàn hảo giữa sức mạnh bùng nổ và sự sang trọng đỉnh cao.",
    specs: { engine: "4.0L V8 TFSI", power: "600 HP", topSpeed: "305 km/h" },
    model: "/models/audi_rs7.glb"
  },
  "audi-r8": {
    name: "Audi R8 Coupe",
    tag: "Supercar",
    desc: "Biểu tượng thuần túy nhất của DNA đường đua Audi.",
    specs: { engine: "5.2L V10", power: "620 HP", topSpeed: "331 km/h" },
    model: "/models/audi_r8.glb"
  },
  "audi-q8": {
    name: "Audi Q8",
    tag: "SUV Coupe",
    desc: "Sự sang trọng của dòng Coupe hòa quyện cùng tính đa dụng của SUV.",
    specs: { engine: "3.0L V6", power: "340 HP", topSpeed: "250 km/h" },
    model: "/models/audi_q8.glb"
  }
};

export default function CarDetailPage() {
  const { id } = useParams();
  const car = carData[id] || carData["audi-rs7"];
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const viewerRef = useRef(null);

  useEffect(() => {
    const handleFsChange = () => setIsFull(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      viewerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <Link href="/" className="text-[10px] tracking-[0.3em] text-white/50 hover:text-white transition-colors">
          ← QUAY LẠI TRANG CHỦ
        </Link>
        <div className="font-bold tracking-tighter text-2xl italic text-audi-red">AUDI</div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* KHU VỰC 3D */}
          <div className="lg:col-span-8 group relative">
            <motion.div 
              ref={viewerRef}
              layout
              className={`relative bg-zinc-900/30 rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 ${
                isExpanded ? "h-[85vh]" : "h-[600px]"
              }`}
            >
              <div className="absolute top-6 right-6 z-30 flex gap-3">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-[10px] tracking-widest transition-all"
                >
                  {isExpanded ? "THU NHỎ" : "PHÓNG TO VÙNG NHÌN"}
                </button>
                <button 
                  onClick={handleFullScreen}
                  className="bg-audi-red hover:bg-red-700 px-4 py-2 rounded-lg text-[10px] tracking-widest transition-all font-bold"
                >
                  {isFull ? "THOÁT TOÀN MÀN HÌNH ✕" : "TOÀN MÀN HÌNH ⛶"}
                </button>
              </div>

              <ModelViewer modelPath={car.model} active={true} allowInteraction={true} />

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.5em] text-white/20 uppercase pointer-events-none whitespace-nowrap">
                Chuột trái: Xoay • Cuộn: Zoom • Chuột phải: Di chuyển
              </div>
            </motion.div>
          </div>

          
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-audi-red text-xs font-bold tracking-[0.4em] uppercase">{car.tag}</span>
              <h1 className="text-6xl font-bold mt-4 mb-6 tracking-tighter italic uppercase italic">{car.name}</h1>
              <p className="text-white/50 leading-relaxed mb-10 font-light italic">{car.desc}</p>

              <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-10">
                <div className="flex justify-between items-baseline py-2 border-b border-white/5">
                  <span className="text-[10px] text-white/30 tracking-widest uppercase text-audi-red">Động cơ</span>
                  <span className="font-medium text-lg">{car.specs.engine}</span>
                </div>
                <div className="flex justify-between items-baseline py-2 border-b border-white/5">
                  <span className="text-[10px] text-white/30 tracking-widest uppercase text-audi-red">Công suất</span>
                  <span className="font-bold text-lg">{car.specs.power}</span>
                </div>
                <div className="flex justify-between items-baseline py-2 border-b border-white/5">
                  <span className="text-[10px] text-white/30 tracking-widest uppercase text-audi-red">Tốc độ tối đa</span>
                  <span className="font-medium text-lg">{car.specs.topSpeed}</span>
                </div>
              </div>

              
              <button className="w-full mt-12 bg-audi-red hover:bg-red-700 text-white py-5 rounded-sm font-bold tracking-[0.2em] uppercase text-[11px] transition-all transform active:scale-95 shadow-xl shadow-red-900/20">
                ĐẶT LỊCH HẸN DỊCH VỤ
              </button>

            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}