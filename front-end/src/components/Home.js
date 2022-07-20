import React from "react";

const Home = () => {
  return (
    <>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="mt-5 border-right  border-white border-2 p-2">
          <i
            className="fa-solid fa-feather-pointed fa-2xl"
            style={{ color: "white" }}
          ></i>
          <br />
          <h5 className="mt-1 text-white "> LOGO</h5>
        </div>
        <div className=" flex  items-center justify-center main">
          <div className=" w-2/4 pr-4 login ">
            <h1 className="text-xl italic font-medium mb-2">Login</h1>

          
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">User Name</label>
              <input
                type="email"
                className="form-control"
                               aria-describedby="emailHelp"
                placeholder="Enter user name"
              />
              
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
           
        
            <button
              type="submit"
              className="btn btn-primary btn-block btn-large focus:outline-none hover:bg-blue-500 mt-2"
            >
              Log Me In
            </button>
          </div>
          {/* <div className="flex-2 logo pl-4"><i className="fas fa-feather-alt"></i> LOGO</div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
