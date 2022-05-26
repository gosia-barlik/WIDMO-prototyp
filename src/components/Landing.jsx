import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import Typography from "@mui/material/Typography";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid className='landing' container spacing={4}>
        <div className='text-landing'>
          <span className='text-landing-0'>AIRA</span>
          <span className='text-landing-4'>
            &nbsp; to bezpłatne narzędzie, które pomoże Ci:
            <br />
          </span>
          <span className='text-landing-46'>
            <br />
            Stworzyć ogłoszenie o pracę
            <br />
            Wytypować kandydatów, których umiejętności odpowiadają opisowi
            stanowiska, na które rekrutujesz
            <br />
            Przygotować się do rozmowy rekrutacyjnej z wybranym kandydatem
            <br />
          </span>
        </div>
        <Stack
          spacing={4}
          direction='row'
          className='section-cards'
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 228,
            },
          }}>
          <Card
            sx={{ minWidth: 275 }}
            className='card-container kreator-card-container'>
            <CardContent className='card1'>
              <div className='card-color'></div>
       
              <div className='rankomat-text2'>
                <Typography variant='body' component='div'>
                  Stwórz ogłoszenie
                </Typography>
              </div>
              <div className='icon-wrapper'>
                <AppsIcon />
              </div>

              <div
                data-layer='69b95a17-8759-4c7d-a6d4-76e0ba869ed9'
                className='rankomat-text1'>
                <span className='rankomat-text1-0'>
                  Za pomocą
                  <br />
                </span>
                <span className='rankomat-text1-14'>
                  {" "}
                  Kreatora ogłoszeń
                  <br />
                </span>
                <span className='rankomat-text1-36'>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. <br />
                  Donec pretium lectus sem, faucibus <br />
                  consequat lacus pharetra non. <br />{" "}
                </span>
              </div>
            </CardContent>
            <CardActions className='card1'>
              <NavLink to='/creator'>
                <Button
                  variant='contained'
                  fullWidth
                  className='button-primary-contained'>
                  Stwórz ogłoszenie
                </Button>
              </NavLink>
            </CardActions>
          </Card>

          <Card sx={{ minWidth: 275 }} className='card-container'>
            <CardContent className='card1'>
              <div className='card-color'></div>
              
              <div className='rankomat-text2'>
              <Typography variant='body' component='div'>
                  Dopasuj kandydatów 
                </Typography>
              </div>
              <div className='icon-wrapper'>
                <AppsIcon />
              </div>
              <div className='rankomat-text1'>
                <span className='rankomat-text1-0'>
                  Korzystając z<br />
                </span>
                <span className='rankomat-text1-14'>
                  Rankomatu życiorysów
                  <br />
                </span>
                <span className='rankomat-text1-36'>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. <br />
                  Donec pretium lectus sem, faucibus <br />
                  consequat lacus pharetra non. <br />{" "}
                </span>
              </div>
            </CardContent>
            <CardActions className='card1'>
              <NavLink to='/rankomat'>
                <Button
                  variant='contained'
                  fullWidth
                  className='button-primary-contained'>
                  Dopasuj życiorysy
                </Button>
              </NavLink>
            </CardActions>
          </Card>

          <Card
            sx={{ minWidth: 275 }}
            className='card-container inspirator-card-container'>
            <CardContent className='card1'>
              <div className='card-color'></div>
              
              <div className='rankomat-text2'>
              <Typography variant='body' component='div'>
                  Przygotuj się do rozmowy
                </Typography>
              </div>
              <div className='icon-wrapper'>
                <AppsIcon />
              </div>
             
              <div className='rankomat-text1'>
                <span className='rankomat-text1-0'>
                  Dzięki
                  <br />
                </span>
                <span className='rankomat-text1-14'>
                  {" "}
                  Inspiratorowi rozmowy
                  <br />
                </span>
                <span className='rankomat-text1-36'>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. <br />
                  Donec pretium lectus sem, faucibus <br />
                  consequat lacus pharetra non. <br />{" "}
                </span>
              </div>
            </CardContent>
            <CardActions className='card1'>
              <Button
                variant='contained'
                fullWidth
                className='button-primary-contained'>
                Przygotuj się do rozmowy
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Grid>
    );
  }
}

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
