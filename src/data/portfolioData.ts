export interface Profile {
  name: string;
  titles: string[];
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  profileImage: string;
  resumeUrl: string;
  website?: string;
  certificationsPdfUrl?: string;
  formspreeId?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  secondaryImageUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  type?: string;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  duration: string;
  grade?: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  techStack: string[];
  description: string;
  architecture: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface Achievement {
  id: string;
  highlight: string;
  category: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface PortfolioData {
  profile: Profile;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
  skills: SkillCategory[];
  languages: Language[];
  blogPosts: BlogPost[];
}

export const portfolioDataEn: PortfolioData = {
  profile: {
    name: "Pratik Waghmode",
    titles: ["Data Engineer", "Autonomous Systems Student", "AI & Robotics Enthusiast"],
    bio: "Master's student in Intelligent and Autonomous Systems with 2.9+ years of Data Engineering experience. Specializing in scalable data pipelines, cloud architectures (GCP/Snowflake), and autonomous robotics.",
    location: "Nuremberg, Germany",
    email: "pratikwaghmode.ms@gmail.com",
    github: "https://github.com/pratikwaghmode2",
    linkedin: "https://www.linkedin.com/in/pratik-waghmode-84ba671b5/",
    profileImage: "/Portfolio/profile.png",
    resumeUrl: "/Portfolio/Pratik_Waghmode_Resume.pdf",
    website: "https://pratikwaghmode.com",
    certificationsPdfUrl: "/Portfolio/certifications_all.pdf",
    formspreeId: "maewknak",
  },
  experience: [
    {
      role: "Machine Learning Intern",
      company: "Institute for Employment Research (IAB)",
      location: "Nuremberg, Germany",
      duration: "Aug 2026 — Present",
      description: [
        "Analyzing employment data in Germany utilizing machine learning algorithms to extract insights and model trends.",
        "Applying statistical ML models, feature engineering, and data preprocessing for predictive analysis."
      ],
      type: "internship"
    },
    {
      role: "Data Engineer",
      company: "Accenture",
      location: "Mumbai, India",
      duration: "Jul 2023 — Mar 2026 (2.9 years)",
      description: [
        "Built and optimized end-to-end data pipelines for global FMCG clients on GCP, processing sales data across the US, Europe, Asia, and Middle East.",
        "Developed ETL pipelines to ingest data from CSV, JSON, SharePoint, and relational databases into Google Cloud BigQuery.",
        "Reduced dashboard refresh times from 4 hours to 30 minutes (an 87% improvement) using Python data processing optimization.",
        "Performed data cleansing, validation, deduplication, and transformation to ensure high-quality production datasets.",
        "Supported enterprise data migration from SAP BW to SAP S/4HANA by validating and transforming complex schema structures."
      ],
      type: "job"
    },
    {
      role: "Engineering Intern",
      company: "R.K. Control Instruments Pvt. Ltd.",
      location: "Thane, India",
      duration: "Dec 2021 — Jan 2022",
      description: [
        "Assisted in assembly, calibration, and testing of industrial control valves and actuators for process industries.",
        "Supported troubleshooting pneumatic and electro-pneumatic positioners to ensure compliance with operating safety specifications."
      ],
      type: "internship"
    }
  ],
  education: [
    {
      school: "Technische Hochschule Nürnberg Georg Simon Ohm",
      degree: "M.Sc. in Intelligent and Autonomous Systems",
      location: "Nuremberg, Germany",
      duration: "Mar 2026 — Oct 2028 (Expected)",
      grade: "Grade: 1.6 (Equivalent to German GPA, CGPA: 8.69/10)",
      details: [
        "Specializing in autonomous navigation systems, sensor fusion (LiDAR/Camera), mobile robotics, and machine learning.",
        "Developing control architectures and ROS-based navigation pipelines."
      ]
    },
    {
      school: "Mumbai University",
      degree: "Bachelor of Engineering in Instrumentation Engineering",
      location: "Mumbai, India",
      duration: "Jun 2019 — Jun 2023",
      grade: "First Class with Distinction",
      details: [
        "Rigorous coursework in process control, sensor technology, signal processing, and industrial automation.",
        "Hands-on projects in microcontroller programming, PLC systems, and industrial communication protocols."
      ]
    }
  ],
  projects: [
    {
      id: "escort-robot",
      title: "Autonomous Patient Escort Robot",
      category: "Robotics & AI",
      techStack: ["ROS", "LiDAR", "C++", "Python", "Computer Vision", "SLAM"],
      description: "Developing a high-precision autonomous mobile robot in collaboration with TH Nürnberg and Klinikum Nürnberg to escort patients safely in clinical environments.",
      architecture: [
        "Sensor Fusion & Perception: Integrating 2D/3D LiDARs and stereo-depth cameras to build highly reliable real-time obstacle avoidance and localization pipelines.",
        "NLP & Dialogue System: Developing a local speech-recognition and text-to-speech interaction system to allow patients to communicate naturally with the robot.",
        "SLAM & Navigation: Tuning global/local planners and adaptive Monte Carlo localization (AMCL) to navigate complex, dynamic hospital corridors smoothly."
      ],
      metrics: [
        { label: "Obstacle Detection Accuracy", value: "99.2%" },
        { label: "Local Navigation Frequency", value: "20Hz" },
        { label: "Localization Error Margin", value: "< 5cm" }
      ],
      githubUrl: "https://github.com/pratikwaghmode2"
    },
    {
      id: "swarm-robotics",
      title: "Swarm Robotics System",
      category: "Robotics & AI",
      techStack: ["Arduino", "C/C++", "Wireless Communication", "RF Modules", "Sensor Integration"],
      description: "Design of a master-slave swarm robotics system for cooperative object detection and relative positioning coordinates.",
      architecture: [
        "Decentralized Control: Engineered custom RF communication protocols enabling real-time coordination and alignment between multiple hardware nodes.",
        "Relative Positioning: Developed relative spatial awareness formulas using IR sensor grids and ultrasonic telemetry arrays."
      ],
      metrics: [
        { label: "Swarm Node Count", value: "4 nodes" },
        { label: "Sync Latency", value: "< 15ms" }
      ],
      githubUrl: "https://github.com/pratikwaghmode2"
    },
    {
      id: "etl-pipeline",
      title: "End-to-End Cloud ETL Pipeline",
      category: "Data Engineering",
      techStack: ["GCP", "BigQuery", "Python", "SQL", "Data Ingestion", "Cloud Functions"],
      description: "Built and optimized enterprise-grade sales ingestion and transformation pipeline on Google Cloud Platform for multinational FMCG datasets.",
      architecture: [
        "Serverless Orchestration: Configured Cloud Functions and Pub/Sub events to ingest unstructured and structured files instantly upon arrival in Cloud Storage buckets.",
        "Performance Optimization: Leveraged partition keys and clustering parameters to optimize BigQuery tables, cutting complex analytical query execution costs by 40%."
      ],
      metrics: [
        { label: "Daily Data Ingested", value: "2.5M+ rows" },
        { label: "Processing Pipeline SLA", value: "99.9%" }
      ],
      githubUrl: "https://github.com/pratikwaghmode2"
    }
  ],
  certifications: [
    {
      name: "Microsoft Certified: Fabric Analytics Engineer Associate",
      issuer: "Microsoft",
      date: "Aug 2026",
      credentialId: "FAB-100-ASSOCIATE",
      verificationUrl: "https://learn.microsoft.com/en-us/credentials/browse/"
    },
    {
      name: "Google Cloud: Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "Jul 2026",
      credentialId: "GCP-ACE-9827",
      verificationUrl: "https://www.credly.com/"
    },
    {
      name: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      date: "Oct 2025",
      credentialId: "PL-300-DE9732",
      verificationUrl: "https://learn.microsoft.com/en-us/credentials/browse/"
    },
    {
      name: "Accenture: Reinvention with Agentic AI",
      issuer: "Accenture India",
      date: "Jan 2026",
      verificationUrl: "https://www.accenture.com/"
    },
    {
      name: "HackerRank: SQL (Advanced)",
      issuer: "HackerRank",
      date: "Sep 2024",
      credentialId: "HR-SQL-ADV-9832",
      verificationUrl: "https://www.hackerrank.com/certificates/iframe/8d9ef6f23604"
    }
  ],
  achievements: [
    {
      id: "tesla-challenge",
      highlight: "1st Place",
      category: "Tesla Challenge",
      title: "1st Place Winner – Tesla Challenge (Tech at WHU)",
      issuer: "Tesla & Business Meets Tech (WHU)",
      date: "Oct 2026",
      description: "Developed 'Airframe', an operations concept solving mission-critical manufacturing bottlenecks for Tesla's Gigafactory Berlin, winning 1st place and €2,000 prize."
    },
    {
      id: "fabric",
      highlight: "Fabric Analytics",
      category: "Credentials",
      title: "Microsoft Certified Associate Badge",
      issuer: "Microsoft Credentials",
      date: "Aug 2026",
      description: "Successfully validated expertise in enterprise data warehouse design, Medallion lakehouse structures, and analytics pipelines within Microsoft Fabric."
    },
    {
      id: "performance",
      highlight: "87% Speedup",
      category: "Accenture",
      title: "Top Performance Recognition",
      issuer: "Accenture FMCG Delivery Team",
      date: "Dec 2025",
      description: "Awarded for lead optimization of BigQuery procedures, reducing the FMCG regional pipeline execution cycle by 87%."
    },
    {
      id: "academia",
      highlight: "TH / Klinikum",
      category: "Collaboration",
      title: "Academic Collaboration Leadership",
      issuer: "TH Nürnberg & Klinikum Nürnberg",
      date: "Jun 2026",
      description: "Selected as active hardware and systems integration lead for building the LiDAR-guided Autonomous Patient Escort Robot."
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 5 },
        { name: "SQL", level: 5 },
        { name: "C / C++", level: 4 },
        { name: "JavaScript / TypeScript", level: 4 }
      ]
    },
    {
      category: "Data Engineering & Cloud",
      skills: [
        { name: "Google Cloud Platform (GCP)", level: 5 },
        { name: "BigQuery", level: 5 },
        { name: "ETL Pipelines", level: 5 },
        { name: "Snowflake", level: 4 },
        { name: "Microsoft Fabric", level: 4 },
        { name: "Power BI / SAP BW", level: 4 }
      ]
    },
    {
      category: "Machine Learning & Robotics",
      skills: [
        { name: "PyTorch", level: 4 },
        { name: "OpenCV", level: 4 },
        { name: "ROS (Robot Operating System)", level: 4 },
        { name: "Scikit-Learn", level: 4 },
        { name: "Pandas & NumPy", level: 5 },
        { name: "Docker & Git", level: 5 }
      ]
    }
  ],
  languages: [
    { name: "English", level: "Fluent (C1/C2)" },
    { name: "German", level: "Intermediate (B1)" },
    { name: "Marathi", level: "Native" },
    { name: "Hindi", level: "Native" }
  ],
  blogPosts: [
    {
      id: "tesla-challenge",
      title: "1st Place in the Tesla Challenge at Business Meets Tech (WHU)",
      date: "October 2026",
      readTime: "3 min read",
      category: "Hackathon & Innovation",
      excerpt: "Grateful to share that our team took 1st place in the Tesla Challenge at Business Meets Tech – Tech at WHU, developing 'Airframe' to solve operational bottlenecks for Tesla's Gigafactory Berlin.",
      content: "Grateful to share that our team took 1st place in the Tesla Challenge at Business Meets Tech – Tech at WHU! 🏆⚡\n\nOur team developed Airframe, a concept focused on solving operational bottlenecks for Tesla's Gigafactory Berlin. Diving into what it takes to keep mission-critical systems seamless at that kind of manufacturing scale was an invaluable engineering and operations experience.\n\nA special shoutout to Ashutosh Chatterjee—his strategic vision and planning from the very beginning anchored our approach and gave us the clarity we needed to win this.\n\nBig thanks as well to Alexis Abel and Paul Alvermann for bringing the business perspective to the table and rounding out the sprint with precision.\n\nHuge appreciation to Lucas Viesel and the Tesla team for presenting such an exciting challenge, and to the Business Meets Tech – Tech at WHU team for organizing an outstanding event.\n\nCheers to the team! 🥂🚀\n#BusinessMeetsTech #Tesla #GigafactoryBerlin #Innovation",
      imageUrl: "/Portfolio/blog/tesla_1.jpg",
      secondaryImageUrl: "/Portfolio/blog/tesla_2.jpg"
    },
    {
      id: "iab-internship",
      title: "Resilience in Relocation: Landing a Machine Learning Internship at IAB Germany",
      date: "August 2028",
      readTime: "4 min read",
      category: "ML Research & Internship",
      excerpt: "The story behind starting my Machine Learning internship (praktikum) at IAB Germany—overcoming rejections, apartment hunts, and bureaucracy.",
      content: "Securing a Machine Learning internship (praktikum) at the Institute for Employment Research (IAB) in Nuremberg—one of Germany's greatest and most prestigious research institutes—was a journey of pure resilience.\n\nRelocating to Germany brought a series of intense challenges. I spent months shifting from one temporary apartment to another before finally securing a permanent, long-term accommodation. Alongside the housing hunt, I had to navigate the infamous German bureaucracy, learn a new language, and adapt to a completely different cultural and academic atmosphere.\n\nAt the same time, finding an internship was an uphill battle. After applying to countless positions, my mailbox was filled with rejections, which tested my confidence and self-belief. But this one positive response from IAB changed everything. It gave me renewed hope in my skills and my path.\n\nNow, at IAB, I am analyzing labor market datasets and building predictive machine learning models to help forecast employment trends. This journey has shown me that persistence, adaptability, and resilience are just as important as technical skills. I am excited to see what the future holds here in Germany!",
      imageUrl: "/Portfolio/blog/iab.jpg"
    },
    {
      id: "masters-journey",
      title: "Embarking on my M.Sc. in Intelligent and Autonomous Systems at TH Nürnberg",
      date: "April 2028",
      readTime: "3 min read",
      category: "Academia & Robotics",
      excerpt: "A major career milestone: starting my Master's journey in Germany to specialize in AI, sensor fusion, and autonomous navigation.",
      content: "I am thrilled to share a major update in my professional and academic journey: I have officially started my Master of Science in Intelligent and Autonomous Systems at Technische Hochschule Nürnberg Georg Simon Ohm in Germany!\n\nTransitioning from my role as a Data Engineer at Accenture where I focused on cloud data warehousing, ETL pipelines, and BigQuery optimization, this program allows me to bridge the gap between large-scale data engineering and embodied physical intelligence. The curriculum focuses heavily on areas I am deeply passionate about, including Autonomous Navigation Systems, AI Hardware Accelerators, and Statistics for Machine Learning.\n\nAlongside my studies, I am collaborating with TH Nürnberg and Klinikum Nürnberg to develop an Autonomous Patient Escort Robot using LiDAR, depth cameras, and ROS. I look forward to sharing more updates as I build out autonomous systems, integrate LiDAR/camera sensors, and solve complex real-world data engineering challenges!",
      imageUrl: "/Portfolio/blog/masters-journey.jpg"
    },
    {
      id: "last-day-accenture",
      title: "Reflections on My Last Day as a Data Engineer at Accenture",
      date: "March 2028",
      readTime: "2 min read",
      category: "Career Journey",
      excerpt: "Grateful for the journey: summarizing my 2.9 years at Accenture, transitioning from training to cloud systems engineering.",
      content: "Today was my last working day at Accenture in India!\n\nI originally joined the company in July 2023, starting out with intensive training in PL/SQL and database mechanics. Soon after, I got the opportunity to move onto real-world client projects as a Data Engineer, designing and optimizing ETL pipelines using Google Cloud Platform, BigQuery, and Python.\n\nAlong the way, I learned not just hard technical skills like database index optimization and scripting, but also how end-to-end software project lifecycles work—from gathering business requirements to building, testing, deploying, and supporting enterprise applications.\n\nGrateful for the incredible mentors, teammates, and friends I made at Accenture in India. This experience has built a strong foundation for my next journey!\n\nExcited for what's next, but I'll always be an Accenture alumnus at heart. Let's stay in touch!\n\n✨ #ContinuousLearning 🤝 #GreatPeople 🌍 #Impact 💡 #AppliedIntelligence #Accenture #Dataengineer #BigQuery #Python #Cloud #CareerJourney #NewBeginnings #Consulting #Learning #Growth",
      imageUrl: "/Portfolio/blog/accenture_1.jpg",
      secondaryImageUrl: "/Portfolio/blog/accenture_2.jpg"
    }
  ]
};

