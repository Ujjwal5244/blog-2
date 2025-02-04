import React from "react";
import { Table } from "../tableOfcontent/Table";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-container">
      <div className="heading">
        <h1>
          How to run a successful business with your partner (and stay together)
        </h1>
        <p>
          Starting a business with your spouse or significant other is an
          exciting but delicate process and requires a great deal of faith. We
          spoke to a dozen successtul businesses about how they get it right.
        </p>
      </div>
      <div className="img-container">
        <img
          src="https://imgs.search.brave.com/S31UQAo-0-FwMsC0bu5RFH2Rcj6B1sKEtqU-E_CCfn4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJhbmZ1bmQuY29t/L2h1YmZzL0Fkb2Jl/U3RvY2tfNjU2NTgx/NDAxLmpwZWc"
          className="image-1"
        />
      </div>
      <div className="half-container">
        <div className="section1">
          <Table />
        </div>
        <div className="section2">
          <div className="about-container">
            <h2>Introduction</h2>
            <p>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id.
              <br></br>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit
              tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat.
            </p>
            <img
              src="https://imgs.search.brave.com/maU66nUwvnfX2zbEdq_4y9IlGp4OLk6HLSI-F-hrpio/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMTR0/YWw4YmNobjU5by5j/bG91ZGZyb250Lm5l/dC9tUTdrc2ZKQW5n/VFFvV2htM2p2UHU4/SHFjZjZkaU1zYWR4/WmdrczUwbV9zL3c6/OTYwL3BsYWluL2h0/dHBzOi8vMDJmMGE1/NmVmNDZkOTNmMDNj/OTAtMjJhYzVmMTA3/NjIxODc5ZDU2Njdl/MGQ3ZWQ1OTViZGIu/c3NsLmNmMi5yYWNr/Y2RuLmNvbS9zaXRl/cy8xMjEzMC9waG90/b3MvMjQ4MjExMy9p/bWFnZV9vcmlnaW5h/bC5qcGc"
              alt=""
              className="image-2"
            />
            <h6>Image courtesy of Blake Carpenter via Unsplash</h6>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
