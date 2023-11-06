import { PINK } from '../../../styles/colors';

function FacebookIcon(props) {
  return (
    <svg fill={PINK} height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="a">
          <path d="M0 700h700V0H0Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 933.333)">
        <path
          d="M0 0c0 138.071-111.929 250-250 250S-500 138.071-500 0c0-117.245 80.715-215.622 189.606-242.638v166.242h-51.552V0h51.552v32.919c0 85.092 38.508 124.532 122.048 124.532 15.838 0 43.167-3.105 54.347-6.211V81.986c-5.901.621-16.149.932-28.882.932-40.993 0-56.832-15.528-56.832-55.9V0h81.659l-14.028-76.396h-67.631v-171.773C-95.927-233.218 0-127.818 0 0"
          transform="translate(600 350)"
          style={{
            fill: `${PINK}`,
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none'
          }}
        />
      </g>
    </svg>
  );
}
export default FacebookIcon;
