import swipe from "../plugins/swipe.js";

var index = {
    banner: function() {
        new swipe(document.getElementById("j-slider"), {
            startSlide: 1 - 1,
            continuous: "1" ? true : false,
            auto: "5000" ? parseInt("5000", 10) : 0,
            pointers: "1" ? document.getElementById("j-pointers") : false
        });
    },

    menu: {
        $menu: $(".menu-dropdown"),
        $overlay: $(".overlay"),
        $indexWrapper: $(".index-wrapper"),
        
        init: function() {
            var self = this;
            $("#nav-menu").click(function(e) {
                e.stopPropagation(); //阻止冒泡

                if (self.$overlay.hasClass("hide")) {
                    self.openMenu();
                } else {
                    self.closeMenu();
                }
            });

            var menuLinks = self.$menu.find("a");
            self.menuHeight = menuLinks.eq(0).height() * menuLinks.length;

            self.$overlay.on("click", self.closeMenu.bind(self));

            $(window).on("scroll", function() {
                if ($(window).scrollTop() > 20) {
                    self.$indexWrapper.addClass("h-sticky");
                } else {
                    //如果菜单已经打开，并且页面往上滚动距离小于20px，不移除紫色背景
                    if (!self.$overlay.hasClass("hide") && self.$indexWrapper.hasClass("h-sticky")) {
                        return false;
                    }
                    self.$indexWrapper.removeClass("h-sticky");
                }
            });
        },

        openMenu: function() {
            this.$overlay.removeClass("hide");
            this.$menu.css({
                "height": this.menuHeight + "px"
            });
            //打开菜单时如果头部为透明背景，添加紫色背景。
            if (!this.$indexWrapper.hasClass("h-sticky") && $(window).scrollTop() <= 20) {
                this.$indexWrapper.addClass("h-sticky");
            }
        },

        closeMenu: function() {
            this.$overlay.addClass("hide");
            //关闭菜单式如果头部为紫色背景并且页面往上滚动距离小于20px,移除紫色背景
            if (this.$indexWrapper.hasClass("h-sticky") && $(window).scrollTop() <= 20) {
                this.$indexWrapper.removeClass("h-sticky");
            }
            this.$menu.css({
                "height": "0px"
            });
        }
    },

    init: function() {
        this.banner();
        this.menu.init();
    }
}

index.init();