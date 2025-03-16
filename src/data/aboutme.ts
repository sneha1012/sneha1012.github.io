export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Sneha Maurya",
  title: "Master's in Data Science Candidate",
  institution: "Columbia University",
  description:
    "I am a Master's student in Data Science at <a href='https://www.columbia.edu'>Columbia University</a>, where I combine rigorous academic training with practical applications in data science and machine learning. My academic journey focuses on extracting meaningful insights from complex datasets and developing innovative solutions to real-world problems.",
  email: "sm5755@columbia.edu",
  imageUrl: "/profile.jpg",
  githubUsername: "sneha1012",
  linkedinUsername: "snehamaurya10",
  cvUrl: "https://drive.google.com/file/d/1LwDXqby2CCGaq_f-CPZepjX4ccLGIlmM/view?usp=sharing",
  institutionUrl: "https://www.columbia.edu",
  // Removing unused social links
  // googleScholarUrl: "",
  // twitterUsername: "",
  // blogUrl: "",
  // altName: "",
  // secretDescription: "",
};
