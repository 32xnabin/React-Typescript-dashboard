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
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import Photo from '../../../components/Photo';
import SelectFile from '../../../components/SelectFile';
import CheckedIcon from '../../../components/ThinSquare/CheckedIcon';
import UncheckedIcon from '../../../components/ThinSquare/UncheckedIcon';

import {
  DateField,
  InfoLabel,
  Placeholder,
  MainContainer,
  GridContainerHeader,
  SectionContainer,
  SingleContainer,
  GridContainer,
  GridContainerCheckBox,
  FullWidthContainer,
  GridContainer2,
  GridContainer3,
  FileuploadContainer,
  DropDown,
  InputFieldSubject,
  InputWrapper,
  WhiteLabel,
  ButtonsContainer,
  InputFieldLoggedBy,
  MainWrapper,
  BlueHeader,
  BlueLine,
  HorDiv,
  StyledDiv,
  Disabled,
  GridContainerPhoto,
  HeadingLabel,
} from '../Common.style';
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
      top: `45%`,
      left: `53%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const handleClose = () => {
    setOpenModal(false);
  };
  const useStyles1 = makeStyles((theme) => ({
    myClassName: {
      position: 'relative',
      color: '#000 !important',
      '&:hover': {
        backgroundColor: '#5faee3 !important',
      },
    },
  }));

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
    'Awaiting Invoice',
    'Awaiting Quote',
    'Awaiting Approval',
    'Committee Approval',
    'Contractor status',
  ];

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

  const mock_contacts = [
    { value: 'John Doe', label: 'John Doe' },
    { value: 'Smith', label: 'Smith' },
    { value: 'Bob', label: 'Bob' },
    { value: 'Well', label: 'Well' },
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
    contacts: Yup.string(),
    apartment: Yup.string(),
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
  const [jobArea, setJobArea] = useState([]);
  const [assignedTo, setAssignedTo] = useState([]);
  const [contacts, setContacts] = useState([]);
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

  const onContactChange = (value: { value: string; label: string }[]) => {
    setContacts(value);
  };

  const onAssetChange = (value: { value: string; label: string }[]) => {
    setAsset(value);
  };

  const createCSV = (arr: { value: string; label: string }[]) => {
    let csv = arr.map((item) => item.value).join(',');
    return csv;
  };

  const onSubmit = (data: Myboscase) => {
    if (assignedTo.length > 0) {
      data['due_date'] = dueDate;
      data['added_date'] = addedDate;
      data['job_area'] = JSON.stringify(jobArea);
      data['contacts'] = createCSV(contacts);
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
    if (assignedTo.length > 0) {
      data['due_date'] = dueDate;
      data['added_date'] = addedDate;
      data['job_area'] = JSON.stringify(jobArea);
      data['contacts'] = createCSV(contacts);
      data['assigned_to'] = createCSV(assignedTo);
      data['asset'] = createCSV(asset);
      data['email_subject'] = email_subject;
      data['email_description'] = JSON.stringify(email_desc);
      if (caseImages.length > 0) {
        data['images'] = caseImages;
      }
      console.log('data=========>', data);

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
    console.log('jobArea:', jobArea);
    console.log('checked:', event.target.checked);
    console.log('value:', event.target.value);

    if (event.target.checked && event.target.value === 'common-not-asset') {
      if (jobArea.indexOf(event.target.value) === -1)
        setJobArea(['common-not-asset']);
    }
    if (event.target.checked && event.target.value !== 'common-not-asset') {
      let removeIndex = jobArea.indexOf('common-not-asset');
      if (removeIndex !== -1) {
        setJobArea([]);
      }
      if (jobArea.indexOf(event.target.value) === -1)
        setJobArea([...jobArea, event.target.value]);
    }
    if (!event.target.checked) {
      const arr = jobArea.filter(function (item) {
        return item !== event.target.value;
      });
      setJobArea(arr);
    }
  };
  const classes = useStyles();
  const classes1 = useStyles1();

  return (
    <div
      style={{
        marginTop: 20,
        border: '1px solid #eee',
        width: '95%',
        marginLeft: 8,
        marginRight: 8,
        marginBottom: '200px',
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
            <FontAwesomeIcon
              color="white"
              style={{ visibility: 'hidden' }}
              icon={faWrench}
            />
            <WhiteLabel>Create Cases</WhiteLabel>
          </HorDiv>
          <HorDiv style={{ visibility: 'hidden' }}>
            <FontAwesomeIcon color="white" icon={faPrint} />
            <FontAwesomeIcon color="white" icon={faCog} />
          </HorDiv>
        </BlueHeader>
        <MainContainer>
          <GridContainerHeader style={{ borderBottom: '1px solid #cccc' }}>
            <HeadingLabel>Case Information</HeadingLabel>
            <Placeholder />
          </GridContainerHeader>
          <div style={{ background: '#fff', borderRadius: '6px', padding: 15 }}>
            <HeadingLabel>Photos</HeadingLabel>
          </div>
        </MainContainer>

        <MainContainer>
          <SectionContainer>
            <GridContainer>
              <SingleContainer>
                <InfoLabel>Case number</InfoLabel>
                <Disabled>{casenum}</Disabled>
              </SingleContainer>
              <SingleContainer>
                <InfoLabel>Case Type</InfoLabel>
                <DropDown id="case_type" {...register('case_type')}>
                  {mock_case_types.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </DropDown>
              </SingleContainer>
            </GridContainer>
            <GridContainer>
              <SingleContainer>
                <InfoLabel>Added</InfoLabel>
                <DateField
                  value={addedDate}
                  onChange={(e) => onAddedDateChange(e.target.value)}
                  id="added_date"
                  type="date"
                />
              </SingleContainer>
              <SingleContainer>
                <InfoLabel>Due Date</InfoLabel>

                <DateField
                  value={dueDate}
                  onChange={(e) => onDueDateChange(e.target.value)}
                  id="due_date"
                  type="date"
                />
              </SingleContainer>
            </GridContainer>
            <GridContainer>
              <SingleContainer>
                <InfoLabel>Priority</InfoLabel>{' '}
                <DropDown id="priority" {...register('priority')}>
                  {mock_priority.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </DropDown>
              </SingleContainer>
            </GridContainer>
            <GridContainer>
              <SingleContainer>
                <InfoLabel>Status</InfoLabel>

                <DropDown id="status" {...register('status')}>
                  {mock_status.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </DropDown>
              </SingleContainer>
            </GridContainer>
          </SectionContainer>

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
            <div
              style={{
                background: '#fff',
                borderRadius: '6px',
                width: '95%',
                padding: 5,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                border: '1px dashed #5faee3',
                margin: '10px',
              }}
            >
              <div />
              <StyledDiv
                style={{ width: '150px' }}
                background={'fff'}
                color={'4fadea'}
                onClick={() => setOpenModal(true)}
              >
                <SelectFile />
              </StyledDiv>
            </div>
            <GridContainer2>
              {caseImages
                .filter((url) => url !== '')
                .map((url, index) => (
                  <div key={index} style={{ margin: 10 }}>
                    <div
                      style={{
                        height: '100px',
                        width: '150px',
                        background: 'no-repeat center',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundImage: `url(${url})`,
                        border: '1px solid #eee',
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
          <SectionContainer>
            <InfoLabel>Job Area</InfoLabel>
            <Placeholder />
            <GridContainerCheckBox>
              <Checkbox
                icon={<UncheckedIcon />}
                checkedIcon={<CheckedIcon />}
                style={{ width: '30px', height: '30px' }}
                color="primary"
                checked={
                  jobArea.indexOf('common-not-asset') === -1 &&
                  jobArea.indexOf('common-asset') !== -1
                }
                value="common-asset"
                onChange={handleJobAreaChange}
              />
              <InfoLabel style={{ marginBottom: '6px' }}>Asset</InfoLabel>
              <Checkbox
                icon={<UncheckedIcon />}
                checkedIcon={<CheckedIcon />}
                style={{ width: '30px', height: '30px' }}
                color="primary"
                checked={
                  jobArea.indexOf('common-not-asset') === -1 &&
                  jobArea.indexOf('private lot') !== -1
                }
                value="private lot"
                onChange={handleJobAreaChange}
              />
              <InfoLabel style={{ marginBottom: '6px' }}>Private Lot</InfoLabel>
              <Checkbox
                icon={<UncheckedIcon />}
                checkedIcon={<CheckedIcon />}
                style={{ width: '30px', height: '30px' }}
                color="primary"
                checked={jobArea.indexOf('common-not-asset') !== -1}
                value="common-not-asset"
                onChange={handleJobAreaChange}
              />
              <InfoLabel style={{ marginBottom: '6px' }}>N/A</InfoLabel>
            </GridContainerCheckBox>
            <div />

            <GridContainer>
              <SingleContainer>
                {jobArea.indexOf('private lot') !== -1 && (
                  <>
                    <InfoLabel>Apartment</InfoLabel>

                    <DropDown id="apartment" {...register('apartment')}>
                      {mock_apartments.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </DropDown>
                  </>
                )}
              </SingleContainer>
            </GridContainer>
            <GridContainer>
              {jobArea.indexOf('common-not-asset') === -1 && (
                <>
                  <SingleContainer>
                    <InfoLabel>Category</InfoLabel>
                    <DropDown id="category" {...register('category')}>
                      {mock_category.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </DropDown>
                  </SingleContainer>
                  <SingleContainer>
                    <InfoLabel>Asset</InfoLabel>
                    <InputWrapper style={{ zIndex: 6 }}>
                      <Select
                        isMulti
                        onChange={onAssetChange}
                        options={mock_assets}
                      />
                    </InputWrapper>
                  </SingleContainer>
                </>
              )}
            </GridContainer>
            <GridContainer>
              <SingleContainer>
                <InfoLabel>Assigned To</InfoLabel>
                <InputWrapper style={{ zIndex: 4 }}>
                  <Select
                    isMulti
                    onChange={onAssignedChange}
                    options={mock_assigned_to}
                  />
                </InputWrapper>
              </SingleContainer>

              <SingleContainer>
                <InfoLabel>Contacts</InfoLabel>
                <InputWrapper style={{ zIndex: 3 }}>
                  <Select
                    isMulti
                    onChange={onContactChange}
                    options={mock_contacts}
                  />
                </InputWrapper>
              </SingleContainer>
            </GridContainer>
          </SectionContainer>
        </MainContainer>
        <FullWidthContainer>
          <InfoLabel>Case Title</InfoLabel>
          <div>
            <InputFieldSubject
              placeholder={'Email Subject'}
              onChange={(e) => onEmailSubjectChangeText(e)}
              value={email_subject}
            ></InputFieldSubject>
            <Button
              style={{
                border: '1px solid #ccc',
                borderLeft: 'none',
                height: 36,
                borderRadius: 0,
                width: '300px',
                position: 'relative',
                left: '-250px',
                top: '-1px',
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
                  width: '300px',
                  border: '1px solid #ccc',
                }}
              >
                <List sx={{ p: 0 }} component="nav">
                  {mock_subject.map((option, index) => (
                    <ListItem key={index}>
                      <Button
                        className={classes1.myClassName}
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'start',
            background: '#fff',
            padding: '10px 40px',
            borderBottom: '1px solid #ccc',
            borderRadius: '6px 6px 0 0',
            position: 'relative',
            top: '30px',
          }}
        >
          <div>Options</div>
        </div>
        <Placeholder />

        <FullWidthContainer>
          <GridContainer3>
            <Checkbox
              icon={<UncheckedIcon />}
              checkedIcon={<CheckedIcon />}
              style={{ width: '30px', height: '30px' }}
              id="add_to_report"
              {...register('add_to_report')}
            />
            <InfoLabel style={{ marginLeft: 10 }}>
              Add this case to management report?
            </InfoLabel>
            <Checkbox
              icon={<UncheckedIcon />}
              checkedIcon={<CheckedIcon />}
              style={{ width: '30px', height: '30px' }}
              id="duplicate_case"
              {...register('duplicate_case')}
            />

            <InfoLabel style={{ marginLeft: 10 }}>
              Duplicate this case across other buildings?
            </InfoLabel>
          </GridContainer3>
        </FullWidthContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'start',
            background: '#fff',
            padding: '10px 40px',
            borderBottom: '1px solid #ccc',
            borderRadius: '6px 6px 0 0',
            position: 'relative',
            top: '30px',
          }}
        >
          <div>Activity History</div>
        </div>
        <Placeholder />
        <FullWidthContainer>
          <InfoLabel>Jobs logged by</InfoLabel>
          <InputFieldLoggedBy
            id="logged_by"
            {...register('logged_by')}
            value={'demo manager'}
          ></InputFieldLoggedBy>
        </FullWidthContainer>

        <GridContainer>
          <div />
          <ButtonsContainer>
            <StyledDiv
              style={{ maxWidth: '150px' }}
              background={'fff'}
              color={'4fadea'}
              onClick={handleSubmit(onCancel)}
            >
              Cancel
            </StyledDiv>
            <StyledDiv
              style={{ maxWidth: '150px' }}
              background={'4fadea'}
              color={'fff'}
              disabled={assignedTo.length === 0}
              onClick={handleSubmit(onAddAndReset)}
            >
              Save and Add New
            </StyledDiv>

            <StyledDiv
              style={{ maxWidth: '150px' }}
              background={'4fadea'}
              color={'fff'}
              disabled={assignedTo.length === 0}
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </StyledDiv>
          </ButtonsContainer>
        </GridContainer>
      </MainWrapper>
    </div>
  );
};

export default Create;
