import React from 'react'



export const Pagination = (props) => {
    const {page, setPage} = props
    

  return (
    <div className="d-flex justify-content-center my-4">
        <button
          className="btn btn-success mx-2"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        
        <button
          className="btn btn-success mx-2 px-4"
          onClick={() => setPage(page + 1)}
          //disabled={page === totalPages}
        >
          Next
        </button>
      </div>
  )
}
