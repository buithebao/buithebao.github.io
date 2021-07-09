var footer_landing = document.getElementById("footer_landing");
var url = window.location.href;
var bien_domain = window.location.href;
var domain1 = window.location.hostname;

var bienmain = `
<div class="container container-fix">
    <div class="d_flex-sb">
`;

var bienmot  = `
        <div class="colum-all-ft colum-1">
            <div class="widget01"> 
                <img class="" alt="logo-footer01" src="https://thucucsaigon.vn/m/images/footer/logo-footer01.png">
                <p>
                    ĐK kinh doanh số: 0108598307<br>
                    Sở Kế hoạch và Đầu tư HN cấp ngày 22/01/2019
                </p>
            </div>
        </div> 
`;

var bienhai = `
        <div class="colum-all-ft colum-2">
            <div class="widget01">
`;
        switch(domain1) {
            case 'thucucclinics.com':
            bientencty = `
                <h5 class="widget01-title">Công ty CP Trang Trinh Beauty & Clinic</h5>
            `;
            break;
            default:
            bientencty = `
                <h5 class="widget01-title">Công ty CP Trang Trinh Beauty & Clinic</h5>
            `;
            break;
        }
var bienhai_2 = `
                <p>
                    <!--<a href="#" rel="nofflow">
                        <b>BỆNH VIỆN THẨM MỸ Trang Trinh Beauty & Clinic</b><br>
                        72 Đường Đôi Tân Mai,Hoàng Mai-Hà Nội
                    </a>-->
                    72 Đường Đôi Tân Mai,Hoàng Mai-Hà Nội
                </p>
                <div class="ft-box-lh text-md-center">
                    <ul>
                       
                        <li>
                            <a href="tel:0934821991">Hotline: 0934821991</a>
                        </li>
                        <li>
`;
                    switch(domain1) {
                        case 'thucucclinics.com':
                        bienmail = `
                            <a href="mailto:s.trangtrinh@gmail.com">s.trangtrinh@gmail.com</a>
                        `;
                        break;
                        default:
                        bienmail = `
                            <a href="mailto:s.trangtrinh@gmail.com">s.trangtrinh@gmail.com</a>
                        `;
                        break;
                    }
var bienhai_3 = `
                        </li>
                        <li>
                            <a href="https://www.gmail.com/" rel="nofflow">Thẩm Mỹ Trang Trinh Beauty & Clinic</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/TrangTrinhSpa" rel="nofflow">Thẩm Mỹ Trang Trinh Beauty & Clinic</a>
                        </li>
                        <li>
                            <a href="#" rel="nofflow">Thẩm Mỹ Trang Trinh Beauty & Clinic</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
`;

var bienba = `
        <div class="colum-all-ft colum-3">                    
            <div class="widget01">
                <h5 class="widget01-title">Thẩm Mỹ Trang Trinh Beauty & Clinic</h5>
                <div class="dc_hn">
                    <ul>
                        <li>
                            <a href="#" rel="nofflow">
                                <span>72 Đường Đôi Tân Mai,Hoàng Mai-Hà Nội</span>
                            </a>
                        </li>
                    </ul>
                </div>
`;
                switch(domain1) {
                // case 'thammythucuc.vn':
                // bienba_diachi = ``;
                // break;
                default:
                bienba_diachi = ` 
                <br/>
               
                `;
                break;
                }

            switch(domain1) {
                case 'thammythucuc.vn':
                bienba_baomat = `
                    <br/>
                    <span class="ft-chititet-ht"><a href="https://thammythucuc.vn/policy" rel="nofflow" target="_blank">Chính sách bảo mật</a></span> | 
                    <span class="ft-chititet-ht"><a href="https://thammythucuc.vn/dieu-khoan-dich-vu" rel="nofflow" target="_blank">Điều khoản dịch vụ</a></span>
                `;
                break;
                case 'thucucsaigon.vn':
                bienba_baomat = `
                    <br/>
                    <p class="ft-chititet-ht"><a href="/he-thong-clinics/" rel="nofflow" target="_blank">Click xem chi tiết</a></p>
                    <span class="ft-chititet-ht"><a href="https://thucucsaigon.vn/policy" rel="nofflow" target="_blank">Chính sách bảo mật</a></span> | 
                    <span class="ft-chititet-ht"><a href="https://thucucsaigon.vn/dieu-khoan-dich-vu" rel="nofflow" target="_blank">Điều khoản dịch vụ</a></span>
                `;
                break;
                 case 'thucucclinics.com':
                bienba_baomat = `
                    <br/>
                    <p class="ft-chititet-ht"><a href="/he-thong-clinics/" rel="nofflow" target="_blank">Click xem chi tiết</a></p>
                    <span class="ft-chititet-ht"><a href="https://thucucclinics.com/policy" rel="nofflow" target="_blank">Chính sách bảo mật</a></span> | 
                    <span class="ft-chititet-ht"><a href="https://thucucclinics.com/dieu-khoan-dich-vu" rel="nofflow" target="_blank">Điều khoản dịch vụ</a></span>
                `;
                break;
                default:
                bienba_baomat = ``;
                break;
            }

