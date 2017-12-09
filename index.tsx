import { Location } from 'history'
import * as React from 'react'

export interface ReloadComponentProps {
  location: Location & { hash: string }
  /**
   * optional method when you want display something before reload
   */
  onReload?: () => void
  /**
   * when reload is true defaults return null
   */
  placeholder?: React.ReactElement<any>
  /**
   * Your components
   */
  children?: React.ReactNode
}
export interface ReloadComponentState {
  reload: boolean
}
export class ReloadComponent extends React.PureComponent<
  ReloadComponentProps,
  ReloadComponentState
> {
  state: ReloadComponentState = {
    reload: false,
  }
  componentWillReceiveProps(nextProps: ReloadComponentProps) {
    const { onReload } = this.props
    if (this.isSameRoute(nextProps)) {
      /**
       * force children rerender
       */
      this.setState({ reload: true }, () => this.setState({ reload: false }))
      if (onReload) {
        onReload()
      }
    }
  }
  /**
   * simply check is same route
   */
  isSameRoute = (nextProps: ReloadComponentProps) => {
    const { location } = this.props
    const { location: nextLocation } = nextProps
    return (
      nextLocation.pathname === location.pathname &&
      nextLocation.search === location.search &&
      nextLocation.hash === location.hash &&
      nextLocation.key !== location.key
    )
  }
  render() {
    const { placeholder = null } = this.props
    const { reload } = this.state
    if (reload) {
      return placeholder
    }
    return this.props.children
  }
}
