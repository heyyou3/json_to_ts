import React from "react";
import "./ResultArea.css";

type ResultAreaProps = {
  textAreaValue: string;
  onChange(value: string): void;
};

type ResultAreaState = {
  value: string;
};

class ResultArea extends React.Component<ResultAreaProps, ResultAreaState> {
  constructor(props: ResultAreaProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="result-area">
        <textarea
          value={this.props.textAreaValue}
          className="result-text-area"
          onChange={this.onChange}
        />
      </div>
    );

  }
}

export default ResultArea;

