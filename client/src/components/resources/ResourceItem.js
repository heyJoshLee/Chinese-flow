import React from 'react'
import { Book, CameraVideo, Headphones } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';

const ResourceItem = ({ resource, }) => {

  const knownWords = useSelector(state => state.knownWords)

  const renderMediumType = (resource) => {
    switch (resource.mediumType) {
      case 'article':
        return <Book size={24} />;
      case 'video':
        return <CameraVideo size={24} />;
      case 'audio':
        return <Headphones size={24} />;
      default:
        return <Book size={24} />;
    }
  }

  const renderBadge = (resource) => {
    if (resource.paid) {
      return <div className="mb-4 badge badge-warning">Pro</div>
    } else {
      return <div className="mb-4badge badge-primary">Free</div>
    }
  }

  return (
    <div className="mt-4">
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={resource.image} alt="Card image cap" />
        <div className="card-body text-center">
          {/*renderBadge(resource) */}
          <ProgressBar resource={resource} knownWords={knownWords} />
          <div className="mt-4"></div>
          {renderMediumType(resource)}
          <br/>
          <small>{resource.words.length} unique words</small>

          <h4 className="mt-3 text-center">{resource.title}</h4>
          <p className="card-text">{`${resource.description.substring(0, 180)}...`}</p>
          
          <Link to={`/resources/${resource._id}`} className="btn btn-primary btn-block">View</Link>
        </div>
      </div>
    </div>
  )
}

export default ResourceItem;
