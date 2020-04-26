import { ExampleComponent, MarkdownComponent, Node, TitleComponent } from "@jabal/docs-generator";

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

export const nodeConfig: Node[] = [
  {
    id: 'navbar',
    nodes: [
      new TitleComponent({ title: 'Navbar', titleClass: 'display-4', skipNavbar: true }),
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
              new BasicNavbarComponent(),
              new ExampleComponent( { html: exampleBasicHtml, ts: exampleBasicTs })
            ]
          },
          {
            id: 'slotted',
            nodes: [
              new TitleComponent({ title: 'Slotted' }),
              new MarkdownComponent({ text: exampleSlotted }),
              new SlottedNavbarComponent(),
              new ExampleComponent({ html: exampleSlottedHtml, ts: exampleSlottedTs })
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
