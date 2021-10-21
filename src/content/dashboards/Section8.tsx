import { Card, Box, Typography, Avatar } from '@material-ui/core';

  import { GridContainer } from './Common.style';
  import { experimentalStyled } from '@material-ui/core/styles';



function Section8() {


  const price = {
    week: {
      labels: [
        'Monday',
        'Tueday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      data: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16]
    }
  };
  const AvatarWrapper = experimentalStyled(Avatar)(
  ({ theme }) => `
        background: transparent;
        margin-right: ${theme.spacing(0.5)};
`
);

  return (
    <Card>
      <GridContainer color={"fff"}>
            
            <img style={{margin:3}} height="15" width="15" alt="BTC" src="/static/images/placeholders/logo/bitcoin.png" />
          
            <Typography variant="subtitle1" noWrap>
              Contractor Document
            </Typography>
             <Typography variant="subtitle1" noWrap>
               Document
            </Typography>

            <AvatarWrapper>
            <img alt="BTC" src="/static/images/placeholders/logo/bitcoin.png" />
           </AvatarWrapper>
            <Typography variant="subtitle1" noWrap>
              Contractor Document
            </Typography>
             <Typography variant="subtitle1" noWrap>
               Document
            </Typography>



            <AvatarWrapper>
            <img alt="BTC" src="/static/images/placeholders/logo/bitcoin.png" />
           </AvatarWrapper>
            <Typography variant="subtitle1" noWrap>
              Contractor Document
            </Typography>
             <Typography variant="subtitle1" noWrap>
               Document
            </Typography>
            <AvatarWrapper>
            <img alt="BTC" src="/static/images/placeholders/logo/bitcoin.png" />
           </AvatarWrapper>
            <Typography variant="subtitle1" noWrap>
              Contractor Document
            </Typography>
             <Typography variant="subtitle1" noWrap>
               Document
            </Typography>

            <AvatarWrapper>
            <img alt="BTC" src="/static/images/placeholders/logo/bitcoin.png" />
           </AvatarWrapper>
            <Typography variant="subtitle1" noWrap>
              Contractor Document
            </Typography>
             <Typography variant="subtitle1" noWrap>
               Document
            </Typography>

            <AvatarWrapper>
            <img alt="BTC" src="/static/images/placeholders/logo/bitcoin.png" />
           </AvatarWrapper>
            <Typography variant="subtitle1" noWrap>
              Contractor Document
            </Typography>
             <Typography variant="subtitle1" noWrap>
               Document
            </Typography>

            
            
      </GridContainer>
      
    </Card>
  );
}

export default Section8;
