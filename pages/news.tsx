import NewsBlogSec1 from "@/components/NewsBlog/NewsBlogSec1";
import NewsBlogSec2 from "@/components/NewsBlog/NewsBlogSec2";
import NewsBlogSec3 from "@/components/NewsBlog/NewsBlogSec3";
import ScrollToTopButton from "@/components/NewsBlog/ScrollToTop";
import type { NextPage } from "next";
import { Bitter } from 'next/font/google'
import { useIntl } from "react-intl";

const bitter = Bitter({ subsets: ['latin'] });

const News: NextPage = () => {
  const intl = useIntl();
  const newsCategories = [
    { title: intl.formatMessage({ id: 'NewsBlog.Blog3.title1' }), category: "all", id: "allnews" },
    { title: intl.formatMessage({ id: 'NewsBlog.Blog3.title2' }), category: "Customer", id: "customer" },
    { title: intl.formatMessage({ id: 'NewsBlog.Blog3.title3' }), category: "Driver", id: "driver" },
    { title: intl.formatMessage({ id: 'NewsBlog.Blog3.title4' }), category: "Partner", id: "partner" },
    { title: intl.formatMessage({ id: 'NewsBlog.Blog3.title5' }), category: "Brand", id: "brand" },
  ];

  return (
    <div className={`relative w-full bg-fixed bg-center bg-cover bg-mainpage overflow-y-auto ${bitter.className}`}>
      <NewsBlogSec1 />
      <NewsBlogSec2 />
      {newsCategories.map(({ title, category, id }) => (
        <NewsBlogSec3 key={id} title={title} category={category} id={id} />
      ))}
      <ScrollToTopButton />
    </div>
  );
};

export default News;
