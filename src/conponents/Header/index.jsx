import styles from "./header.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery.min.js'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="Logo">
                <img className={styles.header_logo} src="./images/logo" alt="logo" />
            </div>
            <nav class="navbar navbar-expand-lg">
                <div class={styles.container_fluid}>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class={styles.nav_link} aria-current="page" href="#">關於我們</a>
                            </li>
                            <li class="nav-item">
                                <a class={styles.nav_link} href="#">最新消息</a>
                            </li>
                            <li class="nav-item">
                                <a class={styles.nav_link} href="#">音樂教室</a>
                            </li>
                            <li class="nav-item">
                                <a class={styles.nav_link} href="#">產品資訊</a>
                            </li>
                            <a class="navbar-brand" href="#">
                                <img src="./images/user.jpg" alt="" width="45" height="45" />
                            </a>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}