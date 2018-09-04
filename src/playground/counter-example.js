class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    //fetch
    try {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount,10);

      if (!isNaN(count)) {
        this.setState(() => ({count}));
      }
    } catch (e) {
      // do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    //save
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  handleAddOne(){
    // this doesnt update UI
    // this.state.count++;

    //instead you have to do this
    this.setState((preState) => {
      return {
        count: preState.count + 1 // only provide the ones you want to change
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}
// Counter.defaultProps = {
//   count: 0
// };

ReactDOM.render(<Counter />, document.getElementById("app"));