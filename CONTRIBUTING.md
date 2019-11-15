<h3>This file is still in progress!</h3>

This file serves to help you contributing to this project.
If something is unclear, poorly described or simply wrong, please either raise and issue, or create a pull request with your fixes. More on that <a href="#fixing-typo">here</a>.

I want to:

- <a href="#fixing-typo">Fix a typo / grammar / formatting / etc.</a>
- <a href="#add-component">Add a new component</a>

<p id="fixing-typo">
<h2>Fixing a typo / grammar / formatting / etc.</h2>
This kind of work is very important, too! It helps to provide an easily understandable
and clean codebase.

To help us, please:

- fork this repository
- create a new branch in your fork (please give it an explanatory name)
- do your changes in your branch and push them to your branch
- open a pull request

If your changes pass our review (basically just proof-reading, don't worry 😉), we will soon merge your changes!

</p>

<p id="add-component">
<h2>Adding a new component</h2>
Our code is organized in components to avoid cluttered markup and provide better reusability.

To add a knew component, please:

- fork this repository
- create a new branch in your fork (please give it an explanatory name)
- create your component (details below)

There's a folder called `templates`. In this folder, you can find various boiler plates, also one for a new component.

Copy the component boiler plate file to the components folder. Inside the components folder, create a new folder with your components name. Move the boiler plate file into that new directory. Also please rename the boiler plate file to fit the components name.

Now you can adjust the boiler plate file and implement your component.

After you're done with that, don't forget to actually register your component.
To do that, open the file `component-registration.js` inside the `/src/js/` directory.

There, you need to import your component like this:

```js
import AppYourComponent from '../../components/your-component/your-component.js';
```

To the `components` array, add a new helper-object:

```js
const components = [
  {
    componentName: 'app-something-already-existing',
    class: AppSomethingAlreadyExisting
  },
  // Your new component below
  {
    componentName: 'app-your-component',
    class: AppYourComponent
  }
];
```

Mind that `componentName` needs to be a string and start with `'app-'`. Also, `class` is not a string but your previously importet component.

Good job! Now you're ready to use your component everywhere in the project with the tag you specified with `componentName: 'app-your-component'` above:

```html
<app-your-component></app-your-component>
```

Now, just commit and push your changes to your forked repository and create a pull request!

</p>
