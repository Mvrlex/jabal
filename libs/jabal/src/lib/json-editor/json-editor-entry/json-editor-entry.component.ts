import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, } from '@angular/core';

interface ObjectProperty {
  key: string,
  value: any
}

@Component({
  selector: 'jbl-json-editor-entry',
  templateUrl: './json-editor-entry.component.html',
  styleUrls: ['./json-editor-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonEditorEntryComponent implements OnInit {

  _isVisible = true;
  _propertyType: string;

  @Input()
  propertyKey: string;

  _propertyData: any;
  @Input()
  set propertyData(data: any) {
    this._propertyData = data;
    this._propertyType = this.getPropertyType(data);
    this._change.detectChanges();
  }
  get propertyData() {
    return this._propertyData;
  }

  constructor(
    private _change: ChangeDetectorRef
  ) { }

  // Disable default change detection, because it bubbles up the whole tree and refreshes it completely on every change
  ngOnInit(): void {
    this._change.detach();
  }

  // Toggle visibility of an object
  toggleVisibility() {
    this._isVisible = !this._isVisible;
    this._change.detectChanges();
  }

  getSubObjectProperties(): ObjectProperty[] {
    return Object.entries(this.propertyData)
      .map(property => {
        return {key: property[0], value: property[1]}
      });
  }

  getPropertyType(value: any) {
    switch (true) {
      case typeof value === 'string':
        return 'string';
      case typeof value === 'number':
        return 'number';
      case typeof value === 'boolean':
        return 'boolean';
      case value instanceof Array:
        return 'array';
      case value instanceof Object:
        return 'object';
      default:
        return ''
    }
  }

  isObject() {
    return this._propertyType === 'object';
  }

  isArray() {
    return this._propertyType === 'array';
  }

  /**
   * STYLE
   */

  // Get class for wrapping an element in quotes or brackets
  getWrapperCharClass() {
    switch (this._propertyType) {
      case 'string':
        return 'json-prop-quotes';
      case 'array':
        return 'json-prop-brackets-square';
      case 'object':
        return 'json-prop-brackets-curly';
      default:
        return '';
    }
  }

  // TODO Remove these from template, they are probably unnecessarily updated

  getToggleIcon() {
    return this._isVisible ? 'angle-down' : 'angle-right';
  }

  getVisibilityClass() {
    return this._isVisible ? '' : 'json-prop-hidden';
  }

  getValueLength() {
    return this.propertyData.toString().length;
  }

  getValueClass() {
    // TODO
  }

}
