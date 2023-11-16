
const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        console.log('btn clicked');
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <>
            <form onSubmit={handleRegister} className="mx-auto border p-4 text-center w-1/2" action="">
                <h2>Register here</h2>
                <input className="m-4 p-2 w-3/4" type="email" placeholder="email" name="email" id="register-email" />
                <br />
                <input className="m-4 p-2 w-3/4" type="password" placeholder="password" name="password" id="register-password" />
                <br />
                <button className="btn btn-success">Submit</button>
            </form>
        </>
    );
};

export default Register;