import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import PageWrapper from './components/PageWrapper';
import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoginWrapper';

// redux
import { useSelector } from 'react-redux';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Blog from './components/pages/Blog';
import Single from './components/pages/Single';
import SignUp from './components/pages/SignUp';

//Admin pages
import Dashboard from './components/pages/admin/Dashboard';
import Users from './components/pages/admin/Users';
import Posts from './components/pages/admin/Posts';
import AddPost from './components/pages/admin/AddPost';


function App() {
  const auth = useSelector(state => state.auth);   // grabs auth from the redux global state
  return (
    <Router>

      <Route
        path="/admin/users"
        render={props => {
          return (
            <div>
              {
                auth.token ?    // this.props are the component props (App), while props are the Route props
                  <AdminWrapper>
                    <Users />
                  </AdminWrapper>
                  :
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
              }
            </div>

          )
        }}
      />

      <Route
        path="/admin/posts"
        exact={true}
        render={props => {
          return (
            <div>
              {
                auth.token ?    // this.props are the component props (App), while props are the Route props
                  <AdminWrapper>
                    <Posts />
                  </AdminWrapper>
                  :
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
              }
            </div>

          )
        }}
      />

      <Route
        path="/admin/posts/:view"
        exact={true}
        render={props => {
          return (
            <div>
              {
                auth.token ?    // this.props are the component props (App), while props are the Route props
                  <AdminWrapper>
                    <AddPost />
                  </AdminWrapper>
                  :
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
              }
            </div>
          )
        }}
      />

      <Route
        path="/admin/posts/:view/:id"     // :view and :id are like variables
        exact={true}
        render={props => {
          return (
            <div>
              {
                auth.token ?    // this.props are the component props (App), while props are the Route props
                  <AdminWrapper>
                    <AddPost />
                  </AdminWrapper>
                  :
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
              }
            </div>

          )
        }}
      />

      <Route
        exact={true}
        path='/signup'
        render={props => {
          if (auth.token) {  // already logged in
            return (
              <Redirect to='/' />
            )
          } else {
            return (
              <LoginWrapper>
                <SignUp />
              </LoginWrapper>
            )
          }
        }}
      />

      <Route
        path='/admin'
        exact={true}
        render={props => {
          return (
            <div>
              {
                auth.token ?    // this.props are the component props (App), while props are the Route props
                  <AdminWrapper>
                    <Dashboard />
                  </AdminWrapper>
                  :
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
              }
            </div>

          )
        }}
      />

      <Route
        exact={true}
        path="/"
        render={props => (
          <PageWrapper>
            <Home {...props} />
          </PageWrapper>
        )}
      />

      <Route
        path="/blog"
        exact={true}
        render={props => (
          <PageWrapper>
            <Blog {...props} />
          </PageWrapper>
        )}
      />

      <Route
        path="/blog/:slug"
        exact={true}
        render={props => (
          <PageWrapper>
            <Single {...props} />
          </PageWrapper>
        )}
      />

      <Route
        path="/about"
        render={props => (
          <PageWrapper>
            <About {...props} />
          </PageWrapper>
        )}
      />

      <Route
        path='/contact'
        render={props => (
          <PageWrapper>
            <Contact {...props} />
          </PageWrapper>
        )}
      />



    </Router>
  );
}

export default App;
