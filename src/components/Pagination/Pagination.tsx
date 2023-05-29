import './pagination-style.css';

type PaginationProps = {
  totalPages: number, 
  page: number, 
  changePage: (prev: number) => void
}

const Pagination: React.FC<PaginationProps> = ({totalPages, page, changePage}) => {
  const pagesArray = new Array(totalPages).fill('_');
  return(
    <div className="container">
      <div className="page__wrapper">
        <button
          className='page'
          onClick={() => changePage(Math.max(page - 1, 1))}
        >&larr;</button>
        {pagesArray.map((_, index) => 
          <button
            onClick={() => changePage(index + 1)}
            key={index}
            className={
              page === index + 1 ? 'page page__current' : 'page'
            }>
            {index + 1}
          </button>  
        )}
        <button
          className='page' 
          onClick={() => changePage(
            Math.min(page + 1, totalPages)
          )}>&rarr;</button>
      </div>
    </div>
  )
};

export default Pagination;