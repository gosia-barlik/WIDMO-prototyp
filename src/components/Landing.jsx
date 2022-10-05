import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import Typography from "@mui/material/Typography";
import background from "../assets/light-purple-background.jpg";
import creatorIcon from "../assets/creator-screen-shot.jpg";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid className='landing' container spacing={4}>
        <img
          src={background}
          className='section-background'
          alt='light purple background'
        />
        <Typography
          variant='body'
          component='div'
          gutterBottom
          className='landing-text hero'>
          <b>AIRA</b> to bezpłatne narzędzie wspomagające proces rekrutacji,
          wykorzystujące informacje zawarte w <br></br>
          <b>Zintegrowanym Rejestrze Kwalifikacji </b> oraz aktualnych rynkowych
          ofertach pracy
          {/* <span>
            Wykorzystaj informacje zawarte w{" "}
            <b>Zintegrowanym Rejestrze Kwalifikacji</b>, aby usprawnić proces
            rekrutacyjny w swojej firmie.{" "}
          </span>
          <span>
            Zdefiniuj potrzeby rekrutacyjne i stwórz ogłoszenie o pracę w
            oparciu o szczegółowe informacje zawarte w opisach kwalifikacji w
            rejestrze.{" "}
          </span>
          Zasoby informacji dostępne w ZRK mogą ułatwiać rozwiązywanie problemów
          związanych z poszukiwaniem i zatrudnianiem nowych pracowników oraz w
          działaniach na rzecz rozwoju zawodowego kadr. */}
        </Typography>
        <Typography
          variant='body'
          component='div'
          gutterBottom
          className='landing-text primary'
          style={{ marginTop: "250px" }}></Typography>
        <Typography
          variant='body'
          component='div'
          gutterBottom
          className='landing-text primary'
          style={{ marginTop: "300px" }}></Typography>

        <Stack
          spacing={4}
          direction='column'
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
          <Card sx={{ minWidth: 275 }} className='card-container'>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent className='card1' sx={{ flex: "1 0 auto" }}>
                <div className='rankomat-text2'>
                  <Typography variant='body' component='div'>
                    Tworzenie ogłoszenia
                  </Typography>
                </div>
                {/* <div className='icon-wrapper'>
                  <AppsIcon />
                </div> */}

                <div className='rankomat-text1'>
                  <span className='rankomat-text1-0'>
                    Tworząc ogłoszenie o pracę w naszym
                    <br />
                  </span>
                  <span className='rankomat-text1-14'>
                    Kreatorze ogłoszeń
                    <br />
                  </span>
                  <span className='rankomat-text1-36'>
                    będziesz mógł skorzystać z podpowiedzi generowanych przez
                    algorytmy sztucznej inteligencji. Korzystanie z podpowiedzi
                    jest opcjonalne. Wygenerowane wskazówki czerpią z zasobów
                    Zintegrowanego Rejestru Kwalifikacji oraz aktualnych
                    rynkowych ofert pracy.
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
            </Box>
            <img
              src={creatorIcon}
              className='card-image'
              alt='job posting creator screen shot'
            />
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
