<template>
  <div>
    <Header />
    <Banner />
    <nuxt/>
  </div>
</template>

<script>
import Header from "@/components/common/Header"
import Banner from "@/components/common/Banner"

export default {
    middleware: "auth",

    components: {
      Header,
      Banner,
    }
}

</script>
