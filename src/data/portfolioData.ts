import { Project, Experience, SkillCategory, Education, Leadership, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'Uppara Vinod',
  title: 'AI/ML Engineer & Full Stack Developer',
  headline: 'Building intelligent software by combining AI/ML with modern full-stack engineering.',
  summary: 'AI & ML engineering student (CGPA: 9.45) with hands-on experience in Machine Learning, React-based frontend development, and Flask backend deployment. Skilled in regression modeling, data preprocessing, and scalable web application development. Strong foundation in Data Structures and Algorithms.',
  email: 'upparavinod7@gmail.com',
  phone: '+91 7680841759',
  github: 'https://github.com/upparavinod7',
  linkedin: 'https://www.linkedin.com/in/uppara-vinod-2259b728b/',
  location: 'Pattikonda, Andhra Pradesh, India',
  availability: 'Open to AI/ML & Full Stack Engineering Roles',
  stats: {
    cgpa: '9.45 / 10',
    degree: 'B.Tech CSE — AI & ML',
    educationPeriod: '2023 – 2027',
    institution: 'Joy University',
    leadership: 'Vice Chairperson — ACM Student Chapter',
    internships: '2 Industry Internships'
  }
};

export const RECRUITER_SNAPSHOT = [
  {
    label: 'Academic Standing',
    value: '9.45 / 10 CGPA',
    detail: 'B.Tech CSE in Artificial Intelligence & Machine Learning at Joy University',
    category: 'Academics'
  },
  {
    label: 'Core Focus',
    value: 'AI/ML + Full Stack',
    detail: 'Combining deep learning, computer vision & LLMs with robust backends & UIs',
    category: 'Specialization'
  },
  {
    label: 'Practical Experience',
    value: '2 Industry Internships',
    detail: 'Hyperready (Junior Developer Intern), Unified Mentor (Machine Learning Intern)',
    category: 'Experience'
  },
  {
    label: 'Tech Leadership',
    value: 'ACM Vice Chairperson',
    detail: 'Conducted ML workshops, organized technical events, and guided peer developers',
    category: 'Leadership'
  }
];

export const ENGINEERING_PIPELINE = [
  { step: '01', title: 'Problem Discovery', desc: 'Identify bottlenecks, data availability, and system constraints.', icon: 'Search' },
  { step: '02', title: 'Data & Modeling', desc: 'Data preprocessing, feature engineering, and ML/CV architectures.', icon: 'Brain' },
  { step: '03', title: 'Backend & APIs', desc: 'FastAPI/Node.js microservices, auth, rate-limiting, and schemas.', icon: 'Server' },
  { step: '04', title: 'Database & Storage', desc: 'Structured schema design, MongoDB, PostgreSQL & SQL optimization.', icon: 'Database' },
  { step: '05', title: 'Frontend UI/UX', desc: 'Responsive, accessible interfaces with React, Vite & Tailwind CSS.', icon: 'Layout' },
  { step: '06', title: 'Isolated Deployment', desc: 'Containerized microservices, Docker sandboxes & resilient CI/CD.', icon: 'Cpu' }
];

