import { Fade } from 'react-reveal';
import AdvantagesCard from '../../components/AdvantagesCard';
import SectionTitle from '../../components/SectionTitle';
import style from './Adverisers.module.scss';
import { AdverisersContent } from './content';

const AdverisersSection = () => {
  return (
    <section id='advertisers' className={style.adverisers}>
      <div className={`${style.con} container`}>
        <SectionTitle className={style.adverisers__title}>
          <Fade bottom>Advertisers</Fade>
        </SectionTitle>
        <div className={style.adverisersBody}>
          {AdverisersContent.map((item, index) => (
            <AdvantagesCard
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
              className={style.adverisersBody__item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdverisersSection;
