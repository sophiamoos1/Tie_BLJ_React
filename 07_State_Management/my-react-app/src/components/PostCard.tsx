import type { BlogPost } from "../types/BlogPost"
import '../App.css'
import image1 from '../images/image1.png'

type PostCardProps = {
    blogPost: BlogPost;
}

export default function PostCard({blogPost}: PostCardProps) {
    // <img src={`${blogPost.imagePath}`} />
    return (
        <div className="grid-post">
            <img src={blogPost.imagePath} />
              <p>{blogPost.title}</p>
              <p>{blogPost.content}</p>
              <p>{blogPost.publishDate.toLocaleDateString()}</p>
            </div>
    )

}