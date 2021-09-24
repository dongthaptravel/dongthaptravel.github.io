function english(){
    document.querySelector('#span1').innerHTML= `<b>History</b>`
    document.querySelector('#span2').innerHTML= `<b>Description</b>`
    document.querySelector('#span3').innerHTML= `<b>Contact</b>`
    document.querySelector('#li1').innerHTML= `<li><strong>Address :</strong> Hamlet 4,My Hiep Village,Cao Lanh District`
    document.querySelector('#li2').innerHTML= `<strong>Xeo Quyt</strong> relic site is one of the unique stops that tourists cannot ignore when coming to Dong Thap. This place used to be the revolutionary base of the Dong Thap Provincial Party Committee leading the people in the resistance war against the US from 1960 to 1975.</li>`
    document.querySelector('#p2').innerHTML= `<strong>Xeo Quyt</strong> relic site has a very diverse and rich flora and fauna with many rare species. Visiting the Melaleuca forest in Xeo Quyt in the floating season, visitors will have the opportunity to visit the ruins by rowing boat to see all the beauty here. The unique and different point here is that on the melaleuca trunks, there are densely clinging vines that have increased the coverage below.`
    document.querySelector('#p1').innerHTML= `&#10030;<b>History</b>&#10030;`
    document.querySelector('#p3').innerHTML= `&#10030;<b>Description</b>&#10030;`
}
function tiengviet(){
    document.querySelector('#span1').innerHTML= `<b>Lịch sử</b>`
    document.querySelector('#span2').innerHTML= `<b>Mô tả</b>`
    document.querySelector('#span3').innerHTML= `<b>Liên hệ</b>`
    document.querySelector('#li1').innerHTML= `<li><strong>Địa chỉ:</strong> Ấp 4, xã Mỹ Hiệp, huyện Cao Lãnh`
    document.querySelector('#li2').innerHTML= `Khu di tích <strong>Xẻo Quýt</strong> là một trong những điểm dừng chân độc đáo du khách không thể bỏ qua khi đến Đồng Tháp. Nơi đây đã từng là căn cứ cách mạng của tỉnh ủy Đồng Tháp lãnh đạo nhân dân kháng chiến chống Mỹ từ năm 1960 đến 1975.</li>`
    document.querySelector('#p2').innerHTML= `Khu di tích  <strong>Xẻo Quýt</strong> có hệ động thực vật rất đa dạng và phong phú với nhiều loài quý hiếm. Đến thăm rừng tràm ở <strong>Xẻo Quýt</strong> vào mùa nước nổi, du khách sẽ có dịp tham quan di tích bằng xuồng chèo tay mới thấy hết được vẻ đẹp nơi đây. Điểm độc đáo và khác lạ ở đây là trên các thân tràm còn có loài cây dây leo bòng bong đeo bám dày đặc đã làm tăng thêm độ che phủ phía dưới.`
    document.querySelector('#p1').innerHTML= `&#10030;<b>Lịch sử</b>&#10030;`
    document.querySelector('#p3').innerHTML= `&#10030;<b>Mô tả</b>&#10030;`
}
function tatden() {
    document.querySelector('#div1').style.backgroundColor="Black"
    document.querySelector('#body').style.backgroundColor="Black"
    document.querySelector('#body').style.color="white"
    document.querySelector('#ul1').style.backgroundColor="Black"
    document.querySelector('#ul1').style.color="white"
}
function moden() {
    document.querySelector('#div1').style.backgroundColor="rgb(240, 250, 249)"
    document.querySelector('#body').style.backgroundColor="rgb(240, 250, 249)"
    document.querySelector('#body').style.color="black"
    document.querySelector('#ul1').style.backgroundColor="rgb(240, 250, 249)"
    document.querySelector('#ul1').style.color="black"
}
function mota(){
    document.querySelector('#divlast').style.display = "block"
    document.querySelector('#divbeforelast').style.display = "none"
    document.querySelector('#dichvu').style.display = "none"
    document.querySelector('#lienhe').style.display = "none"

}
function lichsu(){
    document.querySelector('#divlast').style.display = "none"
    document.querySelector('#divbeforelast').style.display = "block"
    document.querySelector('#dichvu').style.display = "none"
    document.querySelector('#lienhe').style.display = "none"


}
function dichvu(){
    document.querySelector('#divlast').style.display = "none"
    document.querySelector('#divbeforelast').style.display = "none"
    document.querySelector('#dichvu').style.display = "block"
    document.querySelector('#lienhe').style.display = "none"


}
function lienhe(){
    document.querySelector('#divlast').style.display = "none"
    document.querySelector('#divbeforelast').style.display = "none"
    document.querySelector('#dichvu').style.display = "none"
    document.querySelector('#lienhe').style.display = "block"


}
$(document).ready(function()
                {
                    var stt = 0;
                    startImg = $("img.slide:first").attr("stt");
                    endImg = $("img.slide:last").attr("stt");
                    $("img.slide").each(function(){
                        if($(this).is(':visible')){
                            stt = $(this).attr("stt");
                        }
                    })
                    $("#next").click(function(){
                        if(stt == endImg){
                            stt = -1 ;
                        }
                        next = ++stt;
                        $("img.slide").hide();
                        $("img.slide").eq(next).show();
                    })
                    $("#prev").click(function(){
                        if(stt == 0){
                            stt = endImg ;
                            prev = stt++;
                        }
                        prev = --stt;
                        $("img.slide").hide();
                        $("img.slide").eq(prev).show();
                    })
                    setInterval(function(){
                        $("#next").click()
                    },7000);
                })
                function on(){
                    document.querySelector('#img1').style.border="2px solid yellow"
                }
                function on1(){
                    document.querySelector('#img1').style.border="2px solid rgb(109, 96, 96)"
                }
                function off(){
                    document.querySelector('#img1').style.border="2px solid black"
                }
                function off1(){
                    document.querySelector('#img1').style.border="2px solid black"
                }
