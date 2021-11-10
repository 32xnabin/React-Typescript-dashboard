/* eslint-disable jsx-a11y/alt-text */

import { useState, useRef } from 'react';
import upload_blue from './upload_blue.png';
interface IProps {
  uploadImage: (file: any) => Promise<boolean>;
}
const Photo: React.FC<IProps> = ({ uploadImage }) => {
  const [file, setFile] = useState('');
  const [uploading, setUploading] = useState(true);
  const handleChange = async (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    const res = await uploadImage(e.target.files[0]);

    setUploading(res);
  };
  const inputRef = useRef(null);

  return (
    <div style={{ background: '#eee', textAlign: 'center' }}>
      <h2 style={{ color: '#5faee3', width: '100%', textAlign: 'center' }}>
        Upload File
      </h2>
      <img
        src={file}
        style={{
          backgroundImage: 'url(' + upload_blue + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          backgroundPositionY: 'center',
          backgroundPositionX: 'center',
          backgroundColor: '#e5e5e5',
          padding: 0,
          margin: 3,
          width: 'auto',
          maxWidth: '150px',
          height: 100,
          border: '1px solid #5faee3',
          minHeight: '100px',
          minWidth: '200px',
          objectFit: 'cover',
        }}
      />
      <br />
      <div>
        <label
          onClick={() => inputRef.current.click()}
          style={{
            color: '#fff',
            position: 'relative',
            top: '25px',
            left: '-5px',
            margin: 4,
            width: '200px',
            zIndex: 2,
          }}
        >
          Select file
        </label>
        <input
          ref={inputRef}
          id="browse"
          className="btn-file-upload"
          style={{ color: '#5faee3', margin: 4, width: '200px' }}
          type="file"
          onChange={handleChange}
        />
      </div>

      {uploading && file ? (
        <div style={{ height: 20, color: '#5faee3' }}>uploading....</div>
      ) : (
        <div style={{ height: 20 }}></div>
      )}
    </div>
  );
};

export default Photo;
