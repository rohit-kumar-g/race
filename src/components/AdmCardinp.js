import React from 'react'
const AdmCardinp =({id ,handleChange}) => {
    return (
      <div className="form-group">
      <label htmlFor={id}>{id}:</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={handleChange}
      />
    </div>
    )
  }
export default AdmCardinp
