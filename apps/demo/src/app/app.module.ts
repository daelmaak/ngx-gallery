import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { DemoWholeConfigComponent } from './components/demo-whole-config/demo-whole-config.component';
import { HeaderComponent } from './components/header/header.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { DemoThumbsOrientationComponent } from './components/demo-thumbs-orientation/demo-thumbs-orientation.component';
import { DemoMultipleItemsComponent } from './components/demo-multiple-items/demo-multiple-items.component';
import { DemoCustomTemplatesComponent } from './components/demo-custom-templates/demo-custom-templates.component';
import { GalleryComponent } from '@daelmaak/ngx-gallery';

const materialModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    DemoWholeConfigComponent,
    HeaderComponent,
    ShowcaseComponent,
    DemoThumbsOrientationComponent,
    DemoMultipleItemsComponent,
    DemoCustomTemplatesComponent,
  ],
  imports: [
    ...materialModules,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    GalleryComponent,
  ],
  providers: [
    // TODO: @daelmaak I think this should be defined in the component. Btw, making standalon
    // out of app-component is due.
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    provideClientHydration(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
