import mathUtils from "./mathUtils"

export default class Item {
  constructor(el) {
    this.DOM = { el: el }
    this.DOM.image = this.DOM.el.querySelector("div")
    this.renderedStyles = {
      innerTranslationY: {
        previous: 0,
        current: 0,
        ease: 0.5,
        maxValue: 100,
        setValue: () => {
          const maxValue = this.renderedStyles.innerTranslationY.maxValue
          const minValue = -1 * maxValue
          return Math.max(
            Math.min(
              mathUtils.map(
                this.props.top -
                  (window.pageYOffset || document.documentElement.scrollTop),
                window.innerHeight,
                -1 * this.props.height,
                minValue,
                maxValue
              ),
              maxValue
            ),
            minValue
          )
        },
      },
    }
    this.update()
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => (this.isVisible = entry.intersectionRatio > 0))
    })
    this.observer.observe(this.DOM.el)
    this.initEvents()
  }
  update() {
    this.getSize()
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].current = this.renderedStyles[
        key
      ].previous = this.renderedStyles[key].setValue()
    }
    this.layout()
  }
  getSize() {
    const rect = this.DOM.el.getBoundingClientRect()
    this.props = {
      height: rect.height,
      top:
        (window.pageYOffset || document.documentElement.scrollTop) + rect.top,
    }
  }
  initEvents() {
    window.addEventListener("resize", () => this.resize())
  }
  resize() {
    this.update()
  }
  render() {
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].current = this.renderedStyles[key].setValue()
      this.renderedStyles[key].previous = mathUtils.lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].ease
      )
    }
    this.layout()
  }
  layout() {
    const previous = this.renderedStyles.innerTranslationY.previous
    if(this.DOM.image){
      this.DOM.image.style.transform = `translate3d(0,${previous}px,0)`
    }else{
      this.DOM.el.style.transform = `translate3d(0,${previous}px,0)`
    }
  }
}
