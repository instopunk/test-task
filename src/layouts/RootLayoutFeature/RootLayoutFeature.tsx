import {RootLayoutFeatureProps} from './types';
import {FC} from "react";
import styles from './styles/styles.module.scss';
import Link from "next/link";

/**
 * Компонент RootLayout
 */
export const RootLayoutFeature: FC<RootLayoutFeatureProps> = ({children}) => {

  return (
    <div className="layout">
      <header className="header">
        <div className={`layout-container ${styles['header-area']}`}>
          <Link href={'/'} className={styles.headerLogo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="20" fill="none">
              <path fill="#000"
                    d="M78.98 19.661V1.356h3.431v18.305h-3.43Zm7.748 0V1.356h5.556c6.374 0 9.472 3.636 9.472 8.96v.231c0 5.325-3.098 9.114-9.523 9.114h-5.505Zm3.405-2.688h1.997c4.096 0 6.067-2.355 6.067-6.4v-.205c0-3.943-1.792-6.323-6.093-6.323h-1.97v12.928Z"/>
              <path fill="#101010"
                    d="M25.1 1.406h5.882c4.102 0 6.78 1.814 6.78 5.661v.102c0 3.864-2.797 5.576-6.712 5.576h-2.56v6.966h-3.406V1.406h.017Zm5.882 8.882c2.255 0 3.458-1.102 3.458-3.119v-.102c0-2.17-1.288-3.017-3.458-3.017h-2.474v6.238h2.474ZM46.576 19.695h-6.525V1.39h11.491v2.695h-8.118v4.627h3.22c4.017 0 6.475 1.712 6.475 5.373v.101c0 3.543-2.34 5.509-6.543 5.509Zm-.102-2.61c2.255 0 3.373-1.017 3.373-2.916v-.101c0-1.865-1.118-2.899-3.508-2.899h-2.915v5.915h3.05ZM55.576 1.407h3.407v8.288L66 1.373h3.66l-7.575 8.746 7.966 9.576h-4.017l-7.051-8.542v8.542h-3.407V1.407ZM16.797 1.406H0v16.746L16.797 1.406ZM1.508 19.712h16.796V2.949L1.508 19.712Z"/>
            </svg>
          </Link>
        </div>
      </header>
      <div className="content layout-grid layout-container">
        <main className="main">
          {children}
        </main>
      </div>
      <footer className={`footer ${styles['footer-area']}`}>
        <div className="layout-container">
          <a href="#">Написать в поддержку</a>
        </div>
      </footer>
    </div>
  );
};
