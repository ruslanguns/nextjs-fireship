import { SERVICE_URL } from '@/lib/constants';
import Link from 'next/link';

export default async function Blog() {
  const apiUrl = SERVICE_URL + '/api/content';
  const posts = await fetch(apiUrl).then((res) => res.json());
  return (
    <div>
      <h1>Welcome to our Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
