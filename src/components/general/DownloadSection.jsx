import { IconsContainer, ImgButton } from '../../styles/styles';
// import AppleStoreBadge from '../../assets/appstore-badges/App_Store_Badge.svg';
import GooglePlayBadge from '../../assets/appstore-badges/Play_Store_Badge.svg';

export default function DownloadSection() {
  return (
    <IconsContainer>
      <ImgButton
        href="https://play.google.com/store/apps/details?id=com.foresthu2006.Spoon"
        target="_blank"
      >
        <img alt="Download on Google Play." src={GooglePlayBadge} />
      </ImgButton>
      {/* <ImgButton href="https://www.instagram.com/tspoonapp/" target="_blank">
        <img alt="Download on the Apple Store." src={AppleStoreBadge} />
      </ImgButton> */}
    </IconsContainer>
  );
}
