import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TextField } from '@material-ui/core';
import CustomButton from '../shared/components/CustomButton';

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', message: '' };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = (e) => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...this.state }),
        })
            .then(() => {
                const notify = () => {
                    toast.success('Votre message a bien été envoyé !', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                    });
                };
                notify();
            })
            .catch((error) => alert(error));

        e.preventDefault();
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        toast.configure();
        return (
            <form name='contact' method='post' onSubmit={this.handleSubmit}>
                <input type='hidden' name='form-name' value='contact' />
                <TextField
                    label='Nom'
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                    fullWidth
                    className='textfield'
                />
                <TextField
                    label='Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    fullWidth
                    className='textfield'
                />
                <TextField
                    label='Message'
                    multiline
                    name='message'
                    value={message}
                    onChange={this.handleChange}
                    fullWidth
                    className='textfield'
                />
                {/* <Button type='submit' variant='contained'>
                    Envoyer
                </Button> */}
                <CustomButton title='Envoyer' padding='0' />
            </form>
        );
    }
}

export default ContactForm;
