// import React from "react";

// const SingleBlogPost = () => {
//   return (
//     <article className="bg-white">
//       {/* Hero Section */}
//       <div className="relative w-full h-[60vh]">
//         <img
//           src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
//           alt="Himalayan Sunrise"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
//             A Sunrise in the Himalayas
//           </h1>
//           <p className="mt-4 text-lg text-gray-200 italic">
//             "Golden rays kissed the peaks while silence filled the air — and I
//             felt infinite."
//           </p>
//           <p className="mt-6 text-sm text-gray-300">
//             By Rahul Gupta • July 2025 • 7 min read
//           </p>
//         </div>
//       </div>

//       {/* Story Content */}
//       <div className="max-w-4xl mx-auto px-6 py-12 prose prose-lg prose-indigo">
//         <p>
//           The morning started with a biting chill, my breath fogging the air
//           with every step. As the sky began to shift from deep blue to streaks
//           of orange, I realized I was standing at the edge of something far
//           greater than myself. The Himalayas weren’t just mountains — they were
//           guardians of time, holding stories older than civilization itself.
//         </p>

//         <img
//           src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"
//           alt="Mountain Trek"
//           className="rounded-lg shadow-md my-10"
//         />

//         <p>
//           The silence was profound. Only the crunch of snow under my boots
//           reminded me I was still moving. Locals say the mountains whisper to
//           those who listen, and maybe they did — or maybe it was just my heart
//           beating louder than ever before.
//         </p>

//         <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-700 my-8">
//           “Some places don’t just change your mood, they change your entire
//           existence.”
//         </blockquote>

//         <p>
//           As the sun crested, a golden flood bathed the peaks, each shimmering
//           like fire. For a fleeting second, I wasn’t just watching a sunrise —
//           I was inside it. And that memory will follow me wherever I wander.
//         </p>
//       </div>

//       {/* Share + Next */}
//       <div className="max-w-4xl mx-auto px-6 pb-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800">
//             Share this story:
//           </h3>
//           <div className="flex gap-3 mt-3">
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700">
//               Twitter
//             </button>
//             <button className="px-4 py-2 bg-blue-800 text-white rounded-full text-sm hover:bg-blue-900">
//               Facebook
//             </button>
//             <button className="px-4 py-2 bg-pink-600 text-white rounded-full text-sm hover:bg-pink-700">
//               Instagram
//             </button>
//           </div>
//         </div>

//         <div className="text-center md:text-right">
//           <h3 className="text-lg font-semibold text-gray-800">Next Story</h3>
//           <p className="mt-2 text-indigo-600 font-medium hover:underline cursor-pointer">
//             Café Hopping in Paris →
//           </p>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default SingleBlogPost;

import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";

const SingleBlogPost = () => {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Blog not found
      </div>
    );
  }

  const currentIndex = blogs.findIndex((b) => b.id === id);
  const nextBlog = blogs[currentIndex + 1];

  return (
    
    <article className="bg-white">
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <img
          src={blog.heroImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            {blog.title}
          </h1>
          <p className="mt-4 text-lg text-gray-200 italic max-w-2xl">
            “{blog.excerpt}”
          </p>
          <p className="mt-6 text-sm text-gray-300">
            By {blog.author} • {blog.date} • {blog.readTime}
          </p>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 prose prose-lg prose-indigo">
        {blog.content.map((block, index) => {
          if (block.type === "text") {
            return <p key={index}>{block.value}</p>;
          }

          if (block.type === "image") {
            return (
              <img
                key={index}
                src={block.value}
                alt=""
                className="rounded-lg shadow-md my-10"
              />
            );
          }

          if (block.type === "quote") {
            return (
              <blockquote
                key={index}
                className="border-l-4 border-indigo-600 pl-4 italic text-gray-700 my-8"
              >
                {block.value}
              </blockquote>
            );
          }

          return null;
        })}
      </div>

      {/* Share + Next */}
      <div className="max-w-4xl mx-auto px-6 pb-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Share this story:
          </h3>
          <div className="flex gap-3 mt-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm">
              Twitter
            </button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded-full text-sm">
              Facebook
            </button>
            <button className="px-4 py-2 bg-pink-600 text-white rounded-full text-sm">
              Instagram
            </button>
          </div>
        </div>

        {nextBlog && (
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-gray-800">
              Next Story
            </h3>
            <Link
              to={`/blog/${nextBlog.id}`}
              className="mt-2 text-indigo-600 font-medium hover:underline"
            >
              {nextBlog.title} →
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default SingleBlogPost;
