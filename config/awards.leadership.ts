import { Maybe, Tuple } from '../types';
import { Stack } from './stack';
import { Award } from './awards';

export const awards: Award[] = [
  {
    id: 4,
    title: "Most Valuable Player in Executive Recruiting Consulting Corporate Project",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FExecutiveRecruiting_MVP.jpg?alt=media&token=2ed1137b-6815-4c3b-80f7-ea573c2e4dce',
    description: 'For the team member voted as the most valuable player in the project.',
    date: '2017'
  },
  {
    id: 3,
    title: "REDbird Leadership Program Gold Award",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2Fgold%20award.jpg?alt=media&token=23f16043-ebfa-4852-8e2d-3f43f23eab62',
    description: 'For demonstrating outstanding leadership in the REDbird program.',
    date: '2017'
  },
  {
    id: 2,
    title: "REDbird Leadership Program Top Achiever",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2Ftop%20achiever.jpg?alt=media&token=a4c50f85-3855-402d-9391-8d95d68eeb8f',
    description: 'For demonstrating outstanding performance in coaching and leadership.',
    date: '2017'
  },
  {
    id: 1,
    title: "Best Poster Design & Presentation Award",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2FWater%20Shortage%20Research%20Best%20Poster%20%26%20Presentation.jpg?alt=media&token=fce08ce3-0f11-4e97-a324-c90b92fd42b6',
    description: 'For the group with the best poster design and presentation in a Hydrosystems Engineering course.',
    date: '2017'
  },
  {
    id: 0,
    title: "HKUST IDEERS Champion",
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/awards%2Fideers.jpg?alt=media&token=67adcde6-8ba3-47af-a161-33827267268c',
    description: 'For the team that builds the best structure withstanding a series of earthquake testing.',
    date: '2017'
  },
];
