import Item from "./Item"
import mathUtils from "./mathUtils"

export class SmoothScroll {
  constructor(body, scrollable) {
    this.DOM = { body, scrollable }
    this.callbacks = []
    this.items = []
    this.renderedStyles = {
      translationY: {
        previous: 0,
        current: 0,
        ease: 0.15,
        setValue: () =>
          window.pageYOffset || document.documentElement.scrollTop,
      },
    }
    this.setSize()
    this.update()
    this.initEvents()
    requestAnimationFrame(() => this.render())
  }
  addCallback(callback) {
    this.callbacks = [...this.callbacks, callback]
  }

  addItem(item) {
    this.items.push(new Item(item))
    console.log(this.items)
  }

  update() {
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].current = this.renderedStyles[
        key
      ].previous = this.renderedStyles[key].setValue()
    }
    this.layout()
  }
  layout() {
    this.DOM.scrollable.style.transform = `translate3d(0,${-1 *
      this.renderedStyles.translationY.previous}px,0)`
  }
  setSize() {
    this.DOM.body.style.height = `${this.DOM.scrollable.scrollHeight}px`
  }

  initEvents() {
    window.addEventListener("resize", () => this.setSize())
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

    for (const item of this.items) {
      if (item.isVisible) {
        item.render()
      }
    }

    this.callbacks.forEach(cb =>
      cb(this.renderedStyles.translationY.setValue())
    )

    requestAnimationFrame(() => this.render())
  }
}
