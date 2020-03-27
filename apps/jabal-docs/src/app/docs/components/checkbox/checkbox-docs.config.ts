import { DocConfig } from "../../../core/doc-generator/doc-generator.module";
import { BasicCheckboxComponent } from "./examples";

export const docConfig: DocConfig[] = [
  {
    title: 'Checkbox',
    titleClass: 'display-4',
    text: require('!!raw-loader!./content/desc-checkbox.md').default,
    subDocs: [
      {
        title: 'Installation',
        text: require('!!raw-loader!./content/usage-checkbox.md').default
      },
      {
        title: 'Features',
        subDocs: [
          {
            title: 'Basic',
            text: require('!!raw-loader!./examples/basic/basic-checkbox.md').default,
            example: BasicCheckboxComponent,
            code: {
              html: require('!!raw-loader!./examples/basic/basic-checkbox.component.html').default,
              ts: require('!!raw-loader!./examples/basic/basic-checkbox.component.ts').default
            }
          }
        ]
      },
      {
        title: 'Troubleshooting',
        text: require('!!raw-loader!./content/troubleshooting-checkbox.md').default
      }
    ]
  }
];
