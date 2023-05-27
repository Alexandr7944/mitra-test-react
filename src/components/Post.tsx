import { useState } from 'react'
import person from "../assets/cabinet.png";
import { IPost } from '../interface/IPost'
import Comments from './Comments';
import { useNavigate } from 'react-router-dom';

const Post: React.FC<PostProps> = ({ post }) => {
  const [comments, setComments] = useState<boolean>(false);
  const router = useNavigate();
  
  return (
    <div className='post'>
      <div className="post__wrapper">
        <img
          className='post__image'
          src={person}
          alt="person"
          onClick={() => router(`../posts/${post.userId}`)}
        />
        <div className="post__content">
          <h3 className="post__title">{post.title}</h3>
          <p className="post__text">{post.body}</p>
          <button className="post__comments"
            onClick={() => setComments(prev => !prev)}
          >
            {comments ? 'Скрыть коментарии' : 'Коментарии'}
          </button>
          {comments && <Comments key={post.id} id={post.id} />}
        </div>
      </div>
    </div>
  )
}

export default Post

type PostProps = {
  post: IPost
}