import { Link } from "preact-router";

const Home = () => {
  return (
    <>
      <div>homepage</div>
      <Link href="/someOtherPage">Me</Link>
    </>
  );
};

export default Home;
