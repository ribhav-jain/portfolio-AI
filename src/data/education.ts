export interface Certification {
  title: string;
  issuer: string;
}

export const education = {
  degree: "B.E. — Computer Science & Engineering",
  school: "UIET, Panjab University, Chandigarh",
  period: "2016 – 2020",
  summary:
    "Focused on core Computer Science fundamentals along with advanced AI and engineering disciplines, including Deep Learning, Data Science, and Full-Stack Development.",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Machine Learning & AI",
    "Neural Networks",
    "Web Development",
  ],
};

export const certifications: Certification[] = [
  { title: "Hugging Face AI Agents", issuer: "Hugging Face" },
  { title: "Neural Networks & Deep Learning", issuer: "Andrew Ng" },
  { title: "Machine Learning", issuer: "Kirill Eremenko (Udemy)" },
  { title: "Data Science", issuer: "Jose Portilla" },
  { title: "Big Data Specialization", issuer: "Coursera" },
  { title: "Spring & Hibernate", issuer: "Chad Darby" },
];
