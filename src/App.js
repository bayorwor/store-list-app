import React from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/details/:_id" component={DetailsScreen} />
        </Container>
      </main>
    </>
  );
};

export default App;
