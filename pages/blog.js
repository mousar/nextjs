import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ slug, title }) => (
  <li>
    <Link href={`/post?title=${title}`} as={`/${slug}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout>
    <ul>
      <PostLink slug="react-post" title="React Post" />
      <PostLink slug="angular-post" title="Angular Post" />
      <PostLink slug="vue-post" title="Vue Post" />
    </ul>
  </Layout>
);

export default Blog;
