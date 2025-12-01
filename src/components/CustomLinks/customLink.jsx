import styles from './customLink.module.css';
import { Link as RouterLink } from 'react-router-dom';

export default function CustomLink({ to, children, variant = "default" }) {
  return (
    <RouterLink
      to={to}
      className={`${styles.link} ${styles[variant]}`}
    >
      {children}
    </RouterLink>
  );
}