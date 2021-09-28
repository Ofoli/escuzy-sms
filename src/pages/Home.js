import Banner from "../components/banner/banner";
import HomeBanner from "../components/Home/banner/homeBanner";
function Home() {
  return (
    <div>
      <Banner>
        <HomeBanner />
      </Banner>
      <h2>Homepage</h2>
    </div>
  );
}

export default Home;