export const FLAGSHIP_PROJECTS: Project[] = [
  {
    id: 'ai-podcast',
    title: 'AI Podcast Studio',
    subtitle: 'Local-First AI Recording Studio & Scripted Co-Host',
    tagline: 'Browser-based podcast studio with a scripted AI co-host, Ollama LLM cues, Piper neural voice synthesis, and automated FFmpeg multi-track mix.',
    category: 'flagship',
    tags: ['AI / ML', 'Full Stack', 'Audio Engineering', 'LLM', 'Local AI'],
    primaryTech: ['React', 'Node.js', 'Express', 'FFmpeg', 'Ollama', 'Piper TTS'],
    allTech: ['React', 'MediaRecorder', 'IndexedDB', 'Node.js 22', 'Express', 'FFmpeg', 'Ollama (qwen2.5:3b)', 'Piper TTS', 'WebM', 'WAV / MP3'],
    problem: 'Solo podcast hosts lack realistic conversational interaction, while cloud audio processing incurs latency, data privacy concerns, and heavy subscription fees.',
    solution: 'Engineered a local-first recording studio where the browser records the host in resilient IndexedDB chunks, local Ollama generates scripted co-host questions, Piper synthesizes neural speech, and FFmpeg mixes both tracks into synchronized WAV and MP3 master files.',
    architecture: {
      steps: [
        { label: 'Host Audio Capture', sub: 'MediaRecorder / IndexedDB', type: 'frontend' },
        { label: 'Ollama LLM Engine', sub: 'qwen2.5:3b Scripted Cues', type: 'ai' },
        { label: 'Piper TTS Service', sub: 'Neural Voice Audio Cues', type: 'ai' },
        { label: 'Timestamp Sync', sub: 'Relative Cue Offsets', type: 'backend' },
        { label: 'Express Audio Uploader', sub: 'Chunk Assembly', type: 'backend' },
        { label: 'FFmpeg Multi-Track', sub: 'WAV & MP3 Master Mix', type: 'output' }
      ],
      summary: 'Local-first architecture capturing audio in browser chunks, orchestrating offline Ollama prompts and Piper neural speech, and executing FFmpeg multi-track audio synchronization.'
    },
    features: [
      'Resilient chunked host recording with IndexedDB local caching preventing data loss on network drops',
      'Scripted AI co-host question generation powered by local offline Ollama (qwen2.5:3b) model',
      'Ultra-fast neural text-to-speech voice generation using Piper HTTP microservice',
      'Live dynamic cue triggers with precise timestamp alignment relative to host timeline',
      'Automated multi-track audio mastering and format encoding exporting studio-quality WAV and MP3'
    ],
    engineeringHighlights: [
      'Architected offline-first audio workflow combining local LLM inference with neural voice synthesis for zero API cost and zero cloud latency.',
      'Designed browser chunked recording pipeline using MediaRecorder API and IndexedDB to guarantee fault tolerance.',
      'Implemented robust FFmpeg audio filtergraphs to synchronize, level, and blend dual audio streams.'
    ],
    githubUrl: 'https://github.com/upparavinod7/AI_Podcast',
    demoAvailable: false,
    featuredOrder: 1,
    badge: 'Tier S Flagship'
  },
  {
    id: '3d-brain-generation',
    title: '3D Brain MRI Reconstruction',
    subtitle: 'Medical AI & Volumetric Cortical Meshing',
    tagline: 'Research-grade platform for 3D brain surface reconstruction from real DICOM data using skull-stripped segmentation, Marching Cubes, and Taubin smoothing.',
    category: 'flagship',
    tags: ['Medical AI', 'Computer Vision', 'PyTorch', 'FastAPI', 'Next.js'],
    primaryTech: ['Next.js 14', 'FastAPI', 'PyTorch', 'scikit-image', 'trimesh', 'Docker'],
    allTech: ['Next.js 14', 'FastAPI', 'PyTorch 2.2', 'scikit-image', 'trimesh', 'PyVista', 'DICOM Processing', '3D Otsu', 'Marching Cubes', 'Taubin Smoothing', 'Docker'],
    problem: 'Standard 2D clinical MRI scans require extensive manual inspection; reconstructing accurate anatomical 3D brain meshes without non-brain tissue artifacts demands rigorous skull-stripping and resolution normalization.',
    solution: 'Developed an end-to-end medical AI platform that ingests clinical DICOM series, resamples anisotropic volumes to 1.0mm isotropic voxels, executes skull-stripped brain segmentation (3D Otsu + connected-component isolation), generates cortical meshes via Marching Cubes, and refines them with Taubin smoothing.',
    architecture: {
      steps: [
        { label: 'Raw DICOM Data', sub: 'Sequential MRI Scans', type: 'data' },
        { label: 'Isotropic Resample', sub: 'Volume Normalization', type: 'data' },
        { label: 'Skull Stripping', sub: '3D Otsu & Isolation', type: 'ai' },
        { label: 'Marching Cubes', sub: 'Voxel-to-Mesh Extraction', type: 'ai' },
        { label: 'Taubin Smoothing', sub: 'Feature-Preserving Mesh', type: 'backend' },
        { label: 'Next.js 3D Viewer', sub: 'Orthogonal Slices & Reports', type: 'output' }
      ],
      summary: 'FastAPI medical imaging backend performing anisotropic resampling, Otsu thresholding, connected-component isolation, Marching Cubes mesh extraction, and interactive 3D WebGL rendering.'
    },
    features: [
      'True skull-stripped brain segmentation (3D Otsu + connected-component isolation) producing cortical surface meshes rather than raw rectangular slabs',
      'Anisotropic to isotropic resampling normalizing variable slice spacings (e.g. 6mm) to uniform 1.0mm voxels',
      'Taubin mesh smoothing preserving anatomical convolutions without volume loss or shrinkage artifacts',
      'Interactive 2D orthogonal slice viewer (axial, sagittal, coronal) alongside 3D surface rendering',
      'Clinical PDF report generation containing volumetric measurements and anatomical slice snapshots'
    ],
    engineeringHighlights: [
      'Engineered an anisotropic-to-isotropic volumetric resampler in Python with scikit-image ensuring anatomically proportional meshes.',
      'Implemented Taubin non-shrinking mesh smoothing algorithm to eliminate voxel stepping while maintaining anatomical cortical boundaries.',
      'Built a decoupled FastAPI microservice and Next.js 14 interface containerized with Docker.'
    ],
    githubUrl: 'https://github.com/upparavinod7/3d-Brain-Generation',
    demoAvailable: false,
    featuredOrder: 2,
    badge: 'Tier S Flagship'
  },
  {
    id: 'codelook',
    title: 'CodeLook',
    subtitle: 'Polyglot Code Execution Platform (codelook.in)',
    tagline: 'AI-powered polyglot online code editor and secure execution workspace in Docker-isolated runtime containers.',
    category: 'flagship',
    tags: ['Developer Tools', 'Docker', 'FastAPI', 'Full Stack', 'Polyglot'],
    primaryTech: ['React', 'Monaco Editor', 'FastAPI', 'Docker', 'Python'],
    allTech: ['React', 'Vite', 'Monaco Editor', 'FastAPI', 'Docker', 'Python 3', 'Java 17', 'C++ (GCC 12/13)', 'Node.js 20', 'REST APIs', 'Container Sandboxing'],
    problem: 'Executing untrusted, multi-language user code on a web platform introduces severe security risks, resource starvation, and environment consistency challenges.',
    solution: 'Built an online code editor and execution workspace using Monaco Editor and FastAPI, dispatching code into unprivileged, resource-limited Docker containers with strict timeouts and memory caps.',
    architecture: {
      steps: [
        { label: 'Monaco Editor', sub: 'VS Code-like Web IDE', type: 'frontend' },
        { label: 'FastAPI Gateway', sub: 'Validation & Payload Router', type: 'backend' },
        { label: 'Language Dispatch', sub: 'Python / Java / C++ / Node', type: 'backend' },
        { label: 'Docker Sandbox', sub: '128MB RAM / 5s Timeout', type: 'infra' },
        { label: 'Output Console', sub: 'stdout / stderr / timing', type: 'output' }
      ],
      summary: 'Frontend client pushes code to FastAPI backend, which executes inside ephemeral unprivileged Docker containers with zero network access and returns captured execution streams.'
    },
    features: [
      'Full Monaco code editor with syntax highlighting, auto-indentation, line numbers, and theme switching',
      'Polyglot execution engine supporting Python 3, Java 17, C++ (GCC 12/13), and JavaScript (Node.js 20)',
      'Hardened Docker sandbox execution with 5s execution timeout, 128MB memory cap, and disabled networking',
      'Detailed output console displaying stdout, stderr, compilation errors, and execution time badges',
      'Instant starter templates and Ctrl+Enter keyboard shortcut for rapid testing'
    ],
    engineeringHighlights: [
      'Configured unprivileged Docker container lifecycles to prevent host access and eliminate persistent attack surfaces.',
      'Designed asynchronous FastAPI execution handlers with sub-second container dispatch and stream capture.',
      'Implemented clean client-side state handling to display compilation vs runtime diagnostics clearly.'
    ],
    githubUrl: 'https://github.com/upparavinod7/codelook',
    demoAvailable: false,
    featuredOrder: 3,
    badge: 'Tier S Flagship'
  },
  {
    id: 'careeros-ai',
    title: 'CareerOS AI',
    subtitle: 'AI-Powered Career Intelligence Platform',
    tagline: 'Career intelligence platform with real-time job matching, automated skill-gap analysis, and personalized roadmaps.',
    category: 'flagship',
    tags: ['Generative AI', 'Full Stack', 'Backend', 'AI / ML'],
    primaryTech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'OpenAI APIs'],
    allTech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT Authentication', 'OpenAI APIs', 'Tailwind CSS', 'Recharts'],
    problem: 'Job seekers struggle to identify missing qualifications from diverse job listings and lack actionable, structured roadmaps to upskill for their target roles.',
    solution: 'Designed and built an end-to-end full-stack SaaS platform featuring JWT authentication, automated skill-gap analysis, fit-scoring engines, and AI-generated personalized learning roadmaps.',
    architecture: {
      steps: [
        { label: 'React Client', sub: 'TypeScript & Tailwind UI', type: 'frontend' },
        { label: 'Express REST APIs', sub: 'Modular Service Routers', type: 'backend' },
        { label: 'JWT Security', sub: 'Token Auth & Role Guard', type: 'backend' },
        { label: 'MongoDB Schema', sub: 'User Profiles & Analytics', type: 'data' },
        { label: 'AI Intelligence', sub: 'Skill Engine & Roadmaps', type: 'ai' },
        { label: 'Interactive Dash', sub: 'Fit Scores & Milestones', type: 'output' }
      ],
      summary: 'Modular MERN architecture integrating secure JWT authentication, structured MongoDB collections, and an LLM recommendation layer for personalized career analytics.'
    },
    features: [
      'Intelligent job matching and candidate fit-scoring algorithm comparing profile skills with job descriptions',
      'AI skill-gap detection identifying missing competencies and actionable steps to bridge them',
      'Automated personalized career roadmaps generated with step-by-step learning milestones',
      'Secure authentication with JWT, password hashing, and protected route middlewares',
      'Interactive career analytics dashboard with Recharts visualizations and application status tracking'
    ],
    engineeringHighlights: [
      'Separated business logic into modular service layers across Express REST APIs for high maintainability.',
      'Designed relational-like Mongoose schemas with indexed fields for quick query performance on job and skill models.',
      'Engineered structured LLM prompt pipelines returning deterministic JSON for frontend dashboard rendering.'
    ],
    githubUrl: 'https://github.com/upparavinod7/CareerOS-AI-fe',
    demoAvailable: false,
    featuredOrder: 4,
    badge: 'Tier S Flagship'
  },
  {
    id: 'smart-music-player',
    title: 'Smart Music Player',
    subtitle: 'Emotion-Aware Music Recommendation System',
    tagline: 'Real-time facial emotion recognition using OpenCV and deep CNNs with dynamic mood-aligned playlist playback.',
    category: 'flagship',
    tags: ['Computer Vision', 'Deep Learning', 'Java', 'Python', 'OpenCV'],
    primaryTech: ['Java', 'Python', 'OpenCV', 'TensorFlow', 'CNN'],
    allTech: ['Java', 'Python', 'OpenCV', 'TensorFlow', 'Convolutional Neural Networks', 'Java Swing / JavaFX', 'Real-Time Webcam Inference', 'Audio Player Engine'],
    problem: 'Manual playlist selection causes decision fatigue, while traditional music recommenders fail to reflect a listener’s immediate emotional state.',
    solution: 'Developed an intelligent desktop application that captures real-time video via webcam, isolates facial landmarks with OpenCV, classifies emotion through a trained CNN, and curates matching playlists.',
    architecture: {
      steps: [
        { label: 'Webcam Stream', sub: 'Real-Time Frame Capture', type: 'frontend' },
        { label: 'OpenCV Face Detection', sub: 'Haar / Landmark Extraction', type: 'ai' },
        { label: 'CNN Emotion Model', sub: 'Deep Feature Inference', type: 'ai' },
        { label: 'Emotion Prediction', sub: 'Valence & Mood State', type: 'backend' },
        { label: 'Playlist Mapping', sub: 'Genre & Track Filtering', type: 'backend' },
        { label: 'Java Desktop Player', sub: 'Synchronized Playback', type: 'output' }
      ],
      summary: 'Webcam frames are acquired and normalized with OpenCV, evaluated by a deep CNN model for emotion prediction, and dispatched to a Java desktop media player.'
    },
    features: [
      'Live facial emotion recognition through webcam with real-time face detection in OpenCV',
      'Deep Convolutional Neural Network (CNN) classifying emotional expressions with high accuracy',
      'Dynamic mood-to-music mapping automatically queueing tracks tailored to detected emotional state',
      'Hybrid Java-Python architecture coupling Python CV inference with a responsive Java desktop GUI',
      'Integrated desktop media player with complete track controls and visual state indicators'
    ],
    engineeringHighlights: [
      'Optimized OpenCV video acquisition pipeline to maintain fluid 30 FPS inference without stuttering.',
      'Trained a lightweight CNN model balancing inference latency with classification accuracy.',
      'Engineered an inter-process communication bridge connecting Python inference with the Java application.'
    ],
    githubUrl: 'https://github.com/upparavinod7/Smart-Music-Player',
    demoAvailable: false,
    featuredOrder: 5,
    badge: 'Tier S Flagship'
  }
];

