import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque culpa
      cum debitis dignissimos earum illo ipsum iure numquam quae quas quo, rem
      repudiandae sapiente temporibus ut velit vitae voluptatum.
    </p>
  </Layout>
);

export default withRouter(Post);
