import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';

class Steps extends Component {
  showSteps = steps =>
    steps.map(step => {
      return (
        <List key={step.step} divided animated>
          <List.Item>
            <List.Icon style={{ fontFamily: 'Pompiere', fontSize: '30px' }}>
              {step.step}
            </List.Icon>
            <List.Content>
              <List.Description style={{ fontSize: '25px' }}>
                {step.text}
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
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
