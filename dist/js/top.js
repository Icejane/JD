// 这是粘性导航栏的js
$(window).scroll(function() {
        if ($(window).scrollTop() >= 600) {
            $(".gdnav1").css({
                "display": "block"
            })
        } else {
            $(".gdnav1").css({
                "display": "none"
            })
        }

        if ($(window).scrollTop() >= 1730) {
            $(".gdnav2").css({
                "display": "block"
            })
        } else {
            $(".gdnav2").css({
                "display": "none"
            })
        }

    })
    // nianxingdaohanglanjs结束


//商品展示
let adrss = "http://jx.xuzhixiang.top/ap/api/productlist.php"
let oid = localStorage.getItem("id");
$.ajax({
    type: "get",
    url: adrss,
    data: {
        uid: oid
    },

    success: function(res) {
        console.log(res);
        let arr = res.data;
        let html = ""
        $.each(arr, function(i, v) {
            // console.log(i, v);
            html += `<li>
            <a id="aaa" href="html/details.html?pid=${v.pid}">
                <div>
                    <img src="${v.pimg}" alt="">
                </div>
                <p>${v.pname}</p>
                <h2>￥${v.pprice}</h2>
            </a>
        </li>`
        });

        console.log(html, $(".showson"))
        $(".showson").html(html);

    }
});