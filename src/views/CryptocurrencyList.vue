<template>
    <!--==========================
    Pricing Table Section
  ============================-->
    <section id="pricing" class="padd-section text-center wow fadeInUp">
      <coingecko-coin-price-marquee-widget coin-ids="bitcoin,eos,ethereum,litecoin,ripple,bitcoin-cash,tether,stellar,tron,binancecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
        <div class="container mt-5">
            <div class="section-title text-center">
                <h2>Get updated prices</h2>
                <p class="separator">on the top 10 cryptocurrencies</p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <coingecko-coin-compare-chart-widget coin-ids="bitcoin,eos,ethereum,litecoin,ripple,bitcoin-cash,tether,stellar,tron,binancecoin" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
                </div>
            </div>
        </div>
        <VueInjectJs src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js" />
        <VueInjectJs src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js" />
    </section>
</template>
<script>
import VueInjectJs from "vue-inject-js";
export default {
    components: {
        VueInjectJs
    }
}
</script>
