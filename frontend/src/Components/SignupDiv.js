import React from 'react'
import './SignupDiv.css'

function SignupDiv({handlePopup}) {
  return (
    <div className='overlay'>
        <div className='sign-up-container'>
            <h1 className='signupHeader'>Sign Up </h1><button className='xButton' onClick={handlePopup}>X</button>
            <p className='sign-up-p1'>It’s quick and easy.</p>
            <input type='text' className='firstName' placeholder='First Name' /> 
            <input type='text' className='lastName' placeholder='Last Name' /> 
            <input type='number' className='email' placeholder='Mobile number or email' />
            <input type='password' className='password' placeholder='New password' />
            <div className='birthday'>Birthday</div>
            <select className='month'>
                <option value='1'>January</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
            </select>
            <select class="day" id="day" name="day">
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            <select className="birth-year">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
            </select>
            <div className='gender'>Gender</div>
            <span className='male'>
                <label>Male</label>
                <input type='radio' name='gender' value='male' className='mdot' />
            </span>
            <span className='female'>
                <label>Female</label>
                <input type='radio' name='gender' value='female' className='fdot'/>
            </span>
            <span className='preferNot'>
                <label>Prefer Not</label>
                <input type='radio' name='gender' value='not' className='pdot'/>
            </span>
            <p className='sign-up-p2'>People who use our service may have uploaded your contact information to Facebook. Learn more.
            </p>
            <p className='sign-up-p3'>
            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
            </p>
            <button className='signupButton'>Sign Up</button>

        </div>
    </div>
  )
}

export default SignupDiv
