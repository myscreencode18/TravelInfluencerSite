import React from "react";

const BlogList = ({ blogs, onEdit, onDelete }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Published Blogs</h2>

      {blogs.length === 0 && <p className="text-gray-600">No blogs yet.</p>}

      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="p-4 border rounded-lg shadow-sm flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="text-sm text-gray-500">
              {blog.author} • {blog.date} • {blog.readTime}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => onEdit(blog)}
              className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(blog.id)}
              className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
