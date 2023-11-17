import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config/firebase.config";
import { useState } from "react";
import { FcCancel, FcApproval } from "react-icons/fc";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        console.log('btn clicked');
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        if (password.length < 6) {
            setRegisterError('password is less then 6 charecter')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('you should have at least one upper case charecter');
            return;
        }
        // error message reset 
        setRegisterError('')
        // ste success message reset 
        setSuccess('')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User created successfully')
            })
            .catch(error => setRegisterError(error.message))
    }
    return (
        <>
            <form onSubmit={handleRegister} className="mx-auto border p-4 text-center w-1/2" action="">
                <h2 className="text-xl font-extrabold">Register here</h2>
                <input className="m-4 p-2 w-3/4" type="email" placeholder="email" name="email" id="register-email" />
                <br />
                <div className=" flex flex-row">
                    <input className="m-4 p-2 w-3/4" type={showPassword ? 'text' : 'password'} placeholder="password" name="password" id="register-password" />
                    <span className="mt-6" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FcApproval /> : <FcCancel />
                        }
                    </span>
                </div>
                <br />
                <button className="btn btn-success">Submit</button>
            </form>
            {
                registerError && <p className="text-red-500 text-center">{registerError}</p>
            }
            {
                success && <p className="text-green-600 text-center">{success}</p>
            }
        </>
    );
};

export default Register;