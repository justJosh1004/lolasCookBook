import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import '../../css/Recipes.css';

class Steps extends Component {
  showSteps = steps =>
    steps.map(step => {
      return (
        <Grid key={step.step} columns="equal" verticalAlign="middle">
          <Grid.Column>
            <div className="step-number">{step.step}</div>
          </Grid.Column>
          <Grid.Column width={15}>
            <div className="step-description">{step.text}</div>
          </Grid.Column>
        </Grid>
      );
    });

  render() {
    const { steps } = this.props;
    return (
      <Container className="recipe-card">
        <div className="card-detail-header">Steps:</div>
        <Container style={{ textAlign: 'left' }}>
          {this.showSteps(steps)}
        </Container>
      </Container>
    );
  }
}

export default Steps;
