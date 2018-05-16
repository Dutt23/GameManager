import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule,MatInputModule ,MatCardModule,MatChipsModule,MatDialogModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatInputModule,MatCardModule,MatChipsModule,MatDialogModule],
  exports: [MatButtonModule,MatToolbarModule,MatInputModule,MatCardModule,MatChipsModule,MatDialogModule],
})
export class MaterialModule { }