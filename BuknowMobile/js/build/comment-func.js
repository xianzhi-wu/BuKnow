var commentForm = {
    stars: $(".comment-stars i"),
    textarea: $(".comment-tarea"),
    tip: $(".modal-noti"),
    score: 0,

    init: function() {
        // this - commentForm object
        this.stars.on("click", this.handleStarClick.bind(this));
        $(".comment-btn").on("click", this.handleSubmit.bind(this));
    },

    handleStarClick: function(event) {
        var index = this.stars.index(event.currentTarget);
        this.updateStars(index);
    },

    updateStars: function(index) {
        this.score = index + 1;
        this.stars.each(function(i) {
            $(this).toggleClass("star-on", i < index + 1);
        });
    },

    handleSubmit: function() {
        if (this.validateRating() && this.validateComment()) {
            this.submitComment();
        }
    },

    validateRating: function() {
        if (this.score === 0) {
            this.displayError("评分不能为0");
            return false;
        }
        return true;
    },

    validateComment: function() {
        var comment = this.textarea.val().trim();

        if (comment.length === 0) {
            this.displayError("评论不能为空");
            return false;
        } else if (this.getCharacterCount(comment) < 20) {
            this.displayError("评论不能少于20个字");
            return false;
        }

        return true;
    },

    displayError: function(message) {
        this.tip.text(message).removeClass("hide");
        this.hideTip();
    },

    hideTip: function() {
        setTimeout(function() {
            this.tip.addClass("hide");
        }.bind(this), 1500);
    },

    getCharacterCount: function(str) {
        var noSpaceStr = str.replace(/\s+/g, "");
        var len = 0;
        for (var i = 0; i < noSpaceStr.length; i++) {
            var char = noSpaceStr.charCodeAt(i);
            len += (char >= 0x0001 && char <= 0x007e) || (0xff60 <= char && char <= 0xff9f) ? 1 : 2;
        }
        return len;
    },

    submitComment: function() {
        
    }
};

commentForm.init();