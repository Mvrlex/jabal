# DocsGenerator

The docs-generator library is a little tool that is supposed to help
in creating documentation websites in Angular. It gives a basic
concept to work around when creating docs.
The docs generated resemble the ones of ngx-bootstrap by default.
Though this can be changed to any structure one likes. This library
empowers the creator to use his own idea of a good documentation and
dynamically generate it.

### Basic concept

__Container__
- Establishes the structure of the documentation
- Sets up slots into which _Nodes_ will be generated
- Uses the configuration to generate the appropriate documentation page

__Group__
- Section of the documentation, most likely indicated by a title
- Uses the configuration of a single component to generate - for example - a scrollspy sidenav
- Multiple can exist per container

__Node__
- Part of the generated documentation
- Multiple can exist per group

#### Configuration Example

- Container
    - Group - id: navbar
        - TextNode - Navbar
        - Group - id: installation
            - TextNode - Installation
        - Group - id: features
            - TextNode - Features
            - Group - id: basic
                - TextNode - Basic
                - ExampleComponent
                - CodeNode
            - Group - id: slotted
                - TextNode - Slotted
                - ExampleComponent
                - CodeNode
        - Group - id: troubleshooting
            - TextNode - Troubleshooting
