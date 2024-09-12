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
}

const PostPage = async ({ params }: { params: { id: string} }) => {
  const { id } = params;
  try{
  // Fetch data
  const data = await client.get({ endpoint: 'blogs' });
  const blogs: Blog[] = data.contents;

  const Users = await client.get({endpoint : 'blogs', contentId : 'hf1mzvnhs',});
  const users: User[] = Users.contents;
  console.log("users", users);

  // Find the blog with the matching ID
  const blog = blogs.find((blog) => blog.id === id);
  console.log("ID:", blog);

  if (!blog) {
    // If no blog is found, return a 404 page
    return notFound();
  }
  console.log("blogID:",blog);

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
                <Link href={`/`}>
                  <FaUser style={{ marginRight: '8px' }} /> ユーザ
                </Link>
              </Button>
            </li>
              <li>
                <Button variant="link" size={'lg'}>
                  <Link href={'/result'}>
                    <FaChartBar style={{ marginRight: '8px' }} /> コンテンツ
                  </Link>
                </Button>
              </li>
            <li>
              <Button variant="link" size={'lg'}>
                <Link href={'/listresult'}>
                  <FaCogs style={{ marginRight: '8px' }} />データ分析
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" size={'lg'}>
                <Link href={'/printdemo'}>
                  <FaLock style={{ marginRight: '8px' }} />セキュリティ
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" size={'lg'}>
                <Link href={'/printdemo'}>
                  <FaKey style={{ marginRight: '8px' }} />API
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" size={'lg'}>
                <Link href={'/printdemo'}>
                  <FaFile style={{ marginRight: '8px' }} />ファイル
                </Link>
              </Button>
            </li>

            </nav>
        </div>
    </section>
  );
  }catch(error){
    console.error('Failed to fetch blog:', error);
    return notFound();
  }
};

export default PostPage;

