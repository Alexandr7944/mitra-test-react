import { useState, useEffect } from 'react'
import Post from './Post';
import { IPost } from '../interface/IPost';
import { fetching } from '../API/fetching';
import Loader from './loader/Loader';
import Filter from './Filter';

const Posts = () => {
  let postsConst: IPost[];
  const [posts, setPosts] = useState<IPost[]>([]);
  
  useEffect(() => {
    fetching('https://jsonplaceholder.typicode.com/posts')
    .then(json => setTimeout(() => {
      setPosts(json);
      postsConst = json;
    }, 500))
  }, []);

  return (
    <div className='posts'>
      <div className="container">
        <Filter setPosts={setPosts} postsConst={postsConst} />
        {
          posts.length
            ? posts.map(i => <Post key={i.id} post={i} />)
            : <Loader />
        }
      </div>
    </div>
  )
}

export default Posts