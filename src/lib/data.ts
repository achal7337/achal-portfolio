export const profile = {
  name: "Achal Gandhi",
  firstName: "Achal",
  role: "Cofounder & GenAI Operator",
  location: "Toronto, Canada",
  email: "achalgandhip16@gmail.com",
  phone: "+1 647-573-4377",
  linkedin: "https://linkedin.com/in/achal-gandhi",
  github: "https://github.com/achal7337",
  company: {
    name: "AD Tech AI",
    url: "https://adtechai.ca/",
    product: "Iris",
  },
  // Short hero positioning
  tagline: "I build AI employees, and the systems that make AI actually work in production.",
  // One-liner under the name
  kicker: "Strategic Projects Lead, Coding @ Scale AI · Cofounder @ AD Tech AI",
  blurb:
    "For the last six years I've taken the AI programs that were too messy or too ambiguous for anyone else to land, and turned them into something teams can rely on. Today I lead coding evaluation programs at Scale AI, and I cofounded AD Tech AI, where we build AI employees that do real work for real businesses.",
};

export const nav = [
  { label: "Venture", href: "#venture" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const venture = {
  name: "AD Tech AI",
  url: "https://adtechai.ca/",
  founded: "2026 · USA & Canada",
  headline: "We build AI employees. Not tools. Not automations. Real workers.",
  vision: "Every sector of business will have an AI employee.",
  description:
    "AD Tech AI builds autonomous AI employees that learn a business deeply, take real actions on its behalf, and get sharper over time. No salary, no training overhead, no time off. We're early, the ambition is big, and honestly we're only just getting started.",
  product: {
    name: "Iris",
    pitch:
      "Iris is our first AI employee, built for ecommerce customer support. Orders, refunds, invoices, delivery questions: she handles them around the clock, so owners can stop answering the same messages and get their time back.",
    stats: [
      { value: "78%", label: "of support conversations handled on her own" },
      { value: "24/7", label: "always on, with zero downtime" },
      { value: "0", label: "extra headcount needed to scale" },
    ],
    features: [
      "Customer verification and secure identity handling",
      "Owner dashboard with a live view of operations",
      "Business intelligence baked into every conversation",
      "Learns and gets better from real conversations",
    ],
  },
  roadmap: ["Ecommerce support", "Finance", "Sales", "HR"],
};

export const about = {
  paragraphs: [
    "I'm a builder who's drawn to the unglamorous part of AI: making it actually work once it meets the real world. At Scale AI I've spent the last few years picking up GenAI programs that were too messy or too ambiguous for anyone else to land, and turning them into something a team can count on.",
    "The way I work is pretty simple. I take full ownership, find where things are quietly breaking, and rebuild from the workflow up. I set the quality bar, write the tooling that holds it, and get engineering, research, and operations all rowing in the same direction. I started out as a data scientist shipping fraud and risk models in production, so I'm just as comfortable in the code as I am owning the roadmap.",
    "I also cofounded AD Tech AI, where we build AI employees that don't just answer questions, they actually do the job. Building it end to end sharpened everything I bring back to my day work: owning the eval loop, making real calls on cost and latency, and answering for it when a customer is unhappy at 2am. That's the perspective I bring to any team putting AI in front of real users.",
  ],
};

export type Job = {
  company: string;
  role: string;
  roleNote?: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
  stack?: string[];
};

export const experience: Job[] = [
  {
    company: "AD Tech AI",
    role: "Cofounder",
    period: "Since 2026",
    location: "USA · Canada",
    current: true,
    points: [
      "AD Tech AI is the company I cofounded. We build autonomous AI employees that actually do the work, starting with Iris, an AI employee for ecommerce customer support.",
      "I drive the product, the AI and evaluation stack underneath it, and how we get it in front of real businesses.",
      "We're at the very beginning. Right now it's all about turning a big thesis into something a small business can put to work today, then earning the next one.",
    ],
    stack: ["LLM Agents", "Customer Support AI", "Product", "Go to market"],
  },
  {
    company: "Scale AI",
    role: "Strategic Projects Lead, Coding",
    roleNote: "Promoted from GenAI Consultant · Jul 2026",
    period: "Since Jan 2024",
    location: "New York, NY",
    current: true,
    points: [
      "I'm the full owner of high stakes coding pipelines: the evaluation strategy, the operations that deliver it, and the quality, throughput, and margin numbers that come out the other side.",
      "I lead across engineering, operations, and go to market, and partner with product and research to shape the tooling our strategic customers actually need.",
      "I design the frameworks these programs run on: rubrics, golden datasets, and the call on where human expertise beats an automated evaluator. Mine held a 98% review bar across code review, PR diff analysis, and multi step agent evaluation.",
      "I turn ambiguous evaluation needs into a plan someone can execute, covering scoping, staffing, and contributor capacity. One program was failing on quality when I picked it up: I rebuilt the workflow, recalibrated the contributors, dropped defect rate to 3.3%, and lifted throughput 150% at the same time.",
      "I build the infrastructure that keeps it scalable instead of manual: LLM based evaluators, custom linters, and in task verification scripts I wrote myself.",
      "I run open source LLM benchmarks and take model performance findings straight to engineering, with a data backed call on whether something is ready for production.",
      "I grew a coding agent evaluation queue from one of five into the fastest growing, highest revenue program in the portfolio, then turned what worked into repeatable SOPs other teams now run on.",
    ],
    stack: ["Coding Agents", "SFT", "RLHF / RLVR", "SWE-bench", "MCP", "Rubric Design", "SQL"],
  },
  {
    company: "Knorket AI",
    role: "Data Scientist",
    period: "Jan 2023 to Dec 2023",
    location: "Toronto, Canada",
    points: [
      "I built real time fraud and anomaly detection on financial transactions using XGBoost, Isolation Forests, Autoencoders, and graph models, then served them as production APIs.",
      "I worked close to the data: transaction embeddings, graph based fraud clustering in Neo4j, and credit risk models that lenders could actually act on.",
      "I shipped the streaming side on Kafka and Spark so suspicious activity got flagged the moment it happened, not hours later.",
    ],
    stack: ["XGBoost", "GNN", "Kafka", "Spark", "Neo4j", "PyTorch"],
  },
  {
    company: "Voiceflip Technology",
    role: "Data Scientist",
    period: "Feb 2022 to Dec 2022",
    location: "Toronto, Canada",
    points: [
      "I built and tuned the data pipelines, cut query times by 40%, and kept things honest with data masking and encryption on sensitive fields.",
      "I stood up cloud data lakes on AWS and GCP with proper monitoring, which took downtime down by 30%.",
      "I turned raw data into dashboards people actually opened and used to make decisions.",
    ],
    stack: ["Python", "SQL", "AWS", "Tableau", "Power BI"],
  },
];

export type Metric = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
};

export const metrics: Metric[] = [
  { value: 98, suffix: "%", label: "Review quality on the rubric frameworks I built" },
  { value: 3.3, suffix: "%", decimals: 1, label: "Defect rate on a program I turned around from failing" },
  { value: 150, suffix: "%", label: "Throughput lift after I redesigned the workflow" },
  { value: 45, suffix: "%", label: "Extra production throughput across programs" },
  { value: 30, suffix: "%", label: "Average handling time I cut out" },
  { value: 0, suffix: "%", label: "Defect rate on an urgent delivery I ran end to end" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Generative AI & LLM",
    items: [
      "LLM Evaluation",
      "SFT",
      "RLHF",
      "RLVR",
      "Benchmarking",
      "Rubric Design",
      "MCP Workflows",
      "Coding Agent Eval",
      "Tool Use Assessment",
      "SWE-bench",
    ],
  },
  {
    group: "Program Delivery",
    items: [
      "End to End Program Management",
      "Multi Workstream Delivery",
      "Delivery Governance",
      "Risk Management",
      "Stakeholder Reporting",
      "OKRs / KPIs",
    ],
  },
  {
    group: "Quality & Operations",
    items: [
      "PDR / AHT Optimization",
      "Quality Framework Design",
      "Contributor Calibration",
      "Workflow Automation",
      "Operational Forecasting",
    ],
  },
  {
    group: "ML / AI Engineering",
    items: ["XGBoost", "GNN", "Autoencoders", "NLP", "TensorFlow", "PyTorch", "scikit-learn"],
  },
  {
    group: "Data & Analytics",
    items: ["SQL", "Python", "PySpark", "Pandas", "Tableau", "Power BI", "Grafana"],
  },
  {
    group: "Cloud & Infra",
    items: ["AWS", "Google Cloud", "Terraform", "CloudFormation", "Docker", "LocalStack"],
  },
];

export type Project = {
  title: string;
  category: string;
  summary: string;
  result: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Real Time Fraud Detection & Anomaly Monitoring",
    category: "ML · Streaming",
    summary:
      "Catches suspicious financial transactions as they happen, blending supervised and unsupervised models with live alerting on a streaming pipeline.",
    result: "Real time alerts on Kafka and Spark streams",
    stack: ["XGBoost", "Isolation Forest", "Autoencoders", "Kafka", "Spark", "FastAPI"],
  },
  {
    title: "Credit Risk Scoring Model",
    category: "Financial ML",
    summary:
      "Predicts loan default risk and produces credit scores a lender can explain and stand behind, measured on ROC-AUC and precision/recall.",
    result: "Explainable scores, fairness kept in view",
    stack: ["scikit-learn", "XGBoost", "Logistic Regression", "SHAP", "SQL"],
  },
  {
    title: "Customer Churn Prediction & CLV Analytics",
    category: "Business Analytics",
    summary:
      "Spots who's about to churn and what a customer is worth over time, so retention spend lands where it actually moves the needle.",
    result: "Churn segments and retention plays",
    stack: ["Python", "Random Forest", "SQL", "Power BI", "Pandas"],
  },
  {
    title: "NLP Feedback Intelligence Platform",
    category: "NLP · Analytics",
    summary:
      "Reads customer feedback at scale with sentiment and topic modeling to surface the product issues and pain points before they snowball.",
    result: "Topic clusters and sentiment trends",
    stack: ["NLP", "Sentiment Models", "Topic Modeling", "Tableau", "FastAPI"],
  },
  {
    title: "Scalable Multi Source ETL Pipeline",
    category: "Data Engineering",
    summary:
      "Pulls messy data from everywhere, cleans and validates it, and lands analytics ready tables with data quality checks wired in.",
    result: "40% faster queries, validation built in",
    stack: ["PySpark", "SQL", "Airflow", "AWS S3", "GCS"],
  },
  {
    title: "AI Model Evaluation & RLHF Analytics Dashboard",
    category: "Generative AI",
    summary:
      "Tracks model performance, prompt evaluation outcomes, contributor quality, and feedback loops against rubric based KPIs in real time.",
    result: "Live quality KPIs and model behavior",
    stack: ["SQL", "Python", "LLM Eval Rubrics", "RLHF", "Dashboards"],
  },
];

export type Education = {
  school: string;
  credential: string;
  period: string;
  location: string;
  logo: string;
};

export const education: Education[] = [
  {
    school: "York University",
    credential: "B.Sc. in Computer Science and Applied Mathematics (Double Major)",
    period: "2020 to 2024",
    location: "Toronto, Canada",
    logo: "/logos/york.png",
  },
  {
    school: "Centennial College",
    credential: "Diploma in Automation and Robotics",
    period: "2016 to 2017",
    location: "Toronto, Canada",
    logo: "/logos/centennial.png",
  },
];
