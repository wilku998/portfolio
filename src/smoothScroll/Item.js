import mathUtils from "./mathUtils"

export default class Item {
  constructor({ el, maxValue, setTransform, ease }) {
    this.DOM = { el: el }
    this.DOM.image = this.DOM.el.querySelector("div")
    this.setTransform = setTransform
    this.renderedStyles = {
      innerTranslationY: {
        previous: 0,
        current: 0,
        ease: ease || 0.2,
        minValue: -1 * maxValue,
        maxValue,
        setValue: () => {
          const maxValue = this.renderedStyles.innerTranslationY.maxValue
          const minValue = this.renderedStyles.innerTranslationY.minValue
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
    this.DOM[
      this.DOM.image ? "image" : "el"
    ].style.transform = this.DOM.translate = this.setTransform(previous)
  }
}
