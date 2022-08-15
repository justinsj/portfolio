import { Maybe, Tuple } from '../types';
import { Stack } from './stack';


export const defaultDimensions: Tuple<number> = [450, 220];

export interface Award {
  id: number;
  title: string;
  banner: string;
  description: string;
  date?: string;
}

export const awards: Award[] = [
  {
    id: 0,
    title: "Academic Achievement Medal",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FAcademic%20Achievement%20Medal.jpg?alt=media&token=4a10705c-93fd-44e9-8576-b06dd629c487',
    description: 'Top 1% of graduates with a final CGA of at least 3.9.',
    date: '2020'
  },
  {
    id: 9,
    title: "Most Valuable Player in Executive Recruiting Consulting Corporate Project",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FExecutiveRecruiting_MVP.jpg?alt=media&token=2ed1137b-6815-4c3b-80f7-ea573c2e4dce',
    description: 'For the team member voted as the most valuable player in the project.',
    date: '2017'
  },
  {
    id: 5,
    title: "HKSAR Government Scholarship",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FIMG_3226.JPG.jpg?alt=media&token=b87084bf-3e0e-4e68-ad4e-ada1d70a4d83',
    description: 'For students that demonstrate:\n' +
      '(a) excellent performance in academic studies;\n' +
      '(b) recognized contribution to the institution/society;\n' +
      '(c) demonstrated leadership and good communication skills; and\n' +
      '(d) strong commitment to the Hong Kong community',
    date: '2017'
  },
  {
    id: 6,
    title: "Professor Wilson Tang Scholarship & Award",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FWater%20Shortage%20Research%20Best%20Poster%20%26%20Presentation.jpg?alt=media&token=fce08ce3-0f11-4e97-a324-c90b92fd42b6',
    description: '',
    date: '2017'
  },
  {
    id: 6,
    title: "Best Poster Design & Presentation Award",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FWater%20Shortage%20Research%20Best%20Poster%20%26%20Presentation.jpg?alt=media&token=fce08ce3-0f11-4e97-a324-c90b92fd42b6',
    description: 'For the group with the best poster design and presentation in a Hydrosystems Engineering course.',
    date: '2017'
  },
  {
    id: 7,
    title: "HKUST IDEERS Champion",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2Fideers.jpg?alt=media&token=67adcde6-8ba3-47af-a161-33827267268c',
    description: 'For the team that builds the best structure withstanding a series of earthquake testing.',
    date: '2017'
  },
  {
    id: 1,
    title: "Governor General's Academic Medal",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FIMG_3227.JPG.jpg?alt=media&token=362ae6b7-5946-4d04-8e4f-7d467240b831',
    description: 'For the highest average upon graduating from a secondary school.',
    date: '2015'
  },
  {
    id: 2,
    title: "Academic and Athletic Excellence Awards",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FIMG_3221.JPG.jpg?alt=media&token=e3dcfbfa-c60f-4d83-b271-2feabf304573',
    description: 'Numerous awards from high school.',
    date: '2015'
  },
  {
    id: 3,
    title: "Athlete of the Year",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FIMG_3225.JPG.jpg?alt=media&token=e0382cda-aae7-46fc-afd9-c1a39f7509c7',
    description: 'For one high school graduate for outstanding athletic achievement.',
    date: '2015'
  },
  {
    id: 4,
    title: "Prémio Flor de Lótus",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FIMG_3226.JPG.jpg?alt=media&token=b87084bf-3e0e-4e68-ad4e-ada1d70a4d83',
    description: 'The highest average upon graduating from a secondary school.',
    date: '2015'
  },
];
