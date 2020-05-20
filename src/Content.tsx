import React from "react";
import PasteArea from "./PasteArea";
import ResultArea from "./ResultArea";

type ContentProps = {
};

type ContentState = {
  value: string;
};

class Content extends React.Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ""
    };
  }

  handleChange(value: string) {
    this.setState({value: value});
  }

  render() {
    const value = this.state.value;
    return (
      <div className="content">
        <PasteArea textAreaValue={value} onChange={this.handleChange} />
        <ResultArea textAreaValue={value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Content;

