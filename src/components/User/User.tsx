import type { UserProps } from "../../types/user";
import styles from "./User.module.css";

export function User({ name, username, email, address, phone, website, company }: UserProps) {
    return (
        <div className={styles.userContainer}>
            <div className={styles.userProfileCard}>
                <section className={styles.userName}>
                    <h2>{name}</h2>
                    <span>{username}</span>
                </section>

                <section className={styles.companyInfo}>
                    <div className={styles.company}>
                        <img src="/img/icon-company.png" alt="Company Icon" />
                        <h3>{company.name}</h3>
                    </div>
                    <blockquote cite="https://jsonplaceholder.typicode.com/">
                        <p>{company.catchPhrase}</p>
                    </blockquote>
                </section>

                <section className={styles.userContacts}>
                    <div className={styles.contactItem}>
                        <img src="/img/icon-email.png" alt="Email Icon" />
                        <span>{email}</span>
                    </div>

                    <div className={styles.contactItem}>
                        <img src="/img/icon-phone.png" alt="Phone Icon" />
                        <span>{phone}</span>
                    </div>

                    <div className={styles.contactItem}>
                        <img src="/img/icon-internet.png" alt="Internet Icon" />
                        <span>{website}</span>
                    </div>
                </section>

                <section className={styles.userAddress}>
                    <img src="/img/icon-address.png" alt="Location Icon" />
                    <div>
                        {address.city}, {address.street}, {address.suite} {address.zipcode}
                    </div>
                </section>
            </div>
        </div>
    );
}
