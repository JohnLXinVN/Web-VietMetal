<script>
    // import Swiper core and required modules
    import { Navigation, Pagination, Autoplay } from 'swiper';

    import { Swiper, SwiperSlide } from 'swiper/svelte';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    import imgAboutHome from '$lib/image/imgAboutHome.png';
    import iconAboutHome1 from '$lib/image/iconHomeAbout1.png';
    import iconAboutHome2 from '$lib/image/iconHomeAbout2.png';
    import iconAboutHome3 from '$lib/image/iconHomeAbout3.png';
    import iconAboutHome4 from '$lib/image/iconHomeAbout4.png';
    import imgServiceHome1 from '$lib/image/imgServiceHome1.png';
    import imgServiceHome2 from '$lib/image/imgServiceHome2.png';
    import imgServiceHome3 from '$lib/image/imgServiceHome3.png';
    import imgServiceHome4 from '$lib/image/imgServiceHome4.png';
    import imgServiceHome5 from '$lib/image/imgServiceHome5.png';
    import imgNewsHome1 from '$lib/image/imgNewsHome1.png';
    import imgNewsHome2 from '$lib/image/imgNewsHome2.png';
    import imgNewsHome3 from '$lib/image/imgNewsHome3.png';
    import imgNewsHome4 from '$lib/image/imgNewsHome4.png';
    import iconUser from '$lib/image/iconUser.png';
    import IconRuler from '$lib/image/IconRuler.png';
    import iconEmail from '$lib/image/iconEmail.png';
    import iconChat from '$lib/image/iconChat.png';
    import iconBusiness from '$lib/image/iconBusiness.png';
    import iconBox from '$lib/image/iconBox.png';
    import imgMap from '$lib/image/imgMap.png';
    import imgCommaTop from '$lib/image/commaTop.png';
    import imgCommaBottom from '$lib/image/commaBottom.png';

    import AplicationHome from '$lib/components/AplicationHome.svelte'
</script>

