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
              {/* <div
                data-layer='b43bb063-80f5-4068-8d07-f6a8f571ef66'
                className='icon-wizard'>
                <svg
                  data-layer='3be79750-4145-4a53-9676-fba3bc480cfd'
                  preserveAspectRatio='none'
                  viewBox='0.997499942779541 2 31.503662109375 31.50372314453125'
                  className='path256'>
                  <path d='M 10.75125026702881 7.399999618530273 L 14.50125026702881 9.5 L 12.4012508392334 5.75 L 14.50125026702881 2 L 10.75125026702881 4.100000381469727 L 7.001250267028809 2 L 9.101250648498535 5.75 L 7.001250267028809 9.5 L 10.75125026702881 7.399999618530273 Z M 28.75124931335449 22.09999847412109 L 25.00124931335449 20 L 27.10124778747559 23.75 L 25.00124931335449 27.5 L 28.75124931335449 25.40000152587891 L 32.50125122070312 27.5 L 30.4012508392334 23.75 L 32.50125122070312 20 L 28.75124931335449 22.09999847412109 Z M 32.50125122070312 2 L 28.75124931335449 4.100000381469727 L 25.00124931335449 2 L 27.10124778747559 5.75 L 25.00124931335449 9.5 L 28.75124931335449 7.399999618530273 L 32.50125122070312 9.5 L 30.4012508392334 5.75 L 32.50125122070312 2 Z M 21.05624961853027 9.934999465942383 C 20.47124862670898 9.350000381469727 19.5262508392334 9.350000381469727 18.94124984741211 9.934999465942383 L 1.436249971389771 27.43999862670898 C 0.8512499332427979 28.02499771118164 0.8512499332427979 28.96999931335449 1.436249971389771 29.55499839782715 L 4.946249961853027 33.06499862670898 C 5.53125 33.64999771118164 6.476249694824219 33.64999771118164 7.061249732971191 33.06499862670898 L 24.55125045776367 15.57500076293945 C 25.13624954223633 14.98999977111816 25.13624954223633 14.04500102996826 24.55125045776367 13.46000099182129 L 21.05624961853027 9.935000419616699 Z M 19.51124954223633 18.17000007629395 L 16.33124923706055 14.98999977111816 L 19.99124908447266 11.32999897003174 L 23.17124938964844 14.5099983215332 L 19.51124954223633 18.16999816894531 Z' />
                </svg>
              </div> */}
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
              {/* <div className='icon-candidates'>
                <svg
                  preserveAspectRatio='none'
                  viewBox='0 0 33.990234375 33.990234375'
                  className='path267'>
                  <path d='M 0 0 L 33.990234375 0 L 33.990234375 33.990234375 L 0 33.990234375 L 0 0 Z' />
                </svg>
                <svg
                  data-layer='345a7d5e-1815-4857-a25b-80a35d2c081e'
                  preserveAspectRatio='none'
                  viewBox='1 5 31.15771484375 19.82763671875'
                  className='path268'>
                  <path d='M 29.3251953125 5 L 29.3251953125 24.82763671875 L 32.15771484375 24.82763671875 L 32.15771484375 5 L 29.3251953125 5 Z M 23.66015625 24.82763671875 L 26.49267578125 24.82763671875 L 26.49267578125 5 L 23.66015625 5 L 23.66015625 24.82763671875 Z M 19.411376953125 5 L 2.416259765625 5 C 1.637316942214966 5 1 5.637316703796387 1 6.416259765625 L 1 23.411376953125 C 1 24.1903190612793 1.637316942214966 24.82763671875 2.416259765625 24.82763671875 L 19.411376953125 24.82763671875 C 20.19032096862793 24.82763671875 20.82763671875 24.1903190612793 20.82763671875 23.411376953125 L 20.82763671875 6.416259765625 C 20.82763671875 5.637316703796387 20.19032096862793 5 19.411376953125 5 Z M 10.913818359375 8.89471435546875 C 12.6699800491333 8.89471435546875 14.10040283203125 10.3251371383667 14.10040283203125 12.081298828125 C 14.10040283203125 13.8374605178833 12.6699800491333 15.26788330078125 10.913818359375 15.26788330078125 C 9.157656669616699 15.26788330078125 7.72723388671875 13.8374605178833 7.72723388671875 12.081298828125 C 7.72723388671875 10.3251371383667 9.157656669616699 8.89471435546875 10.913818359375 8.89471435546875 Z M 17.2869873046875 21.9951171875 L 4.5406494140625 21.9951171875 L 4.5406494140625 20.93292236328125 C 4.5406494140625 18.80853271484375 8.7894287109375 17.746337890625 10.913818359375 17.746337890625 C 13.0382080078125 17.746337890625 17.2869873046875 18.80853271484375 17.2869873046875 20.93292236328125 L 17.2869873046875 21.9951171875 Z' />
                </svg>
              </div> */}
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
              {/* <div className='icon-chat'>
                <svg
                  preserveAspectRatio='none'
                  viewBox='1.9999998807907104 1.9999998807907104 24.158447265625 24.15850830078125'
                  className='path261'>
                  <path d='M 24.95060157775879 6.831705570220947 L 22.53474807739258 6.831705570220947 L 22.53474807739258 17.70304298400879 L 6.831705570220947 17.70304298400879 L 6.831705570220947 20.11889457702637 C 6.831705570220947 20.78325462341309 7.375271797180176 21.32682228088379 8.039631843566895 21.32682228088379 L 21.32682228088379 21.32682228088379 L 26.15852737426758 26.15852737426758 L 26.15852737426758 8.039631843566895 C 26.15852737426758 7.375271797180176 25.61495971679688 6.831705570220947 24.95060157775879 6.831705570220947 Z M 20.11889457702637 14.07926464080811 L 20.11889457702637 3.207926511764526 C 20.11889457702637 2.543566942214966 19.57532691955566 1.99999988079071 18.91096878051758 1.99999988079071 L 3.207926511764526 1.99999988079071 C 2.543566942214966 1.99999988079071 1.99999988079071 2.543566942214966 1.99999988079071 3.207926511764526 L 1.99999988079071 20.11889457702637 L 6.831705570220947 15.28719043731689 L 18.91096878051758 15.28719043731689 C 19.57532691955566 15.28719043731689 20.11889457702637 14.74362373352051 20.11889457702637 14.07926464080811 Z' />
                </svg>
              </div> */}
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
