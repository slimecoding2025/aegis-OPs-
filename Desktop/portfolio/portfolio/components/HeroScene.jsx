"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

const NODE_COUNT = 8;

function TechRing() {
  const groupRef = useRef(null);
  const innerRef = useRef(null);

  // Node positions distributed evenly around the torus, computed once.
  const nodes = useMemo(() => {
    return Array.from({ length: NODE_COUNT }, (_, i) => {
      const angle = (i / NODE_COUNT) * Math.PI * 2;
      const radius = 2.1;
      return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
    });
  }, []);

  // Circuit-style connecting lines between alternating nodes.
  const connections = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < NODE_COUNT; i += 1) {
      pairs.push([nodes[i], nodes[(i + 3) % NODE_COUNT]]);
    }
    return pairs;
  }, [nodes]);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.z += delta * 0.12;
    if (innerRef.current) innerRef.current.rotation.y -= delta * 0.2;
  });

  return (
    <group>
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#4ce0d2" wireframe transparent opacity={0.55} />
      </mesh>

      <group ref={groupRef}>
        <mesh rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[2.1, 0.012, 8, 96]} />
          <meshBasicMaterial color="#9b8cff" transparent opacity={0.5} />
        </mesh>

        {connections.map(([a, b], i) => (
          <Line
            key={i}
            points={[a, b]}
            color="#4ce0d2"
            transparent
            opacity={0.18}
            lineWidth={1}
          />
        ))}

        {nodes.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshBasicMaterial color={i % 2 === 0 ? "#4ce0d2" : "#9b8cff"} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div
      className="h-full w-full"
      role="img"
      aria-label="Animated wireframe network graph representing a connected technology stack"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "low-power" }}
      >
        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
            <TechRing />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
