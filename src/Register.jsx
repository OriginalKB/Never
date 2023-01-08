import React, {useState} from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');
    const [name, setname] = useState('');
    const [location, setlocation] = useState('');
    const [digital, setdigital] = useState('');
    const [phone, setphone] = useState('');
    const [statux, setstatux] = useState('');
    const [craft, setcraft] = useState('');
    const [ghana, setghana] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit = {handleSubmit}>
                 <h2>Register</h2>
                 <p>Please provide the accurate information for future assistance.</p>
                <label htmlfor="name">Full Name</label>
                <input value={name} onChange={(e) => setname(e.target.value)} type="name" placeholder="Full Name" id="name" name="name"/>
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Youremail" id="email" name="email"/>
                <label for="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password"/>
                <label for="password">Re-enter Password</label>
                <input value={pass2} onChange={(e) => setPass2(e.target.value)} type="password" placeholder="************" id="password2" name="password2"/>
                <label htmlfor="Location">Location</label>
                <input value={location} onChange={(e) => setlocation (e.target.value)}  type="location" placeholder="Your Location" id="location" name="location"/>
                <label htmlfor="digital address">Digital Address</label>
                <input value={digital} onChange={(e) => setdigital(e.target.value)} type="digital" placeholder="Your GPS eg.CU-0005-7846" id="digital" name="digital"/>
                <label htmlfor="ghana card">Ghana Card</label>
                <input value={ghana} onChange={(e) => setghana(e.target.value)} type="ghana" placeholder="Your Ghana Card Number" id="ghana" name="ghana"/>
                <label htmlfor="phone">Phone Number</label>
                <input value={phone} onChange={(e) => setphone (e.target.value)} type="phone" placeholder="Your Mobile Number" id="phone" name="phone" />
                
                <label id="status" htmlfor="employer">Employer 
                <input value={statux} onChange={(e) => setstatux (e.target.value)}  type="radio"  id="status" name="statux"/>
                </label>
                <label id="status" htmlfor="artisan">Artisan
                <input value={statux} onChange={(e) => setstatux(e.target.value)} type="radio"  id="status" name="statux"/>
                </label>
                
                <label htmlfor="craft">Craft</label>
                <select id="craft" onChange={(e) => setcraft(e.target.value)} name="craft">

                <option value="Carpenter">Carpenter</option>
                <option value="Electrician">Electrician</option>
                <option value="Glazier">Glazier</option>
                <option value="Fencer">Fencer</option>
                <option value="Ironworker">Ironworker</option>
                <option value="Mason">Mason</option>
                <option value="Painter">Painter</option>
                <option value="Pipefitter">Pipefitter</option>
                <option value="Plumber">Plumber</option>
                <option value="Welder">Welder</option>

                </select> 
                
                <button type="submit">Register</button>
                
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch ('login')}>If you do have an account, Login here.</button>
        </div>
    )
}