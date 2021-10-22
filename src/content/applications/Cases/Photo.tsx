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
    <div>
      <img
        alt="upload"
        src={file}
        style={{
          backgroundImage: 'url(' + upload_blue + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          backgroundPositionY: 'center',
          backgroundPositionX: 40,
          backgroundColor: '#e5e5e5',
          padding: 0,
          margin: 3,
          width: 200,
          height: 200,
          border: '1px solid #5faee3',
        }}
      />
      <br />
      <input
        style={{ color: '#fff', margin: 4 }}
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
