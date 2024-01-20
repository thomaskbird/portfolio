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
      'Led offshore team building <em>next generation</em> of digital video streaming apps for web, mobile and other device platforms such as smart tv’s, embeddable widgets and more...',
      'Built <em>high volume</em> e-commerce payments and checkout flows for SportsEngine Play application that <em>increased sales</em> by 7%.',
      'Led analytics effort to collect and test existing ui to provide better engagement and conversions. Increasing analytics by <em>25%</em> across the app, giving the business crucial info needed to make decisions.',
      'Analyzed mongodb performance and provided support that led to <em>increased performance</em> reducing query times by 30%.',
      'Planned and implemented strategy for promotional codes including logic and technical flow that <em>increased conversions</em> by 20%.'
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
  {
    id: 6,
    company: 'Ultimate Software',
    title: 'Senior UI Engineer',
    type: 'Direct',
    from: '08/2015',
    to: '09/2016',
    bullets: [
      'Created a small 10 person team called the “Frontend Standards Team.” Our team crafted a UI framework and design language system that reduced redundant code and logic by 43%.',
      'Implemented GraphQL which reduced code complexity and allowed us flexibility to write API’s in whatever tool was right for the job while having a single standardized query language to query with.',
      'Held regular meetings of key stakeholders from various departments to ensure that MVP was delivered, discuss feature enhancements, and plan for future growth.'
    ],
    skills: ['Angular', 'MongoDB', 'Graphql'],
  },
  {
    id: 7,
    company: 'Vestrics',
    title: 'Senior UI/UX Engineer',
    type: 'Direct',
    from: '08/2014',
    to: '08/2015',
    bullets: [
      'Single handedly created the UI for a predictive analysis platform for a startup that was eventually purchased by Ultimate Software in an acquisition.',
      'Inherited a legacy application half completed. Decided to revamp and restart from scratch due to poor performance and load times which reduced load time by 60% and decreased bugs reported by 60%.'
    ],
    skills: ['Angular', 'Cypress', 'Selenium', 'Express', 'Node', 'MongoDB', 'Bootstrap'],
  },
  {
    id: 8,
    company: 'International Bancard',
    title: 'Fullstack Developer',
    type: 'Contract',
    from: '08/2014',
    to: '02/2015',
    bullets: [
      'Built small microsites that helped increase registrations at events by 24%.',
      'Led effort of refactoring code base that reduced the number of reported bugs by 16%.',
      'Reduced technical debt by 43%.'
    ],
    skills: ['Laravel', 'PHP', 'Wordpress', 'Angular', 'Bootstrap', 'Ember', 'Grunt', 'UXPin', 'Photoshop', 'Git'],
  },
  {
    id: 9,
    company: 'Dominos Pizza',
    title: 'Senior Developer',
    type: 'Contract',
    from: '02/2014',
    to: '08/2014',
    bullets: [
      'Refactored large portions of a proprietary legacy javascript framework that increased sprint velocity by an average of 10-20 story points.',
      'Converted the website\'s css from traditional to responsive allowing our site to be visible to 30% more users by opening our site to mobile usage in an optimized way.'
    ],
    skills: ['Javascript', 'Css', 'Html'],
  },
  {
    id: 10,
    company: 'Printsites LLC',
    title: 'Full Stack Developer',
    type: 'Contract',
    from: '05/2013',
    to: '06/2014',
    bullets: [
      'Built a fully custom WYSIWYG editor for print solutions that enabled thousands of users to upload, preview, and order their images online.',
      'Designed a streamlined user interface that helped increase conversions by 13%.',
      'Refactored code base that helped reduce complexity, redundancy, and bundle sizes by 30%.'
    ],
    skills: ['Symfony', 'Laravel', 'Drupal', 'Node', 'Angular'],
  },
  {
    id: 11,
    company: 'UnitedHealth Group',
    title: 'Senior Developer',
    type: 'Contract',
    from: '07/2013',
    to: '02/2014',
    bullets: [
      'Built new features focused on users’ abilities to track their health that led to 10% higher time on pages, lowered bounce rates by 5%, and increased return visits by 9%.',
      'Helped push teams from functional to cross functional teams. This improved efficiency, decreasing deadlines missed by 17%, increasing sprint velocity by 12%, and helped provide more scalability from a man power perspective.'
    ],
    skills: ['angular', 'jquery', 'html', 'css'],
  },
  {
    id: 12,
    company: 'Marketing Associates',
    title: 'Senior Frontend Engineer',
    type: 'Contract',
    from: '05/2013',
    to: '01/2014',
    bullets: [
      'Programmed hundreds of marketing emails that helped create 12% higher click through rates.',
      'Responsible for creation of various micro sites coupled with marketing campaigns that increased sales for customers by 7%.'
    ],
    skills: ['Laravel', 'Php', 'Javascript', 'Css', 'Html', 'jQuery', 'Mail Chimp', 'Bootstrap'],
  },
  {
    id: 13,
    company: 'LeDuc Creative Co',
    title: 'Fullstack Developer',
    type: 'Contract',
    from: '04/2010',
    to: '09/2013',
    bullets: [
      'Built over 50 standards compliant websites for customers that helped increase their online visibility and promote their brand.',
      'Built custom content management systems in Php and utilized Wordpress to help give more granular content control to our customers.'
    ],
    skills: ['Wordpress', 'Php', 'Javascript', 'Html', 'Css', 'jQuery', 'Sql'],
  },
  {
    id: 14,
    company: 'JR Thompson Co',
    title: 'Senior Engineer',
    type: 'Contract',
    from: '01/2012',
    to: '11/2012',
    bullets: [
      'Built a BMO (Build My Own) prototype for vehicle model configuration that helped win a $250,000 contract with SRT Motorsports.',
      'Architected and developed the SRT Viper’s vehicle page that received over 2 million views in just 4 hrs during the release party of the new vehicle in 2012.'
    ],
    skills: ['Html5', 'Css3', 'ModX', 'PHP', 'SQL', 'Laravel', 'jQuery', 'Bootstrap'],
  },
  {
    id: 15,
    company: 'Digital 10 Media',
    title: 'Senior Developer',
    type: 'Contract',
    from: '06/2011',
    to: '08/2012',
    bullets: [
      'Created streamlined registration process flow for an event software registration site that helped increase engagement and interactions by 37%.',
      'Built a rewards program that increased return users by 15%.',
      'Overhauled user registration flow cutting down on excess information that only discouraged users and simplified layout to be simpler resulting in 9% more signups.'
    ],
    skills: ['Php', 'Sql', 'PDO', 'Html', 'Css', 'jQuery', 'javascript', 'Node'],
  },
  {
    id: 16,
    company: 'Brogan & Partners',
    title: 'Web Developer',
    type: 'Contract',
    from: '07/2010',
    to: '11/2011',
    bullets: [
      'Created websites, landing pages, and email campaigns that increased sales on average of 5%.',
      '● Redesigned customer checkout flow reducing pages from 5 to 3 and increasing conversions by 11% by simplifying the view and required information.'
    ],
    skills: ['Wordpress', 'Php', 'Html', 'Css', 'Javascript', 'Email', 'Photoshop', 'Illustrator'],
  },
  {
    id: 17,
    company: 'Media Genesis',
    title: 'Developer Designer',
    type: 'Contract',
    from: '05/2011',
    to: '10/2011',
    bullets: [
      'Designed and developed large scale websites for companies like Oakland Regional Hospital that helped reduce customer support call volumes by 10% through a support forum.',
      'Designed website views that increased time on page by 24 seconds.'
    ],
    skills: ['Drupal', 'Wordpress', 'Javascript', 'Sql', 'Php', 'Html', 'Css', 'Photoshop', 'Illustrator'],
  },
  {
    id: 18,
    company: 'Revize Software Systems',
    title: 'Creative Director',
    type: 'Contract',
    from: '10/2010',
    to: '05/2011',
    bullets: [
      'Designed, developed, and facilitated over 100 websites for municipalities and nonprofit organizations that led to 30% increase in production.',
      'Streamlined CMS interface providing an easier to use and more robust platform for customers.'
    ],
    skills: ['Html', 'Css', 'Javascript', 'jQuery', 'Photoshop', 'Bootstrap'],
  },
  {
    id: 19,
    company: 'RLM Industries Inc',
    title: 'Sales Executive & Webmaster',
    type: 'Direct',
    from: '02/2008',
    to: '01/2010',
    bullets: [
      'Managed and developed html email marketing campaign that targeted over 10,000 prospects, leading to an increase in calls to sales by 17%.',
      'Built a custom tracking software in Php utilizing barcodes and scanners that tracked inventory throughout the lifecycle giving customers more detailed logistical information on their orders.'
    ],
    skills: ['Drupal', 'Php', 'Html', 'Css', 'Javascript', 'Mail Chimp', 'Photoshop', 'Sql'],
  },
  {
    id: 20,
    company: 'United States Navy',
    title: 'Boatswains Mate 3rd Class',
    type: 'Direct',
    from: '08/2004',
    to: '11/2007',
    bullets: [
      'Managed teams of up to 20 personnel at a time, ensuring that various tasks were completed by deadlines required in an above satisfactory manner.',
      'Assisted in navigation and piloted on specific operations, where precision and care were required during master helmsman operations through the Straits of Gibraltar, Suez Canal and others.',
      'Qualified SAR (Search and Rescue) swimmer and First responder (Medical). Carried out administrative tasks, qualified 3M (ships maintenance), qualified expert shooter for M-16 and sharp shooter for the 9mm and damage control.'
    ],
    skills: ['communication', 'leadership', 'time management'],
  }
]

export default MOCK_RESUME;