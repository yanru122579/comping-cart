import React from 'react'
//svg icon切換用
function NavIcon(props) {
  let icon = ''
  let className = ''
  let style = {}
  //1.設定icon大小和形式
  //如果想要自定義一個大小請增加一個case並用css方式製作
  switch (props.iconstyle) {
    case 'nav':
      className = 'navico'
      style = {
        height: '50px',
        margin: '15px 0px',
      }
      break
    case 'navcart':
      className = 'cartico'
      style = {
        height: '50px',
      }
      break
    case 'social':
      className = 'foo-socialico'
      style = {
        height: '50px',
        margin: '0px 10px',
      }
      break
    default:
      break
  }
  //2.切換不同單元時的圖案
  switch (props.item) {
    case 'product':
      icon = (
        <path
          id="binoculars"
          d="M38.5,16v-3.4c0-0.6-0.5-1.1-1.1-1.1h-6.8c-0.6,0-1.1,0.5-1.1,1.1V16
          c-1.2,0-2.3,1-2.3,2.3v2.3h-4.5v-2.3c0-1.2-1-2.3-2.3-2.3v-3.4c0-0.6-0.5-1.1-1.1-1.1h-6.8c-0.6,0-1.1,0.5-1.1,1.1V16
          c-1.2,0-2.3,1-2.3,2.3v13.5c0,0.8,0.4,1.5,1.1,1.9v3.7c0,0.6,0.5,1.1,1.1,1.1h9c0.6,0,1.1-0.5,1.1-1.1v-3.7c0.7-0.4,1.1-1.1,1.1-1.9
          v-2.3h4.5v2.3c0,0.8,0.4,1.5,1.1,1.9v3.7c0,0.6,0.5,1.1,1.1,1.1h9c0.6,0,1.1-0.5,1.1-1.1v-3.7c0.7-0.4,1.1-1.1,1.1-1.9V18.3
          C40.8,17,39.7,16,38.5,16z M19.4,36.3h-6.8V34h6.8V36.3z M20.5,31.8h-9V18.3h2.3v-4.5h4.5v4.5h2.3V31.8z M22.8,27.3v-4.5h4.5v4.5
          H22.8z M37.4,36.3h-6.8V34h6.8V36.3z M38.5,31.8h-9V18.3h2.3v-4.5h4.5v4.5h2.3V31.8z"
        ></path>
      )
      break
    case 'event':
      icon = (
        <g id="event-outline-alerted_1_" transform="translate(647 23.747)">
          <path
            id="Path_316_1_"
            d="M-630.5-5c0.6,0,1-0.4,1-1v-6c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1v6
      C-631.5-5.4-631.1-5-630.5-5z"
          />
          <path
            id="Path_317_1_"
            d="M-629.7,5.5l5.4,5.4l10-10.1c0.1-0.1,0.2-0.3,0.2-0.4h-2.6l-7.6,7.6l-3.9-3.9
      c-0.4-0.4-1.1-0.3-1.4,0.1C-630,4.5-630,5.1-629.7,5.5L-629.7,5.5z"
          />
          <path
            id="Path_318_1_"
            d="M-619.2-9h-8.3v2h7.1C-620.4-7-619.2-9-619.2-9z"
          />
          <path
            id="Path_319_1_"
            d="M-606.8,0.4h-1.7V15h-28V-7h3v-2h-3.3c-1,0-1.8,0.8-1.8,1.8c0,0,0,0,0,0v22.4
      c0,1,0.8,1.8,1.7,1.8c0,0,0,0,0,0h28.5c1,0,1.8-0.8,1.8-1.8c0,0,0,0,0,0V0.4L-606.8,0.4z"
          />
          <path
            id="Path_320_1_"
            d="M-613.7-13.9l-5.7,9.9c-0.4,0.6-0.2,1.4,0.3,1.8c0.2,0.2,0.5,0.2,0.8,0.2h11.4
      c0.7,0,1.3-0.5,1.3-1.2c0-0.3-0.1-0.5-0.2-0.8l-5.7-9.9c-0.4-0.6-1.1-0.8-1.8-0.5C-613.4-14.2-613.5-14-613.7-13.9z"
          />
        </g>
      )
      break
    case 'idea':
      icon = (
        <g id="smile-plus_1_" transform="translate(776.875 2804.124)">
          <path
            id="Path_335_1_"
            d="M-739.5-2791.5v-4.5h-2.3v4.5h-4.5v2.3h4.5v4.5h2.3v-4.5h4.5v-2.3H-739.5z"
          />
          <path id="Path_336_1_" d="M-762-2779.1h2.8v2.8h-2.8V-2779.1z" />
          <path id="Path_337_1_" d="M-752.4-2779.1h2.8v2.8h-2.8V-2779.1z" />
          <path
            id="Path_338_1_"
            d="M-755.6-2770.1h-0.5c-1.8,0-3.5-1.1-4.2-2.8h-2.4l0.3,0.8c1,2.6,3.5,4.3,6.3,4.2
      h0.5c2.8,0,5.2-1.7,6.3-4.2l0.3-0.8h-2.4C-752.1-2771.2-753.7-2770.1-755.6-2770.1z"
          />
          <path
            id="Path_339_1_"
            d="M-755.8-2788.1c-7.1,0-12.9,5.8-12.9,12.9s5.8,12.9,12.9,12.9
      c7.1,0,12.9-5.8,12.9-12.9c0,0,0,0,0,0C-742.9-2782.3-748.7-2788.1-755.8-2788.1z M-755.8-2764.5c-5.9,0-10.7-4.8-10.7-10.7
      s4.8-10.7,10.7-10.7c5.9,0,10.7,4.8,10.7,10.7C-745.1-2769.3-749.9-2764.5-755.8-2764.5z"
          />
        </g>
      )
      break
    case 'place':
      icon = (
        <g>
          <path
            id="mountain_1_"
            d="M35.6,37.7L24.5,14.2c-0.6-1.1-1.9-1.6-3-1c-0.4,0.2-0.8,0.6-1,1L9.4,37.7H6.8V40
        h31.5v-2.3H35.6z M22.5,15.2L28.1,27l-2.2,1.5l-3.4-2.2l-3.4,2.3L16.9,27L22.5,15.2z M16,29.1l3.2,2.1l3.4-2.3l3.4,2.3l3.2-2.1
        l4.1,8.6H11.9L16,29.1z"
          />
          <path
            d="M39.2,13.1c-1.4-0.9-3.2-0.6-4.1,0.8c-0.9,1.4-0.6,3.2,0.8,4.1c1.4,0.9,3.2,0.6,4.1-0.8c0,0,0,0,0,0
        C40.9,15.9,40.5,14,39.2,13.1z"
          />
          <path
            id="Path_345_1_"
            d="M40.6,11.1c-2.8-1.9-6.5-1.1-8.4,1.6c-1.3,2-1.4,4.4-1.4,6.2l0,0.3
        c0,1.7,0.1,3.5,0.3,5.2l0.1,0.6l0.6-0.2c1.7-0.5,3.3-1,4.9-1.7l0.3-0.1c1.6-0.7,3.9-1.6,5.2-3.6C44.1,16.7,43.3,12.9,40.6,11.1z
         M36.6,22.1l-0.3,0.1c-1.4,0.6-2.8,1-4.2,1.4c-0.1-1-0.3-2.9-0.2-4.5l0-0.3c0-1.6,0-3.9,1.2-5.6c1.6-2.3,4.8-2.8,7-1.2
        c2.2,1.6,2.8,4.6,1.3,6.8C40.2,20.7,38.1,21.5,36.6,22.1L36.6,22.1z"
          />
        </g>
      )
      break
    case 'cart':
      icon = (
        <>
          <g>
            <path
              d="M47.2,10.8c-0.2-0.2-0.4-0.4-0.8-0.4H10.1l-1-5c0-0.4-0.6-0.8-1-0.8H2.5c-0.6,0-1,0.4-1,1s0.4,1,1,1h5L12,30
				c0.6,3.1,3.4,5.4,6.5,5.4h22c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H18.7c-1.5,0-3.1-0.8-3.8-2.1l27.9-3.8c0.4,0,0.8-0.4,0.8-0.8
				l3.8-15.3C47.4,11.4,47.4,11,47.2,10.8z M41.9,25.8l-27.9,3.6l-3.4-17.2h34.6L41.9,25.8z"
            />
            <path
              d="M40.5,36.3h-22c-3.6,0-6.8-2.7-7.5-6.2L6.6,7.6H2.5c-1.1,0-2-0.8-2-2c0-1.1,0.8-2,2-2h5.7c0.9,0,1.9,0.7,2,1.6l0.8,4.1
				h35.5c0.8,0,1.2,0.4,1.5,0.7c0.4,0.4,0.5,1.1,0.5,1.3l0,0.2l-3.8,15.2c-0.1,0.8-0.8,1.6-1.7,1.6L17.1,32c0.5,0.3,1.1,0.4,1.7,0.4
				h21.8c1.1,0,2,0.8,2,2S41.6,36.3,40.5,36.3z M13.2,30.5c0.4,1.2,1.2,2.2,2.3,2.9c-0.6-0.4-1.1-1-1.5-1.6L13.2,30.5l4.5-0.6
				L13.2,30.5z M11.7,13.2l3,15.1L41,24.9l2.8-11.7H11.7z M46.3,11.4l-1.2,5L46.3,11.4L46.3,11.4z"
            />
          </g>
          <g>
            <path
              d="M17.8,37.2c-2.7,0-4.8,2.1-4.8,4.8c0,2.7,2.1,4.8,4.8,4.8c2.7,0,4.8-2.1,4.8-4.8C22.5,39.3,20.4,37.2,17.8,37.2z
				 M17.8,44.9c-1.5,0-2.9-1.3-2.9-2.9c0-1.5,1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9C20.6,43.5,19.3,44.9,17.8,44.9z"
            />
            <path
              d="M17.8,47.8c-3.2,0-5.8-2.5-5.8-5.8s2.5-5.8,5.8-5.8c3.2,0,5.8,2.5,5.8,5.8S21,47.8,17.8,47.8z M17.8,40.1
				c-1,0-1.9,0.9-1.9,1.9s0.9,1.9,1.9,1.9s1.9-0.9,1.9-1.9S18.7,40.1,17.8,40.1z"
            />
          </g>
          <g>
            <path
              d="M36.9,37.2c-2.7,0-4.8,2.1-4.8,4.8c0,2.7,2.1,4.8,4.8,4.8c2.7,0,4.8-2.1,4.8-4.8S39.6,37.2,36.9,37.2z M36.9,44.9
				c-1.5,0-2.9-1.3-2.9-2.9c0-1.5,1.3-2.9,2.9-2.9c1.5,0,2.9,1.3,2.9,2.9C39.7,43.5,38.4,44.9,36.9,44.9z"
            />
            <path
              d="M36.9,47.8c-3.2,0-5.8-2.5-5.8-5.8s2.5-5.8,5.8-5.8s5.8,2.5,5.8,5.8S40.1,47.8,36.9,47.8z M36.9,40.1
				c-1,0-1.9,0.9-1.9,1.9s0.9,1.9,1.9,1.9s1.9-0.9,1.9-1.9S37.9,40.1,36.9,40.1z"
            />
          </g>
        </>
      )
      break
    case 'youtube':
      icon = (
        <path
          class="st10"
          d="M20.78,33.43V16.51l12.49,8.46L20.78,33.43z M46.77,15.77c0-3.88-2.85-6.99-6.37-6.99
      c-4.77-0.22-9.64-0.31-14.61-0.31h-1.55c-4.96,0-9.84,0.09-14.61,0.31c-3.51,0-6.37,3.14-6.37,7.01c-0.22,3.07-0.31,6.13-0.3,9.2
      c-0.01,3.07,0.09,6.14,0.29,9.21c0,3.88,2.85,7.02,6.37,7.02c5.01,0.23,10.16,0.34,15.38,0.33c5.24,0.02,10.37-0.09,15.38-0.33
      c3.52,0,6.37-3.14,6.37-7.02c0.21-3.08,0.3-6.14,0.29-9.22C47.07,21.91,46.97,18.84,46.77,15.77L46.77,15.77z"
        />
      )
      break
    case 'ig':
      icon = (
        <path
          class="st11"
          d="M35.09,26.71c0,5.42-4.43,9.83-9.87,9.83s-9.87-4.41-9.87-9.83c0-1.49,0.34-2.91,0.94-4.18H4.2V36.7
      c0,5.71,4.66,10.35,10.39,10.35h20.8c5.73,0,10.39-4.64,10.39-10.35V22.53H34.15C34.75,23.8,35.09,25.22,35.09,26.71L35.09,26.71z
       M39.61,15.31c0,0.63-0.52,1.15-1.16,1.15h-3.57c-0.63,0-1.16-0.52-1.16-1.15v-3.55c0-0.63,0.52-1.15,1.16-1.15h3.57
      c0.63,0,1.16,0.52,1.16,1.15V15.31z M35.4,5.47H14.6C8.87,5.47,4.2,10.11,4.2,15.82v2.88H19.5c1.61-1.14,3.58-1.82,5.71-1.82
      c2.13,0,4.1,0.68,5.71,1.82h14.87v-2.88C45.79,10.11,41.13,5.47,35.4,5.47z M29.31,26.71c0-2.25-1.84-4.08-4.1-4.08
      c-2.26,0-4.1,1.83-4.1,4.08c0,2.25,1.84,4.08,4.1,4.08C27.47,30.79,29.31,28.96,29.31,26.71z"
        />
      )
      break
    case 'fb':
      icon = (
        <path
          class="st10"
          d="M33.74,10.28c0.29-0.01,0.59,0,0.9,0.02c1.14,0,2.34,0.11,3.53,0.21l-0.13,4.72h-3.18
      c-1.49-0.03-2.03,0.55-2.08,2.23v3.71h5.4l-0.21,5.05h-5.18v14.07h-5.26V26.22h-3.65v-5.05h3.65v-4.34c0-3.13,1.32-5.12,3.93-6.13
      C32.1,10.44,32.87,10.3,33.74,10.28L33.74,10.28z M5.08,5.08v39.84h39.84V5.08H5.08z"
        />
      )
      break
    case 'twitter':
      icon = (
        <path
          class="st11"
          d="M46.17,11.49c-0.28,0.6-0.81,1.35-1.58,2.26c-0.77,0.91-1.72,1.71-2.86,2.41c0.03,0.25,0.06,0.49,0.07,0.71
      c0.12,3.39-0.69,6.91-1.82,9.84c-2.19,5.45-5.53,9.84-10.31,12.81c-4.98,2.86-10.79,3.47-16.14,2.95c-3.55-0.41-7.05-1.57-9.7-3.75
      c4.84,0.58,9.36-1.07,12.93-3.73c-3.97,0.1-6.85-2.77-8.21-6.09c0.61,0.16,1.26,0.14,1.84,0.09c0.72-0.07,1.4-0.14,2.08-0.28
      c-2.53-0.82-4.74-2.32-5.9-4.58c-0.68-1.43-0.98-2.8-0.99-4.34c1.19,0.62,2.61,1.23,3.92,1.18c-1.97-1.67-3.55-3.81-3.85-6.25
      c-0.19-2.04,0.33-3.91,1.06-5.64c2.95,3.24,6.26,5.91,10.08,7.55c2.61,1.07,5.21,1.64,7.9,1.65c-0.31-2.4-0.07-4.73,1.06-6.7
      c1.33-2.12,3.27-3.35,5.45-3.96c3.12-0.8,6.16,0.33,8.07,2.5c2.06-0.22,4.04-1.14,5.62-2.08c-0.67,2.03-1.97,4.04-3.87,5
      C42.83,12.71,44.56,12.17,46.17,11.49L46.17,11.49z"
        />
      )
      break
    default:
      break
  }
  console.log(icon)
  return (
    <>
      <svg
        class={className}
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
      >
        {icon}
      </svg>
    </>
  )
}
export default NavIcon
