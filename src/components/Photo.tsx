/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import upload_blue from './upload_blue.png'
interface IProps {
  uploadImage: (file: any) => Promise<boolean>
}
const Photo: React.FC<IProps> = ({ uploadImage }) => {
  const [file, setFile] = useState('')
  const [uploading, setUploding] = useState(true)

  const handleChange = async (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
    const res = await uploadImage(e.target.files[0])

    setUploding(res)
  }

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
          height: 100,
          border: '1px solid #5faee3',
          minHeight: '100px',
          minWidth: '200px',
          objectFit: 'cover',
        }}
      />
      <br />

      <input
        style={{ color: '#fff', margin: 4, width: '200px' }}
        type="file"
        onChange={handleChange}
      />

      {uploading && file ? (
        <div style={{ height: 20, color: '#5faee3' }}>uploading....</div>
      ) : (
        <div style={{ height: 20 }}></div>
      )}
    </div>
  )
}

export default Photo
