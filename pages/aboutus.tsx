import type { NextPage } from "next";
import ExportGroup from "../components/Group/Export";
import { useRouter } from "next/router";
const About: NextPage = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/news");
  };
  return (
    <div className="relative w-full bg-fixed bg-center bg-cover bg-mainpage overflow-y-auto rounded-lg">
      <div className="sm:px-[4.5rem] px-2 lg:px-[5.5rem] bg-black/70 pt-20 pb-2 rounded-lg">
        <ExportGroup />
        <div className="flex justify-center bg-white rounded-b-lg">
          <button
            className="my-14 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleButtonClick}
          >
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
