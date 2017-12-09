# react-reload-component [![Build Status](https://travis-ci.org/bang88/react-reload-component.svg?branch=master)](https://travis-ci.org/bang88/react-reload-component)

> Update component when location is same

## Install

```
$ npm install --save react-reload-component

# or

$ yarn add react-reload-component
```

## Usage

```jsx
import { ReloadComponent } from 'react-reload-component'

<ReloadComponent
      location={this.props.location}
      onReload={() => {
        // tslint:disable-next-line:no-console
        console.log('reloaded')
      }}
    >
      <div className='Foo' />
</ReloadComponent>,
```

## License

MIT © [bang](https://github.com/bang88)
