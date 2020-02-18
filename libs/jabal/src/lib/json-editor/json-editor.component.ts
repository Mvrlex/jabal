import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'jbl-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonEditorComponent implements OnInit {

  rootForm = new FormGroup({});

  @Input()
  data: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rootForm = this.fb.group(this.data);
  }

}
