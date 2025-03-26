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
  blueskyUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Sneha Maurya",
  title: "M.S. in Data Science",
  institution: "Columbia University",
  // Note that links work in the description
  description:
    "I'm a first-year Master's candidate in Data Science at <a href='https://www.columbia.edu'>Columbia University</a> and Social Chair at <a href='https://www.instagram.com/gradswe_columbia/'>Graduate Society of Women Engineers</a>. Focusing on multimodal language models and ethical AI solutions, I combine expertise in software development and machine learning. I specialize in building production-ready systems for business automation with an emphasis on data storytelling and real-world impact.",
  email: "sm5755@columbia.edu",
  imageUrl: "/profile.jpg",
  githubUsername: "sneha1012",
  linkedinUsername: "snehamaurya10",
  blueskyUsername: "snehamaurya.bsky.social",
  cvUrl: "/files/Maurya_Sneha.pdf",
  institutionUrl: "https://www.engineering.columbia.edu",
  funDescription: "Coffee, Data and Dogs",
  // altName: "",
  // secretDescription: "I like dogs.",
};
