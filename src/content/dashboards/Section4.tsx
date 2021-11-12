import { Card, Typography, CardContent, IconButton } from '@material-ui/core';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GridContainer } from './Common.style';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Section4: React.FC = () => {
  const Row = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background-color: #fff;
    color: #000;
    border-top: 1px solid #ebebeb;
    min-width: 350px;
  `;
  const SubRow = styled(({ color, ...otherProps }) => <div {...otherProps} />)`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    color: #3a3a3a;
  `;

  return (
    <Card>
      <CardContent>
        <div className="card-header">
          <Typography fontSize={20} component="div">
            Latest Work Order Sent
          </Typography>
          <div className="card-header-action">
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <GridContainer>
          <Row>
            <SubRow>
              <FontAwesomeIcon color="#F87D7D" fontSize={8} icon={faFilePdf} />
              <Typography
                style={{ fontSize: 14, fontWeight: 500, marginLeft: '12px' }}
              >
                Rooftop Repairs - WO# 2056-A
                <Typography style={{ fontSize: 12 }} noWrap>
                  ABC Roofing
                </Typography>
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12 }} noWrap>
              Sent 27/04/21
            </Typography>
          </Row>
          <Row>
            <SubRow>
              <FontAwesomeIcon color="#F87D7D" fontSize={8} icon={faFilePdf} />
              <Typography
                style={{ fontSize: 14, fontWeight: 500, marginLeft: '12px' }}
              >
                Rooftop Repairs - WO# 2056-A
                <Typography style={{ fontSize: 12 }} noWrap>
                  ABC Roofing
                </Typography>
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12 }} noWrap>
              Sent 27/04/21
            </Typography>
          </Row>
          <Row>
            <SubRow>
              <FontAwesomeIcon color="#F87D7D" fontSize={8} icon={faFilePdf} />
              <Typography
                style={{ fontSize: 14, fontWeight: 500, marginLeft: '12px' }}
              >
                Rooftop Repairs - WO# 2056-A
                <Typography style={{ fontSize: 12 }} noWrap>
                  ABC Roofing
                </Typography>
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12 }} noWrap>
              Sent 27/04/21
            </Typography>
          </Row>
          <Row>
            <SubRow>
              <FontAwesomeIcon color="#F87D7D" fontSize={8} icon={faFilePdf} />
              <Typography
                style={{ fontSize: 14, fontWeight: 500, marginLeft: '12px' }}
              >
                Rooftop Repairs - WO# 2056-A
                <Typography style={{ fontSize: 12 }} noWrap>
                  ABC Roofing
                </Typography>
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12 }} noWrap>
              Sent 27/04/21
            </Typography>
          </Row>
          <Row>
            <SubRow>
              <FontAwesomeIcon color="#F87D7D" fontSize={8} icon={faFilePdf} />
              <Typography
                style={{ fontSize: 14, fontWeight: 500, marginLeft: '12px' }}
              >
                Rooftop Repairs - WO# 2056-A
                <Typography style={{ fontSize: 12 }} noWrap>
                  ABC Roofing
                </Typography>
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12 }} noWrap>
              Sent 27/04/21
            </Typography>
          </Row>
          <Row>
            <SubRow>
              <FontAwesomeIcon color="#F87D7D" fontSize={8} icon={faFilePdf} />
              <Typography
                style={{ fontSize: 14, fontWeight: 500, marginLeft: '12px' }}
              >
                Rooftop Repairs - WO# 2056-A
                <Typography style={{ fontSize: 12 }} noWrap>
                  ABC Roofing
                </Typography>
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12 }} noWrap>
              Sent 27/04/21
            </Typography>
          </Row>
          <Row>
            <SubRow>
              <FontAwesomeIcon color="#F87D7D" fontSize={8} icon={faFilePdf} />
              <Typography
                style={{ fontSize: 14, fontWeight: 500, marginLeft: '12px' }}
              >
                Rooftop Repairs - WO# 2056-A
                <Typography style={{ fontSize: 12 }} noWrap>
                  ABC Roofing
                </Typography>
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12 }} noWrap>
              Sent 27/04/21
            </Typography>
          </Row>
          <Row>
            <SubRow>
              <FontAwesomeIcon color="#F87D7D" fontSize={8} icon={faFilePdf} />
              <Typography
                style={{ fontSize: 14, fontWeight: 500, marginLeft: '12px' }}
              >
                Rooftop Repairs - WO# 2056-A
                <Typography style={{ fontSize: 12 }} noWrap>
                  ABC Roofing
                </Typography>
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12 }} noWrap>
              Sent 27/04/21
            </Typography>
          </Row>
          <Row>
            <SubRow>
              <FontAwesomeIcon color="#F87D7D" fontSize={8} icon={faFilePdf} />
              <Typography
                style={{ fontSize: 14, fontWeight: 500, marginLeft: '12px' }}
              >
                Rooftop Repairs - WO# 2056-A
                <Typography style={{ fontSize: 12 }} noWrap>
                  ABC Roofing
                </Typography>
              </Typography>
            </SubRow>
            <Typography style={{ fontSize: 12 }} noWrap>
              Sent 27/04/21
            </Typography>
          </Row>
        </GridContainer>
      </CardContent>
    </Card>
  );
};

export default Section4;
