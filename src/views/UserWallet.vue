<template>
    <!--==========================
    Features Section
  ============================-->
    <section id="features" class="padd-section text-center wow fadeInUp">
        <div class="container mt-5">
            <div class="section-title text-center">
                <h2>Welcome, Mosi Odey</h2>
                <hr>
                <h3>We're glad you took the bold step to invest with us.</h3>
                <p class="separator mt-3">Keep up with the progress of your investments - view your Deposits & Earnings on your fully secure personal investments page.</p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <h4>You're no on any package</h4>
                    <router-link to="/investment-packages" class="btn-about">Select a package</router-link>
                    <div class="card white-card" style="margin-top: 10px;">
                        <div class="card-body">
                            <h5 style="color: black;" class="text-left">Referral link</h5>
                            <input id="referral_value" v-model="referral_code" type="text" class="form-control" disabled>
                            <button style="margin-top: 15px;" class="btn-about">Copy Link</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="feature-block">
                        <img src="../assets/img/wallet.svg" alt="img" class="img-fluid">
                        <h4>Fund Your Wallet</h4>
                        <p>Fund your wallet using your local bank card</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
img {
    width: 100px;
}

hr {
    width: 200px;
    border-top: 5px solid #118ab2;
}

/*.feature-block {
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
  }*/
</style>