import React from 'react';
import './Blog.css';
import dateIcon from '../../../assets/icons/date.png'; 
import blog1 from "../../../assets/blog1.avif";
import blog2 from "../../../assets/blog2.avif";
import blog3 from "../../../assets/blog3.avif";

const blogs = [
  {
    id: 1,
    image: blog1, // Replace with your image URL or local path
    category: 'Fitness',
    title: 'Top 10 Exercises for Strength Training',
    date: 'Dec 20, 2024',
    author: 'John Doe',
  },
  {
    id: 2,
    image: blog2,
    category: 'Nutrition',
    title: 'The Best Diet for Muscle Growth',
    date: 'Dec 18, 2024',
    author: 'Jane Smith',
  },
  {
    id: 3,
    image: blog3,
    category: 'Wellness',
    title: 'How to Improve Mental Health Through Fitness',
    date: 'Dec 15, 2024',
    author: 'Alice Johnson',
  },
];

const Blog = () => {
  return (
    <div className='blog-cont'>
    <div className='blog-text'>
    <h2>our latest blogs</h2>
    </div>
    <div className="blog-container">
      
      {/* Left Blog */}
      <div className="blog-left">
        <div className="blog-card">
          <div className="blog-image-container">
            <img src={blogs[0].image} alt={blogs[0].title} className="blog-image" />
            <div className="blog-category">{blogs[0].category}</div>
          </div>
          <h3 className="blog-title">{blogs[0].title}</h3>
          <div className="blog-meta">
            <span className="blog-date">
              <img src={dateIcon} alt="Date" className="date-icon" /> {blogs[0].date}
            </span>
            <span className="blog-author">by {blogs[0].author}</span>
          </div>
        </div>
      </div>

      {/* Right Blogs */}
      <div className="blog-right">
        {blogs.slice(1).map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image-container">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-category">{blog.category}</div>
            </div>
            <h3 className="blog-title">{blog.title}</h3>
            <div className="blog-meta">
              <span className="blog-date">
                <img src={dateIcon} alt="Date" className="date-icon" /> {blog.date}
              </span>
              <span className="blog-author">by {blog.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Blog;
