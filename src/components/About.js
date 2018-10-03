import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign:'center',
    color:'#000'
  },
  titleSub: {
    textAlign:'center',
    color:'#9c27b0',
  }
};

class About extends Component{

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="display3" gutterBottom className={classes.title}>
          Hi, I'm Amar Patwa
        </Typography>
        <Typography variant="headline" gutterBottom className={classes.titleSub}>
          Frontend Developer
        </Typography>
        <Typography variant="subheading" gutterBottom className={classes.title}>
          I am versatile Frontend developer with 2+ year<br>
          </br> of experience in designing, developing and managing the complex site.
        </Typography>
      </div>
    )
  };
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
