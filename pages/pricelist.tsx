import type { NextPage } from "next";
import PriceList from "@/components/PriceList/PriceList";
const pricelist: NextPage = () => {
  return (
    <div className="relative w-full bg-fixed  bg-center bg-cover bg-mainpage overflow-y-auto ">
      <PriceList />
    </div>
  );
};

export default pricelist;
