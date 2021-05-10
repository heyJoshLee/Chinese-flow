import React from 'react';

const Account = () => {
  return (
    <div>
      <form>
        <h1 className="text-cener">Account</h1>
        <hr />
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="character-select">Character Type</label>
          <select className="form-control" id="character-select">
            <option value="simplified">Simplified</option>
            <option value="traditional">Traditional</option>

          </select>
        </div>
        <div className="form-group">
          <label htmlFor="list-select">Current List</label>
          <select className="form-control" id="list-select">
            <option value="hsk1">HSK 1</option>
            <option value="hsk2">HSK 2</option>
            <option value="hsk3">HSK 3</option>
            <option value="hsk4">HSK 4</option>
            <option value="hsk5">HSK 5</option>
            <option value="hsk6">HSK 6</option>
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Save" className="btn btn-block btn-primary"/>
        </div>
      </form>
    </div>
  )
}

export default Account;
