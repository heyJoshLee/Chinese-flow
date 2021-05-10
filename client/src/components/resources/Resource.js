import React, {useEffect} from 'react';
import WordsContainer from './WordsContainer';
import BackLink from '../shared/BackLink';
import { useDispatch, useSelector} from 'react-redux';
import { getResource } from '../../actions/resources';
import { Pencil } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { getWordsForLoggedInUser } from '../../actions/users';
import ProgressBar from './ProgressBar';

const Resource = (props) => {
  const dispatch = useDispatch();
  const resourceId = props.match.params.id;
  const resource = useSelector(state => state.resource);
  const knownWords = useSelector(state => state.knownWords)
  useEffect(() => {
      dispatch(getResource(resourceId));
      dispatch(getWordsForLoggedInUser());
    }, [])


  if (!resource) {
    dispatch(getResource(resourceId));
    dispatch(getWordsForLoggedInUser());
    return <div>Loading...</div>
  }

  return (
    <div>
      <BackLink url="/resources" text="< Back to resources" />
      <div className="resource">
        <div className="card">
          <div className="card-body">
            <ProgressBar resource={resource} knownWords={knownWords} />
            <h1 className="text-center">
              {resource.title}
              <span className="ml-4 hover">
                <Link to={`/resources/${resource._id}/edit`}>
                  <Pencil size={32} />
                </Link>
              </span>
            </h1> 
            <img src={resource.image} className="resource__main-image" />
            <p className="text-center resource__description">{resource.description}</p>
            <a target="_blank" href={resource.link}>
              <div className="mb-4 btn-block btn btn-primary">Go to Resource</div>
            </a>
            <WordsContainer words={resource.words} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resource;
