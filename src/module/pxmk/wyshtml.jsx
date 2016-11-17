import React, { PropTypes } from 'react';

export default class Editor extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.value
    });
    this.state.editor.setValue(newProps.value, true);
  }

  componentDidMount() {
    var self = this;
    if(!window.wysihtml5) {
      require('wysihtml/dist/wysihtml-toolbar');
    }
    const EDITOR = window.wysihtml5;
    const textarea = React.findDOMNode(this.refs.textarea);
    const editor = new EDITOR.Editor(textarea, {
      parserRules: {
        tags: {
          strong: {},
          b:      {},
          i:      {},
          em:     {},
          br:     {},
          p:      {},
          div:    {},
          span:   {},
          ul:     {},
          ol:     {},
          li:     {},
          img: {
              check_attributes: {
                  height: "dimension",
                  width: "dimension",
                  alt: "alt",
                  src: "url"
              },
              add_class: {
                  align: "align_img"
              }
          },
          a:      {
            set_attributes: {
              target: "_blank",
              rel:    "nofollow"
            },
            check_attributes: {
              href:   "url"
            }
          }
        }
      }
    });
    self.setState({ editor });
    editor.on('load', function() {
      editor.setValue(self.state.value, true);
      editor.on('change', self.handleChange.bind(self));
    });
  }

  handleChange() {
    const value = this.state.editor.getValue();
    if (typeof this.props.onChange === 'function') {
      this.props.onChange({ target: { value } });
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    const { editor } = this.state;
    if (editor) {
      editor.destroy();
    }
  }

  state = {
    value: this.props.value
  }

  render() {
    return (
      <div styleName="textarea" ref="textarea"/>
    );
  }
}