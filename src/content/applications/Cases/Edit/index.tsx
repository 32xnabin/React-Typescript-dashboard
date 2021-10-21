import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import moment from 'moment'
import { Myboscase } from '../../../../types'
import { updateCase, getCaseById, uploadImage } from '../../../../services'
import RichEditor from '../RichEditor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
import Photo from '../Photo'
import { makeStyles } from '@material-ui/styles'
import Select from 'react-select'
import { Button, MenuItem, Modal } from '@material-ui/core'

import {
  InputField,
  DateField,
  InfoLabel,
  Placeholder,
  MainContainer,
  GridContainer,
  FileuploadContainer,
  DropDown,
  InputWrapper,
  WhiteLabel,
  ButtonsContainer,
  HeadingLabel1,
  MainWrapper,
  BlueHeader,
  BlueLine,
  HorDiv,
  StyledDiv,
  StyledDivSmall,
  GridContainerPhoto,
  Disabled,
  HeadingLabel,
} from './Edit.style'

const Edit: React.FC = () => {
  function rand() {
    return Math.round(Math.random() * 20) - 10
  }
  function getModalStyle() {
    const top = 50 + rand()
    const left = 50 + rand()

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    }
  }
  const handleClose = () => {
    setOpenModal(false)
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',

      backgroundColor: '#fff',
      boxShadow: 'none',
      padding: 4,
      outline: 'none',
    },
  }))

  const [modalStyle] = React.useState(getModalStyle)

  let navigate = useNavigate()

  const mock_case_types = [
    'Repair and Maintainance',
    'Requests',
    'Common Repairs',
    'Replacement',
    'Gardening',
    'Incident',
  ]
  const mock_priority = ['High', 'Low', 'Medium']
  const mock_status = [
    'New',
    'In Progress',
    'Completed',
    'Deleted',
    'Awaiting Invoice',
    'Awaiting Quote',
  ]
  const mock_job_area = ['common-asset', 'common-not-asset', 'private lot']
  const mock_category = ['clouido', 'common area', 'door']

  const mock_assets = [
    { value: 'BLDG-Plumbing', label: 'BLDG-Plumbing' },
    { value: 'BLDG-Toilets', label: 'BLDG-Toilets' },
    { value: 'BLDG-Rest', label: 'BLDG-Rest' },
  ]

  const mock_assigned_to = [
    { value: 'Ace hanndy andy', label: 'Ace hanndy andy' },
    { value: 'bradyos', label: 'bradyos' },
    { value: 'AZ-Electrician', label: 'AZ-Plumbing' },
    { value: 'Chummins', label: 'Chummins' },
  ]
  const mock_subject = ['Light out', 'bulb clean', 'pool clean']
  //moment(Yup.date()).format('dd//MM/YYYY'),

  const validationSchema = Yup.object().shape({
    case_type: Yup.string(),
    added_date: Yup.string(),
    due_date: Yup.string(),
    priority: Yup.string(),
    status: Yup.string(),
    job_area: Yup.string(),
    category: Yup.string(),
    asset_category: Yup.string(),
    assigned_to: Yup.string(),
    email_subject: Yup.string(),
    email_description: Yup.string(),
    notes: Yup.string(),
    logged_by: Yup.string(),
  })

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: ' ' }],
    },
  ]
  const [openModal, setOpenModal] = React.useState(false)
  const [caseImages, setCaseImages] = React.useState([''])
  const [casenum, setCasenum] = React.useState(0)
  const [email_desc, setEmail_desc] = React.useState(initialValue)
  const [notes, setNotes] = React.useState(initialValue)
  const [assignedTo, setAssignedTo] = React.useState([])
  const [asset, setAsset] = React.useState([])
  const [addedDate, setAddedDate] = React.useState(
    new Date().toISOString().substr(0, 10),
  )
  const [dueDate, setDueDate] = React.useState(
    new Date().toISOString().substr(0, 10),
  )
  const [caseId, setCaseId] = React.useState('')

  React.useEffect(() => {
    console.log('use effect called======>')
    populateCase()
    //setAddedDate(new Date().toISOString().substr(0, 10));
  }, [])

  const prefillForm = (item: any) => {
    console.log('editingg........', item)
    setCasenum(item.case_number)

    const added_date = new Date(item.added_date || new Date())
      .toISOString()
      .substr(0, 10)
    const due_date = new Date(item.due_date || new Date())
      .toISOString()
      .substr(0, 10)
    setAddedDate(added_date)
    setDueDate(due_date)

    if (item.assigned_to) {
      setAssignedTo(prepareMultiSelect(item.assigned_to))
    }
    if (item.asset) {
      setAsset(prepareMultiSelect(item.asset))
    }
    if (item.email_description) {
      setEmail_desc(JSON.parse(item.email_description))
    }

    if (item.notes) {
      setNotes(item.notes)
    }

    setCaseImages(item.images.filter((url) => url !== ''))

    setValue('case_type', item.case_type)
    setValue('priority', item.priority)
    setValue('status', item.status)
    setValue('category', item.category)
    setValue('job_area', item.job_area)
    setValue('email_subject', item.email_subject)
    setValue('logged_by', item.logged_by)
  }

  const prepareMultiSelect = (value: any) => {
    const items = value.split(',')
    const arr = items.map((item) => {
      return { value: item, label: item }
    })
    console.log('asset cats==>', arr)
    return arr
  }

  const populateCase = () => {
    const id = new URLSearchParams(window.location.search).get('id')
    setCaseId(id)

    getCaseById(id)
      .then((result: any) => {
        console.log('result-byiddd---->', result)
        prefillForm(result)
      })
      .catch((error: any) => {
        console.log('error- form1->', error)
        navigate('/login')
      })
  }

  const onNotesChange = (event) => {
    setNotes(event.target.value)
  }

  const onImageUploaded = async (file): Promise<boolean> => {
    const res = await uploadImage(file)
    console.log('upload done ====>', res)

    setCaseImages([...caseImages, res.url])
    return false
  }

  const removePhoto = async (e) => {
    const url = e.currentTarget.getAttribute('data-value1')
    const newArray = caseImages
    const index = newArray.indexOf(url)
    if (index > -1) {
      newArray.splice(index, 1)
    }
    setCaseImages(newArray)
    navigate(`/bm/cases/edit?id=${caseId}`)
    console.log('caseImages ====>', caseImages)
    return true
  }

  const onAddedDateChange = (value: any) => {
    console.log('added date-----', value)
    const added_date = new Date(value).toISOString().substr(0, 10)
    setAddedDate(added_date)
  }

  const onDueDateChange = (value: any) => {
    console.log('added date-----', value)
    const due_date = new Date(value).toISOString().substr(0, 10)
    setDueDate(due_date)
  }

  const onAssignedChange = (value: any) => {
    console.log('assigned-----', value)
    setAssignedTo(value)
  }

  const onAssetChange = (value: any) => {
    console.log('setAsset-----', value)

    setAsset(value)
  }

  const createCSV = (arr: any[]) => {
    let csv = arr.map((item) => item.value).join(',')
    console.log('csv--->', csv)
    return csv
  }

  const onSubmit = (data: any) => {
    if (assignedTo.length > 0 && asset.length > 0) {
      data['added_date'] = addedDate
      data['due_date'] = dueDate
      data['assigned_to'] = createCSV(assignedTo)
      data['asset'] = createCSV(asset)
      data['id'] = caseId
      data['email_description'] = JSON.stringify(email_desc)
      data['notes'] = notes
      if (caseImages.length > 0) {
        data['images'] = caseImages
      }
      console.log('dataaaaaa----->', data)
      updateCase(data)
        .then((result: any) => {
          console.log('result--update--->', result)

          navigate('/bm/cases/list')
        })
        .catch((error: any) => {
          console.log('error- form1->', error)
        })
    }
  }

  const onCancel = (data: any) => {
    navigate('/bm/cases/list')
  }

  const classes = useStyles()

  return (
    <div
      style={{
        marginTop: 20,
        border: '1px solid #eee',
        width: '95%',
        marginLeft: 8,
        marginRight: 8,
      }}
    >
      <MainWrapper>
        <BlueHeader>
          <HorDiv>
            <FontAwesomeIcon color="white" icon={faWrench} />
            <WhiteLabel>Edit Case</WhiteLabel>
          </HorDiv>
          <HorDiv>
            <FontAwesomeIcon color="white" icon={faPrint} />
            <FontAwesomeIcon color="white" icon={faCog} />
          </HorDiv>
        </BlueHeader>
        <MainContainer>
          <GridContainer>
            <HeadingLabel>Case Information</HeadingLabel>
            <Placeholder />
          </GridContainer>
          <GridContainer>
            <HeadingLabel>Attachments</HeadingLabel>
            <StyledDivSmall
              color="primary"
              style={{ height: 20 }}
              onClick={() => setOpenModal(true)}
            >
              <FontAwesomeIcon color="white" icon={faPaperclip} />
            </StyledDivSmall>
            <Placeholder />
          </GridContainer>
        </MainContainer>
        <MainContainer>
          <div>
            <BlueLine />
          </div>

          <div>
            <BlueLine />
          </div>
        </MainContainer>
        <MainContainer>
          <GridContainer>
            <InfoLabel bold={true}>Case Number</InfoLabel>
            <Disabled>{casenum}</Disabled>
            <InfoLabel>Case Type</InfoLabel>
            <DropDown id="case_type" {...register('case_type')}>
              {mock_case_types.map((option) => (
                <option>{option}</option>
              ))}
            </DropDown>

            <InfoLabel>Added</InfoLabel>

            <DateField
              value={addedDate}
              onChange={(e) => onAddedDateChange(e.target.value)}
              id="added_date"
              type="date"
            />
            <InfoLabel>Due Date</InfoLabel>

            <DateField
              value={dueDate}
              onChange={(e) => onDueDateChange(e.target.value)}
              id="due_date"
              type="date"
            />

            <InfoLabel>Priority</InfoLabel>
            <DropDown id="priority" {...register('priority')}>
              {mock_priority.map((option) => (
                <option>{option}</option>
              ))}
            </DropDown>
            <InfoLabel>Status</InfoLabel>
            <DropDown id="status" {...register('status')}>
              {mock_status.map((option) => (
                <option>{option}</option>
              ))}
            </DropDown>
          </GridContainer>
          <FileuploadContainer>
            <Modal onClose={handleClose} open={openModal}>
              <GridContainerPhoto style={modalStyle} className={classes.paper}>
                <Photo uploadImage={onImageUploaded} />
                <Photo uploadImage={onImageUploaded} />
                <Photo uploadImage={onImageUploaded} />
                <Photo uploadImage={onImageUploaded} />
                <Photo uploadImage={onImageUploaded} />
                <Photo uploadImage={onImageUploaded} />
                <Photo uploadImage={onImageUploaded} />
                <Photo uploadImage={onImageUploaded} />
                <Photo uploadImage={onImageUploaded} />
                <Photo uploadImage={onImageUploaded} />
              </GridContainerPhoto>
            </Modal>
            <GridContainer>
              {caseImages
                .filter((url) => url !== '')
                .map((url, index) => (
                  <div key={index}>
                    <img height={150} width={150} src={url} />
                    <Button onClick={removePhoto} data-value1={url}>
                      <DeleteTwoToneIcon fontSize="small" />
                    </Button>
                  </div>
                ))}
            </GridContainer>
          </FileuploadContainer>
        </MainContainer>
        <MainContainer>
          <GridContainer>
            <HeadingLabel>Asset Information</HeadingLabel>
            <Placeholder />
          </GridContainer>
          <GridContainer>
            <HeadingLabel></HeadingLabel>
            <Placeholder />
          </GridContainer>
        </MainContainer>
        <MainContainer>
          <div>
            <BlueLine />
          </div>
          <div></div>
        </MainContainer>
        <MainContainer>
          <GridContainer>
            <InfoLabel>Job Area</InfoLabel>
            <DropDown id="job_area" {...register('job_area')}>
              {mock_job_area.map((option) => (
                <option>{option}</option>
              ))}
            </DropDown>

            <InfoLabel>Category</InfoLabel>
            <DropDown id="category" {...register('category')}>
              {mock_category.map((option) => (
                <option>{option}</option>
              ))}
            </DropDown>
            <InfoLabel>Asset</InfoLabel>
            <InputWrapper>
              <Select
                value={asset}
                isMulti
                onChange={onAssetChange}
                options={mock_assets}
              />
            </InputWrapper>
            <InfoLabel>Assigned To</InfoLabel>
            <InputWrapper>
              <Select
                value={assignedTo}
                isMulti
                onChange={onAssignedChange}
                options={mock_assigned_to}
              />
            </InputWrapper>

            <InfoLabel>Subject</InfoLabel>
            <DropDown id="email_subject" {...register('email_subject')}>
              {mock_subject.map((option) => (
                <option>{option}</option>
              ))}
            </DropDown>
            <InfoLabel>Descrption</InfoLabel>
            <InputWrapper>
              <RichEditor
                value={email_desc}
                setValue={setEmail_desc}
                {...register('email_description')}
              />
            </InputWrapper>

            <InfoLabel>Notes</InfoLabel>

            <InputField onChange={onNotesChange} value={notes}></InputField>
          </GridContainer>
          <GridContainer></GridContainer>
        </MainContainer>

        <MainContainer>
          <GridContainer>
            <HeadingLabel1>Options</HeadingLabel1>
            <Placeholder />
          </GridContainer>
          <GridContainer>
            <HeadingLabel></HeadingLabel>
            <Placeholder />
          </GridContainer>
        </MainContainer>
        <MainContainer>
          <div>
            <BlueLine />
          </div>

          <div></div>
        </MainContainer>

        <MainContainer>
          <GridContainer>
            <HeadingLabel1>Logs</HeadingLabel1>
            <Placeholder />
          </GridContainer>
          <GridContainer>
            <HeadingLabel></HeadingLabel>
            <Placeholder />
          </GridContainer>
        </MainContainer>
        <MainContainer>
          <div>
            <BlueLine />
          </div>

          <div></div>
        </MainContainer>

        <MainContainer>
          <GridContainer>
            <HeadingLabel1>Email</HeadingLabel1>
            <Placeholder />
          </GridContainer>
          <GridContainer>
            <HeadingLabel></HeadingLabel>
            <Placeholder />
          </GridContainer>
        </MainContainer>
        <MainContainer>
          <div>
            <BlueLine />
          </div>

          <div></div>
        </MainContainer>

        <MainContainer>
          <GridContainer></GridContainer>
          <ButtonsContainer>
            <StyledDiv
              background={'000'}
              color={'fff'}
              onClick={handleSubmit(onCancel)}
            >
              Cancel
            </StyledDiv>

            <StyledDiv
              background={'d84937'}
              color={'fff'}
              disabled={assignedTo.length === 0 || asset.length === 0}
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </StyledDiv>
          </ButtonsContainer>
        </MainContainer>
        <BlueHeader />
      </MainWrapper>
    </div>
  )
}

export default Edit
