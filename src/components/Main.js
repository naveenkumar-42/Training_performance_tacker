import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProfileTypes from "./ProfileTypes";
import Actions from "./Actions";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSeparatorContainerClick = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  return (
    <div className={`main ${className}`}>
      <div className="left2" />
      <div className="content1">
        <img
          className="image-12-icon2"
          loading="lazy"
          alt=""
          src="/image-12@2x.png"
        />
        <div className="title">
          <a className="student-dashboard6">STUDENT DASHBOARD</a>
        </div>
      </div>
      <div className="navigation">
        <div className="profiles">
          <button className="image8">
            <img className="person-icon2" alt="" src="/person@2x.png" />
            <div className="profile-names">
              <a className="profile2">Profile</a>
            </div>
          </button>
          <div className="separator2" onClick={onSeparatorContainerClick}>
            <img className="nas-icon2" alt="" src="/nas@2x.png" />
            <div className="resource2">{`Resource `}</div>
          </div>
          <ProfileTypes />
        </div>
      </div>
      <Actions />
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
