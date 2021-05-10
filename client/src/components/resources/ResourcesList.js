import React from 'react';
import ResourceItem from './ResourceItem';

const ResourcesList = ({ resources }) => {

  const renderResources = () => {
    return resources.map(resource => {
      return <ResourceItem resource={resource} />
    })
  }
  return (
    <div className="row justify-content-center">
      {renderResources()}
    </div>
  )
}

export default ResourcesList;
