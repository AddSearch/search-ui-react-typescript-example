# Using Search UI Library in React TypeScript project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing project's dependencies

In the project directory, you can run:

### `npm install`

Install all the dependencies required for the project to run.

### `npm run start`

Launch the app in development mode.


## Using the Search UI Library

### Loading AddSearch's UI libraries via CDN
See public/index.html
```html
<script src="https://cdn.jsdelivr.net/npm/addsearch-js-client@0.8/dist/addsearch-js-client.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/addsearch-search-ui@0.8/dist/addsearch-search-ui.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/addsearch-search-ui@0.8/dist/addsearch-search-ui.min.css" />
```

### Encapsulate each Search UI component

See src/addsearch-ui-components/SearchField for example.
Then use the encapsulated component in your React TypeScript project.


### Use ecapulated SearchField component in your React TypeScript project
See App.tsx:
```jsx
<SearchField
  uiInstance={addSearchUI}
  button="Search.."
  searchAsYouType={true}
/>
```


### Typing Search UI component's props
Give type definition to the props of the SearchField component. 
Component's setting can be found here: https://www.npmjs.com/package/addsearch-search-ui

```typescript
interface AddSearchSearchFieldProps {
  uiInstance: UIInstanceProps;
  button?: string;
  searchAsYouType?: boolean;
}
