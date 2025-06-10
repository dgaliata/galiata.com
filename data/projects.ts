import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'Cloud & Infrastructure',
    description: `Designing, implementing, and managing secure cloud solutions and infrastructure.`,
    imgSrc: '/static/images/icloud.png',
    builtWith: [
      'AWS',
      'Microsoft Azure',
      'Cloud Architecture',
      'Cloud Security',
      'Cloud Migration',
      'Virtualization',
      'DevOps',
      'DevSecOps',
      'Containers'
    ],
  },
  {
    type: 'work',
    title: 'Cybersecurity & Risk Management',
    description: `Implementing security practices and risk management frameworks to protect digital assets and information.`,
    imgSrc: '/static/images/shield.png',
    builtWith: [
      'Network Security',
      'Application Security',
      'Data Security',
      'Risk Assessment',
      'Incident Response',
      'Zero Trust Architecture',
      'Governance, Risk, and Compliance',
      'Cloud Security Posture Management',
      'Disaster Recovery',
      'Firewalls'
    ],
  },
  {
    type: 'work',
    title: 'Networking & System Administration',
    description: `Designing, implementing, and troubleshooting network infrastructure and managing system operations.`,
    imgSrc: '/static/images/linux.png',
    builtWith: [
      'Network Design',
      'Network Troubleshooting',
      'Routing Protocols',
      'SDN',
      'Linux',
      'Windows',
      'DNS',
      'DHCP',
      'System Monitoring'
    ],
  },
  {
    type: 'work',
    title: 'DevOps',
    description: `Implementing CI/CD pipelines and managing cloud infrastructure.`,
    imgSrc: '/static/images/devbox.png',
    builtWith: [
      'Git',
      'GitHub Actions',
      'Docker',
      'GitLab CI',
      'Jenkins',
      'Ansible',
      'Terraform',
      'Vercel',
      'Netlify'
    ],
  },
  {
    type: 'work',
    title: 'Project & Service Management',
    description: `Leading and managing technical projects with established methodologies and stakeholder engagement.`,
    imgSrc: '/static/images/jira.png',
    builtWith: [
      'Project Planning',
      'Project Implementation',
      'Stakeholder Management',
      'Change Management',
      'Agile',
      'Scrum',
      'Kanban',
      'Jira',
      'Confluence',
      'Project Management'
    ],
  },
  {
    type: 'work',
    title: 'Professional Certifications',
    description: `Certifications in various domains, including cloud computing and cybersecurity.`,
    url: 'https://www.credly.com/users/david-galiata',
    imgSrc: '/static/images/cert.png',
    builtWith: [
      'ISACA CISM',
      '(ISC)² CCSP',
      '(ISC)²	Certified in Cybersecurity (CC)',
      'Cloud Security Alliance & ISACA CCAK',
      'Cloud Security Alliance CCZT',
      'Amazon (AWS) Certified SysOps Administrator Associate',
      'Amazon (AWS)Certified Cloud Practitioner',
      'GitHub	GitHub Foundations',
      'Gitlab	GitLab Certified Associate CI/CD',
      'Gitlab Certified Security Specialist',
      'Microsoft Azure Fundamentals (AZ-900)',
      'CompTIA A+, Network +, and Project+'
    ],
  },
  {
    type: 'self',
    title: 'Magnolia Project',
    description: `The Magnolia Project is designed to showcase my skills in deploying a secure, automated cloud infrastructure using modern DevOps practices.'`,
    url: 'https://magnolia-project.hashnode.space/project-docs/project-overview',
    imgSrc: '/static/images/magnolia.png',
    builtWith: [
      'Infrastructure as Code',
      'FastAPI',
      'DynamoDB',
      'CI/CD Pipelines',
      'Security Integration',
      'Networking & Storage',
      'Prometheus & Grafana',
      'AWS Services',
      'Terraform',
      'GitHub Actions'
    ],
  },
  {
    type: 'self',
    title: 'galiata.com',
    description: `My personal website and portfolio showcasing my work, projects, and blog posts.`,
    imgSrc: '/static/images/3.png',
    builtWith: ['NextJS', 'TailwindCSS', 'Typescript', 'Contentlayer', 'Umami'],
  }
]