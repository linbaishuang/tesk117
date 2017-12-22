$(function () {
    $(".but").click(function () {
        $(".show").show();
    });
    $(".hide").click(function () {
        $(".show").hide();
    });
    var append = "";
    var i = 0;
    $(".sure").click(function () {
        var val = $("input[name = 'cho']:checked").val();
        if (val === '文本') {
            for (i; ;) {
                append = "<div>" +
                    "<input type='text' value='文本' class='addword" + i + "'/>" +
                    "<button class='deleword" + i + "' name='dele'>删除</button>" +
                    "</div>";
                i++;
                break;
            }
            $("#container").append(append);
        } else if (val === '日期') {
            for (i; ;) {
                append = "<div>" +
                    "<input type='text' value='日期' class='addtime" + i + "'/>" +
                    "<button class='deletime" + i + "' name='dele'>删除</button>" +
                    "</div>";
                i++;
                break;
            }
            $("#container").append(append);
        }
        $("button[name = 'dele']").click(function () {
            var deleword = this.className;
            $("." + deleword + "").hide();
            $("." + deleword + "").siblings().hide();
        });
    })
    $(".see").click(function () {
        $(this).html("编辑");
        $(".but").hide();
        $("button[name = 'dele']").hide();
        $(".show").hide();
    })
})