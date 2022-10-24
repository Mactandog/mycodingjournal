import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import avatar from '../assets/media/Smileyface_Outline.png';
import '../App.css';
import styled from 'styled-components';


export default function MediaCard(props) {
    const Link = styled.a `text-decoration: none;`;

  return (
    
    <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={avatar}
                    image-position="cover"
                    alt="Avatar"
                />
                <CardContent>
                    <Typography  variant="h5" component="div">
                        {props.fullName}
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        {props.position}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.intro}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={props.portfolio} target="_blank">
                        <Button size="small">Portfolio</Button>
                    </Link>
                    <Link>
                        <Button size="small">Hire</Button>
                    </Link>
                </CardActions>
            </Card>
            {/* <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={avatar}
                    alt="Avatar"
                />
                <CardContent>
                    <Typography  variant="h5" component="div">
                        John Doe
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        Web Designer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Monitored social media and Google SEO analytics to adjust post time, location, and various media to grow target platform by 20,000+ followers in less than a year.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href='https://mui.com/material-ui/react-link/' target="_blank">
                        <Button size="small">Portfolio</Button>
                    </Link>
                    <Link>
                        <Button size="small">Hire</Button>
                    </Link>
                </CardActions>
            </Card> */}
            {/* <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={avatar}
                    alt="Avatar"
                />
                <CardContent>
                    <Typography  variant="h5" component="div">
                        Jane Doe
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        UI/UX Expert
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Monitored social media and Google SEO analytics to adjust post time, location, and various media to grow target platform by 20,000+ followers in less than a year.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href='https://mui.com/material-ui/react-link/' target="_blank">
                        <Button size="small">Portfolio</Button>
                    </Link>
                    <Link>
                        <Button size="small">Hire</Button>
                    </Link>
                </CardActions>
            </Card> */}
        </div>
    
  );
}
