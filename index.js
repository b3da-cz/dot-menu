// module.exports = require('./src/menu.js');

// testing; todo: remove
const Menu = require('./src/menu.js');

const mStruct = {
  foo: {
    label: 'item foo',
    action: 'foo',
  },
  bar: {
    label: 'item bar',
    action: 'bar',
  },
  baz: {
    label: 'submenu baz',
    menu: {
      subbar: {
        label: 'item baz->bar',
        action: 'subbar',
      },
    },
  },
};
const menu = new Menu(mStruct);

process.on('uncaughtException', (err) => {
  console.warn('app::uncaughtException ', err);
});
