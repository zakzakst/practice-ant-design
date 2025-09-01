// https://ics.media/entry/250307/
import styles from './styles.module.css'

const Page = () => {
  return <div>
    <button><selectedcontent id="selected"></selectedcontent></button>
    <select className={styles.module} selectedcontentelement="selected">
      {Array(5).fill(null).map((_, index) => <option key={index} value={`option-${index}`} className={styles.option}>{`option-${index}`}<span className={styles.note}>note</span></option>)}
    </select>
  </div>
}

export default Page