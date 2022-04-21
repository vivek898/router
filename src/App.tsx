import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Welcome from './Component/welcome';
import Product from './Component/product';
import Header from './link/header';
import ProductDetail from './Component/product-detail';
import NewQuote from './pages/newQuote';
import QuoteDetail from './pages/quoteDetail';
import AllQuotes from './pages/allQuotes';
import Layout from './components/layout/layout';
import NotFound from './pages/notFound';

function App() {
  return (
    // <div className="App">
    <Layout>
      <Switch>
        {/* <Route path={'/'} exact>
            <Redirect to={'/welcome'} />
          </Route>
          <Route path="/welcome" component={Welcome}></Route>
          <Route path="/product" component={Product} exact></Route>
          <Route path="/product/:productId">
            <ProductDetail />
          </Route> */}
        <Route path={'/'} exact>
          <Redirect to={'/quotes'}></Redirect>
        </Route>
        <Route path={'/quotes'} component={AllQuotes} exact></Route>
        <Route path={'/new-quote'} component={NewQuote}></Route>
        <Route path={'/quotes/:quoteId'} component={QuoteDetail}></Route>
        <Route path={'*'} component={NotFound}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
