import { Component, type ReactNode } from "react"

interface Props { children: ReactNode }
interface State { hasError: boolean; error?: Error }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }
  static getDerivedStateFromError(error: Error) { return { hasError: true, error } }
  render() {
    if (this.state.hasError) {
      return <div style={{padding:"2rem",color:"red"}}>
        <h2>Something went wrong</h2>
        <pre>{this.state.error?.message}</pre>
      </div>
    }
    return this.props.children
  }
}
