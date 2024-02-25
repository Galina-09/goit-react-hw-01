import css from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.personalData}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.userName}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.statsName}>Followers</span>
          <span className={css.statsValue}>{followers}</span>
        </li>

        <li className={css.statsItem}>
          <span className={css.statsName}>Views</span>
          <span className={css.statsValue}>{views}</span>
        </li>

        <li className={css.statsItem}>
          <span className={css.statsName}>Likes</span>
          <span className={css.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
