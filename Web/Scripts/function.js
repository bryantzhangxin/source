//去空格
String.prototype.Trim = function () { return this.replace(/(^\s*)|(\s*$)/g, ""); }
/**
*校验字符串是否为小数
*返回值：
*如果为空，定义校验通过，		返回true
*如果字串为为小数，校验通过，	返回true
*如果校验不通过，				返回false     参考提示信息：输入域必须为小数！
*/
function checkIsDouble(s) {
    if (s == "")
        return true;

    var seenDecimalPoint = false;

    if (s == ".") return false;

    var i;
    for (i = 0; i < s.length; i++) {
        // Check that current character is number.
        var c = s.charAt(i);

        if ((c == ".") && !seenDecimalPoint)
            seenDecimalPoint = true;
        else if (!((c >= "0") && (c <= "9")))
            return false;
    }

    // All characters are numbers.
    return true;
}
/**
*检验字符串是否为可以输入+ -号的小数
*edited by huang xiao ke 
*/
function checkFloat(s) {

    var reg = /^(|[+-]?(0|([1-9]\d*)|((0|([1-9]\d*))?\.\d{1,2})){1,1})$/;
    if (reg.test(s)) {
        return true;
    } else {
        return false;
    }

}
/*
检测用户名 6_18个字符.包括字母.数字.下划线.以字母开头
*/
function checkUserName(obj) {
    if (!obj.match(/^[a-zA-Z][0-9a-zA-Z]{3,11}$/)) {
        return false;
    }
    return true;
}


/*验证是否是数据库里匹配的decimal格式*/
function isFloat(s) {

    //  var regu = /^[+]?(([1-9]\d*[.]?)|(0.))(\d{0,2})?$/;
    var regu = /^(|[+]?(0|([1-9]\d*)|((0|([1-9]\d*))?\.\d{1,2})){1,1})$/;
    if (regu.test(s)) {

        return true;

    } else {

        return false;

    }

}

