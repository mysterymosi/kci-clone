<template>
    <!--==========================
    Pricing Table Section
  ============================-->
    <section id="pricing" class="padd-section text-center wow fadeInUp">
        <div class="container mt-5">
            <div class="section-title text-center">
                <h2>Frequently asked questions</h2>
                <p class="separator">Economic markets, financial investing, and stock trading can get confusing at times. If you still have questions after going through these common FAQs, that are already clearly explained in the different sections of our website, contact support so your question(s) can be cleared up as soon as possible</p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="faq-holder"><a class="btn section-btn btn-lg" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            How can I register a new account?
                        </a></div>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            You can signup and create a username and password. Follow all necessary steps to identify yourself.
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="faq-holder"><a class="btn section-btn btn-lg" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                            How can I invest with kultonci.com?
                        </a></div>
                    <div class="collapse" id="collapseExample1">
                        <div class="card card-body">
                            To make a investment you must first become a member of kultonci.com. Once you are signed up, you can make your first deposit. All deposits for investments must be made through the Members Area.
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="faq-holder"><a class="btn section-btn btn-lg" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                            How can I withdraw funds?
                        </a></div>
                    <div class="collapse" id="collapseExample3">
                        <div class="card card-body">
                            Login to your account using your username and password and check the Withdrawal section
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="faq-holder"><a class="btn section-btn btn-lg" data-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample">
                            How can I change my password?
                        </a></div>
                    <div class="collapse" id="collapseExample7">
                        <div class="card card-body">
                            You can change your password directly from your members area by editing it in your personal profile.
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="faq-holder"><a class="btn section-btn btn-lg" data-toggle="collapse" href="#collapseExample8" role="button" aria-expanded="false" aria-controls="collapseExample">
                            How can I check my account balance?
                        </a></div>
                    <div class="collapse" id="collapseExample8">
                        <div class="card card-body">
                            You can access the account information 24 hours, seven days a week over the Internet.You can access the account information 24 hours, seven days a week over the Internet.
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 mt-4">
                    <router-link to="/support" class="btn-about">Contact Support</router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
p {
    text-transform: none;
}

.faq-holder a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.overflow-ellipsis {
    word-wrap: break-word;
}

@media (min-width: 960px) {
    .col-md-4 {
        max-width: 100% !important;
    }
}

@media (min-width: 600px) {
    .col-sm-4 {
        max-width: 100% !important;
    }
}

/*h2 {
    margin-bottom: 20px;
}*/

h2 small {
    font-size: 82%;
    font-weight: 600;
}

p {
    font-size: 15px;
    text-align: center;
}

.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-btn {
    background: #118ab2;
    border-radius: 50px;
    border: 1px solid #fff;
    color: #fff;
    font-size: inherit;
    font-weight: normal;
    padding: 15px 30px;
    transition: 0.5s;
    margin-top: 7px;
    letter-spacing: normal;
    height: auto;
}

.section-btn:hover {
    background: #fff;
    border-color: #118ab2;
    color: #118ab2;
}

.feature-thumb {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sub-packages {
    margin-bottom: 7px;
}

.card.card-body {
    background: #fff;
    font-size: 16px;
    padding: 10px;
    color: #118ab2;
    border: 1px solid #118ab2;
    /*width: inherit;*/
    border-radius: 50px;

}
</style>