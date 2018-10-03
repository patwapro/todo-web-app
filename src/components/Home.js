import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Task from './Task';

const styles = theme => ({
    input: {
        padding: '16px 16px 16px 60px',
        backgroundColor: '#fff',
        boxShadow: '0 1px 1px 0 rgba(116, 129, 141, 0.1)',
        fontSize:22
      },
});

class Home extends Component{
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCompleted = this.onCompleted.bind(this);
    this.state = {
      // get data from local storage.
      list:JSON.parse(localStorage.getItem('todoTask'))?JSON.parse(localStorage.getItem('todoTask')):[],
      input:'',
    }
  }


  // for add new todo task
  onSubmit = (event) => {
    event.preventDefault();
    this.state.list.push({
      todo:this.state.input,
      completed:false
    });
    // set local storage to see the task after reload the page.
    localStorage.setItem("todoTask", JSON.stringify(this.state.list));
    this.setState({
      input: '',
      list: this.state.list
    });
  }

  // for todo task complete
  onCompleted = (value) =>  {
    let updatedItems = this.state.list.map((item, index) => {
      if (value === index){
        item.completed = !item.completed;
      }
      return item;
    });
    localStorage.setItem("todoTask", JSON.stringify(updatedItems));
    this.setState({
      list: updatedItems
    });
  }

  // for todo task delete
  onDelete = (value) =>  {
    let filteredItems = this.state.list.filter(function (item,index) {
      return (index !== value);
    });
    //update local storage
    localStorage.setItem("todoTask", JSON.stringify(filteredItems));
    this.setState({
      list: filteredItems
    });
  }


  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
          <div style={{marginBottom:30}}>
            <form onSubmit={this.onSubmit}>
              <Input className={classes.input} value={this.state.input} onChange={(event)=>this.setState({input: event.target.value})} placeholder="Add your task..." disableUnderline fullWidth required/>
            </form>
         </div>
          <div>
              {/* display all todo task  */}
              <Task task={this.state.list} deleteTask={this.onDelete} handleCompleted={this.onCompleted} />
          </div>
      </React.Fragment>
    )
  };
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
