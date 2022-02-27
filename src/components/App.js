import React from 'react';
import { Label } from '@fluentui/react/lib/Label';
import { TextField } from '@fluentui/react/lib/TextField';
import { useId } from '@fluentui/react-hooks';
import { Container, Header, Content, Footer, Sidebar, Divider, Button, ButtonToolbar, Modal } from 'rsuite';

import Home from './Home';



function App() {

  return (
    <div >
      {/* <Container>
        <Header>
          <h1>This is a header</h1>
        </Header>
        <Divider />
        <Button>Hello World</Button>
      </Container> */}

      <Home />

      {/* <Container>
        <Header as="h3">
          Files
        </Header> */}


        {/* <FilesList /> */}

        {/* TODO: Integrate with IPFS */}


      {/* </Container> */}
          
    </div>
  );
}

export default App;
