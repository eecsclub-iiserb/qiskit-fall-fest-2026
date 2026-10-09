export interface ScheduleEvent {
  id: string;
  day: number;
  dayLabel?: string;
  date: string;
  weekday: string;
  time: string;
  title: string;
  venue: string;
  speaker?: string;
  format: "Keynote" | "Workshop" | "Hackathon" | "Panel" | "Talk" | "Ceremony";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  description: string;
  prerequisites?: string;
}

export interface DayTab {
  id: number;
  label: string;
  date: string;
}

export const scheduleEvents: ScheduleEvent[] = [
  // Pre-Event Talk - Sep 28
  {
    id: "pre-e1",
    day: -1,
    dayLabel: "Pre-Event",
    date: "September 28, 2026",
    weekday: "Monday",
    time: "5:00 PM",
    title: "Pre-Event Talk: Dr. Aditya Nema",
    venue: "LHC L4",
    speaker: "Dr. Aditya Nema (IIT Delhi)",
    format: "Talk",
    level: "All Levels",
    description:
      "An Invitation to the Fundamentals of Quantum Computing, Information and Learning. Explores quantum computing foundations, quantum information theory, and pathways to quantum machine learning.",
    prerequisites: "No prerequisites needed. Everyone is welcome.",
  },

  // Day 1 - Oct 9
  {
    id: "d1-e1",
    day: 1,
    date: "October 9, 2026",
    weekday: "Friday",
    time: "7:00 PM",
    title: "Opening Ceremony & Hackathon Launch",
    venue: "LHC L1",
    speaker: "EECS & Physics Clubs Organizing Committee",
    format: "Ceremony",
    level: "All Levels",
    description:
      "Event introduction, live quantum circuit demo, and official hackathon problem statement release.",
    prerequisites: "Open to all students, researchers, and faculty.",
  },

  // Day 2 - Oct 10
  {
    id: "d2-e1",
    day: 2,
    date: "October 10, 2026",
    weekday: "Saturday",
    time: "4:00 PM",
    title: "Elementary Qiskit Workshop",
    venue: "LHC L3",
    speaker: "Workshop Technical Instructors",
    format: "Workshop",
    level: "Beginner",
    description:
      "Hands-on workshop covering Qiskit fundamentals, quantum circuit construction, and running jobs on IBM Quantum simulators.",
    prerequisites: "Laptop with Python 3.10+ and Jupyter Notebook installed.",
  },

  // Day 3 - Oct 11 (Event 1)
  {
    id: "d3-e1",
    day: 3,
    date: "October 11, 2026",
    weekday: "Sunday",
    time: "11:30 AM",
    title: "Student Talk: Kushagra Agarwal",
    venue: "AB-1/A2 (Gravity Building)",
    speaker: "Kushagra Agarwal",
    format: "Talk",
    level: "Intermediate",
    description:
      "Technical student presentation and research talk by Kushagra Agarwal on quantum computing fundamentals and student quantum research.",
    prerequisites: "General interest in quantum computing and algorithms.",
  },

  // Day 3 - Oct 11 (Event 2)
  {
    id: "d3-e2",
    day: 3,
    date: "October 11, 2026",
    weekday: "Sunday",
    time: "2:00 PM",
    title: "Guest Talk & Panel: Dr. Rahul Maitra",
    venue: "LHC L1",
    speaker: "Dr. Rahul Maitra (IIT Bombay) & Faculty Panel",
    format: "Panel",
    level: "All Levels",
    description:
      "Invited guest lecture by Dr. Rahul Maitra (Department of Chemistry, IIT Bombay) specializing in Quantum Chemistry, followed by an interactive panel discussion on quantum research frontiers.",
    prerequisites: "Open to all registered attendees.",
  },

  // Day 4 - Oct 14
  {
    id: "d4-e1",
    day: 4,
    date: "October 14, 2026",
    weekday: "Wednesday",
    time: "7:00 PM",
    title: "Advanced Qiskit Workshop",
    venue: "Multimedia Room",
    speaker: "Quantum Specialists",
    format: "Workshop",
    level: "Advanced",
    description:
      "In-depth technical workshop covering advanced quantum algorithms, Variational Quantum Eigensolver (VQE), and error mitigation techniques with Qiskit.",
    prerequisites: "Familiarity with elementary Qiskit concepts.",
  },

  // Day 5 - Oct 15
  {
    id: "d5-e1",
    day: 5,
    date: "October 15, 2026",
    weekday: "Thursday",
    time: "6:00 PM",
    title: "Guest Talk: Dr. Ritajit Majumdar",
    venue: "LHC L4",
    speaker: "Dr. Ritajit Majumdar (IBM Quantum)",
    format: "Keynote",
    level: "All Levels",
    description:
      "Distinguished guest session by Dr. Ritajit Majumdar, Research Scientist at IBM Quantum, discussing quantum software architectures, algorithms, and practical utility in quantum computing.",
    prerequisites: "Open to all registered attendees.",
  },

  // Day 6 - Oct 18
  {
    id: "d6-e1",
    day: 6,
    date: "October 18, 2026",
    weekday: "Sunday",
    time: "4:30 PM",
    title: "Hackathon Presentations & Ending Ceremony",
    venue: "LHC L1",
    speaker: "Selected Teams, Jury Panel & Organizers",
    format: "Ceremony",
    level: "All Levels",
    description:
      "Selected teams, invited after submissions are reviewed, give 5-minute demos plus Q&A before the jury, followed by the closing ceremony. The ceremony is open to all.",
    prerequisites: "Open to all attendees.",
  },
];

export const dayTabs: DayTab[] = [
  { id: 0, label: "All Days", date: "Sep 28 - Oct 18" },
  { id: -1, label: "Pre-Event", date: "Sep 28" },
  { id: 1, label: "Day 1", date: "Oct 9" },
  { id: 2, label: "Day 2", date: "Oct 10" },
  { id: 3, label: "Day 3", date: "Oct 11" },
  { id: 4, label: "Day 4", date: "Oct 14" },
  { id: 5, label: "Day 5", date: "Oct 15" },
  { id: 6, label: "Day 6", date: "Oct 18" },
];
