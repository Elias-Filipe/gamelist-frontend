import './style.css'
import CustomLink from '../CustomLinks/customLink'

export default function Footer() {
  return (
    <footer className="footer">
      <div className='footer-links'>
        <li><CustomLink to="https://github.com/Elias-Filipe" variant="neon">GitHub</CustomLink></li>
        <li><CustomLink to="https://www.linkedin.com/in/elias-semeao/" variant="neon">LinkedIn</CustomLink></li>
        <li><CustomLink to="https://www.instagram.com/elias_flp/" variant="neon">Instagram</CustomLink></li>
      </div>
      <h6>Desenvolvido por Elias Filipe</h6>

    </footer>
  )
}