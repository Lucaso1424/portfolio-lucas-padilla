"use client";

import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { CSSProperties, Suspense } from "react";
import ScrollAnimationR3F from "../../../components/three-components/ProjectsPage/ScrollAnimationR3F";
import MyProjectsContentPage from "../../../components/web-components/MyProjectsContentPage";

export default function MyProjectsPage() {
    const canvasStyle: CSSProperties = {
        position:"fixed", 
        left:0, 
        right:0, 
        backgroundColor: '#000000',
        zIndex: -1
    };
    return (
        <div>
            <Head>
                <title>My Projects</title>
                <meta name="My Projects" content="Software Development Projects" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Canvas camera={{ fov: 40, near: 0.1, far: 100, position: [0, 0, 6] }} style={canvasStyle}>
                <Suspense fallback={null} >
                    <ScrollAnimationR3F />
                </Suspense>
            </Canvas>
            <MyProjectsContentPage />
        </div>
    )
}