export const SELECTED_PROJECTS: Project[] = [
  {
    id: 'vehicle-mobile-price-prediction',
    title: 'Vehicle & Mobile Price Prediction',
    subtitle: 'Machine Learning Regression & Classification Platform',
    tagline: 'End-to-end ML prediction web application for vehicle valuation and mobile device price-tier classification deployed via Flask.',
    category: 'selected',
    tags: ['AI / ML', 'Python', 'Flask', 'Backend'],
    primaryTech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    allTech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'Random Forest Regressor', 'Classification Algorithms', 'Feature Engineering', 'EDA', 'REST APIs'],
    problem: 'Manual pricing of pre-owned vehicles and commercial mobile devices is inconsistent due to multi-variable depreciation factors and hardware specs.',
    solution: 'Constructed an end-to-end machine learning system that cleans structured datasets, engineers predictive features, trains regression & classification models, and serves real-time inferences through a Flask web application.',
    architecture: {
      steps: [
        { label: 'Structured Datasets', sub: 'Vehicle & Mobile Data', type: 'data' },
        { label: 'Preprocessing & EDA', sub: 'Encoding & Outlier Removal', type: 'data' },
        { label: 'Model Training', sub: 'Random Forest & Ensembles', type: 'ai' },
        { label: 'Evaluation', sub: 'RMSE, MAE, R², Accuracy', type: 'ai' },
        { label: 'Flask Server', sub: 'REST Prediction Endpoint', type: 'backend' },
        { label: 'Prediction Output', sub: 'Real-time Web Results', type: 'output' }
      ],
      summary: 'Complete machine learning lifecycle from data standardization and feature selection to model serialization and Flask web deployment.'
    },
    features: [
      'End-to-end regression models predicting vehicle resale market prices based on mileage, year, and fuel type',
      'Multi-class supervised classification categorizing mobile devices into commercial price brackets based on hardware specs',
      'Rigorous Exploratory Data Analysis (EDA) and feature engineering isolating top predictive attributes',
      'Interactive Flask web interface and REST API returning instantaneous valuation predictions'
    ],
    engineeringHighlights: [
      'Evaluated multiple regression and classification algorithms systematically using RMSE, MAE, and R² scores.',
      'Serialized trained Scikit-learn models using Pickle/Joblib for zero-latency web inference.',
      'Developed during Unified Mentor ML Internship with production-oriented coding standards.'
    ],
    githubUrl: 'https://github.com/upparavinod7/ML-Models',
    demoAvailable: false
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust',
    subtitle: 'Full-Stack Accommodation Platform',
    tagline: 'Comprehensive vacation rental web application with CRUD listings, reviews, and secure authentication.',
    category: 'selected',
    tags: ['Full Stack', 'Backend', 'MERN'],
    primaryTech: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    allTech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'EJS / React', 'Bootstrap / Tailwind', 'Passport / Auth', 'REST APIs'],
    problem: 'Marketplace lodging platforms require relational listing-review data modeling, image asset storage, authorization guards, and dynamic search filters.',
    solution: 'Implemented a full-featured web app with CRUD listings, client/server validation, user reviews, interactive map integration, and role-based owner authorization.',
    architecture: {
      steps: [
        { label: 'Client UI', sub: 'Responsive Listing Pages', type: 'frontend' },
        { label: 'Express App', sub: 'REST Route Controllers', type: 'backend' },
        { label: 'Auth Middleware', sub: 'Session & Permission Check', type: 'backend' },
        { label: 'MongoDB / Cloud', sub: 'Listing Data & Assets', type: 'data' },
        { label: 'Rendered View', sub: 'Reviews & Geocoding', type: 'output' }
      ],
      summary: 'Full-stack MVC architecture utilizing Express router modules, MongoDB document collections, and protected CRUD mutations.'
    },
    features: [
      'Complete CRUD operations for travel destinations with photo uploads, descriptions, and pricing',
      'Interactive user review and star-rating system linked to specific accommodation listings',
      'Authentication and authorization ensuring only listing owners can edit or delete entries',
      'Filter and search by destination title, location, and price thresholds'
    ],
    engineeringHighlights: [
      'Implemented robust server-side error handling and schema validation using Joi and Mongoose schemas.',
      'Designed modular controller architecture separating routing, business logic, and database operations.'
    ],
    githubUrl: 'https://github.com/upparavinod7/Wanderlust',
    demoAvailable: false
  },
  {
    id: 'ml-models',
    title: 'ML Models Suite',
    subtitle: 'Supervised Learning & Data Preprocessing Library',
    tagline: 'Hands-on implementations of core machine learning algorithms, data standardization, and evaluation pipelines.',
    category: 'selected',
    tags: ['AI / ML', 'Python', 'Jupyter'],
    primaryTech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    allTech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'Data Standardization', 'Label Encoding'],
    problem: 'Understanding algorithmic behavior and data preprocessing nuances requires systematic experimentation across varied dataset distributions.',
    solution: 'Created a structured suite of Jupyter notebooks and Python modules implementing data cleaning, missing value handling, label encoding, and model evaluation.',
    architecture: {
      steps: [
        { label: 'Raw CSV Data', sub: 'Structured Datasets', type: 'data' },
        { label: 'Standardization', sub: 'Scaling & Encoding', type: 'data' },
        { label: 'Model Training', sub: 'Linear, Trees, Ensembles', type: 'ai' },
        { label: 'Evaluation Metrics', sub: 'Cross-Validation & Plots', type: 'output' }
      ],
      summary: 'Data preprocessing, feature engineering, and model benchmarking across standard supervised machine learning datasets.'
    },
    features: [
      'In-depth reference notebooks covering data standardization, label encoding, and missing value imputation',
      'Implementations of Linear Regression, Logistic Regression, Decision Trees, Random Forest, and SVM',
      'Comprehensive visualizations with Matplotlib and Seaborn including correlation heatmaps and residual plots',
      'Hands-on experiments validating bias-variance tradeoffs and cross-validation performance'
    ],
    engineeringHighlights: [
      'Standardized clean notebook pipelines for data preprocessing and algorithmic benchmarking.',
      'Documented systematic comparisons of model performance metrics across varying feature subsets.'
    ],
    githubUrl: 'https://github.com/upparavinod7/ML-Models',
    demoAvailable: false
  }
];

