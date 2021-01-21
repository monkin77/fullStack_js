import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PageWrapper from './components/PageWrapper';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route
          exact={true}
          path="/"
          component={Home}
        />

        <Route  
          exact={true}
          path="/about"
          component={About}
        />
      </PageWrapper>
    </Router>
  );
}

export default App;