export const portfolioDataDe: PortfolioData = {
  profile: {
    name: "Pratik Waghmode",
    titles: ["Data Engineer", "Student für Autonome Systeme", "KI- & Robotik-Enthusiast"],
    bio: "Masterstudent im Studiengang Intelligent and Autonomous Systems mit über 2,9 Jahren Berufserfahrung im Bereich Data Engineering. Spezialisiert auf skalierbare Datenpipelines, Cloud-Architekturen (GCP/Snowflake) und autonome Robotik.",
    location: "Nürnberg, Deutschland",
    email: "pratikwaghmode.ms@gmail.com",
    github: "https://github.com/pratikwaghmode2",
    linkedin: "https://www.linkedin.com/in/pratik-waghmode-84ba671b5/",
    profileImage: "/Portfolio/profile.png",
    resumeUrl: "/Portfolio/Pratik_Waghmode_Resume.pdf",
    website: "https://pratikwaghmode.com",
    certificationsPdfUrl: "/Portfolio/certifications_all.pdf",
    formspreeId: "maewknak",
  },
  experience: [
    {
      role: "Praktikant im Bereich Maschinelles Lernen",
      company: "Institut für Arbeitsmarkt- und Berufsforschung (IAB)",
      location: "Nuremberg, Deutschland",
      duration: "Aug 2026 — Heute",
      description: [
        "Analyse von Arbeitsmarktdaten in Deutschland mittels Algorithmen des maschinellen Lernens zur Gewinnung von Erkenntnissen und Modellierung von Trends.",
        "Anwendung statistischer ML-Modelle, Feature Engineering und Datenvorverarbeitung für prädiktive Analysen."
      ],
      type: "internship"
    },
    {
      role: "Data Engineer",
      company: "Accenture",
      location: "Mumbai, Indien",
      duration: "Jul 2023 — Mar 2026 (2,9 Jahre)",
      description: [
        "Entwicklung und Optimierung von End-to-End-Datenpipelines für globale FMCG-Kunden auf GCP, Verarbeitung von Umsatzdaten für die Regionen USA, Europa, Asien und den Nahen Osten.",
        "Aufbau von ETL-Pipelines zur Integration von CSV-, JSON-, SharePoint- und relationalen Datenbankquellen in Google Cloud BigQuery.",
        "Reduzierung der Dashboard-Aktualisierungszeiten von 4 Stunden auf 30 Minuten (87% Verbesserung) durch Optimierung der Datenverarbeitung in Python.",
        "Durchführung von Datenbereinigung, Validierung, Deduplizierung und Transformation zur Gewährleistung hochwertiger Produktionsdatensätze.",
        "Unterstützung der Migration von SAP BW auf SAP S/4HANA durch Validierung und Transformation komplexer Schemastrukturen."
      ],
      type: "job"
    },
    {
      role: "Ingenieurpraktikant",
      company: "R.K. Control Instruments Pvt. Ltd.",
      location: "Thane, Indien",
      duration: "Dez 2021 — Jan 2022",
      description: [
        "Unterstützung bei der Montage, Kalibrierung und Prüfung von industriellen Regelventilen und Stellgliedern für die Prozessindustrie.",
        "Unterstützung bei der Fehlersuche an pneumatischen und elektropneumatischen Stellungsreglern zur Sicherstellung der Betriebssicherheit."
      ],
      type: "internship"
    }
  ],
  education: [
    {
      school: "Technische Hochschule Nürnberg Georg Simon Ohm",
      degree: "M.Sc. in Intelligent and Autonomous Systems",
      location: "Nürnberg, Deutschland",
      duration: "Mär 2026 — Okt 2028 (Voraussichtlich)",
      grade: "Notenschnitt: 1,6 (CGPA: 8,69/10)",
      details: [
        "Schwerpunkte in autonomen Systemen, Sensorfusion (LiDAR/Kamera), mobiler Robotik und maschinellem Lernen.",
        "Entwicklung von Steuerungsarchitekturen und Navigationspipelines in ROS."
      ]
    },
    {
      school: "Mumbai University",
      degree: "Bachelor of Engineering in Instrumentierungstechnik",
      location: "Mumbai, Indien",
      duration: "Jun 2019 — Jun 2023",
      grade: "First Class mit Auszeichnung",
      details: [
        "Fundierte Ausbildung in Prozesssteuerung, Sensorik, Signalverarbeitung und industrieller Automatisierung.",
        "Praktische Projekte in Mikrocontrollern, SPS-Systemen und industrieller Datenkommunikation."
      ]
    }
  ],
  projects: [
    {
      id: "escort-robot",
      title: "Autonomer Patiententransport-Roboter",
      category: "Robotics & AI",
      techStack: ["ROS", "LiDAR", "C++", "Python", "Computer Vision", "SLAM"],
      description: "Entwicklung eines hochpräzisen autonomen mobilen Roboters in Kooperation mit der TH Nürnberg und dem Klinikum Nürnberg zum sicheren Transport von Patienten in Klinikumgebungen.",
      architecture: [
        "Sensorfusion & Wahrnehmung: Integration von 2D/3D-LiDARs und Stereo-Tiefenkameras für eine zuverlässige Echtzeit-Hindernisvermeidung und Lokalisierung.",
        "NLP & Dialogsystem: Aufbau einer lokalen Sprachsteuerung für eine natürliche und einfache Interaktion zwischen Patienten und dem Roboter.",
        "SLAM & Navigation: Feinabstimmung von globalen/lokalen Plannern und adaptiver Monte-Carlo-Lokalisierung (AMCL) für ruhige, sichere Fahrbewegungen in Klinikfluren."
      ],
      metrics: [
        { label: "Erkennungsgenauigkeit Hindernisse", value: "99.2%" },
        { label: "Frequenz Lokale Navigation", value: "20Hz" },
        { label: "Fehlertoleranz Lokalisierung", value: "< 5cm" }
      ],
      githubUrl: "https://github.com/pratikwaghmode2"
    },
    {
      id: "swarm-robotics",
      title: "Schwarmroboter-System",
      category: "Robotics & AI",
      techStack: ["Arduino", "C/C++", "Funkkommunikation", "RF-Module", "Sensorintegration"],
      description: "Entwurf eines Master-Slave-Schwarmrobotersystems zur kooperativen Objekterkennung und relativen Positionsbestimmung.",
      architecture: [
        "Dezentrale Steuerung: Entwicklung spezieller RF-Funkprotokolle zur Echtzeit-Koordination und Ausrichtung zwischen mehreren Hardware-Robotern.",
        "Relative Positionsbestimmung: Implementierung relativer räumlicher Berechnungen über Infrarot-Sensorfelder und Ultraschall-Telemetrie."
      ],
      metrics: [
        { label: "Anzahl der Schwarmknoten", value: "4 Knoten" },
        { label: "Synchronisations-Latenz", value: "< 15ms" }
      ],
      githubUrl: "https://github.com/pratikwaghmode2"
    },
    {
      id: "etl-pipeline",
      title: "End-to-End Cloud-ETL-Pipeline",
      category: "Data Engineering",
      techStack: ["GCP", "BigQuery", "Python", "SQL", "Daten-Ingestion", "Cloud Functions"],
      description: "Aufbau und Optimierung einer skalierbaren Vertriebsdaten-Pipeline auf der Google Cloud Platform für multinationale FMCG-Kunden.",
      architecture: [
        "Serverlose Orchestrierung: Einrichtung von Cloud Functions und Pub/Sub-Events für den sofortigen Import unstrukturierter und strukturierter Daten bei Dateieingang im Cloud Storage.",
        "Performance-Optimierung: Verwendung von Partitions- und Clustering-Schlüsseln zur Optimierung von BigQuery-Tabellen, wodurch die Kosten für analytische Abfragen um 40% gesenkt wurden."
      ],
      metrics: [
        { label: "Täglich importierte Zeilen", value: "2.5M+" },
        { label: "Pipeline SLA Uptime", value: "99.9%" }
      ],
      githubUrl: "https://github.com/pratikwaghmode2"
    }
  ],
  certifications: [
    {
      name: "Microsoft Certified: Fabric Analytics Engineer Associate",
      issuer: "Microsoft",
      date: "Aug 2026",
      credentialId: "FAB-100-ASSOCIATE",
      verificationUrl: "https://learn.microsoft.com/en-us/credentials/browse/"
    },
    {
      name: "Google Cloud: Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "Jul 2026",
      credentialId: "GCP-ACE-9827",
      verificationUrl: "https://www.credly.com/"
    },
    {
      name: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      date: "Okt 2025",
      credentialId: "PL-300-DE9732",
      verificationUrl: "https://learn.microsoft.com/en-us/credentials/browse/"
    },
    {
      name: "Accenture: Reinvention with Agentic AI",
      issuer: "Accenture Indien",
      date: "Jan 2026",
      verificationUrl: "https://www.accenture.com/"
    },
    {
      name: "HackerRank: SQL (Advanced)",
      issuer: "HackerRank",
      date: "Sep 2024",
      credentialId: "HR-SQL-ADV-9832",
      verificationUrl: "https://www.hackerrank.com/certificates/iframe/8d9ef6f23604"
    }
  ],
  achievements: [
    {
      id: "tesla-challenge",
      highlight: "1. Platz",
      category: "Tesla Challenge",
      title: "1. Platz – Tesla Challenge (Tech at WHU)",
      issuer: "Tesla & Business Meets Tech (WHU)",
      date: "Okt 2026",
      description: "Entwicklung von 'Airframe', einem Betriebskonzept zur Lösung betrieblicher Engpässe für die Tesla Gigafactory Berlin – 1. Platz und 2.000 € Preisgeld."
    },
    {
      id: "fabric",
      highlight: "Fabric Analytics",
      category: "Zertifikate",
      title: "Microsoft Certified Associate Badge",
      issuer: "Microsoft Credentials",
      date: "Aug 2026",
      description: "Nachweisliche Fachkompetenz im Entwurf von Enterprise Data Warehouses, Medallion Lakehouse-Strukturen und Analytics-Pipelines mit Microsoft Fabric."
    },
    {
      id: "performance",
      highlight: "87% schneller",
      category: "Accenture",
      title: "Top-Performance-Auszeichnung",
      issuer: "Accenture FMCG Delivery Team",
      date: "Dez 2025",
      description: "Auszeichnung für die Optimierung komplexer BigQuery-Prozeduren, wodurch die Verarbeitungsdauer regionaler FMCG-Datenpipelines um 87% verkürzt wurde."
    },
    {
      id: "academia",
      highlight: "TH / Klinikum",
      category: "Kooperation",
      title: "Leitung akademischer Kooperationen",
      issuer: "TH Nürnberg & Klinikum Nürnberg",
      date: "Jun 2026",
      description: "Auswahl als aktiver Leiter für Hardware- und Systemintegration beim Bau des LiDAR-gesteuerten autonomen Patiententransport-Roboters."
    }
  ],
  skills: [
    {
      category: "Programmiersprachen",
      skills: [
        { name: "Python", level: 5 },
        { name: "SQL", level: 5 },
        { name: "C / C++", level: 4 },
        { name: "JavaScript / TypeScript", level: 4 }
      ]
    },
    {
      category: "Data Engineering & Cloud",
      skills: [
        { name: "Google Cloud Platform (GCP)", level: 5 },
        { name: "BigQuery", level: 5 },
        { name: "ETL Pipelines", level: 5 },
        { name: "Snowflake", level: 4 },
        { name: "Microsoft Fabric", level: 4 },
        { name: "Power BI / SAP BW", level: 4 }
      ]
    },
    {
      category: "Maschinelles Lernen & Robotik",
      skills: [
        { name: "PyTorch", level: 4 },
        { name: "OpenCV", level: 4 },
        { name: "ROS (Robot Operating System)", level: 4 },
        { name: "Scikit-Learn", level: 4 },
        { name: "Pandas & NumPy", level: 5 },
        { name: "Docker & Git", level: 5 }
      ]
    }
  ],
  languages: [
    { name: "Englisch", level: "Fließend (C1/C2)" },
    { name: "Deutsch", level: "Mittelstufe (B1)" },
    { name: "Marathi", level: "Muttersprache" },
    { name: "Hindi", level: "Muttersprache" }
  ],
  blogPosts: [
    {
      id: "tesla-challenge",
      title: "1. Platz bei der Tesla Challenge auf der Business Meets Tech (WHU)",
      date: "Oktober 2026",
      readTime: "3 Min. Lesezeit",
      category: "Hackathon & Innovation",
      excerpt: "Unser Team hat den 1. Platz bei der Tesla Challenge auf der Business Meets Tech – Tech at WHU gewonnen – mit dem Konzept 'Airframe' zur Behebung von Engpässen in der Tesla Gigafactory Berlin.",
      content: "Ich freue mich sehr zu teilen, dass unser Team den 1. Platz bei der Tesla Challenge auf der Konferenz Business Meets Tech – Tech at WHU belegt hat! 🏆⚡\n\nUnser Team hat „Airframe“ entwickelt – ein operatives Konzept zur Lösung kritischer Engpässe in der Tesla Gigafactory Berlin. Zu analysieren, was nötig ist, um unternehmenskritische Systeme bei einer derartigen Fertigungsskalierung reibungslos am Laufen zu halten, war eine unschätzbare Erfahrung.\n\nEin besonderer Dank geht an Ashutosh Chatterjee – seine strategische Vision und strukturierte Planung von Beginn an gaben uns die nötige Klarheit für den Sieg.\n\nVielen Dank auch an Alexis Abel und Paul Alvermann, die die betriebswirtschaftliche Perspektive eingebracht und den Sprint perfekt abgerundet haben.\n\nGroße Anerkennung an Lucas Viesel und das gesamte Tesla-Team für diese spannende Aufgabenstellung sowie an das Team von Business Meets Tech / Tech at WHU für die Organisation eines fantastischen Events.\n\nEin Hoch auf das Team! 🥂🚀\n#BusinessMeetsTech #Tesla #GigafactoryBerlin #Innovation",
      imageUrl: "/Portfolio/blog/tesla_1.jpg",
      secondaryImageUrl: "/Portfolio/blog/tesla_2.jpg"
    },
    {
      id: "iab-internship",
      title: "Resilienz beim Umzug: Der Weg zum Machine-Learning-Praktikum beim IAB Deutschland",
      date: "August 2028",
      readTime: "4 Min. Lesezeit",
      category: "ML-Forschung & Praktikum",
      excerpt: "Die Geschichte hinter meinem Start als ML-Praktikant beim IAB Deutschland – über die Bewältigung von Wohnungssuche, Bürokratie und Absagen.",
      content: "Ein Praktikum im Bereich Maschinelles Lernen am Institut für Arbeitsmarkt- und Berufsforschung (IAB) in Nürnberg – einer der angesehensten Forschungseinrichtungen Deutschlands – zu ergattern, war ein Weg voller Durchhaltevermögen.\n\nDer Umzug nach Deutschland brachte viele Hürden mit sich. Ich verbrachte Monate damit, von einer temporären Unterkunft zur nächsten zu ziehen, bis ich endlich eine langfristige Wohnung fand. Parallel dazu musste ich mich durch die deutsche Bürokratie kämpfen, eine neue Sprache lernen und mich an eine völlig neue akademische und kulturelle Umgebung anpassen.\n\nGleichzeitig war die Praktikumssuche eine echte Herausforderung. Nach unzähligen Bewerbungen war mein Postfach voller Absagen, was mein Selbstvertrauen auf die Probe stellte. Doch die eine positive Zusage des IAB änderte alles und gab mir den Glauben an meine Fähigkeiten zurück.\n\nHeute analysiere ich beim IAB große Arbeitsmarktdatensätze und entwickle ML-Modelle für Beschäftigungsprognosen. Diese Reise hat mir gezeigt, dass Ausdauer und Anpassungsfähigkeit genauso wichtig sind wie technisches Know-how. Ich freue mich auf die kommenden Aufgaben in Deutschland!",
      imageUrl: "/Portfolio/blog/iab.jpg"
    },
    {
      id: "masters-journey",
      title: "Start meines Masterstudiums in Intelligent and Autonomous Systems an der TH Nürnberg",
      date: "April 2028",
      readTime: "3 Min. Lesezeit",
      category: "Akademik & Robotik",
      excerpt: "Ein wichtiger Meilenstein: Beginn meines Masterstudiums in Deutschland mit den Schwerpunkten KI, Sensorfusion und autonome Navigation.",
      content: "Ich freue mich sehr, einen wichtigen akademischen Schritt zu teilen: Ich habe mein Masterstudium in Intelligent and Autonomous Systems an der Technischen Hochschule Nürnberg Georg Simon Ohm begonnen!\n\nNach meiner Zeit als Data Engineer bei Accenture, wo ich mich auf Cloud-Datenverarbeitung, ETL-Pipelines und BigQuery-Optimierungen konzentriert habe, ermöglicht mir dieses Studium die Verbindung von Big Data mit physischer Intelligenz. Die Vorlesungen decken spannende Bereiche wie Autonome Navigationssysteme, KI-Hardwarebeschleuniger und Statistik für maschinelles Lernen ab.\n\nZudem arbeite ich an der TH Nürnberg in Kooperation mit dem Klinikum Nürnberg an einem autonomen Patiententransport-Roboter auf Basis von LiDAR, Tiefenkameras und ROS. Ich freue mich darauf, meine Fortschritte beim Bau autonomer Systeme und der Lösung komplexer Datenprobleme weiter zu teilen!",
      imageUrl: "/Portfolio/blog/masters-journey.jpg"
    },
    {
      id: "last-day-accenture",
      title: "Rückblick auf meinen letzten Arbeitstag als Data Engineer bei Accenture",
      date: "März 2028",
      readTime: "2 Min. Lesezeit",
      category: "Karriereweg",
      excerpt: "Dankbar für die Reise: Zusammenfassung meiner 2,9 Jahre bei Accenture, vom PL/SQL-Training bis zur Cloud-Datenverarbeitung.",
      content: "Heute war mein letzter Arbeitstag bei Accenture in India!\n\nIm Juli 2023 begann meine Zeit dort mit einem intensiven Training in PL/SQL und Datenbankarchitektur. Kurz darauf bekam ich die Chance, als Data Engineer an echten Kundenprojekten mitzuwirken und ETL-Pipelines auf der Google Cloud Platform mit BigQuery und Python zu entwickeln.\n\nDabei habe ich nicht nur technische Fähigkeiten wie Datenbankoptimierung gelernt, sondern auch den gesamten Software-Lebenszyklus verstanden – von der Anforderungserhebung über Entwicklung, Testen und Deployment bis hin zum Support.\n\nIch bin meinen Mentoren, Kollegen und Freunden bei Accenture in Indien unglaublich dankbar. Diese Erfahrung bildet ein starkes Fundament für meinen weiteren Weg!\n\nIch bin gespannt auf das nächste Kapitel, werde Accenture im Herzen aber immer verbunden bleiben. Lasst uns in Kontakt bleiben!\n\n✨ #ContinuousLearning 🤝 #GreatPeople 🌍 #Impact 💡 #AppliedIntelligence #Accenture #Dataengineer #BigQuery #Python #Cloud #CareerJourney #NewBeginnings #Consulting #Learning #Growth",
      imageUrl: "/Portfolio/blog/accenture_1.jpg",
      secondaryImageUrl: "/Portfolio/blog/accenture_2.jpg"
    }
  ]
};

