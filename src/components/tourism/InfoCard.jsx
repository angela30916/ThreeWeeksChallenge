/* eslint-disable react/prop-types */
import styles from './infoCard.module.scss';

export default function InfoCard(props) {
  const { info, dists } = props;
  const distName = dists.find((el) => el.zip === info?.ZipCode);
  const pictureStyle = { backgroundImage: `url('${info?.Picture.PictureUrl1}')` };

  return (
    <div className={styles.infoCard}>
      <div className={styles.photoWrap}>
        <div className={styles.photo} style={pictureStyle} />
        <p>{info?.Picture.PictureDescription1}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.subTitle}>
          <p>
            {info?.City}
            {distName?.name}
          </p>
          <span>{info?.Class1}</span>
        </div>
        <div className={styles.title}>{info?.Name}</div>
        <div className={styles.contact}>
          <p>
            <span>{info?.Phone}</span>
            <span>{info?.Address}</span>
          </p>
          <p>{info?.WebsiteUrl}</p>
        </div>
        <div className={styles.description}>
          <p>景點介紹</p>
          {info?.DescriptionDetail}
        </div>
      </div>
    </div>
  );
}
