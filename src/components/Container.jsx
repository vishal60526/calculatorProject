import styles from './Container.module.css'
const Container = (props) => {
    return (
        <>
            <div className={styles.Cstyle}>{props.children}</div>
        </>
    )
}
export default Container;