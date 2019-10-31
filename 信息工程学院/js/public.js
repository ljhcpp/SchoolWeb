// $(document).ready(function() {
//     function timer() {
//         today = new Date();
//         year = today.getFullYear();
//         yue = today.getMonth() + 1;
//         ri = today.getDate();
//         xq = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
//         x = today.getDay();
//         shi = today.getHours();
//         if (shi < 10)
//             shi = "0" + shi;
//         fen = today.getMinutes();
//         if (fen < 10)
//             fen = "0" + fen;
//         miao = today.getSeconds();
//         if (miao < 10)
//             miao = "0" + miao;
//         $(".topTime").html(year + "年" + yue + "月" + ri + "日" + "&nbsp;" + xq[x] + "&nbsp;" + shi + ":" + fen + ":" + miao);
//         setTimeout("timer()", 1000);
//     }
//     timer();
//     alert("a");
// });