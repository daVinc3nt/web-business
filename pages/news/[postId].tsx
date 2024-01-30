import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import getPost from '../../lib/helper';
import { useState, useEffect } from 'react';
import BlogPost from '../../components/NewsBlog/NewsPost/BlogPost';
import { Bitter } from 'next/font/google';
import Posts from '../api/data';

const bitter = Bitter({ subsets: ['latin'] });

interface PageProps {
  fallback: any;
}

const Page: React.FC<PageProps> = ({ fallback }) => {
  const router = useRouter();
  const { postId } = router.query;
  const data = Posts[postId as string];
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   getPost(parseFloat(postId as string)).then((res) => {
  //     setData(res);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  if (!data) return <div></div>;

  return (
    <div
      style={{ backgroundImage: `url(${data?.img})` }}
      className={`relative w-full min-h-screen bg-fixed bg-center bg-cover overflow-y-auto ${bitter.className}`}>
      <BlogPost post={data}></BlogPost>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  // const posts = await getPost(parseFloat(params?.postId as string));
  const posts = Posts[parseFloat(params?.postId as string)];

  return {
    props: {
      fallback: {
       
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const posts = await getPost(null);
  const posts = Posts;

  const paths = posts.flatMap((value) => [
    {
      params: {
        postId: value.id.toString(),
      },
      locale: 'vi',
    },
    {
      params: {
        postId: value.id.toString(),
      },
      locale: 'en',
    },
  ]);

  return {
    paths,
    fallback: false,
  };
};

export default Page;