import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.error = null;
  
  }

  static getDerivedStateFromError(error) {

    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    
    
  }


  render() {
    if (this.state.hasError) {
      return (
        <p id="error">
        Something went wrong
        </p>
      );
    }
    return <>{this.props.children}</>;
  }
}
export default ErrorBoundary;
