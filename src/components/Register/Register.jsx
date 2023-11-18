import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
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
        const terms = e.target.terms.checked;
        console.log(email, password, terms);
        if (password.length < 6) {
            setRegisterError('password is less then 6 charecter')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('you should have at least one upper case charecter');
            return;
        }
        else if (!terms) {
            setRegisterError('Please accept our terms')
            return
        }
        // error message reset 
        setRegisterError('')
        // ste success message reset 
        setSuccess('')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User created successfully')
                sendEmailVerification(result.user)
                    .then(() => {
                        alert('verification email send at your mail address, Please check your mail...')
                    })
                    .catch(error => setRegisterError(error.message))
            })
            .catch(error => setRegisterError(error.message))
    }
    return (
        <>
            <form onSubmit={handleRegister} className="mx-auto border p-4 text-center w-1/2" action="">
                <h2 className="text-xl font-extrabold">Register here</h2>
                <input className="m-4 p-2 w-3/4" type="email" placeholder="email" name="email" id="register-email" />
                <br />
                <div className="relative">
                    <input className="m-4 p-2 w-3/4" type={showPassword ? 'text' : 'password'} placeholder="password" name="password" id="register-password" />
                    <span className="absolute top-7 right-20" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FcApproval /> : <FcCancel />
                        }
                    </span>
                </div>
                <br />
                <div className="mb-2">
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ms-2" htmlFor="terms">Accept our terms and condition</label>
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