export const ML_EXPERIMENTS: Project[] = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer Curriculum',
    subtitle: 'Open-Source AI Engineering Repository',
    tagline: 'Curated roadmap, hands-on implementations, and project phases covering modern AI engineering, agentic workflows, and LLMs.',
    category: 'experiment',
    tags: ['AI / ML', 'Python', 'LLMs', 'Open Source'],
    primaryTech: ['Python', 'LLMs', 'AI Agents', 'Workflows'],
    allTech: ['Python', 'LLMs', 'Prompt Engineering', 'LangChain', 'Agent Architectures', 'Git / GitHub'],
    problem: 'Navigating the rapidly shifting landscape of modern AI engineering requires structured, practical hands-on curriculum beyond theory.',
    solution: 'Constructed an open-source educational repository documenting learning roadmaps, agentic workflows, and production practices for aspiring AI engineers.',
    architecture: {
      steps: [
        { label: 'Foundations', sub: 'Python & ML Essentials', type: 'data' },
        { label: 'Deep Learning', sub: 'Neural Networks & PyTorch', type: 'ai' },
        { label: 'LLMs & Agents', sub: 'Prompting & Tool Calling', type: 'ai' },
        { label: 'Deployment', sub: 'APIs & Production Workflows', type: 'output' }
      ],
      summary: 'Curated technical reference for applied AI engineering, LLM integration, and production systems.'
    },
    features: [
      'Structured learning phases covering Python ML fundamentals through advanced agentic architectures',
      'Code templates and exercises for prompt engineering and model fine-tuning',
      'Community open-source standards with comprehensive contributor documentation'
    ],
    engineeringHighlights: ['Organized modular learning modules and structured documentation for developer community guidance.'],
    githubUrl: 'https://github.com/upparavinod7/ai_engineer',
    demoAvailable: false
  }
];

