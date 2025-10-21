import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Videos from "./videos.json"
import Link from '@mui/material/Link';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ResponsiveTopVideosGrid( {videos = []}) {
  console.log("Videos received in Grid:", videos);
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container justifyContent="flex-end" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{margin:'2%'}}>
        {videos.map((video, index) => (
          <Grid key={index} xs={2} sm={4} md={4}>
            <Link 
            href={video.url}
            underline='none'
            sx={{"&:active":{
              backgroundColor:'#f2f2f2 '
            }}}
            >
            <Card sx={{width:'400px', boxShadow:'none'}}>
              <CardMedia
                component="img"
                height="140"
                image={video.thumbnail}
                alt={video.title}
                sx={{height:'200px', borderRadius:'10px'}}
              />
              <Box sx={{marginTop:'10px' ,display:'grid', gridTemplateColumns:'50px 1fr 50px'}}>
                <CardMedia
                  component="img"
                  height="140"
                  image={video.profileImage}
                  sx={{width:'30px', height:'30px', borderRadius:'50%', gridArea:'span 3'}}
                />
                <Typography gutterBottom component="div" sx={{fontSize:'0.95rem', fontWeight:'bold'}}>
                  {video.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', gridArea:'2/2' }}>
                  {video.channel}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', gridArea:'3/2' }}>
                  {video.views} • {video.posted}
                </Typography>
              </Box>
            </Card>
             </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
