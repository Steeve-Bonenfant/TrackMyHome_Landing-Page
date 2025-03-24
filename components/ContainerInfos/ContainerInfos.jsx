import containersData from "@/json/containerinfosdata.json";
import Container from "./Container/Container";
import styles from "./ContainerInfos.module.css";

export default function ContainerInfos() {
  return (
    <section className={styles.containerGeneral}>
      <div className={styles.firstLineContainer}>
        {containersData.slice(0, 2).map((container, index) => (
          <Container
            key={index}
            bgColor={container.bgColor}
            width={container.width}
            bigText={container.bigText}
            littleText={container.littleText}
            {...(container.image && { image: container.image })}
          />
        ))}
      </div>
      <div className={styles.secondLineContainer}>
        {containersData.slice(2).map((container, index) => (
          <Container
            key={index + 2}
            bgColor={container.bgColor}
            width={container.width}
            bigText={container.bigText}
            littleText={container.littleText}
            {...(container.image && { image: container.image })}
          />
        ))}
      </div>
    </section>
  );
}
