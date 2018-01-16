import test from 'ava'
import { configure, shallow } from 'enzyme'
// setup file
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import { ReloadComponent, ReloadComponentProps } from './index'

configure({ adapter: new Adapter() })
test('render without crashes', (t) => {
  const wrapper = shallow<ReloadComponentProps>(
    <ReloadComponent
      location={{
        action: 'PUSH',
        hash: '',
        key: 'puqbzx',
        pathname: '/member',
        query: {},
        search: '',
        state: '',
      }}
      onReload={() => {
        // tslint:disable-next-line:no-console
        console.log('reloaded')
      }}
    >
      <div className='Foo' />
    </ReloadComponent>,
  )
  t.true(wrapper.hasClass('Foo'))
  wrapper.setProps({
    location: {
      action: 'REPLACE',
      hash: '',
      key: 'qv67ie',
      pathname: '/member',
      query: {},
      search: '',
      state: '',
    },
  })
  t.true(wrapper.hasClass('Foo'))
})
