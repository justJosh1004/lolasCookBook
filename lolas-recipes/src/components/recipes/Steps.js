import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

class Steps extends Component {
  showSteps = steps =>
    steps.map(step => {
      return (
        <Grid key={step.step} columns="equal" verticalAlign="middle">
          <Grid.Column>
            <div style={{ fontFamily: 'Pompiere', fontSize: '30px' }}>
              {step.step}
            </div>
          </Grid.Column>
          <Grid.Column width={15}>
            <div style={{ fontSize: '25px', lineHeight: '2rem' }}>
              {step.text}
            </div>
          </Grid.Column>
        </Grid>
      );
    });

  render() {
    const { steps } = this.props;
    return (
      <Container style={{ cursor: 'default' }}>
        <div style={{ fontSize: '30px', marginBottom: '1em' }}>Steps:</div>
        <Container style={{ textAlign: 'left' }}>
          {this.showSteps(steps)}
        </Container>
      </Container>
    );
  }
}

export default Steps;
