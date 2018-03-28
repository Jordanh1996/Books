import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export default class RemoveModal extends React.Component {
    state = {
        open: false,
        title: null
    };

    openModal = (title) => {
        this.setState({open: true});
        this.setState(() => ({title}))
    };

    handleClose = () => {
        this.setState({open: false});
    };

    onRemove = () => {
        this.props.onRemove(this.state.title);
        this.handleClose();
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Remove"
                primary={true}
                onClick={this.onRemove}
            />,
        ];

    return (
        <div>
            <Dialog
                actions={actions}
                open={this.state.open}
            >
                <h1 className='RemoveModal-title'>
                    {`Are you sure that you want to remove ${this.state.title}?`}
                </h1>
            </Dialog>
      </div>
    );
  };
};