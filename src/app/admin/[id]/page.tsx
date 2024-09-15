import React from 'react';
import { notFound } from 'next/navigation';
import { client } from '@/lib/client';
import styles from './admin.module.scss';
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

  const Users = await client.get({endpoint : 'blogs', contentId : 'hf1mzvnhs'});
  const users: User[] = Users.contents;

  const Contents = await client.get({endpoint : 'blogs', contentId : 'nv2s4ui1jo'});

  const dataAnalyze = await client.get({endpoint : 'blogs', contentId : '24nfkdi3xg'});

  const security = await client.get({endpoint : 'blogs', contentId :  'tbpjzrhsvr'});

  const API = await client.get({endpoint : 'blogs', contentId : 'pd3610la5'});

  const files = await client.get({endpoint : 'blogs', contentId : 'pvc4qgbkei'});

  // Find the blog with the matching ID
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    // If no blog is found, return a 404 page
    return notFound();
  }

  return (
    <div className={styles.main}>
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
        </div>
      </section>
            <div className={styles.content}>
          {blog ? (
          blog.id === 'hf1mzvnhs' ? (
            <div dangerouslySetInnerHTML={{__html: `${blog.content}`}} className={styles.post}></div>
          ) : blog.id === 'nv2s4ui1jo' ? (
            <div dangerouslySetInnerHTML={{__html: `${blog.content}`}} className={styles.post}></div>
          ) : blog.id === '24nfkdi3xg' ? (
            <div dangerouslySetInnerHTML={{__html: `${blog.content}`}} className={styles.post}></div>
          ) : blog.id === 'tbpjzrhsvr' ? (
            <div dangerouslySetInnerHTML={{__html: `${blog.content}`}} className={styles.post}></div>
          ) : blog.id === 'pd3610la5' ? (
            <div dangerouslySetInnerHTML={{__html: `${blog.content}`}} className={styles.post}></div>
          ) : blog.id === 'pvc4qgbkei' ? (
            <div dangerouslySetInnerHTML={{__html: `${blog.content}`}} className={styles.post}></div>
          ) : (
            <p>その他の内容です。</p>
          )
        ) : (
          <p>ブログが見つかりませんでした。</p>
        )}
      </div>
    </div>
  );
  }catch(error){
    return notFound();
  }
};

export default PostPage;