export const MORE_PROJECTS: Project[] = [
  {
    id: 'movie-finder',
    title: 'Movie Finder',
    subtitle: 'Dynamic Film Discovery & Details Web App',
    tagline: 'Interactive movie search and discovery interface consuming public cinematic REST APIs.',
    category: 'other',
    tags: ['Frontend', 'JavaScript', 'REST API'],
    primaryTech: ['React', 'JavaScript', 'REST APIs', 'CSS3'],
    allTech: ['React', 'JavaScript', 'REST APIs', 'OMDb / TMDB API', 'Debounced Search', 'CSS Modules'],
    problem: 'Users need instant search feedback without hitting API rate limits or suffering layout shifts when querying large movie databases.',
    solution: 'Created a responsive film explorer featuring debounced search input, detailed cast and rating modals, and responsive poster grids.',
    architecture: {
      steps: [
        { label: 'Search Input', sub: 'Debounced Query Hook', type: 'frontend' },
        { label: 'API Gateway', sub: 'Movie Database REST API', type: 'backend' },
        { label: 'State Reducer', sub: 'Cache & Result Sorting', type: 'frontend' },
        { label: 'Card Grid', sub: 'Poster, Cast & Ratings View', type: 'output' }
      ],
      summary: 'Debounced React client interacting with movie database REST APIs with graceful error and placeholder handling.'
    },
    features: [
      'Instant debounced movie title search with live async fetching',
      'Detailed modal showing plot summary, director, cast, release year, and IMDb ratings',
      'Bookmark and favorite movie saving with local state persistence',
      'Responsive multi-device layout for mobile and desktop screens'
    ],
    engineeringHighlights: ['Implemented custom debouncing hooks to reduce unnecessary network payload traffic while typing queries.'],
    githubUrl: 'https://github.com/upparavinod7/movie-finder',
    demoAvailable: false
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Web Clone',
    subtitle: 'Interactive Music Streaming UI & Player Engine',
    tagline: 'Responsive audio streaming interface replicating modern music application playback controls.',
    category: 'other',
    tags: ['Frontend', 'JavaScript', 'Audio Engine'],
    primaryTech: ['JavaScript', 'HTML5', 'CSS3', 'Web Audio API'],
    allTech: ['JavaScript', 'HTML5 Audio API', 'CSS3', 'Responsive Design', 'Playlist Management'],
    problem: 'Replicating seamless HTML5 audio controls, track time scrubbing, volume synchronization, and dynamic playlist states requires tight DOM manipulation.',
    solution: 'Engineered a clean JavaScript music player with track playlist queues, custom seek bars, volume controls, and modern dark-mode aesthetics.',
    architecture: {
      steps: [
        { label: 'Playlist UI', sub: 'Track List & Album Art', type: 'frontend' },
        { label: 'Audio Engine', sub: 'HTML5 Audio Element API', type: 'frontend' },
        { label: 'Time Sync', sub: 'Seek bar & Duration Events', type: 'frontend' },
        { label: 'Playback', sub: 'Active Audio Streaming', type: 'output' }
      ],
      summary: 'HTML5 audio event handling paired with responsive CSS layout for continuous track playback.'
    },
    features: [
      'Interactive audio playback controls: Play, Pause, Next, Previous, Repeat, and Shuffle',
      'Real-time seek bar progress tracking with timestamp display and scrub interactivity',
      'Dynamic volume controller with mute toggle and volume persistence',
      'Responsive sidebar playlist navigation matching industry music platform ergonomics'
    ],
    engineeringHighlights: ['Managed timeupdate and ended event listeners to smoothly auto-advance queued audio tracks.'],
    githubUrl: 'https://github.com/upparavinod7/Spotify-Clone',
    demoAvailable: false
  },
  {
    id: 'harry-potter-guide',
    title: 'Harry Potter Wizarding Guide',
    subtitle: 'Character & Spell Universe Explorer',
    tagline: 'Interactive wizarding world directory with real-time house filtering, wand details, and spell search.',
    category: 'other',
    tags: ['Frontend', 'JavaScript', 'REST API'],
    primaryTech: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
    allTech: ['JavaScript', 'REST API', 'CSS Grid', 'DOM Manipulation', 'Filter System'],
    problem: 'Presenting dense multi-attribute lore data across hundreds of characters and spells in an intuitive, engaging interface.',
    solution: 'Built an interactive single-page directory connecting to the Harry Potter API with instant house sorting (Gryffindor, Slytherin, etc.), spell searches, and patronus lookups.',
    architecture: {
      steps: [
        { label: 'Character API', sub: 'Async JSON Fetching', type: 'data' },
        { label: 'Filter Pipeline', sub: 'House & Role Predicates', type: 'frontend' },
        { label: 'DOM Renderer', sub: 'Animated Card Grid', type: 'frontend' },
        { label: 'Character Modal', sub: 'Wand, Patronus & Lore', type: 'output' }
      ],
      summary: 'Asynchronous API consumption with multi-attribute filtering and dynamic DOM rendering.'
    },
    features: [
      'Multi-filter system sorting characters by Hogwarts house, ancestry, and student/staff roles',
      'Real-time search bar for instant character name and spell query matching',
      'Detailed card modals revealing wand core, wood, length, and patronus information',
      'Custom theme accents reflecting the distinct colors of all four Hogwarts houses'
    ],
    engineeringHighlights: ['Optimized DOM element rendering through modular template functions and array predicate filtering.'],
    githubUrl: 'https://github.com/upparavinod7/Harry-Potter-Guide',
    demoAvailable: false
  }
];

