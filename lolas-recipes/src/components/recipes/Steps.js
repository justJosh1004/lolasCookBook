import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import '../../css/Recipes.css';

class Steps extends Component {
  showSteps = steps =>
    steps.map(step => {
      return (
        <Grid key={step.step} columns="equal" verticalAlign="middle">
          <Grid.Column>
            <p className="step-number">{step.step}</p>
          </Grid.Column>
          <Grid.Column width={15}>
            <p className="step-description">{step.text}</p>
          </Grid.Column>
        </Grid>
      );
    });

  render() {
    const { steps } = this.props;
    return (
      <div className="recipe-card">
        <div className="recipe-card card-detail-header">Steps:</div>
        <div style={{ textAlign: 'left' }}>{this.showSteps(steps)}</div>
      </div>
    );
  }
}

export default Steps;
