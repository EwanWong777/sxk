$(function () {
    $('#showPicker1').on('click', function () {
        weui.picker([{
            label: '男',
            value: 0
        }, {
            label: '女',
            value: 1
        }], {
            onChange: function (result) {
                console.log(result);
            },
            onConfirm: function (result) {
                console.log(result);
            }
        });
    });
    $('#showPicker2').on('click', function () {
        weui.picker([{
            label: '住院床位',
            value: 0
        }, {
            label: '上门诊疗',
            value: 1
        }, {
            label: '电话诊疗',
            value: 1
        }, {
            label: '视频诊疗',
            value: 1
        }], {
            onChange: function (result) {
                console.log(result);
            },
            onConfirm: function (result) {
                console.log(result);
            }
        });
    });
    $('#showPicker3').on('click', function () {
        weui.picker([{
            label: '地点一',
            value: 0
        }, {
            label: '地点二',
            value: 1
        }, {
            label: '地点三',
            value: 1
        }, {
            label: '地点四',
            value: 1
        }], {
            onChange: function (result) {
                console.log(result);
            },
            onConfirm: function (result) {
                console.log(result);
            }
        });
    });
    // 日期选择
    $('#showDatePicker2').on('click', function () {
        weui.datePicker({
            start: 1990,
            end: new Date().getFullYear(),
            onChange: function (result) {
                console.log(result);
            },
            onConfirm: function (result) {
                console.log(result);
            }
        });
    });
    $('#showDatePicker3').on('click', function () {
        weui.datePicker({
            times: function () {
                return [{
                    values: ['全天', '上午', '下午']
                }];
            },
            value: '2017-08-09 全天',
            onChange: function (picker, values, displayValues) {
                console.log(values);

            }
        });
    });
    // 时间选择
    $("#showTimePicker1").on('click', function () {
        var hours = [];
        var minites = [];
        var second = [];
        if (!hours.length) {
            for (var i = 0; i < 19; i++) {
                hours.push({
                    label: ('' + i).length === 1 ? '0' + i + "时" : '' + i + "时",
                    value: i
                });
            }
        }
        if (!minites.length) {
            for (var j = 0; j < 60; j++) {
                minites.push({
                    label: ('' + j).length === 1 ? +j + "分" : '' + j + "分",
                    value: j
                });
            }
        }
        if (!second.length) {
            for (var k = 0; k < 60; k++) {
                second.push({
                    label: ('' + k).length === 1 ? +k + "秒" : '' + k + "秒",
                    value: k
                });
            }
        }
        weui.picker(hours, minites, second, {
            defaultValue: [new Date().getHours() + 1, 0],
            onConfirm: function (result) {
                var timeend = result[1] < 10 ? ("0" + result[1]) : result[1];
                var time = result[0] + ':' + timeend;
            }
        });

    });
    $("#showTimePicker2").on('click', function () {
        var hours = [];
        var minites = [];
        var second = [];
        if (!hours.length) {
            for (var i = 0; i < 19; i++) {
                hours.push({
                    label: ('' + i).length === 1 ? '0' + i + "时" : '' + i + "时",
                    value: i
                });
            }
        }
        if (!minites.length) {
            for (var j = 0; j < 60; j++) {
                minites.push({
                    label: ('' + j).length === 1 ? +j + "分" : '' + j + "分",
                    value: j
                });
            }
        }
        if (!second.length) {
            for (var k = 0; k < 60; k++) {
                second.push({
                    label: ('' + k).length === 1 ? +k + "秒" : '' + k + "秒",
                    value: k
                });
            }
        }
        weui.picker(hours, minites, second, {
            defaultValue: [new Date().getHours() + 1, 0],
            onConfirm: function (result) {
                var timeend = result[1] < 10 ? ("0" + result[1]) : result[1];
                var time = result[0] + ':' + timeend;
            }
        });

    });
    $("#showTimePicker3").on('click', function () {
        var hours = [];
        var minites = [];
        var second = [];
        if (!hours.length) {
            for (var i = 0; i < 19; i++) {
                hours.push({
                    label: ('' + i).length === 1 ? '0' + i + "时" : '' + i + "时",
                    value: i
                });
            }
        }
        if (!minites.length) {
            for (var j = 0; j < 60; j++) {
                minites.push({
                    label: ('' + j).length === 1 ? +j + "分" : '' + j + "分",
                    value: j
                });
            }
        }
        if (!second.length) {
            for (var k = 0; k < 60; k++) {
                second.push({
                    label: ('' + k).length === 1 ? +k + "秒" : '' + k + "秒",
                    value: k
                });
            }
        }
        weui.picker(hours, minites, second, {
            defaultValue: [new Date().getHours() + 1, 0],
            onConfirm: function (result) {
                var timeend = result[1] < 10 ? ("0" + result[1]) : result[1];
                var time = result[0] + ':' + timeend;
            }
        });

    });
})

$(function () {
    var tmpl = '<li class="weui-uploader__file" style="background-image:url(#url#)"></li>',
        $gallery = $("#gallery"),
        $galleryImg = $("#galleryImg"),
        $uploaderInput = $("#uploaderInput"),
        $uploaderFiles = $("#uploaderFiles");

    $uploaderInput.on("change", function (e) {
        var src, url = window.URL || window.webkitURL || window.mozURL,
            files = e.target.files;
        for (var i = 0, len = files.length; i < len; ++i) {
            var file = files[i];

            if (url) {
                src = url.createObjectURL(file);
            } else {
                src = e.target.result;
            }

            $uploaderFiles.append($(tmpl.replace('#url#', src)));
        }
    });
    $uploaderFiles.on("click", "li", function () {
        $galleryImg.attr("style", this.getAttribute("style"));
        $gallery.fadeIn(100);
    });
    $gallery.on("click", function () {
        $gallery.fadeOut(100);
    });
});