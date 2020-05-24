import React from 'react';

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
            body: { 'form-name': 'contact', ...this.state },
        })
            .then(() => alert('Success!'))
            .catch((error) => alert(error));

        e.preventDefault();
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <form name='contact' method='post' onSubmit={this.handleSubmit}>
                <input type='hidden' name='form-name' value='contact' />
                <p>
                    <label>
                        Your Name:{' '}
                        <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Your Email:{' '}
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Message:{' '}
                        <textarea
                            name='message'
                            value={message}
                            onChange={this.handleChange}
                        />
                    </label>
                </p>
                <p>
                    <button type='submit'>Send</button>
                </p>
            </form>
        );
    }
}

export default ContactForm;