import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.linkedin.com/in/harsh-k-22761b225/" className="logo">
        <span>Harsh </span>
        <span>Kumar</span>
      </a>
      <div>
        <p>
          Made with <span>❤️</span> By Harsh 
          {/* <img src={reactIcon} alt="React" /> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/harsh-k-22761b225/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/harshul-2002"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B918920392400&text=Hello+harsh"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/harsh_0204"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/ydk__harsh_/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
