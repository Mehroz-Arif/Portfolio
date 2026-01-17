"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import GeometricCore from "./GeometricCore";

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]} // Handle high DPI screens
            >
                <Suspense fallback={null}>
                    {/* <Environment preset="city" /> Removed to fix fetch error */}
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00f2ff" />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#7000ff" />
                    <directionalLight position={[0, 5, 5]} intensity={1.5} color="#ffffff" />
                    <hemisphereLight intensity={0.5} color="#ffffff" groundColor="#000000" />

                    <GeometricCore />

                    {/* Constrain controls so user can't spin it wildly off screen */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 1.5}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
