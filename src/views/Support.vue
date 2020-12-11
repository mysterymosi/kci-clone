<template>
    <!--==========================
    Pricing Table Section
  ============================-->
    <section id="contact" class="padd-section text-center wow fadeInUp">
        <div class="container mt-5">
            <div class="section-title text-center">
                <h2>Support</h2>
                <b>Contact Us For Request & Inquiries</b>
                <p class="separator">Do you have any questions? If you need advice or technical assistance, do not hesitate to contact our specialists. Customer support is available around the clock. You just need to send a letter or a request via the form below to promptly receive the necessary assistance. Remember that the more detailed the description of your problem is, the sooner it will be solved. Do not forget to indicate your login, if you are a registered user of the website.</p>
            </div>
        </div>
        <div class="container">
            <!--==========================
    Contact Section
  ============================-->
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-8">
                    <div class="form">
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <form action="" method="post" role="form" class="contactForm">
                            <div class="form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div class="validation"></div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validation"></div>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div class="validation"></div>
                            </div>
                            <div class="text-center"><button class="btn-about" type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
@media (min-width: 990px) {
    .mt {
        margin-top: 40px;
    }
}

p {
    text-transform: none;
}

b {
    color: #118ab2;
}
</style>