import { FeaturedProducts, Hero } from "../components";
import { fetchData } from "../utils";

const url = "/products?featured=true";

export const loader = async () => {
  const resp = await fetchData.get(url);
  const products = resp.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
