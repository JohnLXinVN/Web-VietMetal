<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../global.css'
    import '../app.css';
</script>

<Header />
<slot />
<Footer />
