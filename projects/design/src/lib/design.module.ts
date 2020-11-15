import { NgModule } from '@angular/core';
import { DesignComponent } from './design.component';

import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [DesignComponent, ToolbarComponent],
  imports: [
    MatToolbarModule,
  ],
  exports: [DesignComponent, ToolbarComponent]
})
export class DesignModule { }
