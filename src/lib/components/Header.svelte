<script>
    // @ts-nocheck

    import { on } from 'dom7';
    import iconLogo from '$lib/image/logo.png';
    import iconLogoColor from '$lib/image/logoColor.png';
    import iconSearch from '$lib/image/Searchiconsearch.png';
    import logoVn from '$lib/image/logovn.png';
    import { activeHeaderFixed } from '../../store/store';

    let topY;

    const scrollFunc = () => {
        const y = window.scrollY;
        topY = y;
        // console.log(topY)
    };
    const handleScroll = (topY) => {
        if (topY > 100) {
            activeHeaderFixed.update((value) => {
                return (value = true);
            });
        } else {
            activeHeaderFixed.update((value) => {
                return (value = false);
            });
        }

        let handleFixed;

        activeHeaderFixed.subscribe((value) => {
            handleFixed = value;
        });
        return handleFixed;
    };
    $: handleFixed = handleScroll(topY);
</script>

<svelte:window on:scroll={scrollFunc} />

<section
    class={handleFixed
        ? 'top-0 z-50 left-0 right-0 transition-all fixed bg-white text-black'
        : 'top-0 z-10 left-0 right-0 transition-all absolute text-white'}
>
    <div class="max-w-screen-main mx-auto px-4 ">
        <div class="border-b-[1px] border-gray-100  flex items-center justify-between ">
            <div class="">
                {#if handleFixed}
                    <img src={iconLogoColor} alt="" />
                {:else}
                    <img src={iconLogo} alt="" />
                {/if}
            </div>
            <div class="flex flex-col items-center">
                <div class="flex items-center justify-end w-full">
                    <a href="/" class="px-4 py-3 font-bold text-sm leading-3">Tin Tức</a>
                    <a href="/" class="px-4 py-3 font-bold text-sm leading-3 ">Tuyển dụng</a>
                    <a href="/" class="px-4 py-3 font-bold text-sm leading-3">Liên hệ</a>

                    <div class="px-4 py-3 font-bold text-sm leading-3 border-x-[1px] border-gray-100">
                        {#if handleFixed}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="!text-black"
                            >
                                <path
                                    d="M9.07344 16.4815C13.1644 16.4815 16.4809 13.1651 16.4809 9.07405C16.4809 4.98304 13.1644 1.66663 9.07344 1.66663C4.98243 1.66663 1.66602 4.98304 1.66602 9.07405C1.66602 13.1651 4.98243 16.4815 9.07344 16.4815Z"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M18.3325 18.3333L14.3047 14.3055"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        {:else}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="text-white"
                            >
                                <path
                                    d="M9.07344 16.4815C13.1644 16.4815 16.4809 13.1651 16.4809 9.07405C16.4809 4.98304 13.1644 1.66663 9.07344 1.66663C4.98243 1.66663 1.66602 4.98304 1.66602 9.07405C1.66602 13.1651 4.98243 16.4815 9.07344 16.4815Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M18.3325 18.3333L14.3047 14.3055"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        {/if}
                    </div>
                    <div class="px-4 py-3 font-bold text-sm leading-3 flex items-center">
                        <img src={logoVn} alt="" class="w-[18px] h-[18px]" />
                        <span class="ml-2">VI</span>
                    </div>
                </div>
                <div class="leading-3 border-t-[1px] border-gray-100">
                    <a href="/" class="inline-block p-5 font-bold text-sm relative itemNavActive">Trang chủ</a>
                    <a href="/" class="inline-block p-5 font-bold text-sm relative">Về chúng tôi</a>
                    <a href="/" class="inline-block p-5 font-bold text-sm relative">Dịch vụ</a>
                    <a href="/" class="inline-block p-5 font-bold text-sm relative">Sản phẩm</a>
                    <a href="/" class="inline-block p-5 font-bold text-sm relative">Ngành ứng dụng</a>
                    <a href="/" class="inline-block p-5 font-bold text-sm relative">Dự án</a>
                </div>
            </div>
        </div>
    </div>
</section>
