import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from '../pages/home';
import ActiveCart from '../pages/active-cart';
import SuspendedCart from '../pages/suspended-cart';


const AppRoutes = () => (
    <Switch>
      <Route exact path="/">
          <Redirect to="/home" />
      </Route>
      <Route exact path='/active-cart' component={ActiveCart}/>
      <Route exact path='/suspended-cart' component={SuspendedCart}/>
      <Route exact path='/home' component={Home}/>
    </Switch>
)

export default AppRoutes