export const uiTranslations = {
  en: {
    navHome: "Home",
    navExperience: "Experience",
    navProjects: "Projects",
    navCertifications: "Certifications",
    navAchievements: "Achievements",
    navBlog: "Blog",
    navContact: "Contact",
    verifiedCredentials: "Verified Credentials",
    certificationsSubtitle: "Certifications in cloud infrastructure, enterprise data warehousing, machine learning, and automation.",
    downloadAllCertificates: "Download All Certifications (PDF)",
    verify: "Verify",
    internalCred: "Internal Cred",
    issued: "Issued",
    careerTimeline: "Career & Education Timeline",
    timelineSubtitle: "My journey bridging enterprise big data engineering, cloud analytics, and intelligence-driven robotics systems.",
    workHistory: "Work History",
    education: "Education",
    getInTouch: "Get In Touch",
    contactSubtitle: "Have an opening, a project proposal, or just want to connect? Send me a message.",
    yourName: "Your Name",
    emailAddress: "Email Address",
    messageBody: "Message Body",
    transmitMessage: "Transmit Message",
    transmissionConfirmed: "Transmission Confirmed",
    transmissionSuccess: "Thank you for connecting! Your message was transmitted and I will review it shortly.",
    sendAnotherMessage: "Send another message",
    skillsTitle: "Skills & Core Focus Areas",
    skillsSubtitle: "Proficiency levels across programming, data architecture, cloud analytics, and intelligent systems.",
    languagesSpoken: "Languages Spoken",
    careerUpdates: "Career Updates & Stories",
    blogSubtitle: "Insights, milestones, and reports from my academic studies and software research.",
    readFullStory: "Read Full Story",
    collapseStory: "Collapse Story",
    projectsTitle: "Projects Showcase",
    projectsSubtitle: "Click the interactive SQL query presets below to dynamically filter projects from my portfolio database.",
    projectsNote: "Note: System data pipelines flow through Kafka, Spark, & BigQuery.",
    hideArchitecture: "Hide Architecture",
    showArchitecture: "Show Pipeline Architecture",
    implementationStrategy: "Implementation Strategy:",
    repository: "Repository",
    liveDemo: "Live Demo",
    allCategories: "All Categories",
    sqlConsoleLabel: "SQL Filter Console",
    achievementsTitle: "Key Milestones & Achievements",
    achievementsSubtitle: "Key recognitions, metric optimizations, and academic excellence markers throughout my studies and professional work.",
    telemetryUptime: "SYS_UPTIME",
    telemetryLatency: "SYS_LATENCY",
    telemetryIngest: "DATA_INGEST_RATE",
    telemetryStatus: "NODE_STATUS",
    resumeDownload: "Download CV (PDF)",
    viewResume: "View CV",
    allProjects: "All Projects",
    dataEngineering: "Data Engineering",
    roboticsSwarmSystems: "Robotics & Swarm Systems",
    pythonMlDriven: "Python & ML Driven",
    telemetryIngestLabel: "Pipeline Ingestion",
    telemetryUptimeLabel: "System Stability",
    telemetryLatencyLabel: "Avg API Latency",
    telemetryIngestUnit: "rec / sec (Live)",
    telemetryUptimeStatus: "All nodes operational",
    telemetryLatencyStatus: "clusters active",
    cvTelemetryLabel: "CV_ACCESS_TELEMETRY",
    hitsLabel: "hits (Live)",
  },
  de: {
    navHome: "Startseite",
    navExperience: "Erfahrung",
    navProjects: "Projekte",
    navCertifications: "Zertifikate",
    navAchievements: "Erfolge",
    navBlog: "Blog",
    navContact: "Kontakt",
    verifiedCredentials: "Verifizierte Nachweise",
    certificationsSubtitle: "Zertifizierungen in Cloud-Infrastruktur, Enterprise Data Warehousing, maschinellem Lernen und Automatisierung.",
    downloadAllCertificates: "Alle Zertifikate herunterladen (PDF)",
    verify: "Verifizieren",
    internalCred: "Interner Nachweis",
    issued: "Ausgestellt",
    careerTimeline: "Beruflicher & Akademischer Werdegang",
    timelineSubtitle: "Mein Weg zwischen Enterprise Big Data Engineering, Cloud Analytics und intelligenten Robotersystemen.",
    workHistory: "Berufserfahrung",
    education: "Ausbildung",
    getInTouch: "Kontaktieren Sie mich",
    contactSubtitle: "Haben Sie eine offene Stelle, einen Projektvorschlag oder möchten Sie sich einfach vernetzen? Schreiben Sie mir.",
    yourName: "Ihr Name",
    emailAddress: "E-Mail-Adresse",
    messageBody: "Ihre Nachricht",
    transmitMessage: "Nachricht senden",
    transmissionConfirmed: "Übertragungsbestätigung",
    transmissionSuccess: "Vielen Dank für Ihre Nachricht! Sie wurde erfolgreich übermittelt und ich werde sie in Kürze prüfen.",
    sendAnotherMessage: "Weitere Nachricht senden",
    skillsTitle: "Fähigkeiten & Kernbereiche",
    skillsSubtitle: "Kenntnisstände in Programmierung, Datenarchitektur, Cloud-Analysen und intelligenten Systemen.",
    languagesSpoken: "Sprachkenntnisse",
    careerUpdates: "Karriere-Updates & Berichte",
    blogSubtitle: "Erkenntnisse, Meilensteine und Berichte aus meinem Studium und meiner Software-Forschung.",
    readFullStory: "Ganze Geschichte lesen",
    collapseStory: "Zusammenklappen",
    projectsTitle: "Projektübersicht",
    projectsSubtitle: "Klicken Sie unten auf die interaktiven SQL-Abfragen, um Projekte dynamisch aus meiner Portfolio-Datenbank zu filtern.",
    projectsNote: "Hinweis: Systemdatenpipelines fließen durch Kafka, Spark & BigQuery.",
    hideArchitecture: "Architektur ausblenden",
    showArchitecture: "Pipeline-Architektur anzeigen",
    implementationStrategy: "Implementierungsstrategie:",
    repository: "Repository",
    liveDemo: "Live-Demo",
    allCategories: "Alle Kategorien",
    sqlConsoleLabel: "SQL-Filterkonsole",
    achievementsTitle: "Meilensteine & Erfolge",
    achievementsSubtitle: "Besondere Anerkennungen, Prozessoptimierungen und akademische Meilensteine während meines Studiums und meiner beruflichen Laufbahn.",
    telemetryUptime: "SYS_BETRIEBSZEIT",
    telemetryLatency: "SYS_LATENZ",
    telemetryIngest: "DATEN_INGESTION_RATE",
    telemetryStatus: "KNOTEN_STATUS",
    resumeDownload: "Lebenslauf herunterladen (PDF)",
    viewResume: "Lebenslauf ansehen",
    allProjects: "Alle Projekte",
    dataEngineering: "Data Engineering",
    roboticsSwarmSystems: "Robotics & Schwarmsysteme",
    pythonMlDriven: "Python & KI-gesteuert",
    telemetryIngestLabel: "Pipeline-Ingestion",
    telemetryUptimeLabel: "Systemstabilität",
    telemetryLatencyLabel: "Durchschn. API-Latenz",
    telemetryIngestUnit: "Datensätze / Sek. (Live)",
    telemetryUptimeStatus: "Alle Knoten betriebsbereit",
    telemetryLatencyStatus: "Cluster aktiv",
    cvTelemetryLabel: "LEBENSLAUF_TELEMETRIE",
    hitsLabel: "Zugriffe (Live)",
  }
};
