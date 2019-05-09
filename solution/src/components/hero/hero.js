import bgHeroMobile from '../../assets/images/bg-hero-mobile.svg';
import bgHeroDesktop from '../../assets/images/bg-hero-desktop.svg';
import '../hero/hero.scss';

if (window.innerWidth < 750) {
  document.getElementById('hero-container').style.background = `url('${bgHeroMobile}')`;
} else {
  document.getElementById('hero-container').style.background = `url('${bgHeroDesktop}')`;
}
