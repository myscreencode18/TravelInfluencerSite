import React, { useState } from "react";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  const handleSave = (blog) => {
    if (editingBlog) {
      setBlogs(blogs.map((b) => (b.id === blog.id ? blog : b)));
      setEditingBlog(null);
    } else {
      setBlogs([...blogs, blog]);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  const handleCancel = () => {
    setEditingBlog(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <BlogForm
        onSave={handleSave}
        onCancel={handleCancel}
        editingBlog={editingBlog}
      />
      <BlogList blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default BlogAdmin;
