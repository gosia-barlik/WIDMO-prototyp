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
import creatorIcon from "../assets/creator-screen-shot.png";
import analizerIcon from "../assets/analize-cv-screen-shot.png";
import searchInfographic from "../assets/search-infographic.jpg";

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
              <CardContent
                className='card1 card-hero'
                sx={{ flex: "1 0 auto" }}>
                <div className='hero-text2'>
                  <Typography
                    variant='body'
                    component='div'
                    className='primary'>
                    Rekrutuj szybko i skutecznie
                  </Typography>
                  <div className='hero-text1'>
                    <Typography variant='body' component='div'>
                      AIRA to bezpłatne narzędzie wspomagające proces
                      rekrutacji, wykorzystujące informacje zawarte w
                      Zintegrowanym Rejestrze Kwalifikacji oraz aktualnych
                      rynkowych ofertach pracy
                    </Typography>
                  </div>
                </div>
              </CardContent>
              <CardActions className='card1'>
                <NavLink to='#'>
                  <Button
                    variant='contained'
                    fullWidth
                    className='button-primary-contained'>
                    Dowiedz się więcej
                  </Button>
                </NavLink>
              </CardActions>
            </Box>

            <img
              src={searchInfographic}
              className='card-image'
              alt='job posting creator screen shot'
            />
          </Card>
          <Typography
            variant='h5'
            component='div'
            className='section-title'
            style={{ height: "40px", marginTop: "80px" }}>
            Moduły
          </Typography>
          <Card className='card-container'>
            <CardMedia
              component='img'
              image={creatorIcon}
              alt='job posting creator screen shot'
              sx={{ width: 400 }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", width: 400 }}>
              <CardContent className='card1' sx={{ flex: "1 0 auto" }}>
                <div className='rankomat-text2'>
                  <Typography variant='body' component='div'>
                    Tworzenie ogłoszenia
                  </Typography>
                </div>

                <div className='rankomat-text1'>
                  <span className='rankomat-text1-0'>
                    Tworząc ogłoszenie o pracę w naszym
                    <br />
                  </span>
                  <span className='rankomat-text1-14'>
                    Kreatorze ogłoszeń
                    <br />
                  </span>
                  <span className=''>
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
                    className='button-primary-contained'>
                    Stwórz ogłoszenie
                  </Button>
                </NavLink>
              </CardActions>
            </Box>
          </Card>
          <Card
            className='card-container'
            sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: 400 }}>
              <CardContent className='card1' sx={{ flex: "1 0 auto" }}>
                <div className='rankomat-text2'>
                  <Typography variant='body' component='div'>
                    Analizowanie CV
                  </Typography>
                </div>

                <div className='rankomat-text1'>
                  <span className='rankomat-text1-0'>
                    Dzięki modułowi
                    <br />
                  </span>
                  <span className='rankomat-text1-14'>
                    Analizowania CV
                    <br />
                  </span>
                  <span className='rankomat-text1-36'>
                    będziesz mógł zaoszczędzić czas na ewaluacji nadesłanych
                    dokumentów aplikacyjnych. Nasze algorytmy przeanalizują ich
                    treść pod kątem zawartych w nich informacji na temat
                    kwalifikacji i umiejętności. Korzystając z filtrów
                    zaawansowanych sprawnie wyszukasz kluczowe dla siebie
                    informacje.
                  </span>
                </div>
              </CardContent>
              <CardActions className='card1'>
                <NavLink to='/rankomat'>
                  <Button
                    variant='contained'
                    fullWidth
                    className='button-primary-contained'>
                    Analizuj CV
                  </Button>
                </NavLink>
              </CardActions>
            </Box>
            <CardMedia
              component='img'
              image={analizerIcon}
              alt='cv analizer screen shot'
              sx={{ width: 400 }}
            />
          </Card>
        </Stack>
      </Grid>
    );
  }
}

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
