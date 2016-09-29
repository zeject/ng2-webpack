import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommunicationComponent } from './communication.component';
import { communicationRouting } from './communication.routing';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    communicationRouting
  ],
  declarations: [
      CommunicationComponent,
      ChildComponent,
      ParentComponent
  ],
  providers: [
  ]
})
export default class CommunicationModule { }
