import './loader-style.css';

const Loader = () => {
  return(
    <div className='loader-container'>
      <h3>
        Идет загрузка...
      </h3>
      <div className='ldsSpinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>    
  )
};

export default Loader;