var bienmainhai = `
            </div>
        </div>
    </div>    
</div>
`;
switch(domain1) {
    // case 'thammythucuc.vn':
    // case 'benhvienthammythucuc.vn':
    // text_chuthich = ``;
    // break;
    default:
    text_chuthich = `
    <div class="container container-fix">
        <div class="text_note">
            <div class="colum_1"></div>
            <div class="colum_2">*Công ty Cổ phần Bệnh viện Thẩm mỹ Trang Trinh là đối tác hợp tác của Công ty CP Trang Trinh Beauty & Clinic</div>
        </div>
    </div>
    `;
    break;
}
var footer_landing_html = bienmain+' '+bienmot+' '+bienhai+' '+bientencty+' '+bienhai_2+' '+bienmail+' '+bienhai_3+' '+bienba+' '+bienba_diachi+' '+bienba_baomat+' '+bienmainhai+' '+text_chuthich;


// var call_landing = document.getElementById("call_landing");
// if (bien_domain.match('/landing/')) {
//     var call_landing_1 = `
//     <!-- ----- -->
//     <div class="box-lhe-bottom-new">
//         <div class="d_flex-sb1">
//             <div class="colum-1">
//                 <a class="d-none d-md-block btn fix-bt-bot btn-dangky-mb" data-toggle="modal" href="#myModal2">
//                     <img src="https://thucucsaigon.vn/m/images/btn_hotline__12.png" width="160" alt="btn_hotline__1">
//                 </a>
//                 <a class="d-md-none btn fix-bt-bot btn-dangky-mb" data-toggle="modal" href="#myModal2">
//                     <img src="https://thucucsaigon.vn/m/images/btn_hotline__1.png" width="160" alt="btn_hotline__1">
//                 </a>
//             </div>
//             <div class="colum-1">
//     `;
//     if (bien_domain.match('/landing/thu-cuc-uu-dai/')) {
//             bien_dky_1 = `
//                 <a class="section-scroll btn fix-bt-bot btn-dangky-mb" href="#dangkyngay">
//             `;
//     } else if (bien_domain.match('/landing/cat-mi-pro-mini-deep/')) {
//             bien_dky_1 = `
//                 <a class="section-scroll btn fix-bt-bot btn-dangky-mb" href="#dangky__bt">
//             `;
//     }  else {
//             bien_dky_1 = `
//                 <a class="section-scroll btn fix-bt-bot btn-dangky-mb" href="#dangky">
//             `;
//     }            
//     var call_landing_2 = `
//                    <img src="https://thucucsaigon.vn/m/images/btn_dangkyngay__1.png" width="160" alt="btn_dangkyngay__1">
//                 </a>
//             </div>
//         </div>
//     </div>
//     <!-- ----- -->
//     `;
//     var call_landing_html = call_landing_1+' '+bien_dky_1+' '+call_landing_2;
// } else {
//     var call_landing_html = `
//     <!-- ----- -->
//     <div class="box-lhe-bottom-all box-lhe-bottom-dt">
//         <div id="nml-alo-phoneIcon" class="nml-alo-phone nml-alo-green nml-alo-show ">
//             <div class="nml-alo-ph-circle"></div>
//             <div class="nml-alo-ph-circle-fill"></div>
//             <div class="nml-alo-ph-img-circle">
//                 <a href="tel:0964 080 999"><img alt="img" src="https://thucucsaigon.vn/m/images/phone-ring-flat.png" width="51" data-pin-nopin="true"></a>
//             </div>
//         </div>
//         <div class="dangky_style_1">
//             <a class="section-scroll btn btn-dangky-dt" href="#dangky">
//                 <svg class="icon" style="width: 1.2em; height: 1.2em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2274">
//                 <path d="M507.428571 676.571429l66.285715-66.285715-86.857143-86.857143-66.285714 66.285715v32h54.857142v54.857143h32z m251.428572-411.428572q-9.142857-9.142857-18.857143 0.571429L540 465.714286q-9.714286 9.714286-0.571429 18.857143t18.857143-0.571429l200-200q9.714286-9.714286 0.571429-18.857143z m45.714286 339.428572v108.571428q0 68-48.285715 116.285714T640 877.714286H164.571429q-68 0-116.285715-48.285715T0 713.142857V237.714286q0-68 48.285714-116.285715T164.571429 73.142857h475.428571q36 0 66.857143 14.285714 8.571429 4 10.285714 13.142858 1.714286 9.714286-5.142857 16.571428l-28 28q-8 8-18.285714 4.571429-13.142857-3.428571-25.714286-3.428572H164.571429q-37.714286 0-64.571429 26.857143t-26.857143 64.571429v475.428571q0 37.714286 26.857143 64.571429t64.571429 26.857143h475.428571q37.714286 0 64.571429-26.857143t26.857142-64.571429v-72q0-7.428571 5.142858-12.571428l36.571428-36.571429q8.571429-8.571429 20-4t11.428572 16.571429z m-54.857143-421.714286l164.571428 164.571428-384 384H365.714286V566.857143z m253.714285 75.428571l-52.571428 52.571429-164.571429-164.571429 52.571429-52.571428q16-16 38.857143-16t38.857143 16l86.857142 86.857143q16 16 16 38.857142t-16 38.857143z" p-id="2275"></path>
//                 </svg> Đăng ký ngay
//             </a>
//         </div>
//     </div>
//     <div class="box-lhe-bottom-mb">
//         <div class="d_flex-sb1">
//             <div class="colum-1">
//                 <a class="btn fix-bt-bot btn-dangky-mb" data-toggle="modal" href="#myModal2">
//                     ✆&nbsp;&nbsp;GỌI NGAY
//                 </a>
//             </div>
//             <div class="colum-1">
//                 <a class="section-scroll btn fix-bt-bot btn-dangky-mb" href="#dangky">
//                    ✎&nbsp;&nbsp;ĐĂNG KÝ
//                 </a>
//             </div>
//         </div>
//     </div>
//     <!-- ----- -->
//     `;
// }
var url = window.location.href;
var form_goi_lai = document.getElementById("contactFormGoiLai");
if (bien_domain.match('/landing/') || bien_domain.match('/online/') || bien_domain.match('/thucucclinics.com/')) {
    var form_goi_lai_html = `

    <div id="myModal2" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" style="top: 60px;">
            <div class="modal-content">
                <div class="modal-header flex-wrap border-0">
                    <button class="close" type="button" data-dismiss="modal">×</button>
                    <div class="clearfix"></div>
                    <div class="v-form-fixed-2  w-100 v-form-fixed ">
                        <div class="logo" style="text-align: center;"><img src="https://thammythucuc.vn/logo/logo_xanh.png" width="120" alt="Logo"></div>
                        <div class="v-form-description" style="text-align: center;">
                            <p>Nhập số điện thoại của bạn<br>Chuyên viên tư vấn Trang Trinh sẽ liên hệ sau ít phút!</p>
                        </div>
                        
                        <div class="v-form-item v-form-item-sdt v-form-item-text">
                            <div class="v-form-item-content">
                                <input type="tel" required="" class="v-form-field-type-text form-text" placeholder="Số điện thoại" name="phone" style="border:solid 1px #ccc;">
                            </div>
                        </div>
                        
                        <input type="hidden" name="key" value="2">
                        <input type="hidden" name="url" value="`+ url +`">
                        <div id="cfsubmitGoiLai" class="v_form_btn_submit">
                            <button class="form-submit" type="submit">Yêu cầu gọi lại</button>
                        </div>
                        <div class="v-form-description" style="text-align: center;">
                            <p><i>* Hoặc Click để gọi ngay hotline của chúng tôi</i></p>
                        </div>
                        <div style="width: 100%; text-align: center;">
                            <a href="tel:0964080999" class="form-submit btn" style="background: red; color: #fff; padding: 7px 10px !important;width: 100%;">☏ Click để gọi ngay</a>
                        </div>
                      
                        <div id="contactFormResponseGoiLai"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

} else {
var form_goi_lai_html = `

`;
}

setTimeout(function() {
    var css2 = document.createElement('link');
    css2.rel = 'stylesheet';
    css2.href = 'https://thucucsaigon.vn/m/css/footer_landing_new.css';
    css2.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(css2);
    // call_landing.innerHTML = call_landing_html; 
    footer_landing.innerHTML = footer_landing_html;
    form_goi_lai.innerHTML = form_goi_lai_html;

}, 0);

