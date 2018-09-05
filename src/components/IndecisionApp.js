import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
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
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'this item exists already';
    }
    this.setState((prevState)=> ( { options: prevState.options.concat(option) } ));
  };
  handleClearSelectedOption = (e) => {
    this.setState(() => ({ selectedOption: undefined }));
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
        <div className="container">
          <Action 
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}