/*输入的数字返回每三位一个逗号，fmoney(12345678，2); return:12,345,678.00*/
function fmoney(s, n) {
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
    r = s.split(".")[1];
    t = "";
    for (i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
} 

/*验证IP地址*/
function checkIP(s) {
    var reg = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/;
    if (reg.test(s)) {
        var ips = s.split(".");
        if (ips.length == 4 || ips.length == 6) {
            if (parseInt(ips[0]) < 256 && parseInt(ips[1]) < 256 && parseInt(ips[2]) < 256 && parseInt(ips[3]) < 256) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/*
检测传真号码
*/

function checkFaxNo(obj) {
    if (!obj.match(/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/)) {
        return false;
    }
    return true;
}


/*
验证文本框输入的是否是姓名
*/
function checkChinese(str) {
    var re = /[^\u4e00-\u9fa5]/; if (re.test(str)) return false; return true;
};
function checkChineseName(v) {
    if (v == '') return 1; if (v.length < 2) { return 2; }
    var name = v.replace(/·/g, ''); name = name.replace(/•/g, '');
    if (checkChinese(name)) return 0; else return 2;
};


/*取地址栏参数*/
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


/*
验证填入的必须是手机号
*/
function checkMobileStrict(v) {
    var yd = ['134', '135', '136', '137', '138', '139', '150', '151', '152', '157', '158', '159', '187', '188'];
    var lt = ['130', '131', '132', '155', '156', '185', '186'];
    var dx = ['133', '153', '180', '189'];
    var whole = [];
    whole = whole.concat(yd, lt, dx);
    if (v == '')
        return 1;
    if (v.length != 11) {
        return 2;
    }
    if (isNaN(v)) {
        return 2;
    }

    var phone_sect = v.substr(0, 3);
    var find = false;
    var i = 0;
    for (i = 0; (i < whole.length); i++) {
        if (phone_sect == whole[i]) {
            find = true;
            break;
        }
    }
    if (find)
        return 0;
    else
        return 2;
}



/**
*校验字符串是否为整型
*返回值：
*如果为空，定义校验通过，      返回true
*如果字串全部为数字，校验通过，返回true
*如果校验不通过，              返回false     参考提示信息：输入域必须为数字！
*/
function checkIsInteger(str) {
    //如果为空，则通过校验
    if (str == "")
        return true;
    var exp = /^\s*[\+]?\d+\s*$/;
    if (str.match(exp) == null)
        return false
    else
        return true;
}


/**
*校验字符串是否为日期型
*返回值：
*如果为空，定义校验通过，           返回true
*如果字串为日期型，校验通过，       返回true
*如果日期不合法，                   返回false    参考提示信息：输入域的时间不合法！（yyyy-MM-dd）
*/
function checkIsDate(str) {
    //如果为空，则通过校验
    if (str == "")
        return true;

    var myRegex = new RegExp("^[0-9]{4}\-([1-9]|[0][1-9]|[1][0-2])\-([1-9]|[0-2][0-9]|[3][0-1])$");
    if (str.match(myRegex)) {//valid date format, check for valid date
        var theDay = Math.round(str.substr(8, 2));
        var theMonth = Math.round(str.substr(5, 2));
        var theYear = Math.round(str.substr(0, 4));

        if ((theYear % 4 == 0) && (theDay > 29) && (theMonth == 2)) {
            //alert ("Not a valid date.");
            return false;
        }
        else if ((theYear % 4 != 0) && (theDay > 28) && (theMonth == 2)) {
            //alert ("Not a valid date.");
            return false;
        }
        else if ((theDay > 30) && (theMonth == 4 || theMonth == 6 || theMonth == 0 || theMonth == 11)) {
            //alert ("Not a valid date.");
            return false;
        }
        else {
            return true;
        }
    }
    else {
        //alert ("Date not in correct yyyy-mm-dd format of the date specified does not exist.");
        return false;
    }
}

/*
校验字符串是否为日期+时间型
*/
function checkIsDateTime(inputValue) {
    if (inputValue == "")
        return true;

    var reg = /^(\d{1,4})(-|\/|\.)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
    var r = inputValue.match(reg);
    if (r == null)
        return false;

    var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
    if (r[1] != d.getFullYear() || r[3] != d.getMonth() + 1 || r[4] != d.getDate() || r[5] != d.getHours() || r[6] != d.getMinutes() || r[7] != d.getSeconds())
        return false;

    return true;
}
/*
校验字符串是否为年月(yyyy-MM)
*/
function checkIsYMDate(str) {
    if (str == "")
        return true;

    var myRegex = new RegExp("^[0-9]{4}\-([1-9]|[0][1-9]|[1][0-2])$");
    if (str.match(myRegex)) {//valid date format, check for valid date


        return true;

    }
    else {

        return false;
    }
}

/*
校验字符串是否为IP地址型
*/
function checkIsIp(s) {
    var check = function (v) { try { return (v <= 255 && v >= 0) } catch (x) { return false } };
    var re = s.split(".")
    return (re.length == 4) ? (check(re[0]) && check(re[1]) && check(re[2]) && check(re[3])) : false
}

/*
*校验两个日期的先后
*返回值：
*如果其中有一个日期为空，校验通过,          返回true
*如果起始日期早于等于终止日期，校验通过，   返回true
*如果起始日期晚于终止日期，                 返回false    参考提示信息： 起始日期不能晚于结束日期。
*/
function checkDateEarlier(strStart, strEnd) {
    if (checkIsDate(strStart) == false || checkIsDate(strEnd) == false)
        return false;
    //如果有一个输入为空，则通过检验
    if ((strStart == "") || (strEnd == ""))
        return true;
    var arr1 = strStart.split("-");
    var arr2 = strEnd.split("-");
    var date1 = new Date(arr1[0], parseInt(arr1[1].replace(/^0/, ""), 10) - 1, arr1[2]);
    var date2 = new Date(arr2[0], parseInt(arr2[1].replace(/^0/, ""), 10) - 1, arr2[2]);
    if (arr1[1].length == 1)
        arr1[1] = "0" + arr1[1];
    if (arr1[2].length == 1)
        arr1[2] = "0" + arr1[2];
    if (arr2[1].length == 1)
        arr2[1] = "0" + arr2[1];
    if (arr2[2].length == 1)
        arr2[2] = "0" + arr2[2];
    var d1 = arr1[0] + arr1[1] + arr1[2];
    var d2 = arr2[0] + arr2[1] + arr2[2];
    if (parseInt(d1, 10) > parseInt(d2, 10))
        return false;
    else
        return true;
}

function checkYMEarlier(strStart, strEnd) {
    if (checkIsYMDate(strStart) == false || checkIsYMDate(strEnd) == false)
        return false;
    //如果有一个输入为空，则通过检验
    if ((strStart == "") || (strEnd == ""))
        return true;
    var arr1 = strStart.split("-");
    var arr2 = strEnd.split("-");
    var date1 = new Date(arr1[0], parseInt(arr1[1].replace(/^0/, ""), 10) - 1, arr1[2]);
    var date2 = new Date(arr2[0], parseInt(arr2[1].replace(/^0/, ""), 10) - 1, arr2[2]);
    if (arr1[1].length == 1)
        arr1[1] = "0" + arr1[1];
   
    if (arr2[1].length == 1)
        arr2[1] = "0" + arr2[1];
  
    var d1 = arr1[0] + arr1[1] 
    var d2 = arr2[0] + arr2[1];
    if (parseInt(d1, 10) > parseInt(d2, 10))
        return false;
    else
        return true;
}

/*合同选择*/
function ht_select(toid, toname, flag) {
    var url = "/HiWeiHT/HtDkManage/ht_select/Index.aspx?ToId=" + toid + "&ToName=" + toname + "&flag=" + flag;
    var mwidth = "780";
    var mheight = "700";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "ht_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 50;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}
/*预算关联多合同选择*/
function ysht_select(toid, toname) {
    var url = "/module/ysht_select/index.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "750";
    var mheight = "600";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "ysht_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 50;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        //window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:no;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px");
    }
}
/*采购关联预算选择*/
function cgsqys_select(toid, toname, userid) {
    var url = "/module/cgys_select/CGYSIndex.aspx?ToId=" + toid + "&ToName=" + toname + "&UserId=" + userid;
    var mwidth = "750";
    var mheight = "600";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "cgys_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 50;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        //window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:no;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px");
    }
}
function cgys_select(toid, toname, userid) {
    var url = "/module/cgys_select/index.aspx?ToId=" + toid + "&ToName=" + toname + "&UserId=" + userid;
    var mwidth = "750";
    var mheight = "600";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "cgys_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 50;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        //window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:no;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px");
    }
}
/*其他报销预算（包括未完结和完结的预算）选择*/
function bxys_select(toid, toname, userid) {
    var url = "/module/cgys_select/index.aspx?ysstate=all&ToId=" + toid + "&ToName=" + toname + "&UserId=" + userid;
    var mwidth = "750";
    var mheight = "600";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "cgys_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 50;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        //window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:no;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px");
    }
}

