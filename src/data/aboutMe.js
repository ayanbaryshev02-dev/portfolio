import {
  GitHubIcon,
  LinkedinIcon,
  TelegramIcon,
  ProfileIMG,
  GmailIcon,
} from '../assets/icons';

console.log(GitHubIcon, LinkedinIcon, TelegramIcon, ProfileIMG);

export const aboutMe = {
  mainText:
    "I'm a frontend developer focused on clean, responsive, and user-friendly interfaces.",
  description:
    'My current stack includes React, TypeScript, Redux Toolkit, and Tailwind CSS. I work with REST APIs and continuously improve my skills by exploring new tools and development best practices.',
  icons: [
    { Icon: GmailIcon, link: 'mailto:ayanbaryshev02@gmail.com' },
    { Icon: GitHubIcon, link: 'https://github.com/ayanbaryshev02-dev' },
    {
      Icon: LinkedinIcon,
      link: 'https://www.linkedin.com/in/ayan-baryshev-4a38a2366/',
    },
    { Icon: TelegramIcon, link: 'https://t.me/Ayanbaryshev' },
  ],
  profileImage: ProfileIMG,
};
