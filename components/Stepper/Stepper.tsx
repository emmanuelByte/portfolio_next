import Styles from '../../styles/scss/Stepper.module.scss';
import classNames from 'classnames';
const Stepper = ({ isBig, v }: { isBig?: boolean; v?: number }) => {
  return (
    <div
      className={classNames(Styles.stepper, {
        [Styles.big__circle]: isBig,
      })}
    >
      {isBig && (
        <div
          className={classNames(
            'w-[6px] h-[4.5rem] rounded-full bg-red-900 absolute left-1/2 top-0 -translate-x-1/2 ',
            Styles[`current-flow-down${v}`]
          )}
        />
      )}
      <div className={classNames('not-overflow', Styles.inner__circle)}></div>
    </div>
  );
};
export default Stepper;
