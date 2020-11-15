import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// May not need...
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [ToolbarComponent, CardComponent, ButtonComponent],
  imports: [
    MatToolbarModule, MatCardModule, MatButtonModule,
  ],
  exports: [ToolbarComponent, CardComponent, ButtonComponent]
})
export class DesignModule { }
