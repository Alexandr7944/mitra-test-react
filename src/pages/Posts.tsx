import { useState, useEffect, useCallback } from 'react'
import Post from '../components/Post';
import { IPost } from '../interface/IPost';
import { fetching } from '../API/fetching';
import Loader from '../components/loader/Loader';
import Filter from '../components/Filter/Filter';
import { IFilter } from '../interface/IFilter';
import Pagination from '../components/Pagination/Pagination';

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filter, setFilter] = useState<IFilter>({sort: '', query: ''});
  const [page, setPage] = useState(1);
  const limit = 15;
    
  useEffect(() => {
    fetching('https://jsonplaceholder.typicode.com/posts')
    .then(json => setTimeout(() => setPosts(json), 500))
  }, []);

  const filterPosts = useCallback(() => {
    return posts
      .filter(({title}) => title.includes(filter.query))
      .sort((a, b): number => {
        if (filter.sort === 'a - z') return a.title > b.title ? 1 : -1;
        if (filter.sort === 'z - a') return a.title < b.title ? 1 : -1;
        return 0;
      })
  }, [posts, filter])

  return (
    <div className='posts'>
      <div className="container">
        <Filter
          filter={filter}
          setFilter={setFilter}
        />
        {
          posts.length
            ? filterPosts().map((item, index) => 
              index > (page - 1) * limit && 
              index < (page - 1) * limit + limit && 
              <Post key={item.id} post={item} />)
            : <Loader />
        }
      </div>
      <Pagination
        totalPages={Math.ceil(filterPosts().length / limit)}
        page={page}
        changePage={setPage}
      />
    </div>
  )
}

export default Posts