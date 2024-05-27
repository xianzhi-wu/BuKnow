var signupForm = {
    countdown: 0,
    countdownDuration: 60,
    $mobileInput: $("#mobile"),
    $vericodeInput: $("#vericode"),
    $passwordInput: $("#password"),
    $validTip: $(".valid-tip"),
    $getCode: $(".get-code"),

    init: function() {
        this.$getCode.click(this.handleGetCode.bind(this));
        $("#signup").click(this.handleSignup.bind(this));
    },

    showTip: function(message) {
        this.$validTip.text(message);
    },

    hideTip: function() {
        this.$validTip.text("");
    },

    validateMobile: function() {
        var pregMobile = /^(1(([3578][0-9])|(47)))\d{8}$/;
        var value = this.$mobileInput.val();

        if (value === '') {
            this.showTip("请输入手机号");
            return false;
        } else if (pregMobile.test(value) === false) {
            this.showTip("手机号码格式错误");
            return false;
        }

        this.hideTip();
        return true;
    },

    validateVericode: function() {
        var value = this.$vericodeInput.val();

        if (value === '') {
            this.showTip("请输入手机短信验证码");
            return false;
        }

        this.hideTip();
        return true;
    },

    validatePassword: function() {
        var value = this.$passwordInput.val();
        var pregPassword = /^[0-9a-zA-Z!@#$%^&*]{6,16}$/;

        if (value === '') {
            this.showTip("请输入密码");
            return false;
        } else if (pregPassword.test(value) === false) {
            this.showTip("密码格式错误");
            return false;
        }

        this.hideTip();
        return true;
    },

    handleGetCode: function(e) {
        e.preventDefault();

        if (this.validateMobile() && signupForm.countdown === 0) {
            signupForm.countdown = signupForm.countdownDuration;
            this.startCountdown();
            this.tip("验证码已发送到您手机");
        }
    },

    startCountdown: function() {
        if (signupForm.countdown === 0) {
            signupForm.$getCode.text("获取");
            return;
        } else {
            signupForm.$getCode.text("重新获取(" + signupForm.countdown + "s)");
            signupForm.countdown--;
        }

        setTimeout(function() { 
            signupForm.startCountdown() 
        }, 1000);
    },

    tip: function(message) {
        var $overlay = $(".overlay");
        $overlay.find(".modal-noti").text(message);
        $overlay.removeClass("hide");
        setTimeout(function() {
            $overlay.addClass("hide");
        }, 1500);
    },

    handleSignup: function(e) {
        e.preventDefault();

        if (this.validateMobile() && this.validateVericode() && this.validatePassword()) {
            this.tip("成功找回密码，请重新登录。");
        }
    }
};

signupForm.init();