const forgotPassword = () => {
    return (
        <div class="login-03">
            <div class="three-login  hvr-float-shadow">
                <div class="three-login-head">
                    <img src="images/top-key.png" alt="" />
                    <h3>account reset</h3>
                    <lable></lable>
                </div>
                <form>
                    <h5>Forgot Password or Username?</h5>
                    <p>To reset your account password or username, enter the
                        email address and we will send your instruction.</p>
                    <li>
                        <input type="text" class="text" value="E-mail" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-mail';}" /><a href="#" class=" icon3 mail2"></a>
                    </li>
                    <div class="submit three">
                        <input type="submit" value="SIGN UP" />
                    </div>
                </form>
            </div>
        </div>
    )

}
export default forgotPassword