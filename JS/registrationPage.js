$(function () {
    var user_Boolean = false;
    var password_Boolean = false;
    var varconfirm_Boolean = false;
    var emaile_Boolean = false;
    var Mobile_Boolean = false;
    $('.reg_user').blur(function(){
        if ((/^[a-z0-9_-]{4,8}$/).test($(".reg_user").val())){
            $('.user_hint').html("✔").css("color","green");
            user_Boolean = true;
        }else {
            $('.user_hint').html("×").css("color","red");
            user_Boolean = false;
        }
    });
    // password
    $('.reg_password').blur(function(){
        if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password").val())){
            $('.password_hint').html("✔").css("color","green");
            password_Boolean = true;
        }else {
            $('.password_hint').html("×").css("color","red");
            password_Boolean = false;
        }
    });


    // password_confirm
    $('.reg_confirm').blur(function(){
        if (($(".reg_password").val())==($(".reg_confirm").val())){
            $('.confirm_hint').html("✔").css("color","green");
            varconfirm_Boolean = true;
        }else {
            $('.confirm_hint').html("×").css("color","red");
            varconfirm_Boolean = false;
        }
    });


    // Email
    $('.reg_email').blur(function(){
        if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($(".reg_email").val())){
            $('.email_hint').html("✔").css("color","green");
            emaile_Boolean = true;
        }else {
            $('.email_hint').html("×").css("color","red");
            emaile_Boolean = false;
        }
    });


    // Mobile
    $('.reg_mobile').blur(function(){
        if ((/^1[34578]\d{9}$/).test($(".reg_mobile").val())){
            $('.mobile_hint').html("✔").css("color","green");
            Mobile_Boolean = true;
        }else {
            $('.mobile_hint').html("×").css("color","red");
            Mobile_Boolean = false;
        }
    });


    // click
    $('.red_button').click(function(){
        var msg="";
        if(user_Boolean && password_Boolean && varconfirm_Boolean && emaile_Boolean && Mobile_Boolean == true){
            alert("注册成功");
        }else {
            if(!user_Boolean){
                msg+="用户名格式不正确！\n";
            } 
            if(!password_Boolean){
                msg+="密码格式不正确！\n";
            }
            if(!varconfirm_Boolean){
                msg+="请再次输入密码！\n";
            }
            if(!emaile_Boolean){
                msg+="电子邮箱格式不正确！\n";
            }
            if(!Mobile_Boolean){
                msg+="电话号码格式不正确！\n";
            }
            if(msg!=""){
                msg=msg.substr(0,msg.length-1);
                alert(msg);
                return false;
            }
            // alert("请完善信息");
        }
    });
    
})