# Jabal

Jabal is a collection of components that will aid you with developing your
app using Bootstrap.
Libraries like ngx-bootstrap have a lot of components, but how you include them
inside your app is something you have to think about. Jabal is a opinionated
library that gives you an idea on how to build your app and simultaneously
implements missing components from the Bootstrap ecosystem.

Whilst we are providing you with components which have a way of doing things,
they are built in a way, that gives you the possibility of writing your own
component based on ours. We want you to not have to restart from scratch
every time a component isn't the way it should be for you.

# Getting started

Install Jabal:
```
npm i ngx-jabal
```

Import some Module:
```
import { BreadcrumbModule } from 'ngx-jabal/breadcrumb';

@NgModule({
  ...
  imports: [BreadcrumbModule,...]
  ...
})
```

If you do not have it included already, you will also need to get bootstrap.
We recommend using following method:
```
npm i bootstrap
```

Add it to your angular.json:
```
...
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.scss"
]
...
```

# [Documentation](https://jabal.dev/)

Documentation is under construction...
