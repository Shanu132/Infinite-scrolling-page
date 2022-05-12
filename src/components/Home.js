import React, { useState, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component'
import '../App.css';

function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);
  const [addMore, setaddMore] = useState(true);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?page=1&results=10&seed=abc`)
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      });
  },[]);

  const fetchComments=()=>{
    setTimeout(()=>{
      axios
      .get(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
      .then((res) => {
        setData([...data,...res.data.results]);
        if(res.data.results.length<10){
          setaddMore(false)
        }
      });
    },1000)
    setPage(page+1)  
  }

  return (
    <>
     <div className="home">
          <nav className="nav">
            <NavLink to="/">Logout</NavLink>
          </nav>
          <div className="cardbox"> 
          <InfiniteScroll
            dataLength={data.length}
            next={fetchComments}
            hasMore={addMore}
            loader={<h3>Loading...</h3>}
          >
           {
              data.map((el,i)=>{
                return(
                  <div className="card" key={i}>
                     <h3>{el.name.first} {el.name.last}</h3>
                     <img src={el.picture.thumbnail} />
                  </div>
                  
                )
              })
            }
          </InfiniteScroll>
          </div>
      </div>  
    </>
  );
}

export default Home;
