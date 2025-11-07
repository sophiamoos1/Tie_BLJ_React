import { useState } from 'react'
import './App.css'
import type { BlogPost } from './types/BlogPost'
import * as Constants from './data/BlogpostsData'
import PostCard from './components/PostCard'

function App() {
  const blogPosts: BlogPost[] = Constants.blogPosts;
  return (
    <div className="blogPage">
      <div className="header">
      <h1 className="headerTitle">My Personal Blog</h1>
      </div>
      <div className="content">
        <div className="content-gridContainer">
          {blogPosts.map((post: BlogPost, index) => (
            <PostCard blogPost={post}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App
