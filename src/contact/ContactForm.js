import React from 'react';
import Input from '@material-ui/core/Input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

const ContactFrom = () => {
    return (
        <>
            <p>Contact Form</p>

            <form
                action='/success'
                name='react-playground-contact-form'
                method='POST'
                data-netlify='true'
            >
                <input
                    type='hidden'
                    name='form-name'
                    value='react-playground-contact-form'
                />

                <Input
                    defaultValue='Nom'
                    inputProps={{ 'aria-label': 'description' }}
                    type='name'
                    name='name'
                    placeholder='Nom'
                />

                <Input
                    defaultValue='Email'
                    inputProps={{ 'aria-label': 'description' }}
                    type='email'
                    name='email'
                    placeholder='email@example.com'
                />

                <TextareaAutosize
                    aria-label='minimum height'
                    name='message'
                    rowsMin={3}
                    placeholder='Message'
                />

                <div className='field'>
                    <div data-netlify-recaptcha='true'></div>
                </div>

                <Button
                    className='actions'
                    variant='outlined'
                    type='submit'
                    value='Send Message'
                    id='submit-btn'
                >
                    Envoyer
                </Button>
            </form>
        </>
    );
};

export default ContactFrom;
