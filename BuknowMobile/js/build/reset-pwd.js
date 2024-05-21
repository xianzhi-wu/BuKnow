var rp = {
    $curPwdInput: $("#cur-pwd"),
    $newPwdInput: $("#new-pwd"),
    $confirmPwdInput: $("#confirm-pwd"),
    $tip: $(".valid-tip"),
    
    checkInput: function($input, message) {
        var value = $input.val().trim();
        if (value === '') {
            rp.showTip(message);
            return false;
        }
        return true;
    },

    checkPasswordFormat: function($input) {
        var password = $input.val().trim();
        if (!/^[0-9a-zA-Z!@#$%^&*]{6,16}$/.test(password)) {
            rp.showTip("密码格式错误(密码由6-16个字符组成)");
            return false;
        }
        return true;
    },

    checkConfirmation: function() {
        var newPassword = rp.$newPwdInput.val().trim();
        var confirmPassword = rp.$confirmPwdInput.val().trim();
        if (confirmPassword !== newPassword) {
            rp.showTip("两次新密码输入不一致");
            return false;
        }
        return true;
    },

    showTip: function(message) {
        rp.$tip.text(message).removeClass("hide");
    },

    hideTip: function() {
        rp.$tip.addClass("hide");
    },

    init: function() {
        $(".reset-pwd-form input").on("focus", rp.hideTip);

        $(".reset-pwd-btn").click(function(e) {
            e.preventDefault();
            if (rp.checkInput(rp.$curPwdInput, "请输入当前密码") &&
                rp.checkPasswordFormat(rp.$curPwdInput) &&
                rp.checkInput(rp.$newPwdInput, "请输入新密码") &&
                rp.checkPasswordFormat(rp.$newPwdInput) &&
                rp.checkInput(rp.$confirmPwdInput, "请确认密码") &&
                rp.checkConfirmation()) {
                alert("Password reset successfully!");
            }
        });
    }
};

rp.init();