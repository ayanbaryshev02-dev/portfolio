import { MobileLayout } from '../../layouts/MobileLayout/MobileLayout';
import { AboutMobile } from '../../sections/About/AboutMobile';
import { SkillsMobile } from '../../sections/Skills/SkillsMobile';
import { WorkMobile } from '../../sections/Work/WorkMobile';
import { ExperienceMobile } from '../../sections/Experience/ExperienceMobile';
import { ContactMobile } from '../../sections/Contact/ContactMobile';

const MOBILE_SECTIONS = {
  about: <AboutMobile />,
  skills: <SkillsMobile />,
  work: <WorkMobile />,
  experience: <ExperienceMobile />,
  contact: <ContactMobile />,
};

export const MobileApp = ({ currentSection, currentMessage, onNavigate }) => (
  <MobileLayout
    currentSection={currentSection}
    currentMessage={currentMessage}
    onNavigate={onNavigate}
  >
    {MOBILE_SECTIONS[currentSection] || MOBILE_SECTIONS.about}
  </MobileLayout>
);
