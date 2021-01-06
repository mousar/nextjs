import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const Index = (a) => {
  return (
    <Layout title="Home">
      <Link href="/about">
        <a> Go to About page</a>
      </Link>
      <p>Welcome to the home pages</p>
    </Layout>
  );
};

export default Index;
