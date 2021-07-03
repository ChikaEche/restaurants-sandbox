import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const declarations = [];

const imports = [
  CommonModule,
  MatButtonModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatExpansionModule,
  MatGridListModule,
  MatCardModule,
  MatTooltipModule,
  MatSelectModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...declarations, ...imports]
})
export class SharedModule { }
