import React, { useState } from "react";

import BlogEditor from "../Components/BlogEditor.";
import axios from "axios";

const BlogPostCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/write", {
        title,
        content,
        author: "John Doe", // Replace this with dynamic data if needed
      });

      if (response.data) {
        setMessage("✅ Blog post created successfully!");
        setTitle("");
        setContent("");
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
      setMessage("❌ Failed to create blog post.");
    }
  };

  return (
    <div>
      <h2>Create a Blog Post</h2>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <BlogEditor value={content} onChange={setContent} />
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "10px",
          padding: "8px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Publish
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BlogPostCreate;
