import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    MatToolbarModule,
  ],
  exports: [ToolbarComponent]
})
export class DesignModule { }
