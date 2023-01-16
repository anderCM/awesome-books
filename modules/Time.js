/* import { DateTime } from '../node_modules/luxon/src/luxon.js'; */
import { DateTime } from './Luxon.js';

const Timer = () => {
  const now = DateTime.now();
  const CurrentTime = now.toLocaleString({
    year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
  });
  document.getElementById('current-time').innerHTML = CurrentTime;
};
export default Timer;