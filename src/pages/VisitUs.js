import React from "react";
import { VisitStyled } from "../styles/AllStyles";
const VisitUs = () => {
  return (
    <VisitStyled>
      <div className="con_1">
        <div className="visit_us_cont_2">
          VisitUs
          <div className="week_cont_2">
            <div className="days">
              <h2>Monday</h2>
              <h2>Tuesday</h2>
              <h2>Wednesday</h2>
              <h2>Thursday</h2>
              <h2>Friday</h2>
              <h2>Saturday</h2>
              <h2>Sunday</h2>
            </div>
            <div className="time">
              <h2>08:00am-06:00pm</h2>
              <h2>10:00am-07:00pm</h2>
              <h2>08:00am-06:00pm</h2>
              <h2>10:00am-07:00pm</h2>
              <h2>08:00am-06:00pm</h2>
              <h2>10:00am-07:00pm</h2>
              <h2>closed</h2>
            </div>
          </div>
        </div>
        <div className="map_con_3">
          <iframe
            title="jhngkhdgnkfhlk"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.6601529279695!2d-95.55685135714332!3d29.674468903205163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3c17ca66b2f%3A0xd80b2e9ad76d2964!2sRace%20Motors!5e0!3m2!1sen!2sin!4v1693980182028!5m2!1sen!2sin"
            className="map_visit_us"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </VisitStyled>
  );
};
export default VisitUs;
