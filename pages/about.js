import Link from 'next/link';
import Layout from '../components/Layout';

const About = ({ user }) => {
  const { name, avatar_url } = user;
  return (
    <Layout title="About me">
      <p>{name}</p>
      <img src={avatar_url} alt="my photo" />
    </Layout>
  );
};

About.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/users/mousar');
  const json = await res.json();
  return { user: json };
};

export default About;
