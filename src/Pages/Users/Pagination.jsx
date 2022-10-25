import React from 'react'

const Pagination = ({totalPost, postPerPage, setCurrentPage, currentPage}) => {
    // get arrays of page numbers
    let pages = []
    
    // work dynamically 
    for (let i = 1; i<= Math.ceil(totalPost/postPerPage); i++){
        pages.push(i)
    }
  return (
    <div className='btn-wrapper'>
       {currentPage !== 1 &&  <button onClick={() => setCurrentPage(currentPage - 1)}> prev</button>}    
        {pages.map((page, index) => {

            const switchPage = () => {
                setCurrentPage(page)
            }
            const style = page === currentPage ? 'pagination-btn active' : 'pagination-btn'
            return (
                <>
            <button key={index} className={style} onClick={switchPage} type='button'>{page}</button>
                </>
            )
        })}
        {currentPage !== 10 && <button onClick={() => setCurrentPage(currentPage + 1)}> next</button>}    
    </div>
  )
}

export default Pagination