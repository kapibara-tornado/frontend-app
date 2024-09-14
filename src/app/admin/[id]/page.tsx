import React from 'react';
import { notFound } from 'next/navigation';
import { client } from '@/lib/client';
import styles from './admin.module.css';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaUser, FaChartBar, FaLock, FaCogs, FaFile, FaKey } from 'react-icons/fa';


// Define types
type Blog = {
  id: string;
  title: string;
  content: string;
};

type User = {
  id: string,
  title: string;
  content: string;
};

const PostPage = async ({ params }: { params: { id: string} }) => {
  const { id } = params;
  try{
  // Fetch data
  const data = await client.get({ endpoint: 'blogs' });
  const blogs: Blog[] = data.contents;
  console.log("BLOG", blogs);

  const Users = await client.get({endpoint : 'blogs', contentId : 'hf1mzvnhs'});
  const users: User[] = Users.contents;
  console.log("users", Users);

  const Contents = await client.get({endpoint : 'blogs', contentId : 'nv2s4ui1jo'});
  console.log("Contents", Contents);

  const dataAnalyze = await client.get({endpoint : 'blogs', contentId : '24nfkdi3xg'});
  console.log("dataAnalyze", dataAnalyze);

  const security = await client.get({endpoint : 'blogs', contentId :  'tbpjzrhsvr'});
  console.log("Security", security);

  const API = await client.get({endpoint : 'blogs', contentId : 'pd3610la5'});
  console.log("API", API);

  const files = await client.get({endpoint : 'blogs', contentId : 'pvc4qgbkei'});
  console.log("File", files);

  // Find the blog with the matching ID
  const blog = blogs.find((blog) => blog.id === id);
  console.log("ID:", blog);

  // if (!blog) {
  //   // If no blog is found, return a 404 page
  //   return notFound();
  // }
  // console.log("blogID:",blog);

  return (
    // <main>
    //   <h1>{blog.title}</h1>
    //   <nav>
    //   <div dangerouslySetInnerHTML={{__html: `${blog.content}`}}></div>
    //   </nav>
    // </main>
    <section className={styles.top}>
        <div>
          <h1 className={styles.title}>P&P Admin</h1>
            <nav className={styles.nav}>
            <li>
              <Button variant="link" size={'lg'}>
                <Link href={`/admin/${Users.id}`}>
                  <FaUser style={{ marginRight: '8px' }} /> ユーザ
                </Link>
              </Button>
            </li>
              <li>
                <Button variant="link" size={'lg'}>
                  <Link href={`/admin/${Contents.id}`}>
                    <FaChartBar style={{ marginRight: '8px' }} /> コンテンツ
                  </Link>
                </Button>
              </li>
            <li>
              <Button variant="link" size={'lg'}>
                <Link href={`/admin/${dataAnalyze.id}`}>
                  <FaCogs style={{ marginRight: '8px' }} />データ分析
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" size={'lg'}>
                <Link href={`/admin/${security.id}`}>
                  <FaLock style={{ marginRight: '8px' }} />セキュリティ
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" size={'lg'}>
                <Link href={`/admin/${API.id}`}>
                  <FaKey style={{ marginRight: '8px' }} />API
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" size={'lg'}>
                <Link href={`/admin/${files.id}`}>
                  <FaFile style={{ marginRight: '8px' }} />ファイル
                </Link>
              </Button>
            </li>
            </nav>
            <div className={styles.content}>
          {blog ? (
          blog.id === 'hf1mzvnhs' ? (
            <div dangerouslySetInnerHTML={{__html: `${blog.content}`}}></div>
          ) : blog.id === 'nv2s4ui1jo' ? (
            <p>これはコンテンツに関する内容です。</p>
          ) : blog.id === '24nfkdi3xg' ? (
            <p>これはデータ分析に関する内容です。</p>
          ) : blog.id === 'tbpjzrhsvr' ? (
            <p>これはセキュリティに関する内容です。</p>
          ) : blog.id === 'pd3610la5' ? (
            <p>これはAPIに関する内容です。</p>
          ) : blog.id === 'pvc4qgbkei' ? (
            <p>これはファイルに関する内容です。</p>
          ) : (
            <p>その他の内容です。</p>
          )
        ) : (
          <p>ブログが見つかりませんでした。</p>
        )}
      </div>
        </div>
    </section>
  );
  }catch(error){
    console.error('Failed to fetch blog:', error);
    return notFound();
  }
};

export default PostPage;
