class VisibilityToggle extends React.Component{
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    console.log('basdf');
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide content' : 'Show content'}
        </button>
        {this.state.visibility && (<div>there are some details</div>)}
      </div>

    );
  }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById("app"));