var call_landing = document.getElementById("call_landing");
var bien_domain = window.location.href;
if (bien_domain.match('/landing/') || bien_domain.match('/online/') || bien_domain.match('/km/') || bien_domain.match('/thucucclinics.com/')) {
    var call_landing_1 = `
    <!-- ----- -->
    <div class="box-lhe-bottom-new">
        <div class="d_flex-sb1">
            <div class="colum-1">
                <a class="d-none d-md-block btn fix-bt-bot btn-dangky-mb btn_so_1" data-toggle="modal" href="#myModal2">
                    <img src="https://thucucsaigon.vn/m/images/btn_hotline__12.png" width="160" alt="btn_hotline__1">
                </a>
                <a class="d-md-none btn fix-bt-bot btn-dangky-mb btn_so_2" data-toggle="modal" href="#myModal2">
                    <img src="https://thucucsaigon.vn/m/images/hotline.jpg" width="160" alt="btn_hotline__1">
                </a>
            </div>
            <div class="colum-1">
    `;
    if (bien_domain.match('/landing/thu-cuc-uu-dai/')) {
            bien_dky_1 = `
                <a class="section-scroll btn fix-bt-bot btn-dangky-mb" href="#dangkyngay">
            `;
    } else if (bien_domain.match('/landing/cat-mi-pro-mini-deep/')) {
            bien_dky_1 = `
                <a class="section-scroll btn fix-bt-bot btn-dangky-mb" href="#dangky__bt">
            `;
    }  else {
            bien_dky_1 = `
                <a class="section-scroll btn fix-bt-bot btn-dangky-mb" href="#dangky">
            `;
    }            
    var call_landing_2 = `
                   <img src="https://thucucsaigon.vn/m/images/btn_dangkyngay__1.png" width="160" alt="btn_dangkyngay__1">
                </a>
            </div>
        </div>
    </div>
    <!-- ----- -->
    `;
    var call_landing_html = call_landing_1+' '+bien_dky_1+' '+call_landing_2;
} else {
    var call_landing_html = `
    <!-- ----- -->
    <div class="box-lhe-bottom-all box-lhe-bottom-dt">
        <div id="nml-alo-phoneIcon" class="nml-alo-phone nml-alo-green nml-alo-show ">
            <div class="nml-alo-ph-circle"></div>
            <div class="nml-alo-ph-circle-fill"></div>
            <div class="nml-alo-ph-img-circle">
                <a href="tel:0964 080 999"><img alt="img" src="https://thucucsaigon.vn/m/images/phone-ring-flat.png" width="51" data-pin-nopin="true"></a>
            </div>
        </div>
        <div class="dangky_style_1">
            <a class="section-scroll btn btn-dangky-dt" href="#dangky">
                <svg class="icon" style="width: 1.2em; height: 1.2em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2274">
                <path d="M507.428571 676.571429l66.285715-66.285715-86.857143-86.857143-66.285714 66.285715v32h54.857142v54.857143h32z m251.428572-411.428572q-9.142857-9.142857-18.857143 0.571429L540 465.714286q-9.714286 9.714286-0.571429 18.857143t18.857143-0.571429l200-200q9.714286-9.714286 0.571429-18.857143z m45.714286 339.428572v108.571428q0 68-48.285715 116.285714T640 877.714286H164.571429q-68 0-116.285715-48.285715T0 713.142857V237.714286q0-68 48.285714-116.285715T164.571429 73.142857h475.428571q36 0 66.857143 14.285714 8.571429 4 10.285714 13.142858 1.714286 9.714286-5.142857 16.571428l-28 28q-8 8-18.285714 4.571429-13.142857-3.428571-25.714286-3.428572H164.571429q-37.714286 0-64.571429 26.857143t-26.857143 64.571429v475.428571q0 37.714286 26.857143 64.571429t64.571429 26.857143h475.428571q37.714286 0 64.571429-26.857143t26.857142-64.571429v-72q0-7.428571 5.142858-12.571428l36.571428-36.571429q8.571429-8.571429 20-4t11.428572 16.571429z m-54.857143-421.714286l164.571428 164.571428-384 384H365.714286V566.857143z m253.714285 75.428571l-52.571428 52.571429-164.571429-164.571429 52.571429-52.571428q16-16 38.857143-16t38.857143 16l86.857142 86.857143q16 16 16 38.857142t-16 38.857143z" p-id="2275"></path>
                </svg> Đăng ký ngay
            </a>
        </div>
    </div>
    <div class="box-lhe-bottom-mb">
        <div class="d_flex-sb1">
            <div class="colum-1">
                <a class="btn fix-bt-bot btn-dangky-mb" data-toggle="modal" href="#myModal2">
                    ✆&nbsp;&nbsp;GỌI NGAY
                </a>
            </div>
            <div class="colum-1">
                <a class="section-scroll btn fix-bt-bot btn-dangky-mb" href="#dangky">
                   ✎&nbsp;&nbsp;ĐĂNG KÝ
                </a>
            </div>
        </div>
    </div>
    <!-- ----- -->
    `;
}
var css2 = document.createElement('link');  
css2.rel = 'stylesheet';
css2.href = 'https://thucucsaigon.vn/m/css/call_landing.css';
css2.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(css2);
call_landing.innerHTML = call_landing_html;