import React from 'react';
import { useState } from 'react';

const ContactPage = () => {
    var [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setContactForm( (prev) => ({...prev,[name]: value}) );
    }

    function submitForm(e) {
        e.preventDefault();
        console.log(contactForm);

        setContactForm({
            name: "",
            email: "",
            message: ""
        });
    }

    return(
        <>
            <main class="w-100 m-0 p-0">
                <div class="m-0 p-5 row">
                    <h3 class="text-center">Contact Centro Vergara</h3>
                </div>

                <div class="m-0 p-5 pt-0 row float-center">
                    <div class="col-2"></div>

                    <div class="col-8">
                        <form action="" onSubmit={submitForm}>
                            <div class="row">
                                <div class="col-6">
                                    <input class="w-100 border border-dark form-control" type="text" name="name"
                                        onChange={handleChange} value={contactForm.name} placeholder="Name" required>
                                    </input>
                                </div>

                                <div class="col-6">
                                    <input class="w-100 border border-dark form-control" type="text" name="email"
                                        onChange={handleChange} value={contactForm.email} placeholder="Email" required>
                                    </input>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-12">
                                    <textarea class="w-100 border border-dark form-control" name="message"
                                        onChange={handleChange} value={contactForm.message} placeholder="Your message" required>
                                    </textarea>
                                </div>
                            </div>

                            <div class="row mt-5">
                                <div class="col-4">
                                    <button class="w-100 btn border border-dark" type="button">Clear</button>
                                </div>

                                <div class="col-4"></div>

                                <div class="col-4">
                                    <button class="w-100 btn bg-secondary text-white" type="submit">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ContactPage;