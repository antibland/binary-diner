# Mel‘s Binary Diner

This project is a learning tool delivered through the metaphor of a greasy spoon diner. It focuses on pain points and use-cases I've noticed while working in the enterprise, e-commerce world. Did I kill the mystique for you yet? In the nearly twenty years I‘ve spent building things for the web, I‘ve encountered the same issues, misconceptions and mistakes over and over…and over again (I‘ve made my fair share). For personal projects, these mistakes often have minimal impact; the enterprise world is a less forgiving place. Wrong turns break budgets.

Despite the fact that great documentation exists for the technologies we use, it‘s often not enough to spread education. In fact, if documentation was all we ever needed, Stack Overflow would not be a thing. Many of us learn better by example. One size of learning does not fit all.

## Running it locally

```
$ git clone https://github.com/antibland/binary-diner.git
$ cd binary-diner
$ yarn install
$ yarn start
```

You should now be running on `localhost:3000`.

## Contributing?

Our menu needs new dishes which have been done wrong for many years, but which can be solved using a straightforward, modern approach. Think of practical examples which can help a lot of people when cooked right. Show before and after examples via [CodePen](https://codepen.io/).

### Coding style

I use ESLint with Prettier extensions. If your environment is working properly, your code should be formatted each time you initiate a save. Have a look at my [.eslintrc](https://github.com/antibland/binary-diner/blob/master/.eslintrc) for more details.

### Regarding CSS

For the CodePen examples, please use plain `CSS`. Within the React component, you shouldn't need to add new styles. Copy one of the other views as a starting point. If you feel you must add new CSS to the component, please do so using styled components.

### Highlighting code

When highlighting code within your new view component, I use a [react-highlight](https://github.com/akiran/react-highlight). Usage is pretty straightforward:

```
<Highlight className="html">{`<button>
  Click here
</button>`}</Highlight>
```

The formatting can be a little awkward between the backticks, but that‘s how template strings work in ES6.


### How do I add a dish to the menu?

1. There is an array of objects in `src/menuData.js`. Add an item to the breakfast or lunch object. For instance:

```
{
  name: 'New Thing',
  componentName: 'NewThing',
  imgName: '/optionalMenuImage.png',
  description:
    'We fly in the finest third-party image zoom plugins and prepare them to order. We are not responsible for customers experiencing heartburn or indigestion.',
  price: '$5.50',
},
```

2. Add your view to `views`. The name of the file should match the beginning of `componentName`.

3. Update `views/index.js` with the new lazy-loaded view reference and export it:

```
const NewThingView = lazy(() => import('./NewThingView'));
export { ButtonView, AccordionView, BurgerView, NewThingView };
```

## Built With

- [Create React App](https://github.com/facebook/create-react-app)

## License

MIT

## A message from Mel

Thanks for coming to Mel‘s, kid. We ain‘t perfect, but do try our hardest to please you. Please tip your waiter and star us on GitHub.