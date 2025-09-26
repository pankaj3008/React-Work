// // components/Usestate.jsx
import { useState } from 'react';

const blogs = [
  { title: "Mastering JavaScript", content: "JavaScript is a powerful language for web development." },
  { title: "React in Indian Startups", content: "React is widely used in many Indian tech companies." },
  { title: "Career in Web Development", content: "Explore job roles and growth in web development." },
];

const BlogList = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleTitleClick = (blog) => {
    setSelectedBlog(blog);
  };
  
  return (
    <div className="blog-container">
      <h1 className="blog-heading">Blog Titles</h1>
      <ul className="blog-list">
        {blogs.map((blog, index) => (
          <li 
            key={index} 
            onClick={() => handleTitleClick(blog)} 
            className={`blog-item ${selectedBlog && selectedBlog.title === blog.title ? 'active' : ''}`}
          >
            {blog.title}
          </li>
        ))}
      </ul>

      <div className="blog-details">
        {selectedBlog ? (
          <div>
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.content}</p>
          </div>
        ) : (
          <p>Select a blog to read</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
