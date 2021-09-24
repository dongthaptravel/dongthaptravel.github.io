function english(){
    document.querySelector('#span1').innerHTML= `<b>History</b>`
    document.querySelector('#span2').innerHTML= `<b>Description</b>`
    document.querySelector('#span3').innerHTML= `<b>Service</b>`
    document.querySelector('#span4').innerHTML= `<b>Contact</b>`
    document.querySelector('#span5').innerHTML= `<strong>Dong Thap Muoi</strong> eco-tourism area has an area of ​​up to 11ha integrated for those who want to find an open space, with a country style.`
    document.querySelector('#li1').innerHTML= `<strong>Address :</strong> My Hoa Village, Thap Muoi District`
    document.querySelector('#li2').innerHTML= `Coming here, visitors can enjoy watching lotus on the invested huts scattered throughout the field, fully enjoy a mellow and pure atmosphere, impersonating a lotus village girl with a ba ba shirt, conical hats to take pictures or hand-pick fresh pink lotus flowers in the middle of a sunny and windy space.`
    document.querySelector('#li3').innerHTML= `Not only that, but you can also enjoy delicious local dishes such as lotus tea, lotus sticky rice, lotus chicken salad, grilled snakehead fish with lotus leaves...`
    document.querySelector('#p1').innerHTML= `&#10030;<b>Description</b>&#10030;`
    document.querySelector('#p2').innerHTML= `&#10030;<b>Service</b>&#10030;`
}
function tiengviet(){
    document.querySelector('#span1').innerHTML= `<b>Lịch sử</b>`
    document.querySelector('#span2').innerHTML= `<b>Mô tả</b>`
    document.querySelector('#span3').innerHTML= `<b>Dịch vụ</b>`
    document.querySelector('#span4').innerHTML= `<b>Liên hệ</b>`
    document.querySelector('#span5').innerHTML= `Khu du lịch sinh thái <strong>Đồng Tháp Mười</strong> có diện tích lên tới 11ha tích hợp cho những người muốn tìm đến không gian thoáng đãng, mang phong vị đồng quê.`
    document.querySelector('#li1').innerHTML= `<strong>Địa chỉ:</strong>Xã Mỹ Hòa, huyện Tháp Mười`
    document.querySelector('#li2').innerHTML= `Đến đây, du khách có thể thỏa thích ngắm sen trên các chòi được đầu tư rải rác trên khắp đồng, tận hưởng trọn vẹn một bầu không khí êm dịu, thuần khiết, nhập vai thành cô thôn nữ đồng sen với áo bà ba, nón lá để chụp ảnh hay tự tay hái những bông sen hồng tươi giữa không gian bạt ngàn nắng gió.`
    document.querySelector('#li3').innerHTML= `Không chỉ vậy, bạn còn được thưởng thức các món ăn đậm đà hương vị địa phương như chè sen, xôi sen, gỏi gà ngó sen, cá lóc nướng lá sen…`
    document.querySelector('#p1').innerHTML= `&#10030;<b>Mô tả</b>&#10030;`
    document.querySelector('#p2').innerHTML= `&#10030;<b>Dịch vụ</b>&#10030;`
}
function tatden() {
    document.querySelector('#div1').style.backgroundColor="Black"
    document.querySelector('#body').style.backgroundColor="Black"
    document.querySelector('#body').style.color="white"
    document.querySelector('#ul1').style.backgroundColor="Black"
    document.querySelector('#ul1').style.color="white"
    document.querySelector('#img1').style.border="2px solid yellow"
}
function moden() {
    document.querySelector('#div1').style.backgroundColor="rgb(240, 250, 249)"
    document.querySelector('#body').style.backgroundColor="rgb(240, 250, 249)"
    document.querySelector('#body').style.color="black"
    document.querySelector('#ul1').style.backgroundColor="rgb(240, 250, 249)"
    document.querySelector('#ul1').style.color="black"
    document.querySelector('#img1').style.border="2px solid black"
}
function mota(){
    document.querySelector('#divlast').style.display = "block"
    document.querySelector('#divbeforelast').style.display = "none"
    document.querySelector('#lienhe').style.display = "none"
    document.querySelector('#lichsu').style.display = "none"

}
function dichvu(){
    document.querySelector('#divlast').style.display = "none"
    document.querySelector('#divbeforelast').style.display = "block"
    document.querySelector('#lienhe').style.display = "none"
    document.querySelector('#lichsu').style.display = "none"

}
function lienhe(){
    document.querySelector('#divlast').style.display = "none"
    document.querySelector('#divbeforelast').style.display = "none"
    document.querySelector('#lienhe').style.display = "block"
    document.querySelector('#lichsu').style.display = "none"

}
function lichsu(){
    document.querySelector('#divlast').style.display = "none"
    document.querySelector('#divbeforelast').style.display = "none"
    document.querySelector('#lienhe').style.display = "none"
    document.querySelector('#lichsu').style.display = "block"

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