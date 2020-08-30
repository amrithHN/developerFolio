
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Amrith H Namboodiri",
  title: "Hi all, I'm Amrith",
  subTitle: emoji("A passionate Electronics engineer 🔌 having an experience of Building Embedded sytem projects and some robotics and Automation projects "),
  resumeLink: "https://drive.google.com/file/d/1Ox6FVEaR8qh7fpQVCcxvFdHZbpTYlHcQ/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/amrithHN",
  linkedin: "https://www.linkedin.com/in/amrith-h-namboodiri/",
  gmail: "amrithmmh@gmail.com",
 // gitlab: "https://gitlab.com/saadpasta",
 // facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Electronics Engineer who loves Robotics 🤖, IoT and embedded systems",
  skills: [
    emoji("⚡ Develop embedded sytems with STM32,Arduino,raspberry pi"),
    emoji("⚡ Write Firmwares and Softwares supporting the sytems"),
    emoji("⚡ Knowledge in QT,Web technologies and ❤️ Linux (Arch Linux + WM is my favourite)")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      fontAwesomeClassname:"devicon-c-plain"
    },
    {
      skillName: "C++",
      fontAwesomeClassname:"devicon-cplusplus-plain"
    },
    {
      skillName: "Python",
      fontAwesomeClassname:"devicon-python-plain"
    },
    {
      skillName: "embedded C",
      fontAwesomeClassname:"devicon-c-plain"
    },
    {
      skillName: "R.O.S",
      fontAwesomeClassname:"fas fa-robot"
    }

   
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "C++",
      progressPercentage: "60%"
    },
    {
      Stack: "Python",
      progressPercentage: "60%"
    },
    {
      Stack: "PCB design",
      progressPercentage: "60%"
    },
    {
      Stack: "ROS",
      progressPercentage: "30%"
    },


  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software and Electronics Specialist",  
      company: "PearlQuest Interactive and software solutions LLC",
      companylogo: require("./assets/images/pq.png"),
      date: "Feb 2020 – Present",
      desc: "Electronics and Software projects related to Events and Exhibitions",
    //  descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
       // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      role: "Electronics Engineer",   
      company: "Novatek",
      companylogo: require("./assets/images/nt.png"),
      date: "March 2018 – Nov 2019",
      desc: "Worked on Electrical and Electronics related projects for companies like L&T tech services,Haritha seating solutions."
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ltts.jpg"),
      link: "https://www.ltts.com/"
    },
    {
      image: require("./assets/images/har.png"),
      link: "https://www.haritaseating.com/"
    },
    {
      image: require("./assets/images/hang.png"),
      link: "https://thehanginghouse.com/"
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:"https://armphibian.wordpress.com/2019/10/01/how-to-build-raspberry-pi-zero-w-buildroot-image/",
      title: "How to Build Raspberry pi zero w buildroot Image",
      //description: ""
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9495800308",
  email_address: "amrithmmh@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "Amrith1729"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
