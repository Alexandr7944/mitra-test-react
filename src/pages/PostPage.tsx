import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetching } from '../API/fetching';
import { IPerson } from '../interface/IPerson';
import Loader from '../components/loader/Loader';
import Post from '../components/Post';
import { IPost } from '../interface/IPost';

const PostPage = () => {
  const params = useParams();
  const [person, setPerson] = useState<IPerson>();
  const [personPosts, setPersonPosts] = useState<IPost[]>();
  const navigate = useNavigate();
  
  useEffect(() => {
    fetching(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      .then(json => setTimeout(() => setPerson(json), 500));
  }, []);

  useEffect(() => {
    fetching(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`)
      .then(json => setPersonPosts(json));
  }, []);

  return (
    <div className='post-page'>
      <div className="container">
        <span
          className="back"
          onClick={() => navigate(-1)}
        >&#8617; Назад</span>
          {
            person
              ? <div className="person">
                  <span className="person__row">Имя: {person.name}</span>
                  <span className="person__row">Ник: {person.username}</span>
                  <span className="person__row">Email: {person.email}</span>
                  <span className="person__row">Компания: {person.company.name}</span>
                  <div className="person__posts">
                    {
                      personPosts?.map(item => <Post key={item.id} post={item} />)
                    }
                  </div>
                </div>
              : <Loader />
          }
      </div>
    </div>
  )
}

export default PostPage