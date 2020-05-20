import React from "react";
import "./PasteArea.css";

type PasteAreaProps = {
  textAreaValue: string;
  onChange(value: string): void;
};

type PasteAreaState = {
  value: string;
};

class PasteArea extends React.Component<PasteAreaProps, PasteAreaState> {
  constructor(props: PasteAreaProps) {
    super(props);
    this.state = {
      value: props.textAreaValue
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="paste-area">
        <textarea
          value={this.props.textAreaValue}
          className="paste-text-area"
          onChange={this.onChange}
        />
      </div>
    );

  }
}

export default PasteArea;

