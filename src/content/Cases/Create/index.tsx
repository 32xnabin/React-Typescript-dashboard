import React, { FC, useRef, ChangeEvent, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { createCase, uploadImage } from '../../../services/cases';
import SlateEditor from '../../../components/SlateEditor/Editor';
import { TextareaAutosize } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import Photo from '../../../components/Photo';

import {
  InputField,
  DateField,
  InfoLabel,
  Placeholder,
  MainContainer,
  GridContainerHeader,
  GridContainer,
  GridContainerCheckBox,
  FullWidthContainer,
  GridContainer1,
  GridContainer2,
  FileuploadContainer,
  DropDown,
  InputFieldSubject,
  InputWrapper,
  WhiteLabel,
  ButtonsContainer,
  HeadingLabel1,
  MainWrapper,
  BlueHeader,
  BlueLine,
  HorDiv,
  StyledDiv,
  Disabled,
  GridContainerPhoto,
  StyledDivSmall,
  HeadingLabel,
} from './Create.style';
import { makeStyles } from '@material-ui/styles';
import { Modal } from '@material-ui/core';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Select from 'react-select';
import { List, ListItem, Popover, Checkbox } from '@material-ui/core';
import { Myboscase } from '../../../types';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const Create: FC = () => {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpenPop = (): void => {
    setOpen(true);
  };

  const handleClosePop = (): void => {
    setOpen(false);
  };

  const [openSnack, setOpenSnak] = useState<boolean>(false);
  const handleClickSnack = () => {
    setOpenSnak(true);
  };

  const handleCloseSnack = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnak(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnack}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const handleClose = () => {
    setOpenModal(false);
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',

      backgroundColor: '#fff',
      boxShadow: 'none',
      padding: 4,
      outline: 'none',
    },
  }));

  const [modalStyle] = useState(getModalStyle);
  let navigate = useNavigate();

  const mock_case_types = [
    'Repair and Maintainance',
    'Requests',
    'Common Repairs',
    'Replacement',
    'Gardening',
    'Incident',
  ];
  const mock_priority = ['High', 'Low', 'Medium'];
  const mock_status = [
    'New',
    'In Progress',
    'Completed',
    'Deleted',
    'Awaiting Invoice',
    'Awaiting Quote',
    'Awaiting Approval',
    'Committee Approval',
    'Contractor status',
  ];
  const mock_job_area = ['common-asset', 'common-not-asset', 'private lot'];
  const mock_category = [
    'All Categories',
    'CLOUDIO',
    'COMMON AREA',
    'DOOR',
    'ELECTRICAL',
    'EXHAUST',
    'GYM / POOL',
  ];

  const mock_apartments = [
    'Pick Appartments',
    '44',
    '375',
    '77',
    '56',
    '45',
    '66',
    '44',
    '375',
    '77',
    '56',
    '45',
    '66',
  ];

  const mock_assets = [
    { value: 'BLDG-Plumbing', label: 'BLDG-Plumbing' },
    { value: 'BLDG-Toilets', label: 'BLDG-Toilets' },
    { value: 'BLDG-Rest', label: 'BLDG-Rest' },
  ];

  const mock_assigned_to = [
    { value: 'Ace hanndy andy', label: 'Ace hanndy andy' },
    { value: 'bradyos', label: 'bradyos' },
    { value: 'AZ-Electrician', label: 'AZ-Plumbing' },
    { value: 'Chummins', label: 'Chummins' },
  ];
  const mock_subject = [
    'Light out',
    'bulb blown',
    'Inspect water meters',
    'pool clean',
  ];
  const mock_email_template = [
    [
      {
        type: 'paragraph',
        children: [
          {
            text: 'AWS BM : 1.9.7001(108) - https://drive.google.com/file/d/1YEm6rtKJhkdhqS3-Vi3okZO9yhYzgUzC/view?usp=sharing ',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'AWS Resident: 1.7.4001(76) - https://drive.google.com/file/d/1S0dsR3nWsTwhsiR2zV857F57OvnVFlKc/view?usp=sharing',
          },
        ],
      },
    ],
    [
      {
        type: 'paragraph',
        children: [{ text: 'Template for bulb blown ' }],
      },
    ],
    [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Blueridge to survey Main water meter and Residential water meter and random Lot water meters to find out if water usage is appropriate and if any issues with meters such as Lots 35, 63 and 93 ',
          },
        ],
      },
    ],
    [
      {
        type: 'paragraph',
        children: [{ text: 'Clean and test Parts on order ' }],
      },
    ],
  ];

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
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: ' ' }],
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [caseImages, setCaseImages] = useState(['']);
  const [casenum, setCasenum] = useState(0);
  const [email_subject, setEmail_subject] = useState('');
  const [email_desc, setEmail_desc] = useState(initialValue);
  const [jobArea, setJobArea] = useState(['common-asset']);
  const [assignedTo, setAssignedTo] = useState([]);
  const [asset, setAsset] = useState([]);
  const [addedDate, setAddedDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().substr(0, 10)
  );

  useEffect(() => {
    setCasenum(Number(localStorage.getItem('max_case_number')) + 1);
    setAddedDate(new Date().toISOString().substr(0, 10));
    setDueDate(new Date().toISOString().substr(0, 10));
  }, []);

  const removePhoto = async (e) => {
    const url = e.currentTarget.getAttribute('data-value1');
    const newArray = caseImages;
    const index = newArray.indexOf(url);
    if (index > -1) {
      newArray.splice(index, 1);
    }
    setCaseImages(newArray);
    navigate('/bm/cases/create');
    return true;
  };

  const onImageUploaded = async (file): Promise<boolean> => {
    const res = await uploadImage(file);
    setCaseImages([...caseImages, res.url]);
    return false;
  };

  // const onJobAreaChange = (e) => {
  //   let index = mock_job_area.indexOf(e.target.value);
  //   let template = mock_job_area[index];
  //   setJobArea(template);
  // };

  const onEmailSubjectChangeText = (e) => {
    setEmail_subject(e.target.value);
  };

  const onEmailSubjectChange = (e) => {
    const subject = e.currentTarget.getAttribute('data-subject');
    handleClosePop();

    setEmail_subject(subject);
    let index = mock_subject.indexOf(subject);
    if (index !== -1) {
      let template = mock_email_template[index];
      setEmail_desc(template);
    }
  };

  const onAddedDateChange = (value: string) => {
    const added_date = new Date(value).toISOString().substr(0, 10);
    setAddedDate(added_date);
  };

  const onDueDateChange = (value: string) => {
    const due_date = new Date(value).toISOString().substr(0, 10);
    setDueDate(due_date);
  };

  const onAssignedChange = (value: { value: string; label: string }[]) => {
    setAssignedTo(value);
  };

  const onAssetChange = (value: { value: string; label: string }[]) => {
    setAsset(value);
  };

  const createCSV = (arr: { value: string; label: string }[]) => {
    let csv = arr.map((item) => item.value).join(',');
    return csv;
  };

  const onSubmit = (data: Myboscase) => {
    if (
      assignedTo.length > 0 &&
      (jobArea.indexOf('common-not-asset') !== -1 || asset.length > 0)
    ) {
      data['due_date'] = dueDate;
      data['added_date'] = addedDate;
      data['assigned_to'] = createCSV(assignedTo);
      data['asset'] = createCSV(asset);
      data['email_subject'] = email_subject;
      data['email_description'] = JSON.stringify(email_desc);
      if (caseImages.length > 0) {
        data['images'] = caseImages;
      }

      createCase(data)
        .then((result: any) => {
          localStorage.setItem('max_case_number', String(result.case_number));
          handleClickSnack();
          setTimeout(() => {
            navigate('/bm/cases/list');
          }, 2000);
        })
        .catch((error: any) => {
          navigate('/login');
        });
    }
  };

  const onCancel = () => {
    navigate('/bm/cases/list');
  };

  const onAddAndReset = (data: Myboscase) => {
    if (
      assignedTo.length > 0 &&
      (jobArea.indexOf('common-not-asset') !== -1 || asset.length > 0)
    ) {
      data['due_date'] = dueDate;
      data['added_date'] = addedDate;
      data['assigned_to'] = createCSV(assignedTo);
      data['asset'] = createCSV(asset);
      data['email_subject'] = email_subject;
      data['email_description'] = JSON.stringify(email_desc);
      if (caseImages.length > 0) {
        data['images'] = caseImages;
      }

      createCase(data)
        .then((result: any) => {
          localStorage.setItem('max_case_number', String(result.case_number));
          handleClickSnack();
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((error: any) => {
          navigate('/login');
        });
    }
  };

  const handleJobAreaChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // ['common-asset', 'common-not-asset', 'private lot'];
    console.log('checked:', event.target.checked);
    console.log('value:', event.target.value);

    if (event.target.checked && event.target.value === 'common-not-asset') {
      if (jobArea.indexOf(event.target.value) === -1)
        setJobArea(['common-not-asset']);
    }
    if (event.target.checked && event.target.value !== 'common-not-asset') {
      let removeIndex = jobArea.indexOf('common-not-asset');
      if (removeIndex !== -1) {
        jobArea.splice(removeIndex, 1);
      }
      if (jobArea.indexOf(event.target.value) === -1)
        setJobArea([...jobArea, event.target.value]);
    }
    if (!event.target.checked) {
      let index = jobArea.indexOf(event.target.value);
      jobArea.splice(index, 1);
      setJobArea(jobArea.splice(index, 1));
    }
  };
  const classes = useStyles();

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
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={openSnack}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Case Successfully Added"
          action={action}
        />
        <BlueHeader>
          <HorDiv>
            <FontAwesomeIcon color="white" icon={faWrench} />
            <WhiteLabel>Create Cases</WhiteLabel>
          </HorDiv>
          <HorDiv style={{ visibility: 'hidden' }}>
            <FontAwesomeIcon color="white" icon={faPrint} />
            <FontAwesomeIcon color="white" icon={faCog} />
          </HorDiv>
        </BlueHeader>
        <MainContainer>
          <GridContainerHeader>
            <HeadingLabel>Case Information</HeadingLabel>
            <Placeholder />
          </GridContainerHeader>
          <GridContainer1>
            <HeadingLabel>Attachments</HeadingLabel>

            <StyledDivSmall
              color="primary"
              style={{ height: 20 }}
              onClick={() => setOpenModal(true)}
            >
              <FontAwesomeIcon color="white" icon={faPaperclip} />
            </StyledDivSmall>
          </GridContainer1>
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
            <InfoLabel>Case Type</InfoLabel>

            <Disabled>{casenum}</Disabled>
            <DropDown id="case_type" {...register('case_type')}>
              {mock_case_types.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </DropDown>

            <InfoLabel>Added</InfoLabel>

            <InfoLabel>Due Date</InfoLabel>
            <DateField
              value={addedDate}
              onChange={(e) => onAddedDateChange(e.target.value)}
              id="added_date"
              type="date"
            />

            <DateField
              value={dueDate}
              onChange={(e) => onDueDateChange(e.target.value)}
              id="due_date"
              type="date"
            />

            <InfoLabel>Priority</InfoLabel>

            <InfoLabel>Status</InfoLabel>
            <DropDown id="priority" {...register('priority')}>
              {mock_priority.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </DropDown>
            <DropDown id="status" {...register('status')}>
              {mock_status.map((option) => (
                <option key={option}>{option}</option>
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
            <GridContainer2>
              {caseImages
                .filter((url) => url !== '')
                .map((url, index) => (
                  <div key={index} style={{ margin: 10 }}>
                    <div
                      style={{
                        height: '250px',
                        width: '200px',
                        background: 'no-repeat center',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundImage: `url(${url})`,
                      }}
                    ></div>
                    <Button onClick={removePhoto} data-value1={url}>
                      <DeleteTwoToneIcon fontSize="small" />
                    </Button>
                  </div>
                ))}
            </GridContainer2>
          </FileuploadContainer>
        </MainContainer>
        <MainContainer>
          <GridContainerHeader>
            <HeadingLabel>Asset Information</HeadingLabel>
            <Placeholder />
          </GridContainerHeader>
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
            <Placeholder />
            <GridContainerCheckBox>
              <Checkbox
                color="primary"
                checked={
                  jobArea.indexOf('common-not-asset') === -1 &&
                  jobArea.indexOf('common-asset') !== -1
                }
                value="common-asset"
                onChange={handleJobAreaChange}
              />
              <InfoLabel>Asset</InfoLabel>
              <Checkbox
                color="primary"
                checked={
                  jobArea.indexOf('common-not-asset') === -1 &&
                  jobArea.indexOf('private lot') !== -1
                }
                value="private lot"
                onChange={handleJobAreaChange}
              />
              <InfoLabel>Private Lot</InfoLabel>
              <Checkbox
                color="primary"
                checked={jobArea.indexOf('common-not-asset') !== -1}
                value="common-not-asset"
                onChange={handleJobAreaChange}
              />
              <InfoLabel>N/A</InfoLabel>
            </GridContainerCheckBox>
            <div />

            {jobArea.indexOf('common-not-asset') === -1 && (
              <>
                <InfoLabel>Category</InfoLabel>

                <InfoLabel>Asset</InfoLabel>
                <DropDown id="category" {...register('category')}>
                  {mock_category.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </DropDown>

                <DropDown id="apartment" {...register('apartment')}>
                  {mock_apartments.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </DropDown>

                <InputWrapper style={{ zIndex: 4 }}>
                  <Select
                    isMulti
                    onChange={onAssetChange}
                    options={mock_assets}
                  />
                </InputWrapper>
              </>
            )}
            <InfoLabel>Assigned To</InfoLabel>
            <InfoLabel>Contacts</InfoLabel>
            <InputWrapper style={{ zIndex: 3 }}>
              <Select
                isMulti
                onChange={onAssignedChange}
                options={mock_assigned_to}
              />
            </InputWrapper>
            <InputWrapper style={{ zIndex: 3 }}>
              <Select
                isMulti
                onChange={onAssignedChange}
                options={mock_assigned_to}
              />
            </InputWrapper>
          </GridContainer>
        </MainContainer>
        <FullWidthContainer>
          <InfoLabel>Subject</InfoLabel>
          <div>
            <InputFieldSubject
              onChange={(e) => onEmailSubjectChangeText(e)}
              value={email_subject}
            ></InputFieldSubject>
            <Button
              style={{
                border: '1px solid #ccc',
                height: 36,
                borderRadius: 0,
                width: '610px',
                position: 'relative',
                left: '-550px',
                zIndex: 1,
                textAlign: 'right',
              }}
              ref={ref}
              onClick={handleOpenPop}
            >
              <div style={{ textAlign: 'right', width: '100%' }}>
                <ExpandMoreTwoToneIcon
                  style={{ color: '#ccc' }}
                  sx={{ ml: 1 }}
                />
              </div>
            </Button>
            <Popover
              anchorEl={ref.current}
              onClose={handleClosePop}
              open={isOpen}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <div
                style={{
                  width: '610px',
                  border: '1px solid #ccc',
                }}
              >
                <List sx={{ p: 1 }} component="nav">
                  {mock_subject.map((option) => (
                    <ListItem>
                      <Button
                        style={{
                          width: '610px',
                          justifyContent: 'flex-start',
                        }}
                        onClick={onEmailSubjectChange}
                        data-subject={option}
                      >
                        {option}
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Popover>
          </div>

          <InfoLabel>Description</InfoLabel>

          <SlateEditor
            {...register('email_description')}
            value={email_desc}
            setValue={setEmail_desc}
          />
          <InfoLabel>Notes</InfoLabel>
          <TextareaAutosize
            style={{
              border: '1px solid #ccc',
              minHeight: '150px',
              padding: '10px',
            }}
            id="notes"
            {...register('notes')}
          ></TextareaAutosize>
        </FullWidthContainer>
        <GridContainerHeader>
          <HeadingLabel>Options</HeadingLabel>
          <Placeholder />
        </GridContainerHeader>
        <FullWidthContainer>
          <GridContainer style={{ border: '1px solid #fff !important' }}>
            <input
              type="checkbox"
              id="add_to_report"
              {...register('add_to_report')}
            />
            <InfoLabel style={{ marginLeft: 10 }}>
              Add this case to management report?
            </InfoLabel>
            <input
              type="checkbox"
              id="duplicate_case"
              {...register('duplicate_case')}
            />

            <InfoLabel style={{ marginLeft: 10 }}>
              Duplicate this case across other buildings?
            </InfoLabel>
          </GridContainer>
        </FullWidthContainer>

        <FullWidthContainer>
          <HeadingLabel1>Logs</HeadingLabel1>
        </FullWidthContainer>

        <FullWidthContainer>
          <InfoLabel>Jobs logged by</InfoLabel>
          <InputField
            id="logged_by"
            {...register('logged_by')}
            value={'demo manager'}
          ></InputField>
        </FullWidthContainer>

        <FullWidthContainer>
          <HeadingLabel1>Email</HeadingLabel1>

          <HeadingLabel></HeadingLabel>
        </FullWidthContainer>

        <FullWidthContainer>
          <InfoLabel style={{ marginLeft: 10 }}>
            Send email to the following contractors?:
          </InfoLabel>
        </FullWidthContainer>

        <FullWidthContainer>
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
              disabled={
                assignedTo.length === 0 ||
                (jobArea.indexOf('common-not-asset') === -1 &&
                  asset.length === 0)
              }
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </StyledDiv>

            <StyledDiv
              background={'d84937'}
              color={'fff'}
              disabled={
                assignedTo.length === 0 ||
                (jobArea.indexOf('common-not-asset') === -1 &&
                  asset.length === 0)
              }
              onClick={handleSubmit(onAddAndReset)}
            >
              Save and Add New
            </StyledDiv>
          </ButtonsContainer>
        </FullWidthContainer>
      </MainWrapper>
    </div>
  );
};

export default Create;
