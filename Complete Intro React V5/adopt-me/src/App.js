const Pet = ({ name, animal, breed }) => {
  // Can use destructuring in the props
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ]);
}
const App = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Chica', animal: 'Dog', breed: 'Dachshund' }),
    React.createElement(Pet, { name: 'Chloe', animal: 'Cat', breed: 'Mix' }),
    React.createElement(Pet, { name: 'Cedar', animal: 'Cat', breed: 'Mix' })
  )
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);