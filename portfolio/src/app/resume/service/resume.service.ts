import { Injectable } from '@angular/core';
import { resumeClass } from '../model/resumeModel';
import { title } from 'process';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor() {}
  getExperience(): resumeClass[] {
    const exp: resumeClass[] = [
      {
        title: 'Full Stack Developer',
        description:
          'Full stack developer at Pt. Cahaya Medika Healthcare, utilizing CodeIgniter framework as the front-end framework, Node Js Express as the backend architecture, as well as MySQL Database',
        type: 'Internship',
        location: 'Pt Cahaya Medika Healthcare',
        duration: '2023',
      },
      {
        title: 'IT Dev Team',
        description:
          'IT Developer team at Pt Wings Surya. utilizing Angular v18 framework as the base framework architecture',
        type: 'Internship',
        location: 'Pt Wings Surya',
        duration: '2024',
      },
      {
        title: 'Machine Learning Cohort',
        description: 'Google Bangkit 2024 batch 2 machine learning cohort',
        type: 'Certification',
        location: 'Google Bangkit',
        duration: '2024',
      },
      {
        title: 'Cloud Foundation',
        description: 'Certified for AWS Cloud foundational architecture exam',
        type: 'Certification',
        location: 'AWS Academy',
        duration: '2024',
      },
      {
        title: 'GDG Facilitator',
        description:
          'Google Developer Group Event Facilitator: Build with AI - May 2024 @Yarra Ballroom',
        type: 'Personal Development',
        location: 'GDG Event',
        duration: '2024',
      },
      {
        title: 'Associate Professor Assistant',
        description:
          'Associate Professor Assistant for Ms Esther Setiawan https://www.linkedin.com/in/esthersetiawan/',
        type: 'Personal Development',
        location: 'ISTTS',
        duration: '2024-2025',
      },
    ];
    return exp;
  }
  getEducation(): resumeClass[] {
    const edu: resumeClass[] = [
      {
        title: 'Senior High School',
        description: 'High School at Masa Depan Cerah Christian School',
        type: 'Academics',
        location: 'Masa Depan Cerah, Surabaya',
        duration: '2019-2021',
      },
      {
        title: 'Undergraduate: Computer Science',
        description:
          'Went undergraduate (S1) at Institut Sains dan Teknologi Terpadu Surabaya',
        type: 'Academics',
        location: 'ISTTS',
        duration: '2021-2025',
      },
      {
        title: 'Master Degree: Computer Science',
        description:
          'Ongoing master degree at ISTTS through fast-track program',
        type: 'Academics',
        location: 'ISTTS',
        duration: '2025-2026',
      },
    ];
    return edu;
  }
}