export const ALL_PROJECTS: Project[] = [
  ...FLAGSHIP_PROJECTS,
  ...SELECTED_PROJECTS,
  ...ML_EXPERIMENTS,
  ...MORE_PROJECTS
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Azentra Global',
    role: 'AI & ML Intern',
    period: 'Sept 2026 – Present',
    location: 'Nagercoil',
    type: 'Artificial Intelligence & Machine Learning',
    description: 'Currently working as an AI & ML Intern, gaining hands-on industry experience in artificial intelligence and machine learning.',
    highlights: [
      'Gaining hands-on industry experience in artificial intelligence and machine learning applications.'
    ],
    technologies: ['Python', 'Machine Learning', 'Artificial Intelligence'],
    badge: 'Current Position'
  },
  {
    company: 'Pantechelearning',
    role: 'Machine Learning Intern',
    period: 'July 2026 – Sept 2026',
    location: 'Remote',
    type: 'Machine Learning',
    description: 'Developed practical machine learning models and pipelines using Python and data science libraries.',
    highlights: [
      'Worked on practical machine learning models using Python and industry-standard data science libraries.',
      'Performed data preprocessing and prepared datasets for machine learning workflows.',
      'Applied machine learning techniques to solve practical data science problems.'
    ],
    technologies: ['Python', 'Machine Learning', 'Data Preprocessing', 'Data Science'],
    badge: 'Internship'
  },
  {
    company: 'Hyperready Technology',
    role: 'Junior Developer',
    period: 'Jan 2026 – Apr 2026',
    location: 'Coimbatore',
    type: 'Full Stack Web Development',
    description: 'Engineered responsive web applications and backend services with React.js, TypeScript, and Node.js.',
    highlights: [
      'Developed and maintained responsive web applications using React.js, TypeScript, and Tailwind CSS, focusing on frontend performance and user experience.',
      'Designed and optimized relational database schemas and SQL queries using PostgreSQL and Microsoft SQL Server for efficient data storage and retrieval.',
      'Built and integrated backend RESTful APIs and server-side functionality using Node.js and SQL.',
      'Contributed to end-to-end development workflows by implementing scalable features, troubleshooting technical issues, and maintaining clean code architecture.'
    ],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Microsoft SQL Server', 'SQL', 'RESTful APIs'],
    badge: 'Internship'
  },
  {
    company: 'Unified Mentor',
    role: 'Machine Learning Intern',
    period: 'Aug 2025 – Sept 2025',
    location: 'Remote',
    type: 'Machine Learning',
    description: 'Built regression and classification ML models and deployed interactive web prediction applications.',
    highlights: [
      'Built and deployed Mobile and Vehicle Price Prediction models using Random Forest and regression techniques.',
      'Applied data preprocessing, feature engineering, and model tuning to improve machine learning model performance.',
      'Developed a Flask-based web application for real-time predictions with an interactive user interface.',
      'Worked with Python, Pandas, NumPy, Scikit-learn, Flask, and GitHub to implement end-to-end machine learning solutions.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Random Forest', 'Regression', 'Flask', 'Feature Engineering', 'GitHub'],
    badge: 'Internship'
  }
];

