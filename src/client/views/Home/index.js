import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getHomeList();
  }
  render() {
    const { list } = this.props;
    return list.map(item => <div key={item.id}>{item.title}</div>);
  }
}

const mapStateToProps = state => ({
  list: state.home.list
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
