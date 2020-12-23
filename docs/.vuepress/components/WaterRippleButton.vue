<template>
    <div class="water-ripple-button" @click.stop="waterRippleHandle">
        <slot />
    </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "default",
    },
    shape: {
      type: String,
      default: "circle",
    },
  },
  methods: {
    waterRippleHandle(e) {
        let ripple = document.createElement('span')
        ripple.className = 'ripple'
        ripple.style.left = e.offsetX + 'px'
        ripple.style.top = e.offsetY + 'px'
        e.target.appendChild(ripple)
        setTimeout(_=>{
            ripple.remove()
        }, 600)
    },
  },
};
</script>

<style>
.water-ripple-button{
    position: relative;
    display: inline-block;
    margin: 0 10px;
    padding: 8px 16px;
    color: #ffffff;
    font-size: 14px;
    border-radius: 18px;
    overflow: hidden;
    background-image: linear-gradient(90deg, #755bea, #ff72c0);
    transition: box-shadow .2s ease;
}
.water-ripple-button:active,
.water-ripple-button:focus {
    box-shadow: 0 0 2px rgba(0,0,0,.4);
    box-shadow: 0 0 6px rgba(0,0,0,.55);
}

.water-ripple-button > span.ripple{
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    pointer-events: none;
    animation: waterRipple .6s ease-in-out infinite;
}
@keyframes waterRipple
{
    from{ 
        width: 0;
        height: 0;
        opacity: 1;
     }
    to{
        width: 40px;
        height: 40px;
        opacity: .4;
    }
}
</style>
