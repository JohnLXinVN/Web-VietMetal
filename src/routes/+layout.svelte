<script>
    import Header from '$lib/components/Header.svelte';
    import '../app.css';
    import '../global.css'
</script>

<Header />
<slot />
<div class="h-[30000px]"></div>
