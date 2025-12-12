export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  learned: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "TripMate",
    description: "A comprehensive travel planning application for Aberdeen, helping users discover local attractions, plan routes, and manage their itineraries.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/kierankinnaird/tripmate",
    learned: [
      "Built RESTful APIs with Express and integrated MongoDB for data persistence",
      "Implemented complex routing algorithms for optimal travel path planning",
      "Created responsive UI components with React and TypeScript"
    ],
    featured: true
  },
  {
    title: "NutriStock",
    description: "Food inventory management and macro tracking application that helps users monitor their nutrition intake and manage pantry items efficiently.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/kierankinnaird/nutristock",
    learned: [
      "Integrated Firebase for real-time data synchronization and authentication",
      "Developed complex state management for inventory tracking and calculations",
      "Designed intuitive UX for food logging and macro visualization"
    ],
    featured: true
  },
  {
    title: "Text Adventure",
    description: "An interactive text-based adventure game featuring dynamic room generation, challenging puzzles, and an engaging narrative system.",
    tech: ["Python", "Flask", "JavaScript", "HTML/CSS"],
    github: "https://github.com/kierankinnaird/text-adventure",
    learned: [
      "Designed procedural room generation algorithms for dynamic gameplay",
      "Implemented game state management and save/load functionality",
      "Created engaging narrative systems with branching storylines"
    ],
    featured: true
  }
];

