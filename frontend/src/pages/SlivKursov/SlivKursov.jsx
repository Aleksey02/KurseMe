import styles from './SlivKursov.module.scss';
import botLinkStore from '../../store/botLink';

const courses = [
  "Умскул",
  "Джобc & Кабанов",
  "Школково",
  "Пифагор",
  "100балльный",
  "и ещё 20+",
];

export default function SlivKursov() {
  const {link} = botLinkStore;

	return (
    <main className={styles.wrapper}>
      <span className={styles.badge}>EGEBALL</span>

      <h1 className={styles.title}>
        БЕСПЛАТНЫЕ КУРСЫ <br />
        <span>ЕГЭ / ОГЭ</span>
      </h1>

      <p className={styles.subtitle}>
        30+ топовых курсов: Школково, Пифагор, 100балльный, Умскул,
        <br />
        Фоксфорд и другие — все в одной папке
      </p>

      <div className={styles.alert}>
        <div className={styles.alertTitle}>!!!</div>
        <p>
          <strong>ОБЯЗАТЕЛЬНО СОХРАНИТЕ ССЫЛКУ:</strong>
          <br />
          egeball.com/slivy-kursov-ege
        </p>
        <span>
          Telegram часто блокирует ссылки — эта страница останется с вами
          всегда!
        </span>
      </div>

      <section className={styles.courses}>
        <h2>В папке ждут 30+ курсов бесплатно</h2>

        <div className={styles.courseList}>
          {courses.map((course, i) => (
            <span key={i}>{course}</span>
          ))}
        </div>

        <a href="https://t.me/addlist/v30Y6V-DZZ1iOTMy" className={styles.button}>
          → ОТКРЫТЬ ПАПКУ С КУРСАМИ ←
        </a>
      </section>

      <footer className={styles.footer}>
        Делай подготовку к ЕГЭ доступной — у тебя получится на 100+
      </footer>
    </main>
  );
}