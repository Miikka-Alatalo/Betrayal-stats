import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 0,
    padding: 24,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class FullWidthGrid extends React.Component {

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.props.characters.map(c=>{
            return(
              <Grid item xs={12} sm={6} lg={4}>
                <Paper className={classes.paper}>
                  {c.name}
                </Paper>
              </Grid>
            )
          })}


        </Grid>
      </div>
    );
  }
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
