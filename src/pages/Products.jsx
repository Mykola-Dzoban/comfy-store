import { QueryClient } from "@tanstack/react-query";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { fetchData } from "../utils";

const url = "/products";

const allProductsQuery = (queryParams) => {
  const { search, company, category, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "products",
      search ?? "",
      company ?? "all",
      category ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => fetchData(url, { params: queryParams }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const resp = await queryClient.ensureQueryData(allProductsQuery(params));
    const products = resp.data.data;
    const meta = resp.data.meta;
    return { products, meta, params };
  };

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
