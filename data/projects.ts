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
    description: `Implementing comprehensive security practices and risk management frameworks to protect digital assets and information.`,
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
    description: `Designing, implementing, and troubleshooting network infrastructures and managing system operations.`,
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
    type: 'self',
    title: 'galiata.com',
    imgSrc: '/static/images/writer-96.png',
    builtWith: ['NextJS', 'TailwindCSS', 'Typescript', 'Contentlayer', 'Umami'],
  },
]