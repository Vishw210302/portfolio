import React from "react";

const ResumeDataContext = React.createContext();

const data = [
  {
    name: "Vishw Prajapati",
    email: "vishwprajapati66@gmail.com",
    aboutMe: "Hi, I'm Vishw Prajapati, a passionate MERN Stack Developer and a Stand-Up Comedian.By day, I specialize in crafting dynamic, high-performance web applications using modern technologies like MongoDB, Express.js, React.js, React Native and Node.js. I thrive on solving complex problems with clean, efficient code and creating seamless user experiences that bring ideas to life.",
    address: [{
      city: "Ahmedabad",
      country: "India",
    }],
    summaryOfQualification: [{
      1: "Achieved a position of IT Systems Admin Lead in a leading Cyber Security company while successfully completing a University Diploma as a full-time student, demonstrating an excellent work ethic.",
      2: "Displayed exceptional teamwork and communication skills, effectively collaborating with cross-functional teams and conveying technical concepts to non-technical stakeholders.",
      3: "Contributed to the creation of numerous internal company webpages and web forms at CNOOC Inc. using HTML, CSS, and JavaScript.",
      4: "Independently developed various web-based applications from scratch for personal projects and university assignments, utilizing Javascript and React libraries.",
      5: "Possess strong familiarity with version control tools like Git and project management tools like JIRA, utilized for project development and administrative tasks within engineering teams.",
      6: "Demonstrated familiarity with testing frameworks and methodologies, including unit testing and integration testing."
    }],
    education: [
      {
        degree: "Bachelor of Engineering in Information Technology",
        completionDate: "June 2023",
        university: "Government College of Modasa",
        grade: "7.12 CGPA"
      },
      {
        degree: "12 Science (GSEB)",
        completionDate: "June 2019",
        university: "Sheth R.T. New Higher Education School",
        grade: "62%"
      }
    ],
    experience: [{
      1: [{
        position: "Trainee",
        startDate: "jan 2023",
        endDate: "aug 2023",
        company: "Frontend army Infotech Privete Limited",
      }],
      2: [{
        position: "Junior software developer",
        startDate: "sep 2023",
        endDate: "currently",
        company: "Code Crew Infotech Privete Limited",
      }]
    }]
  }
];


const ResumeDataProvider = ({ children }) => {
  const [resumeData] = React.useState(data);

  return (
    <ResumeDataContext.Provider value={{ resumeData }} >
      {children}
    </ResumeDataContext.Provider>
  )
}

export const useResumeDataContext = () => React.useContext(ResumeDataContext);

export default ResumeDataProvider; 