export const MINIMAL_SKILLS = [
  {
    category: 'Programming',
    skills: ['Python', 'Java', 'C++', 'SQL']
  },
  {
    category: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    skills: ['Flask', 'Node.js', 'Express', 'REST APIs']
  },
  {
    category: 'Machine Learning',
    skills: ['Regression', 'Classification', 'Feature Engineering', 'Pandas', 'NumPy', 'Scikit-learn']
  },
  {
    category: 'Deep Learning',
    skills: ['CNN', 'RNN', 'RAG Models', 'OpenCV', 'TensorFlow', 'PyTorch']
  },
  {
    category: 'Tools & Environments',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'PyCharm', 'Jupyter', 'Eclipse', 'Docker']
  },
  {
    category: 'Operating Systems',
    skills: ['Windows', 'macOS']
  }
];

export const OTHER_PROJECTS_LIST = [
  {
    id: 'vehicle-mobile-price-prediction',
    name: 'Vehicle & Mobile Price Prediction',
    description: 'End-to-end regression and classification models estimating vehicle market valuations and device price tiers with Flask REST APIs.',
    tech: ['Python', 'Scikit-learn', 'Flask', 'Pandas', 'NumPy'],
    category: 'AI / ML',
    github: 'https://github.com/upparavinod7/ML-Models'
  },
  {
    id: 'wanderlust',
    name: 'Wanderlust',
    description: 'Full-stack accommodation booking platform with user authentication, listings, and review management.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    category: 'Full Stack',
    github: 'https://github.com/upparavinod7/Wanderlust'
  },
  {
    id: 'ml-models',
    name: 'ML Models & Reference Suite',
    description: 'Collection of supervised machine learning algorithms, data standardization pipelines, and reference notebooks.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
    category: 'AI / ML',
    github: 'https://github.com/upparavinod7/ML-Models'
  },
  {
    id: 'ai-engineer',
    name: 'AI Engineer Curriculum',
    description: 'Open-source repository documenting learning roadmaps, agentic workflows, and production practices for modern AI engineering.',
    tech: ['Python', 'LLMs', 'AI Agents', 'Workflows'],
    category: 'AI / ML',
    github: 'https://github.com/upparavinod7/ai_engineer'
  },
  {
    id: 'movie-finder',
    name: 'Movie Finder',
    description: 'Debounced film search and exploration interface consuming public cinema REST APIs.',
    tech: ['React', 'JavaScript', 'REST APIs', 'CSS3'],
    category: 'Full Stack',
    github: 'https://github.com/upparavinod7/movie-finder'
  },
  {
    id: 'spotify-clone',
    name: 'Spotify Clone',
    description: 'Web audio streaming interface replicating playback controls, scrubbing, and playlist queues.',
    tech: ['JavaScript', 'HTML5 Audio API', 'CSS3'],
    category: 'Full Stack',
    github: 'https://github.com/upparavinod7/Spotify-Clone'
  },
  {
    id: 'harry-potter-guide',
    name: 'Harry Potter Guide',
    description: 'Interactive wizarding world directory with real-time house filtering and spell searches.',
    tech: ['JavaScript', 'REST APIs', 'CSS3'],
    category: 'Full Stack',
    github: 'https://github.com/upparavinod7/Harry-Potter-Guide'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Programming Languages',
    iconName: 'Code',
    description: 'Core programming languages across systems, backend, frontend, and data engineering.',
    skills: [
      { name: 'Python', level: 'Advanced', context: 'Core language for ML, scripting & backend APIs' },
      { name: 'Java', level: 'Proficient', context: 'OOP principles, data structures, application logic' },
      { name: 'C++', level: 'Proficient', context: 'Algorithms, memory concepts, competitive programming' },
      { name: 'SQL', level: 'Advanced', context: 'Relational database query composition' },
      { name: 'JavaScript', level: 'Advanced', context: 'Full-stack web applications & browser engineering' },
      { name: 'TypeScript', level: 'Proficient', context: 'Type-safe web development' }
    ]
  },
  {
    name: 'AI / Machine Learning',
    iconName: 'Brain',
    description: 'Machine learning algorithms, computer vision pipelines, neural networks, and AI integration.',
    skills: [
      { name: 'Scikit-learn', level: 'Advanced', context: 'Regression, classification & clustering pipelines' },
      { name: 'Pandas & NumPy', level: 'Advanced', context: 'Data wrangling, matrix computation & EDA' },
      { name: 'Computer Vision / OpenCV', level: 'Proficient', context: 'Face detection, image preprocessing, video streams' },
      { name: 'TensorFlow & PyTorch', level: 'Proficient', context: 'Deep convolutional neural networks & modeling' },
      { name: 'CNN & RNN', level: 'Proficient', context: 'Computer vision and sequential deep learning architectures' },
      { name: 'RAG & LLM Integration', level: 'Proficient', context: 'Prompt orchestration, Ollama, & AI agent workflows' }
    ]
  },
  {
    name: 'Frontend Engineering',
    iconName: 'Layout',
    description: 'Modern, component-driven user interfaces with high performance and accessibility.',
    skills: [
      { name: 'React', level: 'Advanced', context: 'State management, custom hooks, component architecture' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', context: 'Async/await, DOM APIs, event loop, functional patterns' },
      { name: 'Tailwind CSS', level: 'Advanced', context: 'Utility-first responsive layouts & design systems' },
      { name: 'HTML5 & CSS3', level: 'Advanced', context: 'Semantic structure, animations & accessibility' },
      { name: 'Bootstrap', level: 'Proficient', context: 'Grid systems & rapid prototype styling' }
    ]
  },
  {
    name: 'Backend & APIs',
    iconName: 'Server',
    description: 'Scalable server-side architectures, RESTful API design, microservices, and authentication.',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced', context: 'REST API routing, middleware, async workflows' },
      { name: 'Flask', level: 'Proficient', context: 'Lightweight ML model serving endpoints' },
      { name: 'FastAPI', level: 'Proficient', context: 'High-performance Python API microservices' },
      { name: 'RESTful API Design', level: 'Advanced', context: 'Clean endpoint structure, status codes & validation' },
      { name: 'JWT & Authentication', level: 'Proficient', context: 'Token authentication, password hashing, RBAC' }
    ]
  },
  {
    name: 'Databases & Storage',
    iconName: 'Database',
    description: 'Document and relational data modeling, query optimization, and schema design.',
    skills: [
      { name: 'MongoDB & Mongoose', level: 'Advanced', context: 'NoSQL document schemas, aggregation & indexing' },
      { name: 'SQL', level: 'Advanced', context: 'Relational data modeling, foreign keys, ACID queries' },
      { name: 'MySQL', level: 'Proficient', context: 'Structured querying & relational table designs' }
    ]
  },
  {
    name: 'Tools & DevOps',
    iconName: 'Wrench',
    description: 'Developer tooling, container sandboxing, version control, and IDEs.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', context: 'Branch management, pull requests, collaboration' },
      { name: 'Docker', level: 'Proficient', context: 'Containerized execution sandboxes & environments' },
      { name: 'VS Code & PyCharm', level: 'Advanced', context: 'Primary development environments & debugging' },
      { name: 'IntelliJ IDEA & Eclipse', level: 'Proficient', context: 'Java enterprise development' },
      { name: 'Jupyter Notebook', level: 'Advanced', context: 'Interactive data science, EDA & ML experiments' }
    ]
  }
];

