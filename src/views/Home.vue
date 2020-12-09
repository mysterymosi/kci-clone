<template>
    <div>
        <Banner />
        <AboutUs />
        <HowItWorks />
        <WhyUs />
        <Stat />
        <RiskDisclaimer />
        <CurrencyConverter />
        <InvestNow />
    </div>
</template>
<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import AboutUs from "@/components/AboutUs.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import WhyUs from "@/components/WhyUs.vue";
import Stat from "@/components/Stat.vue";
import RiskDisclaimer from "@/components/RiskDisclaimer.vue";
import CurrencyConverter from "@/components/CurrencyConverter.vue";
import InvestNow from "@/components/InvestNow.vue";

export default {
    name: "Home",
    components: {
        Banner,
        AboutUs,
        HowItWorks,
        WhyUs,
        Stat,
        RiskDisclaimer,
        CurrencyConverter,
        InvestNow
    }
};
</script>