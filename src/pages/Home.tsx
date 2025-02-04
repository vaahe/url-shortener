import { Card } from "antd";
import { ShortenForm } from "../components/ShortenForm";
import { UrlList } from "../components/UrlList";

const Home = () => {
  return (
    <Card style={{ width: "100%", maxWidth: 600 }}>
      <h2 style={{ textAlign: "center" }}>Shorten Your URL</h2>
      <ShortenForm />
      <UrlList />
    </Card>
  );
};

export default Home;
