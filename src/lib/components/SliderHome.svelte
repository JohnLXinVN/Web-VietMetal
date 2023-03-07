<script>
    // import Swiper core and required modules
    import { Navigation, Pagination, Autoplay } from 'swiper';

    import { Swiper, SwiperSlide } from 'swiper/svelte';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

</script>


    <!-- Begin: Slider -->
    <div class="h-[720px] w-auto ">
        <Swiper
            grabCursor={true}
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            class="swiperBannerHome"
            
        >
            <SwiperSlide class="w-full h-[720px]">
                <div class="bg-[url('$lib/image/imgSlider1.png')] h-[720px] w-full bg-no-repeat bg-center bg-cover">
                    <div class="h-full flex flex-col items-center justify-center max-md:p-6 max-w-[1000px] mx-auto">
                        <h1 class="font-black text-5xl text-white items-center flex justify-center text-center uppercase leading-[55px]">
                            Kiến tạo Công Nghiệp<br /> & Chinh phục niềm tin Khách Hàng
                        </h1>
                        <h2 class="mt-7 text-white font-bold text-base text-center">
                            Trong suốt thời gian qua, chúng tôi được sự tin tưởng từ những nhà cung cấp lẫn khách hàng và không ngừng phát
                            tiển để trở thành nhà cung cấp thép hàng đầu tại Việt Nam
                        </h2>
                        <button class="btn-primary flex uppercase mt-11 hover:bg-[#b0161f] transition-all  px-5 py-4 btn-slider">
                            <span>Xem catalouge</span>
                            <span class="ml-[17px] pl-[14px] border-l-[1px] border-gray-100 ">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon-arrow-slider transition-all"
                                >
                                    <g clip-path="url(#clip0_1092_736)">
                                        <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1092_736">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span></button
                        >
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide class="w-full h-[720px]">
                <div class="bg-[url('$lib/image/imgSlider2.png')] h-[720px] w-full bg-no-repeat bg-center bg-cover">
                    <div class="h-full flex flex-col items-center justify-center max-md:p-6 max-w-[1000px] mx-auto">
                        <h1 class="font-black text-5xl text-white items-center flex justify-center text-center uppercase leading-[55px]">
                            Kiến tạo Công Nghiệp<br /> & Chinh phục niềm tin Khách Hàng
                        </h1>
                        <h2 class="mt-7 text-white font-bold text-base text-center">
                            Trong suốt thời gian qua, chúng tôi được sự tin tưởng từ những nhà cung cấp lẫn khách hàng và không ngừng phát
                            tiển để trở thành nhà cung cấp thép hàng đầu tại Việt Nam
                        </h2>
                        <button class="btn-primary flex uppercase mt-11 hover:bg-[#b0161f] transition-all  px-5 py-4 btn-slider">
                            <span>Xem catalouge</span>
                            <span class="ml-[17px] pl-[14px] border-l-[1px] border-gray-100 ">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon-arrow-slider transition-all"
                                >
                                    <g clip-path="url(#clip0_1092_736)">
                                        <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1092_736">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span></button
                        >
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <!-- End: Slider -->
