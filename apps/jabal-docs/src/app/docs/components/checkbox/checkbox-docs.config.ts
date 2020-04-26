import { ExampleComponent, MarkdownComponent, Node, TitleComponent } from "@jabal/docs-generator";

// Examples
import { BasicCheckboxComponent } from "./examples";

// Markdown
import description from 'raw-loader!./content/desc-checkbox.md';
import usageNavbar from 'raw-loader!./content/usage-checkbox.md';
import troubleshooting from 'raw-loader!./content/troubleshooting-checkbox.md';
// @ts-ignore Basic example
import exampleBasicTs from '!!raw-loader!./examples/basic/basic-checkbox.component.ts';
import exampleBasicHtml from 'raw-loader!./examples/basic/basic-checkbox.component.html';
import exampleBasic from 'raw-loader!./examples/basic/basic-checkbox.md';

export const nodeConfig: Node[] = [
  {
    id: 'checkbox',
    nodes: [
      new TitleComponent({ title: 'Checkbox', titleClass: 'display-4', skipNavbar: true }),
      new MarkdownComponent({ text: description })
    ],
    children: [
      {
        id: 'installation',
        nodes: [
          new TitleComponent({ title: 'Installation' }),
          new MarkdownComponent({ text: usageNavbar })
        ]
      },
      {
        id: 'features',
        children: [
          {
            id: 'basic',
            nodes: [
              new TitleComponent({ title: 'Basic' }),
              new MarkdownComponent({ text: exampleBasic }),
              new BasicCheckboxComponent(),
              new ExampleComponent( { html: exampleBasicHtml, ts: exampleBasicTs })
            ]
          }
        ]
      },
      {
        id: 'troubleshooting',
        nodes: [
          new TitleComponent({ title: 'Troubleshooting' })
        ]
      }
    ]
  }
];
