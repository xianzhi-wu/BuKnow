var socialSharing = {
    $shareWrapper: $(".share-wrapper"),
    $overlay: $(".overlay"),

    init: function() {
        $(".share-icon").parent().click(this.openShare.bind(this));
        $(".cancel-share").click(this.closeShare.bind(this));

        socialSharing.$shareWrapper.on("click", "#sharetoqqzone", this.shareToQQZone.bind(this));
        socialSharing.$shareWrapper.on("click", "#sharetoqq", this.shareToQQ.bind(this));
        socialSharing.$shareWrapper.on("click", "#sharetosina", this.shareToSina.bind(this));
    },

    openShare: function() {
        socialSharing.$overlay.removeClass("hide");
        socialSharing.$shareWrapper.css("bottom", "0");
    },

    closeShare: function() {
        socialSharing.$overlay.addClass("hide");
        socialSharing.$shareWrapper.css("bottom", "-208px");
    },

    shareToQQZone: function() {
        this.share("QQ空间");
    },

    shareToQQ: function() {
        this.share("腾讯微博");
    },

    shareToSina: function() {
        this.share("新浪微博");
    },

    share: function(platform) {
        var title = document.title;
        var url = window.location;
        var picurl = "http://img1.buknow.com/Public/Uploads/onlineActivity/201504/27/55399f56777821739.jpg";
        var shareUrl, shareWindow;

        switch(platform) {
            case "QQ空间":
                shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + title + '&url=' + url + '&pics=' + picurl;
                break;
            case "腾讯微博":
                shareUrl = 'http://v.t.qq.com/share/share.php?title=' + title + '&url=' + url + '&pic=' + picurl;
                break;
            case "新浪微博":
                shareUrl = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url + '&pic=' + picurl;
                break;
        }

        shareWindow = window.open(shareUrl);
        this.closeShare();
    }
};

var userActions = {
    init: function() {
        this.initCollect(".collect-area");
        this.initCollect(".icon-btn");
        $(".comment-link").click(this.showCommentTip);
    },

    initCollect: function(selector) {
        $(selector).on("click", ".collect-icon", this.collect);
    },

    collect: function() {
        if (!userActions.isLoggedIn()) {
            userActions.showTip("请先登录");
            return;
        }

        var $collectIcon = $(this);
        $collectIcon.toggleClass("collected");
    },

    isLoggedIn: function() {
        return false;
    },

    showCommentTip: function() {
        if (!userActions.isLoggedIn()) {
            userActions.showTip("请先登录");
        } else {

        }
    },

    $popupTip: $(".modal-noti"),

    showTip: function(message) {
        userActions.$popupTip.text(message).removeClass("hide");
        setTimeout(function() {
            userActions.$popupTip.addClass("hide");
        }, 1500);
    }
};

socialSharing.init();
userActions.init();