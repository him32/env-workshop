import React from "react";
import Navbar from "../Components/Navbar";
import MovingNotice from "../Components/MovingNotice";
import Footer from "../Components/Footer";

const Schedule = () => {
  return (
    <div>
      <div className="container-fluid p-0">
        
        <div className="row">
          <MovingNotice />
        </div>
        <div className="row mt-5">
          <p className="text-center fw-bold fs-2">IMPORTANT DATES</p>
        </div>
        <div className="row p-5">
          <table className="table table-light text-center">
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Registration Start Date</td>
                <td>17th March, 2025</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Registration Deadline Date</td>
                <td>15th April, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};

export default Schedule;
