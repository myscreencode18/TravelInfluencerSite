import React, { useState, useEffect } from "react";

const BlogForm = ({ onSave, onCancel, editingBlog }) => {
  const [title, setTitle] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [readTime, setReadTime] = useState("5 min read");
  const [content, setContent] = useState([]);

  // Load existing blog when editing
  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setHeroImage(editingBlog.heroImage);
      setExcerpt(editingBlog.excerpt);
      setAuthor(editingBlog.author);
      setDate(editingBlog.date);
      setReadTime(editingBlog.readTime);
      setContent(editingBlog.content);
    }
  }, [editingBlog]);

  const addBlock = (type) => {
    setContent([...content, { id: crypto.randomUUID(), type, value: "" }]);
  };

  const updateBlock = (id, newValue) => {
    setContent(content.map((b) => (b.id === id ? { ...b, value: newValue } : b)));
  };

  const deleteBlock = (id) => {
    setContent(content.filter((b) => b.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: editingBlog ? editingBlog.id : crypto.randomUUID(),
      title,
      heroImage,
      excerpt,
      author,
      date,
      readTime,
      content,
    };
    onSave(newBlog);

    // reset if adding new
    if (!editingBlog) {
      setTitle("");
      setHeroImage("");
      setExcerpt("");
      setAuthor("");
      setDate("");
      setReadTime("5 min read");
      setContent([]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-6"
    >
      <h2 className="text-xl font-bold text-gray-800">
        {editingBlog ? "Edit Blog" : "Add New Blog"}
      </h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-md p-2"
        required
      />

      <input
        type="text"
        placeholder="Hero Image URL"
        value={heroImage}
        onChange={(e) => setHeroImage(e.target.value)}
        className="w-full border rounded-md p-2"
        required
      />

      <textarea
        placeholder="Short Excerpt"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        className="w-full border rounded-md p-2"
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border rounded-md p-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <input
        type="text"
        placeholder="Read Time (e.g., 7 min read)"
        value={readTime}
        onChange={(e) => setReadTime(e.target.value)}
        className="w-full border rounded-md p-2"
      />

      {/* Content Blocks */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700">Content Blocks</h3>
        {content.map((block) => (
          <div key={block.id} className="space-y-2 border p-3 rounded-md">
            <label className="block text-sm font-medium text-gray-600">
              {block.type.toUpperCase()} Block
            </label>

            {block.type === "paragraph" && (
              <textarea
                value={block.value}
                onChange={(e) => updateBlock(block.id, e.target.value)}
                placeholder="Write a paragraph..."
                className="w-full border rounded-md p-2"
              />
            )}

            {block.type === "image" && (
              <input
                type="text"
                value={block.value}
                onChange={(e) => updateBlock(block.id, e.target.value)}
                placeholder="Image URL"
                className="w-full border rounded-md p-2"
              />
            )}

            {block.type === "quote" && (
              <textarea
                value={block.value}
                onChange={(e) => updateBlock(block.id, e.target.value)}
                placeholder="Enter a quote..."
                className="w-full border rounded-md p-2 italic"
              />
            )}

            <button
              type="button"
              onClick={() => deleteBlock(block.id)}
              className="text-red-600 text-sm mt-2"
            >
              🗑 Delete Block
            </button>
          </div>
        ))}

        {/* Add buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => addBlock("paragraph")}
            className="px-3 py-2 bg-indigo-600 text-white rounded-md"
          >
            + Paragraph
          </button>
          <button
            type="button"
            onClick={() => addBlock("image")}
            className="px-3 py-2 bg-green-600 text-white rounded-md"
          >
            + Image
          </button>
          <button
            type="button"
            onClick={() => addBlock("quote")}
            className="px-3 py-2 bg-yellow-600 text-white rounded-md"
          >
            + Quote
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
        >
          {editingBlog ? "Update Blog" : "Save Blog"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-3 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default BlogForm;
