"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export default function GeometricCore() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { viewport } = useThree();

    // Calculate scale based on viewport width
    const responsiveScale = useMemo(() => {
        const baseScale = viewport.width < 5 ? 1.5 : 2.5;
        return baseScale;
    }, [viewport.width]);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Mouse interaction - subtle rotation based on mouse position
        const mouseX = state.mouse.x * 0.5;
        const mouseY = state.mouse.y * 0.5;

        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouseY, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouseX, 0.1);
    });

    return (
        <Float
            speed={4} // Animation speed
            rotationIntensity={1} // Float rotation intensity
            floatIntensity={2} // Float height intensity
        >
            <mesh ref={meshRef} scale={responsiveScale}>
                <icosahedronGeometry args={[1, 15]} />
                <MeshDistortMaterial
                    color="#00f2ff" // Electric Cyan
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={0.5}
                    roughness={0.2}
                    distort={0.4} // Strength of distortion
                    speed={2} // Speed of distortion
                />
            </mesh>
        </Float>
    );
}
