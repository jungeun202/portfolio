import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa"

const Blog = () => {
  const posts = [
    {
      slug: "first-post",
      title: "My First Blog",
    },
    {
      slug: "second-post",
      title: "Second Blog",
    },

  ];

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">Thoughts</h1>
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Blog;
