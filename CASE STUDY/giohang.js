

// thêm hàng
var div_center = new Array();
function themvaogiohang(x) {
    var card = x.parentElement.children;
    var hinh = card[0].src;
    var gia = card[1].innerText;
    var tensp = card[2].innerText;
    var soluong = parseInt(card[3].value);
    var sp = new Array(hinh, gia, tensp, soluong);

    // kiểm tra giỏ hàng
    var kt=0
    for(let i = 0;i<div_center.length;i++){
        if (div_center[i][2]==tensp){
            kt=1;
            soluong+=parseInt(div_center[i][3]);
            div_center[i][3]=soluong;
            break
        }
    }
    if(kt==0){
        div_center.push(sp);
    }

    // console.log(div_center);
    showcountsp();
    // lưu giỏ hàng  
    sessionStorage.setItem("div_center",JSON.stringify(div_center))

}
function showcountsp() {
    document.getElementById("countsp").innerHTML = div_center.length;
}

function showmycart() {
    var ttgh = '';
    var tong = 0;
    for (let i = 0; i < div_center.length; i++) {
        var tt =parseInt( div_center[i][2]) * parseInt(div_center[i][3]);
        tong += tt;
        ttgh += '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td><img src="' + div_center[i][0] + '" alt=""></td>' +
            '<td>' + div_center[i][1] + '</td>' +
            '<td>' + div_center[i][2] + '</td>' +
            '<td>' + div_center[i][3] + '</td>' +
            '<td>' +
            '<div>' + tt + '</div>' +
            '</td>' +
            '<td>' +
            ' <button onclick="xoasp(this)">Xoá</button>'
            '</td>' +
            '</tr>';
    }
    ttgh += '<tr>' +
        '<th colspan="5">Tổng đơn hàng</th>' +
        '<th>' +
        '<div>'+ tong +'</div>' +
        '</th>' +
        '</tr>';
        document.getElementById('mycart').innerHTML = ttgh;
}

function xoasp(x){
    // xoá tr
    var tr = x.parentElement.parentElement;
    var tensp = tr.children[2].innerHTML;
    tr.remove()
    
    // xoá mảng
    for(let i=0;i<div_center.length;i++){
        if (div_center[i][2]==tensp){
            div_center.splice(i,1);
        }
    }
    showmycart();
}
function xoatatca(){
    div_center=[];
    showmycart();
}

function showcart() {
    var x = document.getElementById('showcart');
    if (x.style.display == 'block') {
        x.style.display = ' none';
    } else {
        x.style.display = 'block';
        showmycart();
    }
}

function showgiohang_trangthanhtoan(){
    var gh=sessionStorage.getItem("div_center");
    var div_center= JSON.parse(gh);

    var ttgh = '';
    var tong = 0;
    for (let i = 0; i < div_center.length; i++) {
        var tt =parseInt( div_center[i][2]) * parseInt(div_center[i][3]);
        tong += tt;
        ttgh += '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td><img src="' + div_center[i][0] + '" alt=""></td>' +
            '<td>' + div_center[i][1] + '</td>' +
            '<td>' + div_center[i][2] + '</td>' +
            '<td>' + div_center[i][3] + '</td>' +
            '<td>' +
            '<div>' + tt + '</div>' +
            '</td>' +
            '</tr>';
    }
    ttgh += '<tr>' +
        '<th colspan="5">Tổng đơn hàng</th>' +
        '<th>' +
        '<div>'+ tong +'</div>' +
        '</th>' +
        '</tr>';
        document.getElementById('mycart').innerHTML = ttgh;
}
function dongydathang(){
    // var ttnh=document.getElementById('thongtinnhahang').children;
    // var hoten = ttnh[0].children[1].children[0].value;
    // alert(hoten);
    alert('Bạn đã đặt hàng thành công')
}