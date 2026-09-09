export const downloadResumeText = () => {
  const resumeText = `================================================================================
UPPARA VINOD
AI/ML Engineer & Full Stack Developer
Email: upparavinod7@gmail.com
Phone: +91 7680841759
GitHub: https://github.com/upparavinod7
LinkedIn: https://www.linkedin.com/in/uppara-vinod-2259b728b/
Location: Pattikonda, Andhra Pradesh, India
================================================================================

SUMMARY
--------------------------------------------------------------------------------
AI & ML engineering student (CGPA: 9.45) with hands-on experience in Machine Learning,
React-based frontend development, and Flask backend deployment. Skilled in regression
modeling, data preprocessing, and scalable web application development. Strong
foundation in Data Structures and Algorithms.

ACADEMIC BACKGROUND
--------------------------------------------------------------------------------
Joy University (2023 – 2027)
B.Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning)
CGPA: 9.45 / 10

Narayana Junior College (2021 – 2023)
Intermediate (MPC) — 96.1%

Narayana School (2016 – 2021)
Secondary School Certificate (SSC) — GPA: 10 / 10

TECHNICAL SKILLS
--------------------------------------------------------------------------------
Programming:       Python, Java, C++, SQL
Frontend:          React, HTML, CSS, Bootstrap, JavaScript, Tailwind CSS
Backend:           Flask, Node.js, Express, REST APIs
Machine Learning:  Regression, Classification, Feature Engineering, Pandas, NumPy, Scikit-learn
Deep Learning:     CNN, RNN, RAG Models, OpenCV, TensorFlow, PyTorch
Developer Tools:   Git, GitHub, VS Code, IntelliJ IDEA, PyCharm, Jupyter, Eclipse, Docker
Operating Systems: Windows, macOS

WORK EXPERIENCE
--------------------------------------------------------------------------------
AZENTRA GLOBAL
AI & ML Intern | September 2026 – Present
Nagercoil

• Currently working as an AI & ML Intern, gaining hands-on industry experience in artificial intelligence and machine learning.

PANTECHELEARNING
Machine Learning Intern | July 2026 – September 2026
Remote

• Worked on practical machine learning models using Python and industry-standard data science libraries.
• Performed data preprocessing and prepared datasets for machine learning workflows.
• Applied machine learning techniques to solve practical data science problems.

HYPERREADY TECHNOLOGY
Junior Developer | January 2026 – April 2026
Coimbatore

• Developed and maintained responsive web applications using React.js, TypeScript, and Tailwind CSS, focusing on frontend performance and user experience.
• Designed and optimized relational database schemas and SQL queries using PostgreSQL and Microsoft SQL Server for efficient data storage and retrieval.
• Built and integrated backend RESTful APIs and server-side functionality using Node.js and SQL.
• Contributed to end-to-end development workflows by implementing scalable features, troubleshooting technical issues, and maintaining clean code architecture.

UNIFIED MENTOR
Machine Learning Intern | August 2025 – September 2025
Remote

• Built and deployed Mobile and Vehicle Price Prediction models using Random Forest and regression techniques.
• Applied data preprocessing, feature engineering, and model tuning to improve machine learning model performance.
• Developed a Flask-based web application for real-time predictions with an interactive user interface.
• Worked with Python, Pandas, NumPy, Scikit-learn, Flask, and GitHub to implement end-to-end machine learning solutions.

KEY PROJECTS
--------------------------------------------------------------------------------
1. AI Podcast Studio — Local-First AI Recording Studio & Scripted Co-Host
   Technologies: React, Node.js, Express, FFmpeg, Ollama (qwen2.5:3b), Piper TTS, IndexedDB
   * Browser-based recording studio with resilient chunked IndexedDB host audio capture.
   * Scripted AI co-host cues generated with local offline Ollama (qwen2.5:3b) model.
   * Neural voice synthesis using local Piper TTS microservice for zero cloud latency.
   * Automated FFmpeg multi-track audio mix, leveling, and export into studio WAV and MP3.
   * Repository: https://github.com/upparavinod7/AI_Podcast

2. 3D Brain MRI Reconstruction — Medical AI & Volumetric Cortical Meshing
   Technologies: Next.js 14, FastAPI, PyTorch, scikit-image, trimesh, PyVista, Docker
   * End-to-end medical AI platform for 3D brain surface reconstruction from clinical DICOM series.
   * True skull-stripped brain segmentation (3D Otsu + connected-component isolation).
   * Anisotropic to isotropic resampling (e.g. 6mm slice spacing to 1.0mm isotropic voxels).
   * Taubin mesh smoothing preserving cortical morphology without volume shrinkage.
   * Interactive 2D orthogonal slice viewer alongside 3D surface rendering.
   * Repository: https://github.com/upparavinod7/3d-Brain-Generation

3. CodeLook — Polyglot Code Execution Platform
   Technologies: React, Vite, Monaco Editor, FastAPI, Docker, Python 3, Java 17, C++, Node.js 20
   * Browser-based polyglot code execution platform running on codelook.in.
   * Secure Docker container execution with 5s timeout, 128MB RAM, and disabled networking.
   * Asynchronous FastAPI backend capturing live stdout, stderr, compilation errors, and runtimes.
   * Repository: https://github.com/upparavinod7/codelook

4. CareerOS AI — AI-Powered Career Intelligence Platform
   Technologies: React, TypeScript, Node.js, Express, MongoDB, OpenAI APIs, JWT
   * Full-stack AI career platform with automated skill-gap analysis, live job search, and tracking.
   * Dynamic candidate fit-scoring algorithm comparing profile skills with target job requirements.
   * Automated personalized learning roadmap generation with step-by-step milestones.
   * Repository: https://github.com/upparavinod7/CareerOS-AI-fe

5. Smart Music Player — Emotion-Aware Music Recommendation System
   Technologies: Java, Python, OpenCV, TensorFlow / CNN, Java Swing/JavaFX
   * Live webcam facial emotion detection and landmark tracking using OpenCV at 30 FPS.
   * Deep Convolutional Neural Network (CNN) mapping emotional expressions to mood valence.
   * Automated dynamic playlist curation and playback based on detected mood.
   * Repository: https://github.com/upparavinod7/Smart-Music-Player

6. Vehicle & Mobile Price Prediction Web App
   Technologies: Python, Scikit-learn, Pandas, NumPy, Flask, REST APIs
   * Supervised regression modeling for vehicle resale market pricing and device price-tier classification.
   * Real-time Flask prediction web endpoints with serialized models.
   * Repository: https://github.com/upparavinod7/ML-Models

MORE PROJECTS
--------------------------------------------------------------------------------
* Wanderlust — Full-stack vacation accommodation platform with CRUD listings and reviews. (Node.js, Express, MongoDB)
* ML Models Suite — Supervised machine learning algorithms, preprocessing, and EDA notebooks. (Python, Scikit-learn, Pandas)
* AI Engineer Curriculum — Open-source repository documenting learning roadmaps and agentic workflows. (Python, LLMs, AI Agents)
* Movie Finder — Debounced film search and exploration interface consuming public cinema REST APIs. (React, JavaScript, REST APIs)
* Spotify Clone — Web audio streaming interface with playback controls and seek bar. (JavaScript, HTML5 Audio API)
* Harry Potter Guide — Interactive wizarding directory with house sorting and spell search. (JavaScript, REST APIs)

LEADERSHIP EXPERIENCE
--------------------------------------------------------------------------------
Vice Chairperson | ACM Student Chapter, Joy University
April 2025 – May 2026

• Organized and coordinated Ideathons, Hackathons, Technical Quizzes, Coding Events, and technical programs in collaboration with student teams and faculty.
• Managed participant coordination, registrations, event logistics, and on-ground execution while leading student engagement in technical activities.
================================================================================`;

  const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Uppara_Vinod_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const downloadResumePdf = () => {
  const basePath = import.meta.env.BASE_URL || '/';
  const resumeUrl = `${basePath.endsWith('/') ? basePath : basePath + '/'}Uppara_Vinod_Resume.pdf`;

  fetch(resumeUrl)
    .then((res) => {
      if (!res.ok) throw new Error('Network error fetching resume PDF');
      return res.blob();
    })
    .then((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Uppara_Vinod_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
    })
    .catch(() => {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Uppara_Vinod_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
};

export const downloadResume = downloadResumePdf;

