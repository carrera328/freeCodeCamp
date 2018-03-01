var url = 'https://twitter.com/intent/tweet?text=';

$(document).ready(function () {
    $(".jumbotron").hide();
    $("h1").css("text-align", "center");
    $("#getQuote").css("background-color", "#034694");
    
    // getQuote click function
    $("#getQuote").click(function () {
        $(".jumbotron").show();
        $.ajax({
            url: "http://quotesondesign.com//wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
            cache: false,
            success: function (data) {
                var content = data[0].content.slice(3, -5);
                var author = " -" + data[0].title;
                $("#target1").html(content);
                console.log(content);
                $("#target1").append(author);
                $("#tweet").on("click", function () {
                    content = document.querySelector("#target1").innerText;
                    window.open(url +encodeURIComponent(content), "tweetWindow");
                })
            }
        });
    });
});