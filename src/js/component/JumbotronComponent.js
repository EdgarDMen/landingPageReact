import React from 'react';
import {Button, Container} from 'react-bootstrap';

const JumbotronComponent = () => {
  return (
    <container class="text-center bg-secondary">
      <h1>A warm welcome!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </container>
  );
};

export default JumbotronComponent;
