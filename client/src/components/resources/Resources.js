import React, { useEffect } from 'react';
import ResourcesList from './ResourcesList';
import { getResources } from '../../actions/resources';
import { useDispatch, useSelector } from 'react-redux';
import { getWordsForLoggedInUser } from '../../actions/users';

const Resources = () => {
  const dispatch = useDispatch();
  const resources = useSelector(state => state.resources);

  useEffect(() => {
    dispatch(getResources());
    dispatch(getWordsForLoggedInUser());
  },[])


  if (!resources) { 
    dispatch(getResources);
    return <div> Loading...</div>
  }
  return (
    <div className="mt-5">
      <h1 className="text-center"> Resources</h1>
      <div className="dropdown show">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Date
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href="#">Newest First</a>
          <a className="dropdown-item" href="#">Oldest First</a>
        </div>
      </div>

<hr />

    

      <ResourcesList resources={resources} />

    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link" href="#" 
// @ts-ignore
          tabindex={-1}>Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item active">
          <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
        </li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>



    </div>
  )
}

export default Resources;
