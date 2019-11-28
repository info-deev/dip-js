import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import bgCard from '../static/images/javascript.png';

const About = () => {
  return (
    <div style={{marginTop: '100px'}}>
      <Card style={{maxWidth: '345px', margin: '0 auto'}}>
        <CardActionArea>
          <CardMedia
            // image='../static/images/javascript.png'
            component='img'
            image={bgCard}
            title="Дипломная работа по курсу «JavaScript с нуля»"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              «JavaScript с нуля»
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              Дипломная работа
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              react: 16.12.0<br />
              react-dom: 16.12.0<br />
              react-router-dom: 5.1.2<br />
              react-redux: 7.1.3<br />
              redux: 4.0.4<br />
              redux-thunk: 2.3.0<br />
              react-scripts: 3.2.0<br />
              react-infinite-scroller: 1.2.4<br />
              unsplash-js: 6.0.0<br />
              <br />
              <br />
              &copy;2019 Александр Деев
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default About;