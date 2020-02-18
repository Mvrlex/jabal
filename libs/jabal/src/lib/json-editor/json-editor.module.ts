import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JsonEditorComponent } from "./json-editor.component";
import { JsonEditorEntryComponent } from "./json-editor-entry/json-editor-entry.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [
    JsonEditorComponent,
    JsonEditorEntryComponent
  ],
  exports: [
    JsonEditorComponent,
    JsonEditorEntryComponent
  ]
})
export class JsonEditorModule {
  constructor(icons: FaIconLibrary) {
    icons.addIcons(faAngleDown, faAngleRight);
  }
}
