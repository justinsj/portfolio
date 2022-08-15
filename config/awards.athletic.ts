import { Maybe, Tuple } from '../types';
import { Stack } from './stack';
import { Award } from './awards';


export const awards: Award[] = [
  {
    id: 1,
    title: "Athlete of the Year",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FIMG_3225.JPG.jpg?alt=media&token=e0382cda-aae7-46fc-afd9-c1a39f7509c7',
    description: 'For one high school graduate for outstanding athletic achievement.',
    date: '2015'
  },
  {
    id: 0,
    title: "Action Asia Events Repulse Bay (12km) Champion",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2Frepulse%20bay.jpg?alt=media&token=4543c407-7c88-4fb2-b46d-c90aa95befeb',
    description: 'First place in the long-distance trail run in Repulse Bay.',
    date: '2015'
  },
];
