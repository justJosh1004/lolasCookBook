import React from 'react';
import { Card, Placeholder, Button } from 'semantic-ui-react';

const RecipeComingSoon = () => {
  return (
    <Card style={{ cursor: 'default' }}>
      <Card.Content>
        <Card.Header>
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      </Card.Content>
      <Button fluid color="orange" attached="bottom">
        <Placeholder.Line />{' '}
      </Button>
    </Card>
  );
};

export default RecipeComingSoon;
