import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  state = {
    options: []
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const randIdx = Math.floor(Math.random() * this.state.options.length);
    console.log(randIdx);
    alert(this.state.options[randIdx]);
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'this item exists already';
    }
    this.setState((prevState)=> ( { options: prevState.options.concat(option) } ));
  };
  componentDidMount = () => {
    // put in try/catch because JSON.parse throws an error
    // when we have invalid JSON
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {
      // do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('testing');
    }
  }
  componentWillUnmount() {
    console.log('component will unmount');

  }
  render(){
    const subtitle = 'put your hands in the life of a computer';
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}