/*入库关联采购选择*/
function rkcg_select(toid, toname) {
    var url = "/module/rkcg_select/YSList.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "750";
    var mheight = "650";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "cgys_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 50;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        //window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:no;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px");
    }
}
/*厂家选择*/
function cj_select(toid, toname) {
    var url = "/module/cj_select/CJSelect.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "700";
    var mheight = "600";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "cj_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 50;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}
/*甲乙方选择*/
function jyf_select(toid, toname, khlx) {
    var url = "/module/cj_select/HTJYFSelect.aspx?ToId=" + toid + "&ToName=" + toname + "&KHLX=" + khlx;
    var mwidth = "700";
    var mheight = "600";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "jyf_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 50;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

/*物资还款-发票选择*/
function HKFP_select(jSDWID, toname, toid) {
    var url = "/module/hk_select/FP_Select.aspx?FPDWID=" + jSDWID + "&ToName=" + toname + "&ToId=" + toid;
    var mwidth = "600";
    var mheight = "600";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "HKFP_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 50;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

/*其它还款-费用选择*/
function HKFY_select(jKGUID, toname, toid, tojkje, toshkje) {
    var url = "/module/hk_select/FY_Select.aspx?JKGUID=" + jKGUID + "&ToName=" + toname + "&ToId=" + toid + "&ToJKJE=" + tojkje + "&ToSHKJE=" + toshkje;
    var mwidth = "600";
    var mheight = "600";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "HKFY_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 50;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

/*单个部门选择*/
function dept_single(toid, toname) {
    var url = "/module/dept_select/single.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "300";
    var mheight = "250";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "dept_single", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}
/*部门选择*/
function dept_select(toid, toname) {
    var url = "/module/dept_select/index.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "350";
    var mheight = "300";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2) + 200;
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "dept_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

function clear_double(toid, toname) {
    document.getElementById(toid).value = "";
    document.getElementById(toname).value = "";
}

/*用户选择*/
function emailUser_select(toid, toname) {
    var url = "/HiWeiOA/NBYS/EmailLXR.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "380";
    var mheight = "360";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "emailUser_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        //window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
        window.showModalDialog(url, self, "edge:raised;scroll:no;status:no;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px");
    }
}

/*用户选择*/
function user_select(toid, toname) {
    var url = "/module/user_select/index.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "380";
    var mheight = "360";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "user_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        //window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
        window.showModalDialog(url, self, "edge:raised;scroll:no;status:no;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px");
    }
}

/*用户选择--单先*/
function user_selectSingle(toid, toname) {
    var url = "/module/user_select/UserSingle/index.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "380";
    var mheight = "360";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "user_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        //window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
        window.showModalDialog(url, self, "edge:raised;scroll:no;status:no;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px");
    }
}
/*物资选择--单先*/
function WZ_selectSingle(toid, toname) {
    var url = "/module/wz_select/WZSingle/index.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "800";
    var mheight = "560";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "user_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        //window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
        window.showModalDialog(url, self, "edge:raised;scroll:no;status:no;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px");
    }
}
/*物资分类(分类)选择*/
function user_selectWzSort(toid, toname, width, height) {
    var url = "/module/wz_select/WzSortSelectIndex.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = width;
    var mheight = height;
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "user_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

/*文件柜上级文件夹选择*/
function wjg_selectWjj(toid, toname, width, height) {
    var url = "/module/wjg_select/wjjSelectIndex.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = width;
    var mheight = height;
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "user_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

/*物资分类(厂家)选择*/
function user_selectWzCJ(toid, toname, flid, flname, width, height) {
    var url = "/module/wz_select/WzCJSelectIndex.aspx?ToId=" + toid + "&ToName=" + toname + "&FlId=" + flid + "&FlName=" + flname;
    var mwidth = width;
    var mheight = height;
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "user_selectWzCJ", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

/*物资分类（分类+厂家）选择*/
function user_selectWzFLCJSort(toid, toname, width, height) {
    var url = "/module/wz_select/WZCJSelectXQIndex.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = width;
    var mheight = height;
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "user_selectWzFLCJSort", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

function user_select_mypriv(toid, toname) {
    var url = "/module/priv_select/Index.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "380";
    var mheight = "360";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "user_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

/*单个用户选择*/
function user_single(toid, toname) {
    var url = "/module/user_select_single/index.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "380";
    var mheight = "360";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "user_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

/*单个用户选择-人力资源*/
function user_hrms(toid, toname) {
    var url = "/module/user_select_hrms/index.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "380";
    var mheight = "360";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "user_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

/*角色选择*/
function priv_select(toid, toname) {
    var url = "/module/priv_select/index.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "350";
    var mheight = "300";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "priv_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 50;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}


/*风场选择*/
function field_select(toid, toname) {
    var url = "/module/field_select/Index.aspx?ToId=" + toid + "&ToName=" + toname;
    var mwidth = "350";
    var mheight = "300";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "priv_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 50;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

/*选择经办/主办人*/
function byuser_open(url) {
    var mwidth = "380";
    var mheight = "360";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "byuser", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = event.clientX - event.offsetX + 210;
        loc_y = event.clientY - event.offsetY + 50;

        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

/*通讯录选择*/
function address_select(toid) {
    var url = "/module/address_select/index.aspx?ToId=" + toid;
    var mwidth = "380";
    var mheight = "360";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "user_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

/*通讯录选择2*/
function mobile_select(toid) {
    var url = "/module/mobile_select/index.aspx?ToId=" + toid;
    var mwidth = "380";
    var mheight = "360";
    var loc_x, loc_y;
    if (window.navigator.appName.toLowerCase().indexOf("netscape") > -1) {
        loc_x = parseInt((document.body.clientWidth - mwidth) / 2 + 200);
        loc_y = parseInt((document.body.clientHeight - mheight) / 2);
        window.open(url, "user_select", "left=" + loc_x + "px,top=" + loc_y + "px,width=" + mwidth + "px,height=" + mheight + "px,resizable=no,scrollbars=yes,status=0");
    }
    else {
        loc_x = document.body.scrollLeft + event.clientX - event.offsetX - 100;
        loc_y = document.body.scrollTop + event.clientY - event.offsetY + 170;
        window.showModalDialog(url, self, "edge:raised;scroll:1;status:0;help:0;resizable:1;dialogWidth:" + mwidth + "px;dialogHeight:" + mheight + "px;dialogTop:" + loc_y + "px;dialogLeft:" + loc_x + "px");
    }
}

function isValidEmail(email) {
    if (email == null)
        return false;

    if (email.length == 0)
        return true;

    if (!allValidChars(email)) {  // check to make sure all characters are valid
        return false;
    }
    if (email.indexOf("@") < 1) { //  must contain @, and it must not be the first character
        return false;
    } else if (email.lastIndexOf(".") <= email.indexOf("@")) {  // last dot must be after the @
        return false;
    } else if (email.indexOf("@") == email.length) {  // @ must not be the last character
        return false;
    } else if (email.indexOf("..") >= 0) { // two periods in a row is not valid
        return false;
    } else if (email.indexOf(".") == email.length) {  // . must not be the last character
        return false;
    }
    return true;
}

function allValidChars(email) {
    var parsed = true;
    var validchars = "abcdefghijklmnopqrstuvwxyz0123456789@.-_";
    for (var i = 0; i < email.length; i++) {
        var letter = email.charAt(i).toLowerCase();
        if (validchars.indexOf(letter) != -1)
            continue;
        parsed = false;
        break;
    }
    return parsed;
}

function strtrim(value) {
    return value.replace(/^\s+/, '').replace(/\s+$/, '');
}

function user_view(user_id) {
    myleft = (screen.availWidth - 600) / 2;
    window.open("/general/ipanel/user_info.aspx?window=1&user_id=" + user_id, "user_view", "status=0,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,width=650,height=500,left=" + myleft + ",top=50");
}

function view_graph(flow_id) {
    myleft = (screen.availWidth - 800) / 2;
    window.open("/general/workflow/view_graph.aspx?flow_id=" + flow_id, "view_graph", "status=0,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,width=800,height=500,left=" + myleft + ",top=50");
}

function flow_view(run_id) {
    myleft = (screen.availWidth - 600) / 2;
    window.open("/general/workflow/flow_view.aspx?run_id=" + run_id, "flow_view", "status=0,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,width=600,height=400,left=" + myleft + ",top=50");
}

function flow_print(run_id) {
    myleft = (screen.availWidth - 900) / 2;
    window.open("/general/workflow/flow_print.aspx?run_id=" + run_id, "flow_print", "status=0,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,width=900,height=600,left=" + myleft + ",top=50");
}

function showDialog(url) {
    if (document.all) {
        var feature = "dialogWidth:600px;dialogHeight:400px;status:no;help:no";
        window.showModalDialog(url, null, feature);
        //alert(document.location.href);
        window.location.href = document.location.href;
    }
    else {
        var feature = "width=600,height=400,menubar=no,toolbar=no,location=no,scrollbars=no,status=no,modal=yes";
        window.open(url, null, feature);
        //alert(document.location.href);
        window.location.href = document.location.href;
    }
}
function showDialogWidth(url, width, height) {
    if (document.all) {
        var feature = "resizable:1;dialogWidth:" + width + "px;dialogHeight:" + height + "px;status:no;help:no";
        window.showModalDialog(url, null, feature);
        window.location.href = document.location.href;
        //        window.opener.location.href = window.opener.location.href;   
    }
    else {
        var feature = "width=" + width + ",height=" + height + ",menubar=no,toolbar=no,location=no,scrollbars=no,status=no,modal=yes";
        window.open(url, null, feature);
        window.location.href = document.location.href;
    }
}
function showDialogWidthTJ(url, width, height) {
    if (document.all) {
        var feature = "dialogWidth:" + width + "px;dialogHeight:" + height + "px;status:no;help:no";
        window.showModalDialog(url, null, feature);
    }
    else {
        var feature = "width=" + width + ",height=" + height + ",menubar=no,toolbar=no,location=no,scrollbars=no,status=no,modal=yes";
        window.open(url, null, feature);
    }
}
function showOpen(url, width, height) {
    var feature = "width=" + width + ",height=" + height + ",menubar=no,toolbar=no,location=no,scrollbars=yes,status=no,modal=yes";
    window.open(url, '_blank', feature);
}

var popSms;
function showOpenTJ(url, width, height) {
    var feature = "width=" + width + ",height=" + height + ",menubar=no,toolbar=no,location=no,scrollbars=yes,status=no,modal=yes";
    try {
        if (popSms == null || popSms.closed)
            popSms = window.open(url, '_blank', feature);
    }
    catch (err) {
        window.open(url, '_blank', feature);
    }
}

/*头头排序用显示，对应输出的标签必须为对应的字段span字段名*/
function onPageLoad() {
    var s = document.readyState;
    if (s == "complete") {
        var order = GetQueryString("order");
        var by = GetQueryString("sortby");
        if (by != null) {
            if (order == null) {
                ordervar = "desc";
                if (document.getElementById("span" + by) != null) {
                    document.getElementById("span" + by).innerHTML = " ▲";
                }

            }
            else {
                if (order == "asc") {
                    ordervar = "desc";
                    if (document.getElementById("span" + by) != null) {
                        document.getElementById("span" + by).innerHTML = " ▲";
                    }

                }
                else {
                    ordervar = "asc";
                    if (document.getElementById("span" + by) != null) {
                        document.getElementById("span" + by).innerHTML = " ▼";
                    }

                }
          }
        }
    }
}