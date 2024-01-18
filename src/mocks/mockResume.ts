export type ResumeType = {
  id: number;
  company: string;
  title: string;
  type: string;
  from: string;
  to: string;
  skills: string[],
  bullets: string[],
};

const MOCK_RESUME: ResumeType[] = [
  {
    id: 1,
    company: 'NBC Sports',
    title: 'Lead Engineer',
    type: 'Contract',
    from: '4/2023',
    to: 'Present',
    bullets: [
      'Led offshore team building next generation of digital video streaming apps for web, mobile and other device platforms such as smart tv’s, embeddable widgets and more...',
      'Built high volume e-commerce payments and checkout flows for SportsEngine Play application that increased sales by 7%.',
      'Led analytics effort to collect and test existing ui to provide better engagement and conversions. Increasing analytics by 25% across the app, giving the business crucial info needed to make decisions.',
      'Analyzed mongodb performance and provided support that led to increased performance reducing query times by 30%.',
      'Planned and implemented strategy for promotional codes including logic and technical flow that increased conversions by 20%.'
    ],
    skills: ['nextjs', 'react', 'graphql', 'apollo', 'mongodb'],
  },
  {
    id: 2,
    company: 'Livegistics',
    title: 'Chief Technology Officer',
    type: 'Direct',
    from: '2/2021',
    to: '3/2023',
    bullets: [
      'Provided direction, guidance, and expertise that transformed a startup organization from a 5 person team to over 50 with no funding to a 25 million dollar valuation in a Series C round.',
      'Oversaw all technical matters, implementing methodologies like Agile, various procedures, and guidelines that improved estimation, efficiency, and accuracy leading to 85% less missed deadlines. Prior to this, the company had never hit a single deadline.',
      'Spearheaded initiatives for creation of Project Management, Product, QA, UI/UX and DevOps departments that helped improve product life cycle and helped teams run more efficiently.',
      'Helped remediate over 200 vulnerabilities that were found in security scans allowing the company to become SOC 2 Compliant with no vulnerabilities. As a result, the company gained 5 major customers that required vendors to be compliant, leading to over 5 million dollars in revenue.',
      'Built a React Native application that allowed driver type users the ability to use the software resulting in thousands of new users and reduced customer processing time by 80%.',
      'Responsible for refractor of a large code base that led to a 40% reduction in bundle size, reduced dependencies on external libraries by 30%, improved readability, and helped enhance developer experience.',
    ],
    skills: ['nextjs', 'react','react-native', 'mui', 'firebase', 'nosql', 'firestore', 'firestorage', 'mobx', 'redux'],
  },
  {
    id: 3,
    company: 'Powerley',
    title: 'Web Team Manager',
    type: 'Direct',
    from: '12/2019',
    to: '1/2021',
    bullets: [
      'Through strong leadership I was able to help grow the web team from a 2 person team to over 10 and grow the web based portion of the native app from 20% to 60% making it the single largest tech utilized on the native app.',
      'Converted over 50% of the native apps’ screens from native code to strictly web views which led to a reduction in time for work going from concept to production by 66%.',
      'Helped create a new campaign called “MI Green Power” that helped our customers convert 30% more customers from traditional energy to renewable energy sources.',
      'Built and designed a new feature called “Sauce Cards” that helped improve our customers\' user engagement by 15%, increased returning visitors by 27%, and helped customers save hundreds of dollars on energy costs.',
    ],
    skills: ['react', 'nextjs', 'styled-components', 'puppeteer', 'aws'],
  },
  {
    id: 4,
    company: 'Belle Tire',
    title: 'Senior Frontend Engineer',
    type: 'Direct',
    from: '10/2017',
    to: '12/2019',
    bullets: [
      'Led analytics and testing campaign that enabled our marketing department to understand our users’ behavior better. This resulted in 25% lower bounce rates, increased time on page by 19 seconds on average, and led to 10% more conversions in sales.',
      'Identified poorly coded areas that were hard to maintain and fixed those issues resulting in more maintainable and easier to fix code.',
      'Helped consolidate legacy code that had been just bolted on top for many years leading to inadequate solutions, identified those areas and re architected more robust solutions to better handle the problems.',
    ],
    skills: ['react', 'nextjs', 'styled-components', 'puppeteer', 'aws'],
  },
  {
    id: 5,
    company: 'ControlTec',
    title: 'Senior React Engineer',
    type: 'Direct',
    from: '9/2016',
    to: '11/2017',
    bullets: [
      'Built new features and views that took meaningless data and visualized it for the user providing meaningful insights that helped detect recall issues, possible vehicle issues, and helped customers identify maintenance issues on fleet vehicles.',
      'Built a reporting dashboard that brought actionable real results from data to our customers’ fingertips resulting in 10% lower misdiagnoses, 10% lower missed vehicle issues, and 20% lower maintenance costs on fleet vehicles.',
    ],
    skills: ['react', 'nextjs', 'styled-components', 'puppeteer', 'aws'],
  },
]

export default MOCK_RESUME;