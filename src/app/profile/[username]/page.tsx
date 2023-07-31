import Gallery from "@/components/gallery/Gallery";
import styles from "./profile.module.css";
import SideNav from "@/components/sidenav/SideNav";
import { getUserProfile } from "@/lib/get-data";
import Header from "@/components/header/Header";

export default async function Profile({ params }: any) {
  // const [orientation, setOrientation] = useState("grid");
  const profileData = await getUserProfile(params.username);

  return (
    <div className={styles.profile__container}>
      <div className={styles.profile__container_sidenav}>
        <SideNav />
      </div>
      <div className={styles.profile__container_headernav}>
        <Header />
      </div>

      <div className={styles.profile__container_main}>
        <div className={styles.profile__content}>
          <div className={styles.profile__content_header}>
            <div className={styles.profile__header_img}>
              <img src={profileData.profile_image.large} alt="profile_img" />
            </div>
            <div className={styles.profile__header_desc}>
              <p className={styles.profile__header_username}>
                {profileData.username}
              </p>
              <div className={styles.profile__header_stats}>
                <div className={styles.profile__header_stat}>
                  <span> {profileData.total_photos}</span> photos
                </div>
                <div className={styles.profile__header_stat}>
                  <span> {profileData.followers_count}</span> followers
                </div>
                <div className={styles.profile__header_stat}>
                  <span> {profileData.following_count}</span> following
                </div>
              </div>
              <div className={styles.profile__user_details}>
                <p className={styles.profile__user_name}>{profileData.name}</p>
                <p className={styles.profile__user_location}>
                  {profileData.location}
                </p>
              </div>
              <div className={styles.profile__user_bio}>{profileData.bio}</div>
            </div>
          </div>
          <div className={styles.profile__content_body}>
            <Gallery galleryData={profileData} />
          </div>
        </div>
      </div>
    </div>
  );
}
