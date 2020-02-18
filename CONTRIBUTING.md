# How to contribute

Every Component should have:
- Tests
- TSDoc
- Page with Documentation
- Correct display attribute on the :host
- Add everything that needs to be exported to the index.ts
- Every Component has its own Module
- Add new Components to JabalModule
- Prefix Components with jbl-
- Simple Module Names (no prefix)
- Add as little SCSS as possible, Component HTML should be able to be copied without a problem

Generate a component with:
```
ng g module footer --project="jabal"
```
```
ng g component footer --project="jabal" --changeDetection=OnPush --export="true" --module="footer/footer.module.ts"
```

Commit with:
```
npm run commit
```
This helps you creating a conventional commit.
