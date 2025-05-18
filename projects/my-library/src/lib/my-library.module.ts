import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for basic directives
import { MyLibraryComponent } from './my-library.component';

@NgModule({
  declarations: [
    MyLibraryComponent
  ],
  imports: [
    CommonModule // Include CommonModule if your component uses common directives like *ngIf or *ngFor
  ],
  exports: [
    MyLibraryComponent // This is crucial - it makes your component usable in other modules
  ]
})
export class MyLibraryModule { }