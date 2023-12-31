import React from "react"
import "../Login/Login.css"
import TopLock from "../../assest/images/top-lock.png"

const Login = () => {
    return (
        <>
            <div class="login-01">
                <div class="one-login  hvr-float-shadow">
                    <div class="one-login-head">
                        <img src={TopLock} alt="" />
                        <h1>LOGIN</h1>
                        <span></span>
                    </div>
                    <form>
                        <li>
                            <input type="text" class="text" value="Username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Username';}" /><a href="#" class=" icon user"></a>
                        </li>
                        <li>
                            <input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}"/><a href="#" class=" icon lock"></a>
                        </li>
                        <div class="p-container">
                            <label class="checkbox"><input type="checkbox" name="checkbox" checked/><i></i>Remember Me</label>
                            <h6><a href="/forgotpassword">Forgot Password ?</a> </h6>
                            <div class="clear"> </div>
                        </div>
                        <div class="submit">
                            <input type="submit" value="SIGN IN" />
                        </div>
                        <div class="social-icons">
                            <p>Or you can Login with one of the following</p>
                            <ul class="soc_icons2">
                                <li class="pic"><a href="#"><i class="icon_4"></i></a></li>
                                <li class="pic"><a href="#"><i class="icon_5"></i></a></li>
                                <li class="pic"><a href="#"><i class="icon_6"></i></a></li>
                                <div class="clear"> </div>
                            </ul>
                        </div>
                        <h5>Don't have an account ?<a href="/register"> Sign Up </a></h5>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login