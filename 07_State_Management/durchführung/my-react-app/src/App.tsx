import './App.css'
import type { BlogPost } from './types/BlogPost'
import * as Constants from './data/BlogpostsData';
import PostCard from './components/PostCard'
import AppHeader from './components/AppHeader';
import {ThemeProvider} from './context/ThemeContext';

function App() {
  const blogPosts: BlogPost[] = Constants.blogPosts
  return (
    <ThemeProvider>
    <div className="blogPage">
     <AppHeader/>
      <div className="content">
        <div className="content-gridContainer">
          {blogPosts.map((post: BlogPost, index) => (
          <PostCard blogPost={post}/>
          ))}
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
