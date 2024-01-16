import React from "react";
import "./QuickView.scss";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const QuickView = ({movie, Mypopup,popup,BannerStyle}) => {
  return (
    <div className={`quickView ${popup && "open"}`  }>
      <div className="quickView_banner" style = {BannerStyle}>
        <div className="quickView_content" >
          <h3 className="quickView_title">{movie.title || movie.name}</h3>
          <p>
          {movie.overview}
          </p>
        </div>
        <button className="quickView_close" onClick={Mypopup}><CancelPresentationIcon/></button>
      </div>
    </div>
  );
};

export default QuickView;
