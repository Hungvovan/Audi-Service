"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, Html, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

// ─── Inner model mesh ────────────────────────────────────────────────────────

function Model({ path, mouseX, mouseY }) {
  const group = useRef();
  const { scene } = useGLTF(path);

  // Clone scene to allow multiple instances of the same model
  const clonedScene = scene.clone(true);

  // Center & normalize model to fit the card
  useEffect(() => {
    if (!group.current) return;
    const box = new THREE.Box3().setFromObject(group.current);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.2 / maxDim;
    group.current.scale.setScalar(scale);
    group.current.position.sub(center.multiplyScalar(scale));
  }, [path]);

  // Auto-rotate + subtle mouse parallax tilt
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    // Base auto-rotation
    group.current.rotation.y = t * 0.25;
    // Mouse tilt (subtle)
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouseY.current * 0.15,
      0.05
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -mouseX.current * 0.05,
      0.05
    );
  });

  return (
    <group ref={group}>
      <primitive object={clonedScene} />
    </group>
  );
}

// ─── Camera auto-fit ─────────────────────────────────────────────────────────

function CameraRig() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0.5, 4);
    camera.fov = 45;
    camera.updateProjectionMatrix();
  }, [camera]);
  return null;
}

// ─── Suspense fallback loader ─────────────────────────────────────────────────

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        {/* Audi four-ring spinner */}
        <div className="relative w-12 h-6">
          {[0, 14, 28, 42].map((offset, i) => (
            <span
              key={i}
              className="absolute top-0 w-5 h-5 rounded-full border-2 border-[#BB0A21] opacity-0"
              style={{
                left: offset,
                animation: `audiPing 1.4s ease-in-out ${i * 0.18}s infinite`,
              }}
            />
          ))}
        </div>
        <span className="text-[10px] tracking-[0.25em] text-white/50 font-light uppercase whitespace-nowrap">
          Loading Model
        </span>
        <style>{`
          @keyframes audiPing {
            0%, 100% { opacity: 0.15; transform: scale(0.85); }
            50%       { opacity: 1;    transform: scale(1.05); }
          }
        `}</style>
      </div>
    </Html>
  );
}

// ─── Public component ─────────────────────────────────────────────────────────

/**
 * ModelViewer
 * @param {string}  modelPath        - e.g. "/models/audi_rs7.glb"
 * @param {boolean} active           - whether the canvas should render (hover state)
 * @param {boolean} allowInteraction - whether to enable zoom and pan (for detail page)
 */
export default function ModelViewer({ modelPath, active, allowInteraction = false }) {
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.current = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouseY.current = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  const handleMouseLeave = () => {
    mouseX.current = 0;
    mouseY.current = 0;
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Only mount the heavy Canvas when the card is hovered */}
      {active && (
        <Canvas
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <CameraRig />

          {/* Lighting — dramatic, premium */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" castShadow />
          <directionalLight position={[-4, 2, -4]} intensity={0.3} color="#BB0A21" />
          <pointLight position={[0, -2, 2]} intensity={0.5} color="#ffffff" />

          <Suspense fallback={<Loader />}>
            <Model path={modelPath} mouseX={mouseX} mouseY={mouseY} />
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.5}
              scale={6}
              blur={2.5}
              far={2}
              color="#000000"
            />
            <Environment preset="city" />
          </Suspense>

          {/* Allow user to orbit if they want, but subtle limits */}
          <OrbitControls
            enableZoom={allowInteraction}
            enablePan={allowInteraction}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
            rotateSpeed={0.4}
            makeDefault
          />
        </Canvas>
      )}
    </div>
  );
}