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

    <!-- Begin: About -->
    <div class="relative">
        <div class="max-w-screen-main mx-auto px-4 py-[129px] flex justify-end items-center">
            <div class="absolute left-0 top-[20%]">
                <img src={imgAboutHome} alt="" />
            </div>
            <div class="flex flex-col w-[50%] right-0">
                <h1 class="font-extrabold text-4xl mb-6">Về chúng tôi</h1>
                <span>
                    <p class="font-bold mb-3">
                        Công ty Cổ Phần Kim Khí Việt được thành lập tháng 01/2022. Đến nay tên tuổi Công ty được biết đến rộng khắp với
                        thương hiệu “THÉP Vietmetal”.
                    </p>

                    <p class="font-medium mb-3">
                        Nhà máy của Công ty cổ phần Thép Vietmetal được xây dựng theo mô hình các trung tâm dịch vụ gia công cắt xẻ thép
                        cuộn hiện đại của Nhật Bản, với các dây chuyền máy móc thiết bị chính của Công ty được mua từ Nhật Bản, có tính
                        chính xác và tự động hóa cao, đảm bảo chất lượng sản phẩm theo yêu cầu đa dạng của khách hàng.
                    </p>
                    <p class="font-medium">
                        Quy trình quản lý vận hành và hệ thống quản trị chất lượng của Công ty được áp dụng theo quy chuẩn Nhật Bản, cùng
                        với đội ngũ cán bộ nhân viên có trình độ chuyên môn cao, kỹ năng tay nghề thuần thục, giúp cho Công ty có thể đáp
                        ứng được những yêu cầu khắt khe nhất của khách hàng.
                    </p>
                </span>
                <button class="btn-primary max-w-fit mt-8 px-9 py-4 hover:bg-[#b0161f] transition-all uppercase">Xem thêm</button>
            </div>
        </div>
        <div class="bg-primary py-10">
            <div class="max-w-screen-main mx-auto px-4 grid grid-cols-12">
                <div class="flex flex-col items-center justify-center px-8 text-white col-span-3 border-r-[1px] border-gray-100">
                    <img src={iconAboutHome1} alt="" class="w-[40px] h-[40px]" />
                    <p class="font-medium text-sm my-4">Hỗ trợ gia công</p>
                    <h1 class="font-extrabold text-5xl">10,000</h1>
                    <h3 class="font-bold text-lg mt-4">Tấn/năm</h3>
                </div>
                <div class="flex flex-col items-center justify-center px-8 text-white col-span-3 border-r-[1px] border-gray-100">
                    <img src={iconAboutHome2} alt="" class="w-[40px] h-[40px]" />
                    <p class="font-medium text-sm my-4">Cung cấp nguyên liệu</p>
                    <h1 class="font-extrabold text-5xl">72,000</h1>
                    <h3 class="font-bold text-lg mt-4">Tấn/năm</h3>
                </div>
                <div class="flex flex-col items-center justify-center px-8 text-white col-span-3 border-r-[1px] border-gray-100">
                    <img src={iconAboutHome3} alt="" class="w-[40px] h-[40px]" />
                    <p class="font-medium text-sm my-4">Nhà cung cấp trên toàn thế giới</p>
                    <h1 class="font-extrabold text-5xl">20+</h1>
                    <h3 class="font-bold text-lg mt-4">Nhà cung cấp</h3>
                </div>
                <div class="flex flex-col items-center justify-center px-8 text-white col-span-3">
                    <img src={iconAboutHome4} alt="" class="w-[40px] h-[40px]" />
                    <p class="font-medium text-sm my-4">Khách hàng sản xuất tại Việt Nam</p>
                    <h1 class="font-extrabold text-5xl">200+</h1>
                    <h3 class="font-bold text-lg mt-4">Khách hàng</h3>
                </div>
            </div>
        </div>
    </div>
    <!-- End: About -->

    <!-- Begin: Service -->
    <div class="bg-[#F3F5F8]">
        <div class="max-w-screen-main mx-auto px-4 pb-[94px]">
            <h1 class="font-extrabold text-4xl py-[70px] text-center uppercase">Dịch vụ</h1>
            <div class="grid grid-cols-12 gap-8 mx-auto px-3">
                <div class="col-span-4 ">
                    <a href="/" class="overflow-hidden block"
                        ><img src={imgServiceHome1} alt="" class="cursor-pointer hover:scale-[1.1] transition-all w-full" /></a
                    >

                    <div
                        class="flex text-black p-6 flex-col mx-6 mt-[-35px] bg-white relative z-10 item-service-home hover:bg-bluePrimary hover:text-white transition-all"
                    >
                        <div>
                            <h1 class="title-item-service-home font-bold text-lg transition-all">Cung cấp thép</h1>
                        </div>
                        <p class="mt-4 font-medium text-sm text-[#141416] h-[170px]">
                            Chúng tôi cung cấp thép cho các nhà phân phối và khách hàng cuối cùng trong nhiều lĩnh vực sử dụng thép như công
                            nghiệp ô tô, xây dựng, vật liệu xây dựng và....
                        </p>
                        <a href="/" class="mt-5 font-semibold text-base uppercase text-bluePrimary btn-item-service-home">Xem thêm</a>
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
                            <h1 class="title-item-service-home font-bold text-lg transition-all">Chế tạo liên kết thép</h1>
                        </div>
                        <p class="mt-4 font-medium text-sm text-[#141416] h-[170px]">
                            Với những dự án công ty đã tham gia, chúng tôi có thể mang đến sự hỗ trợ trong chế tạo hoặc kết cấu sản phẩm
                            thép ở một hoặc nhiều công đoạn cho những khách hàng sản xuất.
                        </p>
                        <a href="/" class="mt-5 font-semibold text-base uppercase text-bluePrimary btn-item-service-home">Xem thêm</a>
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
                            <h1 class="title-item-service-home font-bold text-lg transition-all">Dịch vụ cắt xẻ</h1>
                        </div>
                        <p class="mt-4 font-medium text-sm text-[#141416] h-[170px]">
                            Vietmetal luôn chuẩn bị sẵn sàng để đáp ứng các dịch vụ cắt hoặc xẻ có chính xác cao và yêu cầu phức tạp với sự
                            đầu tư của máy móc Nhật Bản, kỹ sư lành nghề và công nhân giàu kinh nghiệm.
                        </p>
                        <a href="/" class="mt-5 font-semibold text-base uppercase text-bluePrimary btn-item-service-home">Xem thêm</a>
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
                            <h1 class="title-item-service-home font-bold text-lg transition-all">Dịch vụ cho thuê</h1>
                        </div>
                        <p class="mt-4 font-medium text-sm text-[#141416] h-[170px]">
                            Chúng tôi mang đến một giải pháp trọn vẹn cho thuê văn phòng và nhả xưởng để hỗ trợ các doanh nghiệp sản xuất.
                            Để đồng hành cùng doanh nghiệp trong suốt chặng đường trở thành đối tác lâu dài, chúng tôi sẽ chia sẻ sự hiểu
                            biết lẫn nguồn lực của mình để bạn có thể đưa ra quyết định tốt nhất cho doanh nghiệp của bạn.
                        </p>
                        <a href="/" class="mt-5 font-semibold text-base uppercase text-bluePrimary btn-item-service-home">Xem thêm</a>
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
                            <h1 class="title-item-service-home font-bold text-lg transition-all">Lời mời hợp tác</h1>
                        </div>
                        <p class="mt-4 font-medium text-sm text-[#141416] h-[170px]">
                            Chúng tôi luôn chào đón các lời mời hợp tác sản xuất vật liệu liên quan đến thép để tạo giá trị cho ngành công
                            nghiệp
                        </p>
                        <a href="/" class="mt-5 font-semibold text-base uppercase text-bluePrimary btn-item-service-home">Xem thêm</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End: Service -->

    <!-- Begin: Product -->
    <div class="flex flex-col">
        <h1 class="font-extrabold text-4xl py-[70px] text-center bg-bluePrimary text-white uppercase">Sản phẩm</h1>
        <div class="grid grid-cols-12 gap-[3px] h-[200px]]">
            <div class=" overflow-hidden  col-span-4">
                <div class="bg-[url('$lib/image/imgProductHome1.png')] h-[670px] w-full bg-no-repeat bg-center bg-cover ">
                    <div class=" flex flex-col items-center justify-center h-full w-[75%] mx-auto">
                        <h1
                            class="font-bold text-2xl pb-6 text-white relative before:absolute before:h-[2px] before:w-[60px] before:bg-white before:bottom-0 before:left-[50%] before:translate-x-[-50%]"
                        >
                            Thép cuộn
                        </h1>
                        <p class="text-white mt-6 font-normal text-sm text-center">
                            Thép cuộn là một sản phẩm thép được sản xuất với bề mặt trơn hoặc có gân dưới dạng cuộn tròn, được sản xuất bằng
                            một quy trình tinh luyện phức tạp, đòi hỏi trình độ kỹ thuật và công nghệ cao.
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
                            Thép cuộn sơn phủ bề mặt
                        </h1>
                        <p class="text-white mt-6 font-normal text-sm text-center">
                            Thép cuộn là một sản phẩm thép được sản xuất với bề mặt trơn hoặc có gân dưới dạng cuộn tròn, được sản xuất bằng
                            một quy trình tinh luyện phức tạp, đòi hỏi trình độ kỹ thuật và công nghệ cao.
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
                            Các sản phẩm khác
                        </h1>
                        <p class="text-white mt-6 font-normal text-sm text-center">
                            Thép cuộn là một sản phẩm thép được sản xuất với bề mặt trơn hoặc có gân dưới dạng cuộn tròn, được sản xuất bằng
                            một quy trình tinh luyện phức tạp, đòi hỏi trình độ kỹ thuật và công nghệ cao.
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
                    Công ty Cổ Phần Kim Khí Việt tự hào khi có mạng lưới hệ thống nhập khẩu đa dạng để phục vụ các khách hàng sản xuất trong
                    và ngoài nước. Trong suốt thời gian qua, chúng tôi được sự tin tưởng từ những nhà cung cấp lẫn khách hàng và không ngừng
                    phát tiển để trở thành công ty phân phối thép hàng đầu Việt Nam.
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
                    <h1 class="pl-5 font-extrabold text-2xl ">Dự án đã triển khai</h1>
                    <a href="/" class="flex items-center "
                        ><p class="text-primary mr-3 font-bold">Xem thêm</p>
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

                                <h1 class="mt-6 font-bold text-lg">Bộ ngoại giao</h1>
                                <p class="mt-3 font-medium">
                                    Vietmetal luôn chuẩn bị sẵn sàng để đáp ứng các dịch vụ cắt hoặc xẻ có chính xác cao và yêu cầu phức tạp
                                    với sự đầu tư của máy móc Nhật Bản, kỹ sư lành nghề và công nhân giàu kinh nghiệm.
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
                    <h1 class="pl-5 font-extrabold text-2xl">Tin nổi bật</h1>
                    <a href="/" class="flex items-center "
                        ><p class="text-primary mr-3 font-bold">Xem thêm</p>
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
                            <h2 class="font-bold text-sm text-[#413EFF]">Thông báo</h2>
                            <h1 class="font-bold text-lg">Mảng màu sáng tối trong bức tranh kinh doanh ngành thép</h1>
                            <p class="font-normal text-sm text-gray-300">16.10.2022</p>
                        </div>
                    </a>
                    <a href="/" class="py-8 flex border-b-[1px] border-gray-200 ">
                        <img src={imgNewsHome2} alt="" />
                        <div class="ml-5">
                            <h2 class="font-bold text-sm text-[#413EFF]">Thông báo</h2>
                            <h1 class="font-bold text-lg">Mảng màu sáng tối trong bức tranh kinh doanh ngành thép</h1>
                            <p class="font-normal text-sm text-gray-300">16.10.2022</p>
                        </div>
                    </a>
                    <a href="/" class="py-8 flex">
                        <img src={imgNewsHome2} alt="" />
                        <div class="ml-5">
                            <h2 class="font-bold text-sm text-[#413EFF]">Thông báo</h2>
                            <h1 class="font-bold text-lg">Mảng màu sáng tối trong bức tranh kinh doanh ngành thép</h1>
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
            <h1 class="mb-12 font-extrabold text-4xl text-white flex items-center justify-center">Bản chào hàng</h1>
            <form action="" method="post" class="grid grid-cols-12 gap-7">
                <div class="col-span-4 itemForm">
                    <img src={iconUser} alt="" class="iconFormImg" />
                    <input type="text" placeholder="Tên người liên lạc" class="itemFormInput" required />
                </div>
                <div class="col-span-4 itemForm">
                    <img src={iconBusiness} alt="" class="iconFormImg" />
                    <input type="text" placeholder="Tên công ty" class="itemFormInput" required />
                </div>
                <div class="col-span-4 itemForm">
                    <img src={iconBusiness} alt="" class="iconFormImg" />
                    <input type="text" placeholder="Tên nghề" class="itemFormInput" required />
                </div>
                <div class="col-span-6 itemForm">
                    <img src={iconEmail} alt="" class="iconFormImg" />
                    <input type="text" placeholder="Địa chỉ email" class="itemFormInput" required />
                </div>
                <div class="col-span-6 itemForm">
                    <img src={iconBox} alt="" class="iconFormImg" />
                    <input type="text" placeholder="Sản phẩm" class="itemFormInput" required />
                </div>
                <div class="col-span-6 itemForm">
                    <img src={IconRuler} alt="" class="iconFormImg" />
                    <input type="text" placeholder="Độ dày" class="itemFormInput" required />
                </div>
                <div class="col-span-6 itemForm">
                    <img src={IconRuler} alt="" class="iconFormImg" />
                    <input type="text" placeholder="Chiều rộng" class="itemFormInput" required />
                </div>
                <div class="col-span-12 itemForm">
                    <img src={iconChat} alt="" class="iconFormImg" />
                    <input type="text" placeholder="Yêu cầu đặc biệt khác" class="itemFormInput" required />
                </div>

                <div class=" flex justify-center items-center  col-span-12 mt-12">
                    <button type="submit" class="btn-primary font-semibold text-sm uppercase py-4 px-9 w-fit">Gửi yêu cầu</button>
                </div>
            </form>
        </div>
    </div>
    <!-- End: Form -->
</section>