export const EDUCATION_DATA: Education = {
  institution: 'Joy University',
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science & Engineering — Artificial Intelligence & Machine Learning',
  period: '2023 – 2027',
  cgpa: '9.45 / 10',
  highlights: [
    'Outstanding academic record with an overall CGPA of 9.45 / 10.',
    'Specialized in Artificial Intelligence, Machine Learning algorithms, and Computer Vision architectures.',
    'Strong foundation in Data Structures & Algorithms, Operating Systems, and System Architecture.'
  ],
  coursework: [
    'Data Structures & Algorithms (DSA)',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOP)',
    'Web Technologies & Full Stack Development',
    'Operating Systems & System Architecture',
    'Machine Learning & Pattern Recognition'
  ]
};

export const LEADERSHIP_DATA: Leadership = {
  title: 'Vice Chairperson',
  organization: 'ACM Student Chapter',
  period: 'Joy University',
  description: 'Conducted ML workshops, organized technical events, and guided peer developers within the student community.',
  highlights: [
    'Conducted Machine Learning workshops and organized technical events.',
    'Mentored junior students and guided practical project development.',
    'Promoted open-source participation and collaborative coding sessions.'
  ]
};

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: 'AWS Solutions Architecture Job Simulation',
    issuer: 'Forage',
    date: 'Verified Certificate',
    skillsLearned: ['Cloud Architecture', 'AWS Services', 'Scalable System Design', 'High Availability'],
    description: 'Practical architectural design simulation covering cloud infrastructure selection, VPC configuration, and scalable multi-tier architectures.'
  },
  {
    title: 'Technology Job Simulation',
    issuer: 'Forage',
    date: 'Verified Certificate',
    skillsLearned: ['Software Development', 'Technical Analysis', 'Client Problem Solving', 'Code Quality'],
    description: 'Hands-on technology consulting simulation evaluating enterprise software architectures and engineering solutions.'
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Forage',
    date: 'Verified Certificate',
    skillsLearned: ['Data Analytics', 'Statistical Analysis', 'Business Intelligence', 'Data Storytelling'],
    description: 'Enterprise data analytics simulation performing forensic dataset examination, trend modeling, and insight generation.'
  }
];

export const GROWTH_JOURNEY = [
  { step: '01', era: 'Frontend Foundations', focus: 'HTML, CSS, Bootstrap, JavaScript, React, Tailwind CSS', detail: 'Built responsive, accessible interfaces and mastered component-driven architectures.' },
  { step: '02', era: 'Full-Stack Systems', focus: 'Node.js, Express, MongoDB, REST APIs, Git/GitHub', detail: 'Engineered secure backend services, CRUD web applications, and database schemas.' },
  { step: '03', era: 'Machine Learning', focus: 'Python, Scikit-learn, Pandas, Regression, Classification', detail: 'Trained predictive models, performed rigorous EDA, and completed industry ML internships.' },
  { step: '04', era: 'Computer Vision & Deep Learning', focus: 'OpenCV, TensorFlow, CNNs, 3D Brain MRI', detail: 'Built real-time webcam emotion classifiers and volumetric 3D medical imaging pipelines.' },
  { step: '05', era: 'AI Products & Audio Engineering', focus: 'CodeLook Docker Sandboxes, AI Podcast Studio, CareerOS AI', detail: 'Combined polyglot execution engines, local Ollama audio studios, and career intelligence platforms.' },
  { step: '06', era: 'AI/ML + Full-Stack Engineer', focus: 'Production Software with Intelligence Built-In', detail: 'Designing complete software solutions from raw data and ML models to robust backends and polished UIs.' }
];
