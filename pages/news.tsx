import NewsBlogSec1 from "@/components/NewsBlog/NewsBlogSec1";
import NewsBlogSec2 from "@/components/NewsBlog/NewsBlogSec2";
import NewsBlogSec3 from "@/components/NewsBlog/NewsBlogSec3";
import NewsBlogSec4 from "@/components/NewsBlog/NewsBlogSec4";
import NewsBlogSec5 from "@/components/NewsBlog/NewsBlogSec5";
import NewsBlogSec6 from "@/components/NewsBlog/NewsBlogSec6";
import NewsBlogSec7 from "@/components/NewsBlog/NewsBlogSec7";
import type { NextPage } from "next";

const News: NextPage = () => {
  return (
    <div className="relative w-full bg-fixed bg-center bg-cover bg-mainpage overflow-y-auto">
      <NewsBlogSec1 />
      <NewsBlogSec2 />
      <NewsBlogSec3 />
      <NewsBlogSec4 />
      <NewsBlogSec5 />
      <NewsBlogSec6 />
      <NewsBlogSec7 />
    </div>
  );
};

export default News;