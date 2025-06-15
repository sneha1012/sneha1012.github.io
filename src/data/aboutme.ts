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
    "I'm a first-year Master's student in Data Science at <a href='https://www.columbia.edu'>Columbia University</a> and Social Chair at <a href='https://www.instagram.com/gradswe_columbia/'>Graduate Society of Women Engineers</a>. My work focuses on building production-grade AI systems at the intersection of multimodal language models, model optimization, and structured problem-solving. At <strong>NXP Semiconductors</strong>, I’m developing real-time NLP pipelines to classify equipment downtime and standardize manufacturing reports. With a strong foundation in ML, software engineering, and data storytelling, I’m driven by ethical, scalable solutions with real-world business impact.",
  email: "sm5755@columbia.edu",
  imageUrl: "/profile.jpg",
  githubUsername: "sneha1012",
  linkedinUsername: "snehamaurya10",
  blueskyUsername: "snehamaurya.bsky.social",
  cvUrl: "/files/Resume_June.pdf",``
  institutionUrl: "https://www.engineering.columbia.edu",
  funDescription: "Coffee, Data and Dogs",
  // altName: "",
  // secretDescription: "I like dogs.",
};
