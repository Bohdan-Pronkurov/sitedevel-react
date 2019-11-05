import React from 'react'

export default class ErrorBoundary extends React.Component{

    state = {
        hasErrors: false
    };

    componentDidCatch(error, info) {
        this.setState({hasErrors: true})
    }



    render() {
        if (this.state.hasErrors) {
            return <h1>Something went wrong</h1>
        }

        return this.props.children
    }


}