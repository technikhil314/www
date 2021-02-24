import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from '../components/box';


export default function () {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Portfolio`}
      description={siteConfig.tagline}>
      <main>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 0]} />
          <Box position={[0, 0, 0]} />
        </Canvas>
      </main>
    </Layout>
  );
}
