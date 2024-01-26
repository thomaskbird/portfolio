type SiteTypes = {
  dateTimeFormat: string;
  momentFormat: string;
  momentFormatWoTimestamp: string;
  dayFormat: string;
  meta: {
    title: string;
    description: string;
  }
};

const config: SiteTypes = {
  dateTimeFormat: "y-MM-dd HH:mm:ss",
  momentFormat: "YYYY-MM-DD hh:mm:ss",
  momentFormatWoTimestamp: "YYYY-MM-DD",
  dayFormat: "ddd",
  meta: {
    title: 'Thomas K Bird',
    description: "I'm a passionate Engineer who loves to tinker, a genuine curiosity keeps me invigorated with the work I do. Driven and relentless, I'm the type of person who encounters problems and just doesn't know the words \"Give up\". I'm extremely collaborative, concise and attentive throughout all that I do with a special focus on attention to detail. I've had a diverse background in many industries, sizes of companies and roles. This has given me a top notch ability to anticipate and deliver on a higher level by being ready for what's coming next. It gives me a strong intuition that helps prepare me for future problems and the inevitable curve balls. My passion is building and creating amazing pieces of software that are not only cool, but make my clients and customers lives better!",
  },
};

export default config;
