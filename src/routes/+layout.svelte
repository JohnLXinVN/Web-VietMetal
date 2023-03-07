<script>
    import Header from '$lib/components/Header.svelte';
    import '../global.css'
    import '../app.css';
</script>

<Header />
<slot />
<div class="h-[30000px]"></div>
