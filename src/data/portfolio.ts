export const profile = {
  name: "Edwin Mittochi",
  initials: "EM",
  greeting: "Hello, I'm",
  firstName: "EDWIN",
  lastName: "MITTOCHI",
  headline: ["COMPUTER SCIENCE GRADUATE", "DEVELOPER • IT PROFESSIONAL"],
  tagline:
    "I build reliable, efficient and user-friendly digital solutions that solve real-world problems and drive impact.",
  about:
    "Motivated and results-driven Computer Science graduate with experience in data management, software development, and digital communication. Skilled in Python, Java, and modern web technologies. Passionate about leveraging technology to solve real-world problems and improve organizational efficiency.",
  // Put your CV in /public with this file name to enable the download button.
  cvHref: "/Edwin-Mittochi-CV.pdf",
  email: "edwinmittochi@gmail.com",
  phone: "+265 88 123 4567",
  location: "Lilongwe, Malawi",
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const socials = [
  { label: "GitHub", glyph: "◉", href: "https://github.com/" },
  { label: "LinkedIn", glyph: "in", href: "https://www.linkedin.com/" },
  { label: "Facebook", glyph: "♥", href: "https://www.facebook.com/" },
  { label: "Email", glyph: "✉", href: `mailto:${profile.email}` },
] as const;

export const skills = [
  { icon: "🐍", name: "Python" },
  { icon: "☕", name: "Java" },
  { icon: "JS", name: "JavaScript" },
  { icon: "TS", name: "TypeScript" },
  { icon: "Ⓝ", name: "Next.js" },
  { icon: "⚛", name: "React" },
  { icon: "▣", name: "HTML" },
  { icon: "▣", name: "CSS" },
  { icon: "⌁", name: "MySQL" },
  { icon: "◆", name: "Git & GitHub" },
  { icon: "▣", name: "Microsoft Office" },
  { icon: "⌕", name: "Troubleshooting" },
] as const;

export const experience = [
  {
    period: "Oct 2025 – Present",
    role: "Social Media Manager – Kodify Lab",
    description:
      "Manage social media platforms, create engaging content, run campaigns, analyze performance and grow online presence.",
    type: "Current",
  },
  {
    period: "Jul 2022 – Sep 2022",
    role: "Computer Studies Teacher – Peamann High School",
    description:
      "Taught computer studies, ICT skills and digital literacy. Assisted students in practicals and assessments.",
    type: "Contract",
  },
  {
    period: "Mar 2022 – Jun 2022",
    role: "ICT Intern – Mchinji District Council",
    description:
      "Provided IT support, maintained systems, managed data and assisted in day-to-day ICT operations.",
    type: "Internship",
  },
] as const;

export const projects = [
  {
    icon: "🔒",
    title: "Secure Barcode System",
    description:
      "A web-based system for generating and scanning secure barcodes to manage and verify items efficiently.",
    tags: ["PHP", "MySQL", "JavaScript"],
    href: "#",
  },
  {
    icon: "▧",
    title: "Image Restoration using KNN",
    description:
      "Restores degraded images using the K-Nearest Neighbors algorithm to improve image quality and clarity.",
    tags: ["Python", "OpenCV", "NumPy"],
    href: "#",
  },
  {
    icon: "◎",
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with modern technologies to showcase my skills and projects.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
] as const;

export const education = [
  {
    title: "BSc in Computer Science",
    school: "DMI St. John The Baptist University",
    period: "2020 – 2024",
  },
  {
    title: "Malawi School Certificate of Education (MSCE)",
    school: "Mchinji Community Day Secondary School",
    period: "2016 – 2019",
  },
] as const;
