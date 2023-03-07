<script>
    import iconLogoColor from '$lib/image/LogoColor.png';
    import iconYoutube from '$lib/image/iconYoutube.png';
    import iconFace from '$lib/image/iconFace.png';
    import iconZalo from '$lib/image/iconZalo.png';
    import iconLocation from '$lib/image/iconLocation.png';
    import iconUser from '$lib/image/iconUserFooter.png';
    import imgMember from '$lib/image/imgMember.png';
</script>

<section>
    <div class="bg-[#F3F5F8] py-14">
        <div class="max-w-screen-main mx-auto px-4 grid grid-cols-12 gap-7">
            <div class="col-span-3">
                <h1
                    class="font-bold text-lg uppercase py-4 relative before:absolute before:bottom-0 before:w-full before:h-[3px] before:bg-primary"
                >
                    Về chúng tôi
                </h1>
                <div class="flex flex-col mt-2 font-semibold text-sm text-[#777E90]">
                    <a href="/" class="mb-1 hover:text-gray-700">Giới thiệu</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Lời ngỏ của lãnh đạo</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Quy trình hoạt động</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Tin tức - Sự kiện</a>
                </div>
            </div>
            <div class="col-span-3">
                <h1
                    class="font-bold text-lg uppercase py-4 relative before:absolute before:bottom-0 before:w-full before:h-[3px] before:bg-bluePrimary"
                >
                    Dịch vụ
                </h1>
                <div class="flex flex-col mt-2 font-semibold text-sm text-[#777E90]">
                    <a href="/" class="mb-1 hover:text-gray-700">Cung cấp thép</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Dịch vụ cho thuê</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Chế tạo - Kết cấu thép</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Dịch vụ cắt xẻ</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Dịch vụ vận chuyển</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Lời mời hợp tác</a>
                </div>
            </div>
            <div class="col-span-3">
                <h1
                    class="font-bold text-lg uppercase py-4 relative before:absolute before:bottom-0 before:w-full before:h-[3px] before:bg-primary"
                >
                    Sản phẩm
                </h1>
                <div class="flex flex-col mt-2 font-semibold text-sm text-[#777E90]">
                    <a href="/" class="mb-1 hover:text-gray-700">Thép cuộn</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Thép cuộn mạ nhúng nóng</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Các sản phẩm khác</a>
                </div>
            </div>
            <div class="col-span-3">
                <h1
                    class="font-bold text-lg uppercase py-4 relative before:absolute before:bottom-0 before:w-full before:h-[3px] before:bg-bluePrimary"
                >
                    Thông tin
                </h1>
                <div class="flex flex-col mt-2 font-semibold text-sm text-[#777E90]">
                    <a href="/" class="mb-1 hover:text-gray-700">Ngành ứng dụng</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Dự án đã triển khai</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Tuyển dụng</a>
                    <a href="/" class="mb-1 hover:text-gray-700">Liên hệ</a>
                </div>
            </div>
        </div>
    </div>
    <div class="max-w-screen-main mx-auto px-4 grid grid-cols-12 gap-7 py-14">
        <div class="col-span-3">
            <img src={iconLogoColor} alt="" />
            <h2 class="font-bold text-sm my-2 uppercase">Công ty Cổ Phần Kim Khí Việt</h2>
            <div class="flex items-center">
                <img src={iconYoutube} alt="" class="w-[22px] h-[22px]" />
                <img src={iconFace} alt="" class="w-[22px] h-[22px] ml-3" />
                <img src={iconZalo} alt="" class="w-[22px] h-[22px] ml-3" />
            </div>
        </div>
        <div class="col-span-3">
            <div class="mb-5 flex items-center">
                <img src={iconLocation} alt="" class="w-[20px] h-[20px]" />
                <span class="uppercase font-bold text-lg ml-3">Địa chỉ</span>
            </div>
            <div class="font-medium text-sm text-[#353945]">
                <p class="mb-5">
                    Trụ sở chính:<br />
                    Khu Hành chính số 8, Phường Đống Đa, Thành phố Vĩnh Yên, Tỉnh Vĩnh Phúc.
                </p>
                <p>
                    Nhà Máy & Văn phòng giao dịch:<br />
                    Lô 29A KCN Quang Minh, Huyện Mê Linh, Thành phố Hà Nội.
                </p>
            </div>
        </div>
        <div class="col-span-3">
            <div class="mb-5 flex items-center">
                <img src={iconUser} alt="" class="w-[20px] h-[20px]" />
                <span class="uppercase font-bold text-lg ml-3">Đại diện bán hàng</span>
            </div>
            <div class="flex mt-5">
                <div class="w-[50px] h-[50px] rounded-full">
                    <img src={imgMember} alt="" class=" rounded-full w-full h-full">
                </div>
                <div class="ml-3">
                    <h2 class="font-bold text-sm">Ms. Vân Anh</h2>
                    <p class="font-medium text-sm text-primary">(Trưởng phòng Kinh doanh)</p>
                    <p class="font-medium text-xs">Mobile: 0904 946 232<br/>
                        Email: anhnv@melinsteel.vn</p>
                </div>
            </div>
            <div class="flex mt-5">
                <div class="w-[50px] h-[50px] rounded-full">
                    <img src={imgMember} alt="" class=" rounded-full w-full h-full">
                </div>
                <div class="ml-3">
                    <h2 class="font-bold text-sm">Ms. Vân Anh</h2>
                    <p class="font-medium text-sm text-primary">(Trưởng phòng Kinh doanh)</p>
                    <p class="font-medium text-xs">Mobile: 0904 946 232<br/>
                        Email: anhnv@melinsteel.vn</p>
                </div>
            </div>
        </div>
        <div class="col-span-3">
            <div class="mb-5 flex items-center">
                <img src={iconUser} alt="" class="w-[20px] h-[20px]" />
                <span class="uppercase font-bold text-lg ml-3">Đại diện phòng XNK</span>
            </div>
            <div class="flex mt-5">
                <div class="w-[50px] h-[50px] rounded-full">
                    <img src={imgMember} alt="" class=" rounded-full w-full h-full">
                </div>
                <div class="ml-3">
                    <h2 class="font-bold text-sm">Ms. Vân Anh</h2>
                    <p class="font-medium text-sm text-primary">(Trưởng phòng Kinh doanh)</p>
                    <p class="font-medium text-xs">Mobile: 0904 946 232<br/>
                        Email: anhnv@melinsteel.vn</p>
                </div>
            </div>
            <div class="flex mt-5">
                <div class="w-[50px] h-[50px] rounded-full">
                    <img src={imgMember} alt="" class=" rounded-full w-full h-full">
                </div>
                <div class="ml-3">
                    <h2 class="font-bold text-sm">Ms. Vân Anh</h2>
                    <p class="font-medium text-sm text-primary">(Trưởng phòng Kinh doanh)</p>
                    <p class="font-medium text-xs">Mobile: 0904 946 232<br/>
                        Email: anhnv@melinsteel.vn</p>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-bluePrimary py-5 "><div class="max-w-screen-main mx-auto px-4 font-medium text-sm text-white">Copyright © 2022 Vietmetal. All Rights Reserved.</div></div>
</section>
