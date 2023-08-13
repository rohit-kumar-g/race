import React from 'react'

const AdmCardFileUp = ({ id, isUploading, uploadProgress }) => {
    return (
      <div className="form-group">
        <label htmlFor={id}>{id}:</label>
        <input
          type="file"
          id={id}
          name={id}
          multiple
          disabled={isUploading}
          // required
        />
        {isUploading && <progress value={uploadProgress} max="100" />}
      </div>
    );
  };
export default AdmCardFileUp
