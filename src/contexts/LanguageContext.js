import React from "react";

const Context = React.createContext('nl');

export class LanguageStore extends React.Component {
    state = {
        language: 'en',
        color: 'primary'
    }

    onLanguageChange = (language) => {
        this.setState({language})
        language === 'en' ? this.setState({color: 'primary'}) : this.setState({color: 'red'})
    }

    render() {
        return (
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        );
    }
}


export default Context;


