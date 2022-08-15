import { Maybe, Tuple } from '../types';
import { Stack } from './stack';
import { Award } from './awards';

export const awards: Award[] = [
  {
    id: 6,
    title: "Academic Achievement Medal",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FAcademic%20Achievement%20Medal.jpg?alt=media&token=4a10705c-93fd-44e9-8576-b06dd629c487',
    description: 'Top 1% of graduates with a final CGA of at least 3.9.',
    date: '2020'
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
    id: 4,
    title: "Professor Wilson Tang Scholarship & Award",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2Fprof%20wilson.jpg?alt=media&token=3591c6b0-c2a5-45ec-a3fe-616f66b3aced',
    description: 'For awarding outstanding first-year Engineering students choosing Civil & Environmental Engineering as their major program.',
    date: '2016'
  },
  {
    id: 3,
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
    id: 1,
    title: "Prémio Flor de Lótus",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FIMG_3226.JPG.jpg?alt=media&token=b87084bf-3e0e-4e68-ad4e-ada1d70a4d83',
    description: 'The highest average upon graduating from a secondary school.',
    date: '2015'
  },
  {
    id: 0,
    title: "Scholars",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2Fscholars.jpg?alt=media&token=aa73eb0f-d46e-44d0-a0bc-21b0ab10c4c1',
    description: 'For attaining the highest level of academic achievement of higher than 95%.',
    date: '2017'
  },
];
