import React, { useState } from "react";

const BlogForm = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [readTime, setReadTime] = useState("5 min read");
  const [content, setContent] = useState([]);

  // Add new content block
  const addBlock = (type) => {
    setContent([...content, { type, value: "" }]);
  };

  // Update content block
  const updateBlock = (index, newValue) => {
    const updated = [...content];
    updated[index].value = newValue;
    setContent(updated);
  };

  // Save blog
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: crypto.randomUUID(),
      title,
      heroImage,
      excerpt,
      author,
      date,
      readTime,
      content,
    };
    onSave(newBlog);

    // Reset form
    setTitle("");
    setHeroImage("");
    setExcerpt("");
    setAuthor("");
    setDate("");
    setReadTime("5 min read");
    setContent([]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-6"
    >
      <h2 className="text-xl font-bold text-gray-800">Add New Blog</h2>

      {/* Basic Info */}
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
        {content.map((block, idx) => (
          <div key={idx} className="space-y-2">
            <label className="block text-sm font-medium text-gray-600">
              {block.type.charAt(0).toUpperCase() + block.type.slice(1)} Block
            </label>

            {block.type === "paragraph" && (
              <textarea
                value={block.value}
                onChange={(e) => updateBlock(idx, e.target.value)}
                placeholder="Write a paragraph..."
                className="w-full border rounded-md p-2"
              />
            )}

            {block.type === "image" && (
              <input
                type="text"
                value={block.value}
                onChange={(e) => updateBlock(idx, e.target.value)}
                placeholder="Image URL"
                className="w-full border rounded-md p-2"
              />
            )}

            {block.type === "quote" && (
              <textarea
                value={block.value}
                onChange={(e) => updateBlock(idx, e.target.value)}
                placeholder="Enter a quote..."
                className="w-full border rounded-md p-2 italic"
              />
            )}
          </div>
        ))}

        {/* Buttons to add new blocks */}
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

      {/* Save */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
      >
        Save Blog
      </button>
    </form>
  );
};

export default BlogForm;
