import  { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
    const [form, setForm] = useState({ name: '', email: '',password:'', username: '' ,confirmpassword:''});
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#])[A-Za-z\d*@%$#]{8,}$/;

    const navigate = useNavigate();
    const handleChangeForm = (e) => {
        if(e.target.id==="email"){
            setForm({
                ...form,
                email: e.target.value
            })

        }
        else if(e.target.id==="name"){
            setForm({
                ...form,
                name: e.target.value
            })

        }
        else if(e.target.id==="username"){
            setForm({
                ...form,
                username: e.target.value
            })

        }
        if(e.target.id==="password"){
            setForm({
                ...form,
                password: e.target.value
            })

        }
        if(e.target.id==="confirmpassword"){
            setForm({
                ...form,
                confirmpassword: e.target.value
            })

        }
    
    
    }

    const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(form);
    if(emailRegex.test(form.email) && passwordRegex.test(form.password) && form.password === form.confirmpassword && !form.username.includes(' ')){
        console.log("Form is valid");
        navigate('/');
    }
    else{
        console.log("Form is invalid");
    }
  };


    useEffect(() => {
        console.log(form);
    },[form])
  return (
    <form>
        <div className="form-group mb-4">
            <label htmlFor="name">Name</label>
            <input type="name" className="form-control" id="name" onChange={handleChangeForm}/>
        </div>
        <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" onChange={handleChangeForm} aria-describedby="emailHelp" />
            {form.email && (
                emailRegex.test(form.email) ? (
                    <span className="text-success">Valid Email</span>
                ) : (
                    <span className="text-danger">Invalid email — must follow the format: name@domain.com</span>
                )
                )}
         </div>
        <div className="form-group mb-4">
            <label htmlFor="username">User Name</label>
            <input type="username" className="form-control" id="username" onChange={handleChangeForm}/>
            {form.username && (
                form.username.includes(' ') ? <span className="text-danger">Invalid User Name - must not contain spaces</span>
                : <span className="text-success">Valid User Name</span>
            )}
        </div>
        <div className="form-group mb-4">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password"onChange={handleChangeForm} />
            {form.password && (
                passwordRegex.test(form.password) ? (
                    <span className="text-success">Valid Password</span>
                ) : (
                    <span className="text-danger">
                        Invalid password — must be at least 8 characters, include uppercase, lowercase, a number, and a special character (* @ % $ #)
                    </span>
                )
            )}      
        </div>
        
         <div className="form-group mb-4">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" className="form-control" id="confirmpassword" onChange={handleChangeForm}/>
            {form.confirmpassword && (
                form.confirmpassword === form.password ? (
                    <span className="text-success">Password Match</span>
                ) : (
                    <span className="text-danger">Password does not match</span>
                )
            )}
        </div>
        
        <button type="submit" className="btn btn-success px-4" onClick={handleSubmitForm}>Register</button>
    </form>
  )
}
