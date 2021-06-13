import './App.css';
import './assets/fonts/Roboto-Bold.ttf';
import './assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf';
import './assets/fonts/FontsFree-Net-SFProText-Bold.ttf';
import './assets/fonts/FontsFree-Net-SFProText-Regular.ttf';
import styled from 'styled-components';
import Home from './ui/views/home/Home';
import Detail from './ui/views/detail/Detail';
import Create from './ui/views/create/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Portrait>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Portrait>
    </Router>
  );
}

const Portrait = styled.div`
  width: 375px;
  height: 812px;
  overflow: hidden;
  border-radius: 16px;
  background: rgb(255,255,240);
  background: linear-gradient(180deg, rgba(255,255,240,1) 0%, rgba(255,238,239,1) 51%, rgba(255,216,220,1) 100%);
  border: 2px solid black;
`;