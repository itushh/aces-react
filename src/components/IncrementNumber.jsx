import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

/**
 * A component that increments a number from 0 to the given number when the
 * component is scrolled into view.
 *
 * @param {Object} props
 * @prop {number} number The number to increment to
 *
 * @returns {JSX.Element} A JSX element that increments the given number
 */
function IncrementNumber({ number }) {
    const { ref, inView } = useInView({ triggerOnce: true });
    
    return (
        <span ref={ref}>
          {inView ? <CountUp start={0} end={number} duration={2} delay={0} /> : 0}+
        </span>
    );
}

export default IncrementNumber