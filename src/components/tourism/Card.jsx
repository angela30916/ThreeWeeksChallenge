/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './card.scss';

export default function Card(props) {
  const { siteData, setPosition, setInfo } = props;
  const positionArr = (obj) => {
    setPosition([obj.PositionLat, obj.PositionLon]);
  };

  return siteData.map((site, idx) => {
    const pictureStyle = { backgroundImage: `url('${site.Picture.PictureUrl1}')` };

    return (
      <div
        className="cards-wrapper"
        key={site.ID}
        onClick={() => {
          positionArr(site.Position);
          setInfo(site);
        }}
        aria-hidden="true"
      >
        <div className="picture" style={pictureStyle}>
          <span>{site.Name}</span>
        </div>
        <div className="category">{site.Class1 || '無分類'}</div>
        <div className="number">{idx + 1}</div>
      </div>
    );
  });
}

Card.protoTypes = { siteData: PropTypes.array.isRequired };
