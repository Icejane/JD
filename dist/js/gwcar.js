$(function() {
    let url = "http://jx.xuzhixiang.top/ap/api/cart-list.php"
    let oid = localStorage.getItem("id");
    // console.log(oid);
    $.ajax({
        type: "get",
        url,
        data: {
            id: oid

        },

        success: function(res) {
            console.log(res);
            let arr = res.data;
            let html = ""
            $.each(arr, function(i, v) {


                html += `  <ul>
            <li>
                <img src="${v.pimg}" alt="">
            </li>
            <li id="gw-price">${v.pprice} </li>
            <li id="gw-number">
          
            ${v.pnum}
            
            </li>
            <li id="total-price"> ${v.pprice*v.pnum}</li>
            <li id="operation" class="button" del-pid="${v.pid}">X</li>
        </ul>
            `

            });
            $("#gwcont").html(html);
            deller();


        }
    })




})

function gyg() {
    $(".gyig").css({
        "display": "block"
    })

}

function deller() {
    $(".button").click(function(e) {
        console.log(e.target.classList.contains("button"))

        if (e.target.classList.contains("button")) {
            e.target.parentNode.remove()
            let pid = e.target.getAttribute('del-pid')
            let Ourl = "http://jx.xuzhixiang.top/ap/api/cart-delete.php"
            let oid = localStorage.getItem("id");
            console.log(pid, oid)
            $.ajax({
                type: "get",
                url: Ourl,
                data: {
                    uid: oid,
                    pid
                },

                success: res => {
                    console.log(res);

                    gyg();

                    // location.reload()
                }

            })
        }

    })



}



// function () {
//     let adrss = ""

// }