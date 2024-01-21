export type ResumeType = {
  body?: string;
  bullets: string[];
  company: string;
  createdAt: string;
  endAt: string;
  id: number;
  logo: string;
  skills: string[];
  startAt: string;
  title: string;
  type: 'Direct' | 'Contract';
  updatedAt: string;
};