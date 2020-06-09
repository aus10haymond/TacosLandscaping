import React from "react";

function Contact() {
    return (
        <div id="contact">
            <h2 className="text-center">CONTACT</h2>
            <br />
            <div class="card text-center row">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <h5>
                            PHONE
                        </h5>
                        <a href="tel:123-456-7890">123-456-7890</a>
                    </li>
                    <li class="list-group-item">
                        <h5>
                            EMAIL
                        </h5>
                        <a href="mailto:fake.email@gmail.com?Subject=Hello" target="_top">fake.email@gmail.com</a>
                    </li>
                    <li className="list-group-item">
                        <h5>
                            FACEBOOK
                        </h5>
                        <a href="https://www.facebook.com/Tacos-Landscaping-111572150566066/" target="blank">Taco's Landscaping</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;