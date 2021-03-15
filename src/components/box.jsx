import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Color, TextureLoader } from "three";
import angularImg from "../../static/img/angular.png";
import bootstrapImg from "../../static/img/bootstrap.png";
import bulmaImg from "../../static/img/bulma.png";
import circleCiImg from "../../static/img/circleci.png";
import cssModulesImg from "../../static/img/css-modules.png";
import cssImg from "../../static/img/css.png";
import cypressImg from "../../static/img/cypress.png";
import dockerImg from "../../static/img/docker.png";
import githubImg from "../../static/img/github.png";
import gitlabImg from "../../static/img/gitlab.png";
import htmlImg from "../../static/img/html.png";
import jestImg from "../../static/img/jest.jpg";
import jsImg from "../../static/img/js.png";
import jssImg from "../../static/img/jss.png";
import nodejsImg from "../../static/img/nodejs.png";
import pwaImg from "../../static/img/pwa.png";
import reactImg from "../../static/img/react.jpg";
import rollupImg from "../../static/img/rollup.png";
import sassImg from "../../static/img/sass.png";
import storybookImg from "../../static/img/storybook.png";
import tailwindImg from "../../static/img/tailwind.png";
import travisImg from "../../static/img/travis.jpg";
import webpackImg from "../../static/img/webpack.png";
import webrtcImg from "../../static/img/webrtc.png";
function BoxMesh({ ...props }) {
  const lastIndex = useRef(6);
  const allMeshMaterials = useMemo(() => {
    return [
      new TextureLoader().load(jsImg),
      new TextureLoader().load(webpackImg),
      new TextureLoader().load(cssImg),
      new TextureLoader().load(nodejsImg),
      new TextureLoader().load(htmlImg),
      new TextureLoader().load(reactImg),
      new TextureLoader().load(webrtcImg),
      new TextureLoader().load(tailwindImg),
      new TextureLoader().load(pwaImg),
      new TextureLoader().load(jssImg),
      new TextureLoader().load(cypressImg),
      new TextureLoader().load(angularImg),
      new TextureLoader().load(cssModulesImg),
      new TextureLoader().load(bulmaImg),
      new TextureLoader().load(bootstrapImg),
      new TextureLoader().load(rollupImg),
      new TextureLoader().load(jestImg),
      new TextureLoader().load(sassImg),
      new TextureLoader().load(githubImg),
      new TextureLoader().load(gitlabImg),
      new TextureLoader().load(storybookImg),
      new TextureLoader().load(travisImg),
      new TextureLoader().load(circleCiImg),
      new TextureLoader().load(dockerImg),
    ];
  }, []);
  const mesh = useRef();
  const [meshMaterials, setMeshMaterials] = useState(
    allMeshMaterials.slice(0, 6)
  );
  const changeMaterial = () => {
    setMeshMaterials(
      allMeshMaterials.slice(lastIndex.current, lastIndex.current + 6)
    );
    lastIndex.current = (lastIndex.current + 6) % allMeshMaterials.length;
  };
  useEffect(() => {
    const intervalId = setInterval(changeMaterial, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry args={[3, 3, 3]} />
      <OrbitControls
        enablePan={true}
        enableRotate={true}
        enableZoom={false}
        minDistance={1}
        maxDistance={100}
      />
      {meshMaterials.map((material, index) => (
        <MeshWobbleMaterial
          key={Date.now() + index}
          attachArray="material"
          speed={1}
        >
          <primitive attach="map" object={material} />
        </MeshWobbleMaterial>
      ))}
    </mesh>
  );
}

export function Box() {
  return (
    <Canvas style={{ height: "60vh" }}>
      <ambientLight color={new Color(0x222222)} />
      <pointLight color={new Color(0xdddddd)} position={[50, 50, 50]} />
      <pointLight color={new Color(0xdddddd)} position={[-50, -50, -50]} />
      <BoxMesh position={[0, 0, 0]} />
    </Canvas>
  );
}
