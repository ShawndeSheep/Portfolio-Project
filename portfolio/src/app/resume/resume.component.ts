import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ResumeService } from './service/resume.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  constructor(private service: ResumeService) {}
  templist: any[] = [];
  ngOnInit(): void {
    this.templist = this.service.getExperience();
  }
  resumeState: number = 0;
  experience() {
    this.resumeState = 0;
    this.templist = this.service.getExperience();
  }
  education() {
    this.resumeState = 1;
    this.templist = this.service.getEducation();
  }
  specializations() {
    this.resumeState = 2;
  }
}
