import Lenis from "lenis";
import { throttle } from "lodash";
import Router from "@/router/index.js";

const smoothDirective = {
  mounted(el, binding) {
    const orientation = binding.value || "vertical";
    const lenis = new Lenis({
      orientation: orientation,
      gestureOrientation: "both",
      wrapper: el,
    });

    // 使用节流函数限制raf的调用
    const raf = throttle((time) => {
      lenis.raf(time);
    }, 0); // 16ms大约对应60fps

    function animate(time) {
      raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    el._lenis = lenis;
    window.lenis = lenis;
    el._raf = animate;
  },
  unmounted(el) {
    if (el._lenis) {
      el._lenis.destroy();
      el._lenis = null;
    }

    if (el._raf) {
      cancelAnimationFrame(el._raf);
      el._raf = null;
    }
  },
};

export default smoothDirective;
