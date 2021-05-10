import React from 'react';
import Form from '../components/users/Form';

const Index = () => {
  return (
    <div className="index-page">
      <div className="row">
        <div className="hero">
          <div className="col-12">
            <h1 className="text-center">Say Goodbye to Boring Vocabulary Drills.
              Master Chinese using Flo States</h1>
              <h2 className="text-center">Get Started For Free</h2>
              <div className="row">
                <div className="col-3"></div>
                <div className="col-6"><Form /></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;
