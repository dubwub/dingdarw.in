import * as React from 'react';
import Test from './components/Test';

interface Props {
  width: number;
  height: number;
}

export default class App extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      Test()
    );
  }
}