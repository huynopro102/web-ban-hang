
const Register = () => {
    return (
        <>
            <div class="login-02">
                <div class="two-login  hvr-float-shadow">
                    <div class="two-login-head">
                        <img src="images/top-note.png" alt="" />
                        <h2>register</h2>
                        <lable></lable>
                    </div>
                    <form>
                    
                        <li>
                            <input type="text" class="text" value="Username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Username';}" /><a href="#" class=" icon2 user2"></a>
                        </li>
                        {/* <li style={{ height: '47px' }}>
                            <select style={{height: '47px' , width:'88%' ,float:'right' }} type="text" class="text" value="Username" ><a href="#" class=" icon2 user2"></a>
                                <option value="volvo">optional</option>
                                <option value="saab">option 1</option>
                                <option value="opel">option 2</option>
                                <option value="audi">option 3</option>
                            </select>
                            <a href="#" class=" icon2 user2"></a>
                        </li> */}
                        <li>
                            <input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}"/><a href="#" class=" icon2 lock2"></a>
                        </li>
                        <li>
                            <input type="password" value="Confirm Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Confirm Password';}"/><a href="#" class=" icon2 lock2"></a>
                        </li>
                        <li>
                            <input type="text" class="text" value="E-mail" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-mail';}" /><a href="#" class=" icon2 mail"></a>
                        </li>
        
                        <div class="submit two">
                            <input type="submit" value="SIGN UP" />
                        </div>
                        <h5>Already a member ?<a href="/login"> Login Here</a></h5>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register