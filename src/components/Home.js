import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <img width={700} height={500}
      src ="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      
        alt="food"
      />
      <h1 className ="textColor"> Vote for Favourite Dish</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="flexbtn">
          <button
            type="button"
            className="btnReady"
            onClick={() => {
              navigate("/pollpage");
            }}
          >
            Ready To Vote
          </button>
        
          <button
            type="button"
            className="btninfo"
            onClick={() => {
              navigate("/results");
            }}
          >
            See To Results
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
