import { IComment } from '../interface/IComment'

const Comment = ({ comment }: { comment: IComment }) => {
  return (
    <div className="comment">
      <h5 className="comment__title">{comment.email}</h5>
      <p className="comment__text">{comment.body}</p>
    </div>
  )
}

export default Comment