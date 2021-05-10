import React, { useEffect, useState } from 'react';

const AddWordSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getWordBySimplified(searchTerm));
  }

  const renderSearchResult = () => {
    if (!searchResult) {
      return <div>Make a search...</div>
    } else if (searchResult.length === 0) {
      return <div>No result found</div>
    } else {
      return (
        <>
         <div>{searchResult[0].simplified}</div>
         <div onClick={addWord} className="ml-3 btn btn-primary"> Add</div>
        </>
      )
    }
  } 

  return (
    <div>
      <form className="add-word-search-form" onSubmit={handleSubmit}>
        <div className="col-12">
          <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." className="form-control" name="searchTerm" />
        </div>
        <div className="col-1">
          <input type="submit" className="mt-3 mb-3 btn btn-primary" value="Search" />
        </div>
      </form>
      <div className="col-2">
            {renderSearchResult()}
          </div>
    </div>
  )
}

export default AddWordSearchBar;
