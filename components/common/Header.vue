<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-0">
        <nuxt-link to="/" class="navbar-brand" >
            Nuxt News
        </nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <nuxt-link to="/posts" class="nav-link active">
                    Current News
                </nuxt-link>
            </ul>
            <ul class="navbar-nav my-2 my-lg-0">
                <nuxt-link to="/admin"  >
                   <h4 class="nav-item mr-sm-2">Admin</h4> 
                </nuxt-link>
            </ul>
        </div>
    </nav>
</template>