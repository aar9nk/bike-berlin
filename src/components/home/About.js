import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="aboutHeader">
          <h1>Some Tips</h1>
          <h3>
            I worked as a Foodora delivery rider through all the neighbourhoods
            of Berlin.
          </h3>
        </div>
        <div className="aboutText">
          <p>
            The first thing to look out for is the old cobblestone streets. It
            took me two new tubes to realise my bike couldn't handle the stone
            filled streets.
          </p>
        </div>
        <div className="aboutText">
          <p>
            Follow the rules and everyone around you will know what to expect.
            It may seem scary at first but the vehicles will give you space,
            then you will be in a stream of other riders.
          </p>
        </div>
        <div className="aboutText">
          <p>
            Hire a bike from a local bike store, most charge around €10 per day
            of hire!
          </p>
        </div>
      </section>
    );
  }
}