<section>
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
                            Ki???n t???o C??ng Nghi???p<br /> & Chinh ph???c ni???m tin Kh??ch H??ng
                        </h1>
                        <h2 class="mt-7 text-white font-bold text-base text-center">
                            Trong su???t th???i gian qua, ch??ng t??i ???????c s??? tin t?????ng t??? nh???ng nh?? cung c???p l???n kh??ch h??ng v?? kh??ng ng???ng ph??t
                            ti???n ????? tr??? th??nh nh?? cung c???p th??p h??ng ?????u t???i Vi???t Nam
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
                            Ki???n t???o C??ng Nghi???p<br /> & Chinh ph???c ni???m tin Kh??ch H??ng
                        </h1>
                        <h2 class="mt-7 text-white font-bold text-base text-center">
                            Trong su???t th???i gian qua, ch??ng t??i ???????c s??? tin t?????ng t??? nh???ng nh?? cung c???p l???n kh??ch h??ng v?? kh??ng ng???ng ph??t
                            ti???n ????? tr??? th??nh nh?? cung c???p th??p h??ng ?????u t???i Vi???t Nam
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

    <!-- Begin: About -->
    <div class="relative">
        <div class="max-w-screen-main mx-auto px-4 py-[129px] flex justify-end items-center">
            <div class="absolute left-0 top-[20%]">
                <img src={imgAboutHome} alt="" />
            </div>
            <div class="flex flex-col w-[50%] right-0">
                <h1 class="font-extrabold text-4xl mb-6">V??? ch??ng t??i</h1>
                <span>
                    <p class="font-bold mb-3">
                        C??ng ty C??? Ph???n Kim Kh?? Vi???t ???????c th??nh l???p th??ng 01/2022. ?????n nay t??n tu???i C??ng ty ???????c bi???t ?????n r???ng kh???p v???i
                        th????ng hi???u ???TH??P Vietmetal???.
                    </p>

                    <p class="font-medium mb-3">
                        Nh?? m??y c???a C??ng ty c??? ph???n Th??p Vietmetal ???????c x??y d???ng theo m?? h??nh c??c trung t??m d???ch v??? gia c??ng c???t x??? th??p
                        cu???n hi???n ?????i c???a Nh???t B???n, v???i c??c d??y chuy???n m??y m??c thi???t b??? ch??nh c???a C??ng ty ???????c mua t??? Nh???t B???n, c?? t??nh
                        ch??nh x??c v?? t??? ?????ng h??a cao, ?????m b???o ch???t l?????ng s???n ph???m theo y??u c???u ??a d???ng c???a kh??ch h??ng.
                    </p>
                    <p class="font-medium">
                        Quy tr??nh qu???n l?? v???n h??nh v?? h??? th???ng qu???n tr??? ch???t l?????ng c???a C??ng ty ???????c ??p d???ng theo quy chu???n Nh???t B???n, c??ng
                        v???i ?????i ng?? c??n b??? nh??n vi??n c?? tr??nh ????? chuy??n m??n cao, k??? n??ng tay ngh??? thu???n th???c, gi??p cho C??ng ty c?? th??? ????p
                        ???ng ???????c nh???ng y??u c???u kh???t khe nh???t c???a kh??ch h??ng.
                    </p>
                </span>
                <button class="btn-primary max-w-fit mt-8 px-9 py-4 hover:bg-[#b0161f] transition-all uppercase">Xem th??m</button>
            </div>
        </div>
        <div class="bg-primary py-10">
            <div class="max-w-screen-main mx-auto px-4 grid grid-cols-12">
                <div class="flex flex-col items-center justify-center px-8 text-white col-span-3 border-r-[1px] border-gray-100">
                    <img src={iconAboutHome1} alt="" class="w-[40px] h-[40px]" />
                    <p class="font-medium text-sm my-4">H??? tr??? gia c??ng</p>
                    <h1 class="font-extrabold text-5xl">10,000</h1>
                    <h3 class="font-bold text-lg mt-4">T???n/n??m</h3>
                </div>
                <div class="flex flex-col items-center justify-center px-8 text-white col-span-3 border-r-[1px] border-gray-100">
                    <img src={iconAboutHome2} alt="" class="w-[40px] h-[40px]" />
                    <p class="font-medium text-sm my-4">Cung c???p nguy??n li???u</p>
                    <h1 class="font-extrabold text-5xl">72,000</h1>
                    <h3 class="font-bold text-lg mt-4">T???n/n??m</h3>
                </div>
                <div class="flex flex-col items-center justify-center px-8 text-white col-span-3 border-r-[1px] border-gray-100">
                    <img src={iconAboutHome3} alt="" class="w-[40px] h-[40px]" />
                    <p class="font-medium text-sm my-4">Nh?? cung c???p tr??n to??n th??? gi???i</p>
                    <h1 class="font-extrabold text-5xl">20+</h1>
                    <h3 class="font-bold text-lg mt-4">Nh?? cung c???p</h3>
                </div>
                <div class="flex flex-col items-center justify-center px-8 text-white col-span-3">
                    <img src={iconAboutHome4} alt="" class="w-[40px] h-[40px]" />
                    <p class="font-medium text-sm my-4">Kh??ch h??ng s???n xu???t t???i Vi???t Nam</p>
                    <h1 class="font-extrabold text-5xl">200+</h1>
                    <h3 class="font-bold text-lg mt-4">Kh??ch h??ng</h3>
                </div>
            </div>
        </div>
    </div>
    <!-- End: About -->

    <!-- Begin: Service -->
    <div class="bg-[#F3F5F8]">
        <div class="max-w-screen-main mx-auto px-4 pb-[94px]">
            <h1 class="font-extrabold text-4xl py-[70px] text-center uppercase">D???ch v???</h1>
            <div class="grid grid-cols-12 gap-8 mx-auto px-3">
                <div class="col-span-4 ">
                    <a href="/" class="overflow-hidden block"
                        ><img src={imgServiceHome1} alt="" class="cursor-pointer hover:scale-[1.1] transition-all w-full" /></a
                    >

                    <div
                        class="flex text-black p-6 flex-col mx-6 mt-[-35px] bg-white relative z-10 item-service-home hover:bg-bluePrimary hover:text-white transition-all"
                    >
                        <div>
                            <h1 class="title-item-service-home font-bold text-lg transition-all">Cung c???p th??p</h1>
                        </div>
                        <p class="mt-4 font-medium text-sm text-[#141416] h-[170px]">
                            Ch??ng t??i cung c???p th??p cho c??c nh?? ph??n ph???i v?? kh??ch h??ng cu???i c??ng trong nhi???u l??nh v???c s??? d???ng th??p nh?? c??ng
                            nghi???p ?? t??, x??y d???ng, v???t li???u x??y d???ng v??....
                        </p>
                        <a href="/" class="mt-5 font-semibold text-base uppercase text-bluePrimary btn-item-service-home">Xem th??m</a>
                    </div>
                </div>
                <div class="col-span-4 ">
                    <a href="/" class="overflow-hidden block"
                        ><img src={imgServiceHome2} alt="" class="cursor-pointer hover:scale-[1.1] transition-all w-full" /></a
                    >

                    <div
                        class="flex text-black p-6 flex-col mx-6 mt-[-35px] bg-white relative z-10 item-service-home hover:bg-bluePrimary hover:text-white transition-all"
                    >
                        <div>
                            <h1 class="title-item-service-home font-bold text-lg transition-all">Ch??? t???o li??n k???t th??p</h1>
                        </div>
                        <p class="mt-4 font-medium text-sm text-[#141416] h-[170px]">
                            V???i nh???ng d??? ??n c??ng ty ???? tham gia, ch??ng t??i c?? th??? mang ?????n s??? h??? tr??? trong ch??? t???o ho???c k???t c???u s???n ph???m
                            th??p ??? m???t ho???c nhi???u c??ng ??o???n cho nh???ng kh??ch h??ng s???n xu???t.
                        </p>
                        <a href="/" class="mt-5 font-semibold text-base uppercase text-bluePrimary btn-item-service-home">Xem th??m</a>
                    </div>
                </div>
                <div class="col-span-4 ">
                    <a href="/" class="overflow-hidden block"
                        ><img src={imgServiceHome3} alt="" class="cursor-pointer hover:scale-[1.1] transition-all w-full" /></a
                    >

                    <div
                        class="flex text-black p-6 flex-col mx-6 mt-[-35px] bg-white relative z-10 item-service-home hover:bg-bluePrimary hover:text-white transition-all"
                    >
                        <div>
                            <h1 class="title-item-service-home font-bold text-lg transition-all">D???ch v??? c???t x???</h1>
                        </div>
                        <p class="mt-4 font-medium text-sm text-[#141416] h-[170px]">
                            Vietmetal lu??n chu???n b??? s???n s??ng ????? ????p ???ng c??c d???ch v??? c???t ho???c x??? c?? ch??nh x??c cao v?? y??u c???u ph???c t???p v???i s???
                            ?????u t?? c???a m??y m??c Nh???t B???n, k??? s?? l??nh ngh??? v?? c??ng nh??n gi??u kinh nghi???m.
                        </p>
                        <a href="/" class="mt-5 font-semibold text-base uppercase text-bluePrimary btn-item-service-home">Xem th??m</a>
                    </div>
                </div>
                <div class="col-span-4 ">
                    <a href="/" class="overflow-hidden block"
                        ><img src={imgServiceHome4} alt="" class="cursor-pointer hover:scale-[1.1] transition-all w-full" /></a
                    >

                    <div
                        class="flex text-black p-6 flex-col mx-6 mt-[-35px] bg-white relative z-10 item-service-home hover:bg-bluePrimary hover:text-white transition-all"
                    >
                        <div>
                            <h1 class="title-item-service-home font-bold text-lg transition-all">D???ch v??? cho thu??</h1>
                        </div>
                        <p class="mt-4 font-medium text-sm text-[#141416] h-[170px]">
                            Ch??ng t??i mang ?????n m???t gi???i ph??p tr???n v???n cho thu?? v??n ph??ng v?? nh??? x?????ng ????? h??? tr??? c??c doanh nghi???p s???n xu???t.
                            ????? ?????ng h??nh c??ng doanh nghi???p trong su???t ch???ng ???????ng tr??? th??nh ?????i t??c l??u d??i, ch??ng t??i s??? chia s??? s??? hi???u
                            bi???t l???n ngu???n l???c c???a m??nh ????? b???n c?? th??? ????a ra quy???t ?????nh t???t nh???t cho doanh nghi???p c???a b???n.
                        </p>
                        <a href="/" class="mt-5 font-semibold text-base uppercase text-bluePrimary btn-item-service-home">Xem th??m</a>
                    </div>
                </div>
                <div class="col-span-4 ">
                    <a href="/" class="overflow-hidden block"
                        ><img src={imgServiceHome5} alt="" class="cursor-pointer hover:scale-[1.1] transition-all w-full" /></a
                    >

                    <div
                        class="flex flex-col text-black p-6 mx-6 mt-[-35px] bg-white relative z-10 item-service-home hover:bg-bluePrimary hover:text-white transition-all min-h-[280px]"
                    >
                        <div>
                            <h1 class="title-item-service-home font-bold text-lg transition-all">L???i m???i h???p t??c</h1>
                        </div>
                        <p class="mt-4 font-medium text-sm text-[#141416] h-[170px]">
                            Ch??ng t??i lu??n ch??o ????n c??c l???i m???i h???p t??c s???n xu???t v???t li???u li??n quan ?????n th??p ????? t???o gi?? tr??? cho ng??nh c??ng
                            nghi???p
                        </p>
                        <a href="/" class="mt-5 font-semibold text-base uppercase text-bluePrimary btn-item-service-home">Xem th??m</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End: Service -->

    <!-- Begin: Product -->
    <div class="flex flex-col">
        <h1 class="font-extrabold text-4xl py-[70px] text-center bg-bluePrimary text-white uppercase">S???n ph???m</h1>
        <div class="grid grid-cols-12 gap-[3px] h-[200px]]">
            <div class=" overflow-hidden  col-span-4">
                <div class="bg-[url('$lib/image/imgProductHome1.png')] h-[670px] w-full bg-no-repeat bg-center bg-cover ">
                    <div class=" flex flex-col items-center justify-center h-full w-[75%] mx-auto">
                        <h1
                            class="font-bold text-2xl pb-6 text-white relative before:absolute before:h-[2px] before:w-[60px] before:bg-white before:bottom-0 before:left-[50%] before:translate-x-[-50%]"
                        >
                            Th??p cu???n
                        </h1>
                        <p class="text-white mt-6 font-normal text-sm text-center">
                            Th??p cu???n l?? m???t s???n ph???m th??p ???????c s???n xu???t v???i b??? m???t tr??n ho???c c?? g??n d?????i d???ng cu???n tr??n, ???????c s???n xu???t b???ng
                            m???t quy tr??nh tinh luy???n ph???c t???p, ????i h???i tr??nh ????? k??? thu???t v?? c??ng ngh??? cao.
                        </p>
                        <a
                            href="/"
                            class="w-[50px] h-[50px] flex justify-center items-center bg-primary rounded-full mt-9 hover:bg-bluePrimary transition-all"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 0L8.2375 1.7625L15.2125 8.75H0V11.25H15.2125L8.2375 18.2375L10 20L20 10L10 0Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class=" overflow-hidden  col-span-4">
                <div class="bg-[url('$lib/image/imgProductHome2.png')] h-[670px] w-full bg-no-repeat bg-center bg-cover ">
                    <div class=" flex flex-col items-center justify-center h-full w-[75%] mx-auto">
                        <h1
                            class="font-bold text-2xl pb-6 text-white relative before:absolute before:h-[2px] before:w-[60px] before:bg-white before:bottom-0 before:left-[50%] before:translate-x-[-50%]"
                        >
                            Th??p cu???n s??n ph??? b??? m???t
                        </h1>
                        <p class="text-white mt-6 font-normal text-sm text-center">
                            Th??p cu???n l?? m???t s???n ph???m th??p ???????c s???n xu???t v???i b??? m???t tr??n ho???c c?? g??n d?????i d???ng cu???n tr??n, ???????c s???n xu???t b???ng
                            m???t quy tr??nh tinh luy???n ph???c t???p, ????i h???i tr??nh ????? k??? thu???t v?? c??ng ngh??? cao.
                        </p>
                        <a
                            href="/"
                            class="w-[50px] h-[50px] flex justify-center items-center bg-primary rounded-full mt-9 hover:bg-bluePrimary transition-all"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 0L8.2375 1.7625L15.2125 8.75H0V11.25H15.2125L8.2375 18.2375L10 20L20 10L10 0Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class=" overflow-hidden  col-span-4">
                <div class="bg-[url('$lib/image/imgProductHome3.png')] h-[670px] w-full bg-no-repeat bg-center bg-cover ">
                    <div class=" flex flex-col items-center justify-center h-full w-[75%] mx-auto">
                        <h1
                            class="font-bold text-2xl pb-6 text-white relative before:absolute before:h-[2px] before:w-[60px] before:bg-white before:bottom-0 before:left-[50%] before:translate-x-[-50%]"
                        >
                            C??c s???n ph???m kh??c
                        </h1>
                        <p class="text-white mt-6 font-normal text-sm text-center">
                            Th??p cu???n l?? m???t s???n ph???m th??p ???????c s???n xu???t v???i b??? m???t tr??n ho???c c?? g??n d?????i d???ng cu???n tr??n, ???????c s???n xu???t b???ng
                            m???t quy tr??nh tinh luy???n ph???c t???p, ????i h???i tr??nh ????? k??? thu???t v?? c??ng ngh??? cao.
                        </p>
                        <a
                            href="/"
                            class="w-[50px] h-[50px] flex justify-center items-center bg-primary rounded-full mt-9 hover:bg-bluePrimary transition-all"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 0L8.2375 1.7625L15.2125 8.75H0V11.25H15.2125L8.2375 18.2375L10 20L20 10L10 0Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End: Product -->

    <AplicationHome />

    <!-- Begin: Map -->
    <div class="bg-[#F3F5F8] py-[94px]">
        <div class="max-w-screen-main mx-auto px-4 grid grid-cols-12 gap-2">
            <div class="col-span-7">
                <img src={imgMap} alt="" />
            </div>
            <div class="col-span-5">
                <div class="bg-bluePrimary font-semibold text-lg text-white p-7 relative">
                    C??ng ty C??? Ph???n Kim Kh?? Vi???t t??? h??o khi c?? m???ng l?????i h??? th???ng nh???p kh???u ??a d???ng ????? ph???c v??? c??c kh??ch h??ng s???n xu???t trong
                    v?? ngo??i n?????c. Trong su???t th???i gian qua, ch??ng t??i ???????c s??? tin t?????ng t??? nh???ng nh?? cung c???p l???n kh??ch h??ng v?? kh??ng ng???ng
                    ph??t ti???n ????? tr??? th??nh c??ng ty ph??n ph???i th??p h??ng ?????u Vi???t Nam.
                    <img src={imgCommaTop} alt="" class="absolute top-[-20px] left-[30px] w-[35px] h-[40px]" />
                    <img src={imgCommaBottom} alt="" class="absolute bottom-[-20px] right-[30px] w-[35px] h-[40px]" />
                </div>
                <div class="mt-[50px] grid grid-row-5 gap-1 text-[#353945]">
                    <div class="row-span-1 grid grid-cols-2 mt-2">
                        <div class="col-span-1 flex">
                            <div class="w-[14px] h-[14px] mt-2 bg-[#E40613] mr-3 rounded-full" />
                            <p>
                                Novolipetsk <br />
                                MMK <br />
                                Servestal
                            </p>
                        </div>
                        <div class="col-span-1 flex">
                            <div class="w-[14px] h-[14px] mt-2 bg-[#511B00] mr-3 rounded-full" />
                            <p>
                                POSCO <br />
                                Dongbu <br />
                                Huyndai Steel
                            </p>
                        </div>
                    </div>
                    <div class="row-span-1 grid grid-cols-2 mt-2">
                        <div class="col-span-1 grid grid-rows-2">
                            <div class="flex row-span-1">
                                <div class=" w-[14px] h-[14px] mt-2 bg-[#FF5512] mr-3 rounded-full flex items-center" />
                                <p>ArcelorMittan</p>
                            </div>
                            <div class="flex row-span-1">
                                <div class=" w-[14px] h-[14px] mt-2 bg-[#FFB000] mr-3 rounded-full flex items-center" />
                                <p>
                                    FMS<br />
                                    Hoa Phat
                                </p>
                            </div>
                        </div>
                        <div class="col-span-1 flex ">
                            <div class="w-[14px] h-[14px] mt-2 bg-[#511B00] mr-3 rounded-full flex items-center" />
                            <p>
                                R&K Trading<br />
                                Kobe Steel<br />
                                Nippon Steel<br />
                                JFE
                            </p>
                        </div>
                    </div>
                    <div class="row-span-1 grid grid-cols-2 mt-2">
                        <div class="col-span-1 flex">
                            <div class="w-[14px] h-[14px] mt-2 bg-[#00D172] mr-3 rounded-full flex items-center" />
                            <p>BlueScope Steel</p>
                        </div>
                        <div class="col-span-1 flex ">
                            <div class="w-[14px] h-[14px] mt-2 bg-[#DD10C0] mr-3 rounded-full flex items-center" />
                            <p>Chunghung <br /> CSC <br /> Shang Hsing</p>
                        </div>
                    </div>
                    <div class="row-span-1 grid grid-cols-1 mt-2">
                        <div class="col-span-1 flex">
                            <div class="w-[14px] h-[14px] mt-2 bg-[#322783] mr-3 rounded-full flex items-center" />
                            <p>
                                HBIS Group<br />
                                Baosteel<br />
                                Xi Wang Group<br />
                                Zhejiang Huada New Materials
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End: Map -->

    <!-- Begin: News Home -->
    <div class="max-w-screen-main mx-auto px-4 py-16">
        <div class="grid grid-cols-2 gap-[120px]">
            <div class="col-span-1">
                <div
                    class="relative before:absolute before:h-full before:w-[4px] before:left-0 before:bg-primary flex justify-between items-center"
                >
                    <h1 class="pl-5 font-extrabold text-2xl ">D??? ??n ???? tri???n khai</h1>
                    <a href="/" class="flex items-center "
                        ><p class="text-primary mr-3 font-bold">Xem th??m</p>
                        <a href="/" class="w-[20px] h-[20px] flex justify-center items-center bg-primary rounded-full ">
                            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 0L8.2375 1.7625L15.2125 8.75H0V11.25H15.2125L8.2375 18.2375L10 20L20 10L10 0Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </a>
                </div>
                <div class=" w-auto">
                    <Swiper
                        grabCursor={true}
                        spaceBetween={10}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        class="imgNewSlide"
                    >
                        <SwiperSlide class="mt-6 relative">
                            <div>
                                <img src={imgNewsHome1} alt="" class="w-full object-cover relative " />

                                <h1 class="mt-6 font-bold text-lg">B??? ngo???i giao</h1>
                                <p class="mt-3 font-medium">
                                    Vietmetal lu??n chu???n b??? s???n s??ng ????? ????p ???ng c??c d???ch v??? c???t ho???c x??? c?? ch??nh x??c cao v?? y??u c???u ph???c t???p
                                    v???i s??? ?????u t?? c???a m??y m??c Nh???t B???n, k??? s?? l??nh ngh??? v?? c??ng nh??n gi??u kinh nghi???m.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div class="col-span-1">
                <div
                    class="relative before:absolute before:h-full before:w-[4px] before:left-0 before:bg-primary flex justify-between items-center"
                >
                    <h1 class="pl-5 font-extrabold text-2xl">Tin n???i b???t</h1>
                    <a href="/" class="flex items-center "
                        ><p class="text-primary mr-3 font-bold">Xem th??m</p>
                        <a href="/" class="w-[20px] h-[20px] flex justify-center items-center bg-primary rounded-full ">
                            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 0L8.2375 1.7625L15.2125 8.75H0V11.25H15.2125L8.2375 18.2375L10 20L20 10L10 0Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </a>
                </div>
                <div class="">
                    <a href="/" class="py-8 flex border-b-[1px] border-gray-200 ">
                        <img src={imgNewsHome2} alt="" />
                        <div class="ml-5">
                            <h2 class="font-bold text-sm text-[#413EFF]">Th??ng b??o</h2>
                            <h1 class="font-bold text-lg">M???ng m??u s??ng t???i trong b???c tranh kinh doanh ng??nh th??p</h1>
                            <p class="font-normal text-sm text-gray-300">16.10.2022</p>
                        </div>
                    </a>
                    <a href="/" class="py-8 flex border-b-[1px] border-gray-200 ">
                        <img src={imgNewsHome2} alt="" />
                        <div class="ml-5">
                            <h2 class="font-bold text-sm text-[#413EFF]">Th??ng b??o</h2>
                            <h1 class="font-bold text-lg">M???ng m??u s??ng t???i trong b???c tranh kinh doanh ng??nh th??p</h1>
                            <p class="font-normal text-sm text-gray-300">16.10.2022</p>
                        </div>
                    </a>
                    <a href="/" class="py-8 flex">
                        <img src={imgNewsHome2} alt="" />
                        <div class="ml-5">
                            <h2 class="font-bold text-sm text-[#413EFF]">Th??ng b??o</h2>
                            <h1 class="font-bold text-lg">M???ng m??u s??ng t???i trong b???c tranh kinh doanh ng??nh th??p</h1>
                            <p class="font-normal text-sm text-gray-300">16.10.2022</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- End: News Home -->

    <!-- Begin: Form -->
    <div class="bg-[url('$lib/image/imgForm.png')] bg-no-repeat bg-center bg-cover">
        <div class="max-w-screen-main mx-auto px-4 py-16">
            <h1 class="mb-12 font-extrabold text-4xl text-white flex items-center justify-center">B???n ch??o h??ng</h1>
            <form action="" method="post" class="grid grid-cols-12 gap-7">
                <div class="col-span-4 itemForm">
                    <img src={iconUser} alt="" class="iconFormImg" />
                    <input type="text" placeholder="T??n ng?????i li??n l???c" class="itemFormInput" required />
                </div>
                <div class="col-span-4 itemForm">
                    <img src={iconBusiness} alt="" class="iconFormImg" />
                    <input type="text" placeholder="T??n c??ng ty" class="itemFormInput" required />
                </div>
                <div class="col-span-4 itemForm">
                    <img src={iconBusiness} alt="" class="iconFormImg" />
                    <input type="text" placeholder="T??n ngh???" class="itemFormInput" required />
                </div>
                <div class="col-span-6 itemForm">
                    <img src={iconEmail} alt="" class="iconFormImg" />
                    <input type="text" placeholder="?????a ch??? email" class="itemFormInput" required />
                </div>
                <div class="col-span-6 itemForm">
                    <img src={iconBox} alt="" class="iconFormImg" />
                    <input type="text" placeholder="S???n ph???m" class="itemFormInput" required />
                </div>
                <div class="col-span-6 itemForm">
                    <img src={IconRuler} alt="" class="iconFormImg" />
                    <input type="text" placeholder="????? d??y" class="itemFormInput" required />
                </div>
                <div class="col-span-6 itemForm">
                    <img src={IconRuler} alt="" class="iconFormImg" />
                    <input type="text" placeholder="Chi???u r???ng" class="itemFormInput" required />
                </div>
                <div class="col-span-12 itemForm">
                    <img src={iconChat} alt="" class="iconFormImg" />
                    <input type="text" placeholder="Y??u c???u ?????c bi???t kh??c" class="itemFormInput" required />
                </div>

                <div class=" flex justify-center items-center  col-span-12 mt-12">
                    <button type="submit" class="btn-primary font-semibold text-sm uppercase py-4 px-9 w-fit">G???i y??u c???u</button>
                </div>
            </form>
        </div>
    </div>
    <!-- End: Form -->
</section>
