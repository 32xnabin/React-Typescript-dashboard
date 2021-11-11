/* eslint-disable jsx-a11y/alt-text */

import { useState, useRef } from 'react';
import SelectFile from './SelectFile';
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
    <div
      style={{
        textAlign: 'center',
        margin: '6px',
        padding: '6px',
        border: '1px dashed #5faee3',
        borderRadius: '6px',
        height: '180px',
      }}
    >
      <img
        src={file}
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          backgroundPositionY: 'center',
          backgroundPositionX: 'center',
          backgroundColor: '#fff',
          padding: 0,
          margin: 3,
          width: 'auto',
          maxWidth: '150px',
          height: 40,
          border: '1px solid #eee',
          minHeight: '100px',
          minWidth: '200px',
          objectFit: 'cover',
        }}
      />
      <br />
      <div>
        <div
          onClick={() => inputRef.current.click()}
          style={{
            color: '#fff',
            position: 'relative',
            top: '-7px',
            left: '-8px',
            margin: 4,
            width: '200px',
            zIndex: 2,
            padding: '5px',
            border: '1px solid #5faee3',
            borderRadius: '6px',
            background: '#fff',
          }}
        >
          <SelectFile />
        </div>
        <input
          ref={inputRef}
          id="browse"
          className="btn-file-upload"
          style={{
            color: '#5faee3',
            margin: 4,
            width: '200px',
            position: 'relative',
            top: '-55px',
          }}
          type="file"
          onChange={handleChange}
        />
      </div>

      {uploading && file ? (
        <div
          style={{
            height: 20,
            color: '#5faee3',
            position: 'relative',
            top: '-35px',
          }}
        >
          uploading....
        </div>
      ) : (
        <div style={{ height: 20, position: 'relative', top: '-55px' }}></div>
      )}
    </div>
  );
};

export default Photo;
