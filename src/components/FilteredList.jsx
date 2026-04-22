import React, { Component } from "react";
import List from "./List.jsx";
import Dropdown from "react-bootstrap/Dropdown";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  };

  onFilter = (eventKey) => {
    this.setState({ type: eventKey });
  };

  filterItem = (item) => {
    const matchesSearch =
      item.name.toLowerCase().search(this.state.search) !== -1;

    const matchesType =
      this.state.type === "All" || item.type === this.state.type;

    return matchesSearch && matchesType;
  };

  render() {
    const filteredItems = this.props.items.filter(this.filterItem);

    return (
      <div>
        <h2>Filtered List</h2>

        {/* Search box */}
        <input
          type="text"
          placeholder="Search..."
          onChange={this.onSearch}
        />

        {/* Bootstrap Dropdown */}
        <Dropdown onSelect={this.onFilter}>
          <Dropdown.Toggle variant="primary">
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
            <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <List items={filteredItems} />
      </div>
    );
  }
}

export default FilteredList;
