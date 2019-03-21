import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';

class Steps extends Component {
  showSteps = steps =>
    steps.map(step => {
      return (
        <Grid key={step.step} columns="equal" verticalAlign="middle">
          <Grid.Column width={1}>
            <h1>{step.step}</h1>
          </Grid.Column>
          <Grid.Column width={15}>
            <div>{step.text}</div>
          </Grid.Column>
        </Grid>
      );
    });

  render() {
    const { steps } = this.props;
    return (
      <div>
        <h4>Steps:</h4>
        <Card.Description content={this.showSteps(steps)} />
      </div>
    );
  }
}

export default Steps;
