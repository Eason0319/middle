import styles from "./service.module.css"

export default function Service() {
    return (
        <div className={styles.service}>
            <div className={styles.servicetitle}>
                <p className={styles.news}>服務項目</p>
            </div>
            <div className={styles.serviceBig}>
                <img src="public/images/serviceBig.jpg" alt="" />
                <button className={styles.lookmore1}>查看更多</button>
                <h1>線上商城</h1>
            </div>
            <aside className={styles.serviceAside}>
                <div className={styles.serviceAside1}>
                    <img className={styles.Aside1} src="public/images/serviceAside1.jpg" alt="" />
                    <button className={styles.lookmore2}>查看更多</button>
                    <h1>音樂教室</h1>
                </div>
                <div className={styles.serviceAside2}>
                    <img className={styles.Aside2} src="public/images/serviceAside2.jpg" alt="" />
                    <button className={styles.lookmore3}>查看更多</button>
                    <h1>訂練團室</h1>
                </div>
            </aside>
        </div>
    );
}