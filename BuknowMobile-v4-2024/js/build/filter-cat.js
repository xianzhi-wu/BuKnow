var filterCat = {
    $wrapper: $(".new-cat-wrapper"),
    $overlay: $(".overlay"),

    init: function() {
        $("#filter-icon").click(this.toggleFilter.bind(this));
        $(".cat-item").click(this.chooseCat.bind(this));
    },

    toggleFilter: function() {
        if (this.$overlay.hasClass("hide")) {
            this.openFilter();
        } else {
            this.closeFilter();
        }
    },

    closeFilter: function() {
        this.$overlay.addClass("hide");
        this.$wrapper.addClass("hide");
    },

    openFilter: function() {
        this.$overlay.removeClass("hide");
        this.$wrapper.removeClass("hide");
    },

    chooseCat: function(event) {
        var $target = $(event.target);

        if (!$target.hasClass("on")) {
            $target.addClass("on");
            $target.siblings(".on").removeClass("on");
        }
    }
};

filterCat.init();