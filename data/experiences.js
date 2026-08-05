/**
 * Chronological record of Tito Nicola Drugman's education, work and projects.
 * Source: personal_files/ (CV, cover letter, recommendation letter, diploma,
 * bachelor's thesis, technical reports and course papers).
 *
 * Sorted by startDate ascending. `startDate`/`endDate` are ISO "YYYY-MM"
 * (best estimate where an exact month wasn't documented) for sorting/filtering;
 * `dateLabel` is the human-readable string meant for display.
 *
 * `logo` points at a local institution/company mark under assets/logos/ —
 * these files aren't shipped yet, so the renderer must degrade gracefully
 * (initials fallback) until real artwork is dropped in. `null` means no
 * single clean mark applies (e.g. a multi-partner hackathon).
 */

export const experiences = [
  {
    id: "bsc-ai",
    category: "education",
    title: "BSc in Artificial Intelligence",
    organization:
      "Università di Pavia / Università degli Studi di Milano / Università degli Studi di Milano-Bicocca",
    logo: "assets/logos/unipv.png",
    location: "Pavia / Milan, Italy",
    startDate: "2021-09",
    endDate: "2024-09",
    dateLabel: "Sep 2021 – Sep 2024",
    ongoing: false,
    upcoming: false,
    summary:
      "Inter-university Bachelor's programme in Artificial Intelligence, jointly run by three Italian universities and launched the year of enrolment — graduated in its inaugural cohort.",
    highlights: [
      "Core coursework spanning machine learning, deep learning, statistics, algorithms, programming and databases, alongside knowledge representation & reasoning, computational logic and cognitive psychology.",
      "Graduated on 26/09/2024 with a final score of 106/110.",
      "Bachelor's thesis, 'Neural Network Tool for Hyperparameter Optimization for Embedded Systems', supervised by Prof. Claudio Cusano (Università di Pavia) and developed on-site during the STMicroelectronics internship."
    ],
    tags: ["Education", "Artificial Intelligence", "Machine Learning"],
    link: null,
    collaborators: []
  },
  {
    id: "robotics-trainer",
    category: "work",
    title: "Industrial Robotics Trainer & Certification Assessor",
    organization: "Comau × Pearson (2022–2023) → Fanuc × Sanoma (2023–present)",
    logo: "assets/logos/fanuc.png",
    location: "Northern Italy",
    startDate: "2022-10",
    endDate: null,
    dateLabel: "Oct 2022 – present",
    ongoing: true,
    upcoming: false,
    summary:
      "Delivers technical training and administers official industry certifications on industrial communication protocols, robot programming and Industry 4.0 to mixed audiences of engineers, educators and students.",
    highlights: [
      "Produces structured course materials and assessment criteria, and leads 'Train the Trainer' sessions.",
      "Translates dense technical content into reproducible curricula for audiences ranging from vocational students to practising engineers."
    ],
    tags: ["Teaching", "Industrial Robotics", "Industry 4.0"],
    link: null,
    collaborators: []
  },
  {
    id: "museum-guide",
    category: "work",
    title: "Science Museum Guide",
    organization: "Leonardo da Vinci National Museum of Science and Technology",
    logo: "assets/logos/museoscienza.png",
    location: "Milan, Italy",
    startDate: "2023-03",
    endDate: null,
    dateLabel: "Mar 2023 – present",
    ongoing: true,
    upcoming: false,
    summary:
      "Communicates complex technical and historical concepts to diverse public audiences across the museum's aviation, transport and historical-technology exhibitions.",
    highlights: [],
    tags: ["Science Communication", "Public Speaking"],
    link: null,
    collaborators: []
  },
  {
    id: "stm-internship",
    category: "work",
    title: "AI Engineer Intern — Bachelor's Thesis",
    organization: "STMicroelectronics",
    logo: "assets/logos/st.png",
    location: "Agrate Brianza, Milan, Italy",
    startDate: "2024-03",
    endDate: "2024-07",
    dateLabel: "Mar – Jul 2024",
    ongoing: false,
    upcoming: false,
    summary:
      "Designed and implemented an automated hyperparameter-optimisation framework, extending the open-source Keras Tuner library, for neural networks deployed on microcontroller-class hardware — targeting an industrial audio anomaly-detection use case for predictive maintenance.",
    highlights: [
      "Engineered the search procedure to jointly evaluate candidate architectures against accuracy and strict embedded constraints — ROM footprint, RAM usage and Multiply-Accumulate operations (MACCs).",
      "Validated the framework's ROM/RAM/MACC estimators against STM32Cube.AI ground-truth measurements across three MLPerf Tiny reference models (anomaly detection, image classification, keyword spotting).",
      "Replaced an initial 'poisoning' strategy for oversized trials — which could let a barely-trained large model outperform fully-trained constrained ones — with a cleaner trial-skipping mechanism built on Keras' FailedTrialError API.",
      "Diagnosed and engineered a workaround for an upstream Keras Tuner bug that terminated an entire search whenever the first proposed configuration violated the constraints, keeping long unattended remote tuning runs alive.",
      "Operated inside STMicroelectronics' confidential corporate environment — remote access to internal Linux workstations via company VPN — with fully reproducible, version-controlled Conda environments and systematic experiment logs.",
      "Findings compiled into the Bachelor's thesis, supervised academically by Prof. Claudio Cusano with Davide Denaro (AI Research Sr Advisor, STMicroelectronics) as industrial tutor."
    ],
    tags: ["Embedded AI", "TinyML", "Keras Tuner", "STM32"],
    link: null,
    collaborators: []
  },
  {
    id: "msc-cse-ai",
    category: "education",
    title: "MSc in Computer Science & Engineering (Artificial Intelligence)",
    organization: "Politecnico di Milano",
    logo: "assets/logos/polimi.png",
    location: "Milan, Italy",
    startDate: "2024-09",
    endDate: null,
    dateLabel: "Sep 2024 – present",
    ongoing: true,
    upcoming: false,
    summary:
      "Master's specialising in Artificial Intelligence — machine learning, deep learning, natural language processing, large language models, neural networks, distributed systems and software engineering.",
    highlights: [
      "Deliberately chose a project-based path over an exam-heavy one — slower and more demanding, but it placed him in direct collaboration with professors and researchers on real problems, with Python as the working language throughout."
    ],
    tags: ["Education", "Master's", "AI"],
    link: null,
    collaborators: []
  },
  {
    id: "tooth-segmentation-transformer",
    category: "project",
    title: "Tooth Segmentation Transformer (ToothFormer)",
    organization: "Politecnico di Milano — coursework",
    logo: "assets/logos/polimi.png",
    location: "Milan, Italy",
    startDate: "2024-09",
    endDate: "2025-06",
    dateLabel: "2024 – 2025",
    ongoing: false,
    upcoming: false,
    summary:
      "A SegFormer-inspired Vision Transformer for conditional semantic segmentation.",
    highlights: [
      "Identifies and masks individual teeth in 3D dental scans, conditioned on a given tooth ID rather than segmenting the full arch at once."
    ],
    tags: ["Vision Transformer", "Medical Imaging", "SegFormer"],
    link: "https://github.com/TitoNicolaDrugman/Tooth-Segmentation-Transformer",
    collaborators: []
  },
  {
    id: "tv-show-recommender",
    category: "project",
    title: "TV Show Recommender",
    organization: "Politecnico di Milano — coursework",
    logo: "assets/logos/polimi.png",
    location: "Milan, Italy",
    startDate: "2024-09",
    endDate: "2025-06",
    dateLabel: "2024 – 2025",
    ongoing: false,
    upcoming: false,
    summary:
      "A recommendation system for TV shows using user-user and item-item collaborative filtering.",
    highlights: [
      "Analyses viewing patterns and computes similarity matrices.",
      "Features an interactive 3D visualisation of the recommendation space."
    ],
    tags: ["Recommender Systems", "Collaborative Filtering"],
    link: "https://github.com/TitoNicolaDrugman/TV-Show-Recommender",
    collaborators: []
  },
  {
    id: "webvoyager-polimi-exam",
    category: "project",
    title:
      "WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models (Part I & II)",
    organization:
      "Politecnico di Milano — exam project for 'Large Language Models: Applications, Opportunities and Risks'",
    logo: "assets/logos/polimi.png",
    location: "Milan, Italy",
    startDate: "2025-01",
    endDate: "2025-02",
    dateLabel: "AY 2024/2025",
    ongoing: false,
    upcoming: false,
    summary:
      "Two-part exam project with Giacomo Colosio: a faithful replication and critical analysis of the WebVoyager end-to-end web-agent framework, followed by experiments to reduce execution time and cost, plus a literature review tracing the evolution of web agents.",
    highlights: [
      "Part I replicates WebVoyager and evaluates modifications aimed at reducing execution time and operational cost while improving overall effectiveness, benchmarked against the reference implementation.",
      "Part II surveys the emerging web-agent landscape and details the ethical and safety risks of the technology.",
      "Seeded the later, more ambitious CUHK-Shenzhen replication that swapped in fully open-weight, locally-hosted models."
    ],
    tags: ["Web Agents", "LLMs", "Literature Review"],
    link: "https://github.com/TitoNicolaDrugman/LLM-web-agent-WebVoyager",
    collaborators: ["Giacomo Colosio"]
  },
  {
    id: "transformer-npu-stm32n6",
    category: "project",
    title: "Demonstration of a Simple Transformer Running on the NPU of an STM32N6",
    organization:
      "Politecnico di Milano — 'Advanced Computer Architectures' course project",
    logo: "assets/logos/polimi.png",
    location: "Milan, Italy",
    startDate: "2025-03",
    endDate: "2025-09",
    dateLabel: "Mar – Sep 2025",
    ongoing: false,
    upcoming: false,
    summary:
      "Full-stack edge-AI engineering project with Patrizio Acquadro, advised by Prof. Silvano Cristina and Dott. Marco Ronzani: designed, trained and INT8-quantised a custom 4.56M-parameter encoder-only Transformer from scratch for autoregressive text generation, then deployed it on the Neural Processing Unit of an STM32N6570-DK.",
    highlights: [
      "Validated the toolchain first against a Model Zoo MobileNetV2 and a hand-crafted CNN before tackling the Transformer as the project's core objective.",
      "Applied per-channel symmetric INT8 quantisation of both weights and activations against a held-out calibration set.",
      "Full pipeline: PyTorch model design, training on ~1.4M words from Project Gutenberg, C-code generation via STM32CubeIDE / X-Cube-AI, NPU configuration and on-device validation.",
      "On-board results: 73.14 ms/token latency, 13.67 tokens/s throughput, 257 of 407 ops accelerated on the NPU — with a quantitative CNN-vs-Transformer comparison under identical hardware constraints.",
      "Models trained locally on a workstation with two NVIDIA GeForce RTX 5060 Ti GPUs."
    ],
    tags: ["TinyML", "INT8 Quantisation", "STM32N6", "Edge AI"],
    link: "https://github.com/TitoNicolaDrugman/Transformer-NPU-STM32N6",
    collaborators: ["Patrizio Acquadro"]
  },
  {
    id: "cuhk-exchange",
    category: "exchange",
    title: "Exchange Student — Computer Science & Engineering",
    organization: "The Chinese University of Hong Kong, Shenzhen (CUHK-Shenzhen)",
    logo: "assets/logos/cuhk.png",
    location: "Shenzhen, China",
    startDate: "2025-09",
    endDate: "2026-01",
    dateLabel: "Sep 2025 – Jan 2026",
    ongoing: false,
    upcoming: false,
    summary:
      "A semester of AI research and advanced coursework in machine learning and engineering.",
    highlights: [
      "Coursework included CIE6004 (Image Processing and Computer Vision) and CIE6006/MCE5918 (Data Analysis), alongside independent research collaborations with CUHK-Shenzhen peers.",
      "Continued running compute-heavy Polimi coursework and personal-research projects remotely on his own dual-RTX-5060-Ti Linux workstation back in Milan throughout the exchange."
    ],
    tags: ["Exchange", "CUHK-Shenzhen", "China"],
    link: null,
    collaborators: []
  },
  {
    id: "sen2fire",
    category: "project",
    title: "Sen2Fire Wildfire Detection — Reproducibility and Enhancement",
    organization: "Independent research collaboration",
    logo: null,
    location: "Shenzhen, China / Milan, Italy",
    startDate: "2025-09",
    endDate: "2025-12",
    dateLabel: "2025",
    ongoing: false,
    upcoming: false,
    summary:
      "A rigorous re-evaluation and enhancement of the Sen2Fire wildfire-detection benchmark, with Kauymbayev Kalizhan (CUHK-Shenzhen) and Vladislav Palamrchuk (HSE University, Moscow).",
    highlights: [
      "Benchmarked a modified U-Net baseline against nnU-Net, SegFormer, Dual-Stream SegFormer and MixedTrans-CNN architectures on Sentinel-2 / Sentinel-5P multispectral imagery.",
      "Established a new state-of-the-art F1-score of 0.3675 (IoU 0.2250) with nnU-Net on all 13 spectral bands, versus the original paper's 0.2810 — challenging its conclusion that band subsets outperform the full spectral range.",
      "Added Test-Time Augmentation (six-view flip/rotation ensembling) and quantified its cost/benefit trade-off against the roughly six-fold increase in inference latency it incurs."
    ],
    tags: ["Remote Sensing", "Segmentation", "nnU-Net", "SegFormer"],
    link: "https://github.com/TitoNicolaDrugman/Sen2Fire-Wildfire-Detection",
    collaborators: ["Kauymbayev Kalizhan", "Vladislav Palamrchuk"]
  },
  {
    id: "cifar10-from-scratch",
    category: "project",
    title: "Deep Learning From Scratch — CIFAR-10",
    organization: "CUHK-Shenzhen — CIE6006/MCE5918 Data Analysis coursework",
    logo: "assets/logos/cuhk.png",
    location: "Shenzhen, China",
    startDate: "2025-09",
    endDate: "2025-12",
    dateLabel: "2025 · CUHK-Shenzhen coursework",
    ongoing: false,
    upcoming: false,
    summary:
      "Implementation of Batch Normalization, Dropout and Convolutional Neural Networks using raw NumPy alongside a PyTorch counterpart, for the CIFAR-10 dataset.",
    highlights: [],
    tags: ["NumPy", "CNNs", "From Scratch"],
    link: "https://github.com/TitoNicolaDrugman/Deep-Learning-from-Scratch-CIFAR10",
    collaborators: []
  },
  {
    id: "webvoyager-cuhk-enhanced",
    category: "project",
    title: "Replicating and Enhancing WebVoyager",
    organization: "CUHK-Shenzhen — CIE6004: Image Processing and Computer Vision",
    logo: "assets/logos/cuhk.png",
    location: "Shenzhen, China",
    startDate: "2025-09",
    endDate: "2026-01",
    dateLabel: "Sep 2025 – Jan 2026",
    ongoing: false,
    upcoming: false,
    summary:
      "With Asia Montico: replicated and extended the WebVoyager framework for end-to-end AI web agents, replacing proprietary GPT-4o with locally-hosted open-source Large Multimodal Models to test a scalable, cost-free path to self-hosted web agents.",
    highlights: [
      "Deployed Qwen3-VL:8b and Qwen3-VL:30b locally via Ollama, and integrated DeepSeek-V3 (685B MoE) via OpenRouter as a third comparison point against GPT-4o.",
      "Built a fully-automated document/page-classification pipeline using locally-hosted Qwen3-VL:30b, producing a 1,101-image labelled dataset with zero manual annotation.",
      "Fine-tuned a ResNet-18 CNN for real-time page-state classification as a visual prior in the agent loop, cutting reasoning latency by 17%.",
      "Designed a novel grayscale + colour Set-of-Mark visual-grounding technique (52.4% vs. 51.1% baseline task success); replicated the GPT-4o reference at 62.7% task success, above the original paper's 59.1%."
    ],
    tags: ["VLM Agents", "Qwen3-VL", "Set-of-Mark", "Ollama"],
    link: "https://github.com/TitoNicolaDrugman/LLMsWebAgent",
    collaborators: ["Asia Montico"]
  },
  {
    id: "rag-code-generation",
    category: "project",
    title: "Retrieval-Augmented Generation (RAG) for LLM-Based Code Generation",
    organization: "Politecnico di Milano — 'Software Engineering 2' course project",
    logo: "assets/logos/polimi.png",
    location: "Milan, Italy (run remotely from Shenzhen, China)",
    startDate: "2025-09",
    endDate: "2026-02",
    dateLabel: "Sep 2025 – Feb 2026",
    ongoing: false,
    upcoming: false,
    summary:
      "With Giacomo Colosio and Patrizio Acquadro: investigated whether retrieval-augmented generation and prompt engineering improve LLM-based code generation for library-centric tasks (PySCF and SEED-Emulator), using CodeLlama-7B-Instruct over a knowledge base of 7,600+ code snippets.",
    highlights: [
      "Engineered and benchmarked three single-hop retrievers (lexical BM25, semantic dense via CodeBERT 768-d embeddings, hybrid via Reciprocal Rank Fusion) and two LLM-driven multi-hop pipelines (query decomposition, iterative refinement).",
      "Deployed the end-to-end system fully on-premises on a dual-RTX-5060-Ti Linux workstation with zero external API calls, using 4-bit NF4 quantisation (bitsandbytes) to fit CodeLlama-7B-Instruct in available VRAM.",
      "Result: semantic retrieval delivered a +38% relative CodeBLEU improvement over the no-retrieval baseline (0.1859 → 0.2567); multi-hop decomposition with a checklist-driven prompt reached 0.2505, rivalling the best single-hop setup.",
      "Found that hybrid RRF underperformed pure dense retrieval on this corpus, while minimal prompts worked best for the no-retrieval baseline — added structure without external context introduced overhead."
    ],
    tags: ["RAG", "CodeLlama-7B", "bitsandbytes", "Hybrid Retrieval"],
    link: "https://github.com/TitoNicolaDrugman/RAG-Code-Generation",
    collaborators: ["Giacomo Colosio", "Patrizio Acquadro"]
  },
  {
    id: "genhack2025",
    category: "project",
    title: "GenHack 2025 — Correcting Urban Heat Island Bias in ERA5 Climate Data",
    organization: "École Polytechnique × BNP Paribas × Kayrros — hackathon (Team BAT_TEAM)",
    logo: "assets/logos/genhack.png",
    location: "Remote",
    startDate: "2025-10",
    endDate: "2025-11",
    dateLabel: "Oct – Nov 2025",
    ongoing: false,
    upcoming: false,
    summary:
      "Three-person team hackathon: built an ML pipeline correcting systematic Urban Heat Island bias in ERA5-Land coarse-resolution (9 km) climate reanalysis data.",
    highlights: [
      "Integrated four heterogeneous data sources — ERA5-Land, Sentinel-2 NDVI, ECA&D ground stations, JRC Global Surface Water — into a unified 3M+ row training dataset across Italy, Spain, France and Portugal.",
      "Trained and compared Random Forest vs. HistGradientBoosting regressors with a station-based split to prevent geographic leakage; engineered a land-cover segmentation step fusing Sentinel-2 NDVI with JRC water data to resolve urban/water spectral ambiguity.",
      "Result: reduced ERA5 raw error from 3.01°C to 1.94°C RMSE (−35.5%), MAE by −45%, and corrected systematic urban bias by −93% on hold-out test stations."
    ],
    tags: ["Geospatial ML", "Random Forest", "Sentinel-2", "GeoPandas"],
    link: "https://github.com/TitoNicolaDrugman/GENHACK",
    collaborators: []
  },
  {
    id: "eca-traineeship",
    category: "work",
    title: "AI Traineeship — Profile 1: Local AI Model Architecture & Infrastructure",
    organization:
      "European Court of Auditors (ECA) — Directorate for Information Technology, Workplace and Innovation (DIWI)",
    logo: "assets/logos/eca.png",
    location: "Luxembourg",
    startDate: "2026-10",
    endDate: null,
    dateLabel: "Oct 2026 (incoming)",
    ongoing: false,
    upcoming: true,
    summary:
      "Upcoming traineeship in the Innovation Atelier, building on-premises open-source AI under strict data-sovereignty and confidentiality constraints — local LLM deployment, RAG, OCR-driven document ingestion and document classification — directly extending the on-prem discipline built at STMicroelectronics and in the RAG/WebVoyager coursework.",
    highlights: [
      "Applied specifically for Profile 1 rather than a general AI internship, drawing on daily practice self-hosting open-source LLMs (Llama, Qwen, DeepSeek) via Ollama on a dual-GPU Linux workstation.",
      "Plans to containerise the existing Ollama + RAG stack with Docker Compose and stand up a Tesseract/PaddleOCR ingestion pipeline ahead of the start date, to arrive ready to integrate rather than ramp up.",
      "Supported by a recommendation letter from his STMicroelectronics thesis tutor, Davide Denaro (AI Research Sr Advisor), linking the on-device/microcontroller reasoning discipline directly to on-premises institutional AI deployment."
    ],
    tags: ["On-Premises AI", "RAG", "OCR", "EU Institutions"],
    link: null,
    collaborators: []
  }
];

export default experiences;
