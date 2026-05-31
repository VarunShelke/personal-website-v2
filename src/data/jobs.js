export const jobs = [
    {
        title: 'AI Solutions Architect',
        company: 'Pitt Digital',
        companyLongText: 'Pitt Digital - University of Pittsburgh',
        location: 'Pittsburgh, PA',
        range: 'May 2026 - Present',
        url: 'https://digital.pitt.edu/',
        html: [
            'Transforming how the University of Pittsburgh leverages AI by architecting and deploying scalable, secure, and cost-effective GenAI solutions across campus, driving innovation in research, education, and administration.',
        ]
    },
    {
        title: 'Backend Developer Intern',
        company: 'AWS CIC',
        companyLongText: 'Pitt AWS Cloud Innovation Center',
        location: 'Pittsburgh, PA',
        range: 'May 2025 - May 2026',
        url: 'https://digital.pitt.edu/cic',
        html: [
            'Built a **production GenAI pipeline** on Amazon Bedrock with OCR and human-in-the-loop validation, eliminating **10+ hrs/week** of manual entry across 20+ daily image inputs.',
            'Deployed an **enterprise AI analytics** system using **Python, Pydantic-based** tool-use, and vector embeddings, enabling semantic search across **1M+ unstructured records** for real-time client insights.',
            'Built an **event-driven** GenAI solution on **AWS Lambda, SNS, and SQS** (TypeScript/Node.js), using **LLM intent classification** to automate 67% of 100K+ customer interactions with human-in-the-loop routing.',
            'Built reusable **infrastructure-as-code** assets via AWS CDK for 3 production GenAI apps, with **CI/CD pipelines** integrating security scanning, linting, and GitOps workflows'
        ]
    },
    {
        title: 'Software Engineer',
        company: 'VML',
        companyLongText: 'Vibrant Media Lab',
        location: 'Pittsburgh, PA',
        range: 'September 2024 - April 2025',
        url: 'https://vml.pitt.edu/',
        html: [
            '**Architected and deployed** end-to-end software solutions, including a Django web application on a **self-hosted Nginx server** and a **Raspberry Pi–driven e-ink display system**, optimizing infrastructure costs and **automating schedule management**.',
            'Implemented **high-performance automation pipelines** leveraging ImageMagick for bulk photo segmentation and BeautifulSoup for dynamic web scraping, enabling real-time data processing and integration.',
            '**Optimized** operational workflows, reducing **image preparation time by 70%** and **decreasing schedule-related inquiries by 80%**, resulting in measurable productivity **gains for academic research and administration**.'
        ]
    },
    {
        title: 'Engineer',
        company: 'Nagarro',
        companyLongText: 'Nagarro',
        location: 'Pune, India',
        range: 'May 2022 - August 2024',
        url: 'https://www.nagarro.com/en/',
        html: [
            '**Led** a 3-engineer pod building a **high-throughput** Order Management System in **Java/Spring Boot** with SAP Commerce via APIs, **reducing cancellations by 85%** and scaling inventory to 10x across 62 centers.',
            '**Architected a fulfillment routing engine** in Java, algorithmically balancing inventory, lead times, and cost across 62 centers to **eliminate overselling** at 2K-5K daily order peaks.',
            'Built **reliable**, well-documented order infrastructure with CronJobs and retry mechanisms, improving fault tolerance and reducing manual intervention across distributed operations.'
        ]
    },
    {
        title: 'Programmer Analyst',
        company: 'Cognizant',
        companyLongText: 'Cognizant Consulting',
        location: 'Pune, India',
        range: 'November 2020 - May 2022',
        url: 'https://www.cognizant.com/us/en',
        html: [
            'Delivered 20+ production features for Fortune 500 clients in **Java/Spring Boot** and SAP Commerce Cloud, including real-time inventory API integrations with SAP ECC.',
            'Increased unit test coverage from 72% to 89% by implementing comprehensive **JUnit/Mockito** test suites and resolving SonarQube code quality issues, improving codebase maintainability for 15-engineer team.',
            'Engineered **bi-directional** integration between e-commerce systems and **Salesforce CRM** ensuring accurate order and customer data synchronization across enterprise platforms.'
        ]
    }
];

export default jobs;
