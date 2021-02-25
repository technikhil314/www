import React, { useMemo, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { TextureLoader } from "three";
import cssImg from "../../static/img/css.png";
import htmlImg from "../../static/img/html.png";
import jsImg from "../../static/img/js.png";
import nodejsImg from "../../static/img/nodejs.png";
import reactImg from "../../static/img/react.jpg";
import webpackImg from "../../static/img/webpack.png";

export function Box({ props }) {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.005
    })

    const htmlTexture = useMemo(() => new TextureLoader().load(htmlImg), []);
    const jsTexture = useMemo(() => new TextureLoader().load(jsImg), []);
    const cssTexture = useMemo(() => new TextureLoader().load(cssImg), []);
    const reactTexture = useMemo(() => new TextureLoader().load(reactImg), []);
    const webpackTexture = useMemo(() => new TextureLoader().load(webpackImg), []);
    const nodejsTexture = useMemo(() => new TextureLoader().load(nodejsImg), []);

    return (
        <mesh
            {...props}
            ref={mesh}>
            <boxBufferGeometry args={[4, 4, 4]} />
            <meshBasicMaterial attachArray="material" opacity={1}>
                <primitive attach="map" object={htmlTexture} />
            </meshBasicMaterial>
            <meshBasicMaterial attachArray="material" opacity={1}>
                <primitive attach="map" object={reactTexture} />
            </meshBasicMaterial>
            <meshBasicMaterial attachArray="material" opacity={1}>
                <primitive attach="map" object={jsTexture} />
            </meshBasicMaterial>
            <meshBasicMaterial attachArray="material" opacity={1}>
                <primitive attach="map" object={webpackTexture} />
            </meshBasicMaterial>
            <meshBasicMaterial attachArray="material" opacity={1}>
                <primitive attach="map" object={cssTexture} />
            </meshBasicMaterial>
            <meshBasicMaterial attachArray="material" opacity={1}>
                <primitive attach="map" object={nodejsTexture} />
            </meshBasicMaterial>
        </mesh>
    )
}
