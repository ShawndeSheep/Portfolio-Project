import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'mywork', component: MyworkComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
];
