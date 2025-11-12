import "../App.css";
import type { BlogPost } from '../types/BlogPost';

type PostCardProps = {
    blogPost: BlogPost
}

export default function PostCard({blogPost}: PostCardProps) {
    return (
          <div className="grid-post">
            <img src={new URL(blogPost.imagePath, import.meta.url).href} className="postCard-image"/>
            <p className="post-publishDate">{blogPost.publishDate.toLocaleDateString()}</p>
            <h3 className="post-title">{blogPost.title}</h3>
            <p className="post-content">{blogPost.content}</p>
          </div>
    )
}