import styles from "./Message.module.css";

const Message = () => {
  return (
    <section className={styles.sectionBody}>
      <h1>Hello, World </h1>
      <img
        alt="img"
        src="https://plus.unsplash.com/premium_photo-1687148812068-c3db1e6a8e89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80"
      ></img>
    </section>
  );
};
export default Message;
