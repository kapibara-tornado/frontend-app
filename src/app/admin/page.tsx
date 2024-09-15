import React from 'react';
import Link from 'next/link';
import { client } from '@/lib/client'
import styled from 'styled-components';

// Define types
type Blog = {
  id: string;
  title: string;
};

export default async function Admin() {
  try{
  // Fetch data
  const data = await client.get({ endpoint: 'blogs' });
  client.get({
    endpoint : 'blogs',
    contentId : 'znhssjjag8',
  }).then((res) => console.log(res));

  client.get({
    endpoint : 'blogs',
    contentId : 'hf1mzvnhs',
  }).then((res) => console.log(res));

  // Type assertion for TypeScript
  const blogs: Blog[] = data.contents;

  console.log("BLOGS:", blogs);


  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/admin/${blog.id}`}>
            {/* <Link href={`https://pptornado2024.microcms.io/api/v1/blogs/${blog.id}`}> */}
              {/* {process.env.NEXT_PUBLIC_X_MICROCMS_API_KEY} */}
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}catch(error){
    return <div>Failed to load blogs</div>;
}
}