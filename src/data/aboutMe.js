import {
  GitHubIcon,
  LinkedinIcon,
  TelegramIcon,
  ProfileIMG,
} from '../assets/icons';

console.log(GitHubIcon, LinkedinIcon, TelegramIcon, ProfileIMG);

export const aboutMe = {
  mainText:
    "I'm a frontend developer focused on clean, responsive, and user-friendly interfaces.",
  description:
    'My current stack includes React, Redux Toolkit, Tailwind CSS, and SCSS. I actively work with REST APIs and continuously improve my skills by learning new tools and best practices.',
  icons: [
    { Icon: GitHubIcon, link: 'https://github.com/your-username' },
    { Icon: LinkedinIcon, link: 'https://linkedin.com/in/your-username' },
    { Icon: TelegramIcon, link: 'https://t.me/your-username' },
  ],
  profileImage: ProfileIMG,
};
