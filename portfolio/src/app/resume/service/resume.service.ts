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
    ];
    return exp;
  }
  getEducation(): resumeClass[] {
    const edu: resumeClass[] = [
      {
        title: 'Cloud Foundation',
        description: 'Certified for AWS Cloud foundational architecture exam',
        type: 'Certification',
        location: 'Masa Depan Cerah, Surabaya',
        duration: '2019-2021',
      },
    ];
  }
}
