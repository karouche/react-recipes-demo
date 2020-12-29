import './App.css';
import CardList  from './components/pages/CardList'
import Header from './components/pages/Header';
import Footer from './components/pages/Footer'
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom'
import Recipe from './components/pages/Recipe';
import NotFound from './components/pages/NotFound'
import About from './components/pages/About'

function App() {
  return (
    <div className="App">
       <Header/>
       <div className="App-body">
        <Router>            
          <Switch>
            <Route exact path="/">
                  <CardList  />
            </Route>
            <Route exact path="/recipes">
                  <CardList/>
            </Route> 
            <Route   exact path="/recipe/:name"
                    render = {props => <Recipe   {...props}  />}
            />  
             {/*<Route   exact path="/recipes/create" component = {RecipeForm} />*/}
             <Route     path="/recipe/notfound">
                    <NotFound/>
             </Route>
             <Route  component={NotFound}/>
            </Switch>
        </Router>
        </div>
       <Footer/>
    </div>
  );
}

export default App;
