<template>
	<section id="contact" class="padd-section text-center wow fadeInUp">
        <div class="container mt-5">
            <div class="section-title text-center">
                <h2>Login</h2>
            </div>
        </div>
        <div class="container">
            <!--==========================
    Contact Section
  ============================-->
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-8">
                    <div class="form">
                        <form action="" method="post" role="form" class="contactForm">
                            <div class="form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" id="password" placeholder="Your password" />
                            </div>
                            <div class="text-center"><button class="btn-about" type="submit">login</button></div>

                            <div class="text-center">
                            	<p>New to this site? <router-link to="/register">Register</router-link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
	a {
		color: #118ab2;
		text-decoration: none; 
	}

	a:hover {
		color: #023047;
	}
</style>