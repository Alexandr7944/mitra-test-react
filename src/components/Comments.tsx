import { useEffect, useState } from 'react'
import { fetching } from '../API/fetching';
import { IComment } from '../interface/IComment';
import Comment from './Comment';
import Loader from './loader/Loader';

const Comments = ({ id }: {id: number}) => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    fetching(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(json => setTimeout(() => setComments(json), 500));
  }, [id])

  return (
    <div className='comments'>
      {
        comments.length
          ? comments.map(comment => <Comment key={comment.id} comment={comment} />)
          : <Loader />
      }
    </div>
  )
}

export default Comments;