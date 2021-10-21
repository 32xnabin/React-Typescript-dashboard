import { Typography, Button, Grid , Select, MenuItem,ListItemText} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {TableHeader,  DropDown, HorDiv} from './CaseTable.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import { experimentalStyled } from '@material-ui/core/styles';
const ButtonRed = experimentalStyled(Link)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};
     padding: 6px 20px;
     text-decoration:none;

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);


function PageHeader() {
  const mock_cases =["Current Cases","Completed Cases","Pending Cases"];

  return (
    
        <TableHeader>
            <HorDiv>
            
              {/* <DropDown>
                  {   
                  mock_cases.map((option)=><option>{option}</option>)
                   }
                    
              </DropDown>
            <Button color="primary">
              <FontAwesomeIcon color="black" icon={faFileExcel}/>
            </Button>   */}
      
            </HorDiv>
            <HorDiv>
              <ButtonRed to="/bm/cases/create" >New</ButtonRed>
              </HorDiv>
          
          </TableHeader>
      
  );
}

export default PageHeader;
