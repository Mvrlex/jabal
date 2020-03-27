import { DocConfig } from "../../../core/doc-generator/doc-generator.module";

// Examples
import { BasicNavbarComponent, SlottedNavbarComponent } from "./examples";

// Markdown
import description from 'raw-loader!./content/desc-navbar.md';
import usageNavbar from 'raw-loader!./content/usage-navbar.md';
import troubleshooting from 'raw-loader!./content/troubleshooting-navbar.md';
// @ts-ignore Basic example
import exampleBasicTs from '!!raw-loader!./examples/basic/basic-navbar.component.ts';
import exampleBasicHtml from 'raw-loader!./examples/basic/basic-navbar.component.html';
import exampleBasic from 'raw-loader!./examples/basic/basic-navbar.md';
// @ts-ignore Slotted example
import exampleSlottedTs from '!!raw-loader!./examples/slotted/slotted-navbar.component.ts';
import exampleSlottedHtml from 'raw-loader!./examples/slotted/slotted-navbar.component.html';
import exampleSlotted from 'raw-loader!./examples/slotted/slotted-navbar.md';

export const docConfig: DocConfig[] = [
  {
    title: 'Navbar',
    titleClass: 'display-4',
    text: description,
    subDocs: [
      {
        title: 'Installation',
        text: usageNavbar
      },
      {
        title: 'Features',
        subDocs: [
          {
            title: 'Basic',
            text: exampleBasic,
            example: BasicNavbarComponent,
            code: {
              html: exampleBasicHtml,
              ts: exampleBasicTs
            }
          },
          {
            title: 'Slotted',
            text: exampleSlotted,
            example: SlottedNavbarComponent,
            code: {
              html: exampleSlottedHtml,
              ts: exampleSlottedTs
            }
          }
        ]
      },
      {
        title: 'Troubleshooting',
        text: troubleshooting
      }
    ]
  }
];
