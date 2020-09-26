import React, { Component } from "react";

// list items from location db (mysql) and send to select tag front-end
// back-end node call item from db
class ListLocation extends Component {
  state = {
    isLoading: true,
    List: [],
  };

  render() {
    return this.state.List;
  }
}

export default ListLocation;
