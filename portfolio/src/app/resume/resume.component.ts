import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ResumeService } from './service/resume.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  constructor(private service: ResumeService) {}
  ngOnInit(): void {}
  resumeState: number = 0;
  experience() {
    this.resumeState = 0;
  }
  education() {
    this.resumeState = 1;
  }
  specializations() {
    this.resumeState = 2;
  }
}
