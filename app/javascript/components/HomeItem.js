import React from 'react';

export default class HomeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  refresh() {}

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <div className="body-container">
          <h1 className="display-2">Welcome to Minerva</h1>
          <p className="lead">
          Minerva is a Journaling Application written in Bootstrap+HTML+CSS+RubyOnRails+React.JS for Tyemill by Tony Gao
          </p>
          <hr className="body-separator" />
        </div>
        <div className="body-container">
          <div className="col-md-2">
          </div>
          <div className="col-md-8 text-center">
            <div className="panel panel-default">
            </div>
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>
      );
  }
}
