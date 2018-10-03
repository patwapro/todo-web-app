import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 1px 1px 0 rgba(116, 129, 141, 0.1)',
  },
});

class Task extends React.Component {

  render() {
    const { classes, task } = this.props;
    if(task.length > 0){
        return (
            <div className={classes.root}>
              <List>
                {task.map((value, index) => (
                  <ListItem
                    key={index}
                    style={{textDecoration: value.completed ? 'line-through' : 'none'}}
                  >
                    <Checkbox                              
                      disableRipple
                      // call home component onCompleted function for completed todo task action
                      onClick={() => this.props.handleCompleted(index)}
                      checked={value.completed}
                    />
                    <ListItemText>
                      <Typography variant="subheading" style={{color: value.completed ? '#bbb' : '#000'}}>
                         {value.todo}
                      </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                    {/* call home component onDelete function for delete todo task action */}
                      <IconButton aria-label="Comments" onClick={() => this.props.deleteTask(index)}>
                        <DeleteIcon style={{color:'#F44336'}} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </div>
          );
    }else{
        return (
            <div className={classes.root} style={{padding:20,textAlign:'center'}}>
              <Typography variant="headline">
                  Create Your First Todo List
              </Typography>
            </div>
        )
    }   
  }
}

Task.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Task);