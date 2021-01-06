import Link from 'next/link';
import Layout from '../components/Layout';

export default () => {
  return (
    <Layout title="About">
      <Link href="/">
        <a> Go to Home page</a>
      </Link>
      <p>Javascript programmer</p>
      <img src="/static/js.png" alt="js logo" />
    </Layout>
  );
};
