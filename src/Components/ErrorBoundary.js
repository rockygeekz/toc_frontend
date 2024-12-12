import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error details for debugging
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI if an error occurs
      return <p className="text-red-500">Something went wrong with the graph.</p>;
    }

    // Render children if no errors
    return this.props.children;
  }
}

export default ErrorBoundary;
