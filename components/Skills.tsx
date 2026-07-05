import React from 'react';
import LogoLoop from './LogoLoop';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiPhp,
  SiLaravel,
  SiWordpress,
  SiSharp,
  SiDotnet,
  SiMysql,
  SiUnity,
  SiGithub,
  SiGit
} from 'react-icons/si';

interface SkillsProps {
  t: any;
}

const allLogos = [
  { node: <SiHtml5 />, title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { node: <SiCss />, title: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiPhp />, title: 'PHP', href: 'https://www.php.net' },
  { node: <SiLaravel />, title: 'Laravel', href: 'https://laravel.com' },
  { node: <SiWordpress />, title: 'WordPress', href: 'https://wordpress.org' },
  { node: <SiSharp />, title: 'C#', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
  { node: <SiDotnet />, title: '.NET / WinForms', href: 'https://learn.microsoft.com/en-us/dotnet/desktop/winforms/' },
  { node: <SiMysql />, title: 'SQL / MySQL', href: 'https://www.mysql.com' },
  { node: <SiUnity />, title: 'Unity', href: 'https://unity.com' },
  { node: <SiGithub />, title: 'GitHub', href: 'https://github.com' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com' },
];

const Skills: React.FC<SkillsProps> = ({ t }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-none">
          {t.title}
        </h2>
        <div className="w-24 h-2.5 bg-indigo-600 mx-auto rounded-full mb-8" />
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          {t.desc}
        </p>
      </div>

      <LogoLoop
        logos={allLogos}
        speed={90}
        direction="left"
        logoHeight={56}
        gap={52}
        fadeOut
        scaleOnHover
        ariaLabel={t.title}
      />
    </div>
  );
};

export default Skills;
