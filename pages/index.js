import { loadData } from "./api/post";

const LOAD_MORE_STEP = 10;

const Home = ({ initialPosts, total }) => {
  return <>Hello World</>;
};

export async function getServerSideProps() {
  const { posts, total } = await loadData(0, LOAD_MORE_STEP);
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
};

export default Home;
