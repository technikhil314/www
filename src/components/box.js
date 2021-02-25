import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

export function Box({ children, ...props }) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.005
    })

    return (
        <mesh
            {...props}
            ref={mesh}>
            <boxBufferGeometry args={[4, 4, 4]} />
            {children}
        </mesh>
    )
}
