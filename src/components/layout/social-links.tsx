import { FacebookIcon, InstagramIcon, YoutubeIcon, XIcon } from "@/components/icons/social-icons";
import { socials } from "@/content/site";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Youtube: YoutubeIcon,
  "X (Twitter)": XIcon,
};

export function SocialLinks({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <>
      {socials.map((s) => {
        const Icon = socialIcons[s.name as keyof typeof socialIcons];
        return (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className={className}
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </>
  );
}
