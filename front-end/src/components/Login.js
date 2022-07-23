import {useContext, useEffect, useState} from "react";
import APIService from "../services/APIService";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../App";

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await APIService.post('http://127.0.0.1:8000/api/login', data);
        if (result.success) {
            setSuccess('Login successful.');
            console.log(result.result.data.token);
            const user = {
                authenticated: true,
                token: result.result.data.token,
                ...result.result.data
            }
            await APIService.post('http://127.0.0.1:8000/api/attendance', {
                user_id: user.id,
            });
            setUser(user);
            localStorage.setItem('token', result.result.data.token);
            navigate('/');
        } else {
            setError(result.error);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (user.authenticated) {
            navigate('/');
        }
    }, [user]);
    return (
        <>
            <div className="vh-100 d-flex justify-content-center align-items-center gap-5">
                <div className="mt-5 p-2 d-flex flex-column justify-content-center align-items-center">
                    <i
                        className="fa-solid fa-feather-pointed fa-10x"
                        style={{color: "white"}}
                    ></i>
                    <br/>
                    <h1 className="mt-1 text-white">LOGO</h1>
                </div>
                <div className="border-end border-white border-2 h-25"></div>
                <div className=" flex items-center justify-center main">
                    <form onSubmit={handleSubmit} className=" w-2/4 pr-4 login ">
                        <h1 className="text-xl italic font-medium mb-2 text-white">Login</h1>


                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-white">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(e) => setData({...data, email: e.target.value})}
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-white">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={(e) => setData({...data, password: e.target.value})}
                            />
                        </div>


                        <button
                            type="submit"
                            className="btn btn-primary btn-block btn-large focus:outline-none hover:bg-blue-500 mt-2"
                            disabled={loading}
                        >
                            Log Me In
                        </button>
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                <small>{error}</small>
                            </div>
                        )}
                        {success && (
                            <div
                                className="alert alert-success alert-dismissible fade show"
                                role="alert"
                            >
                                {success}
                                <button
                                    onClick={() => setSuccess("")}
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                ></button>
                            </div>)}
                    </form>
                    {/* <div className="flex-2 logo pl-4"><i className="fas fa-feather-alt"></i> LOGO</div> */}
                </div>
            </div>
        </>
    );
};

export default Login;
