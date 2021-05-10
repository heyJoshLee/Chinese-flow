import React, { useEffect } from 'react';
import EditForm from './EditForm';
import { useDispatch, useSelector } from 'react-redux';
import { getResource } from '../../actions/resources';
import { Link } from "react-router-dom";

const Edit = (props) => {

  const dispatch = useDispatch();
  const resourceId = props.match.params.id;
  const resource = useSelector(state => state.resource);

useEffect(() => {
    dispatch(getResource(resourceId));
  }, [])
  console.log(resource)
  if (!resource) {return <div>Loading...</div>}
  return (
    <div>
      <h1 className="text-center">Editing {resource.title}</h1>
        <Link to={`/resources/${resourceId}/edit/words`} >
          <button className="btn btn-block btn-primary">Edit words</button>
        </Link>
        <EditForm resource={resource} />
    </div>
  )
}

export default Edit;
