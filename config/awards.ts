import { Maybe, Tuple } from '../types';

export interface Award {
  id: number;
  title: string;
  banner: string;
  description: string;
  date?: string;
}
