<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 320 84"
    xml:space="preserve"
    :style="{ backgroundColor: color }"
  >
    <g id="logo-black">
      <path :fill="color" d="M280,2h-36v80h36c22.09,0,40-17.91,40-40S302.09,2,280,2z"></path>
      <circle :fill="color" cx="42" cy="42" r="42"></circle>
      <polygon :fill="color" points="116,2 156,42 116,82 204,82 164,42 204,2 "></polygon>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#000',
    },
  },
};
</script>
