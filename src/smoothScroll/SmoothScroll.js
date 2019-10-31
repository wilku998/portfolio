import Item from "./Item"
import mathUtils from "./mathUtils"

export class SmoothScroll {
  constructor(body, scrollable, footer) {
    this.reset = false;
    this.DOM = { body, scrollable, footer }
    this.callbacks = []
    this.items = []
    this.renderedStyles = {
      translationY: {
        previous: 0,
        current: 0,
        ease: 0.1,
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

  addItem(item, translate) {
    this.items.push(new Item(item, translate))
  }

  update() {
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].current = this.renderedStyles[
        key
      ].previous = this.renderedStyles[key].setValue()
    }
    this.layout()
  }

  resetRequest(){
    this.DOM.footer.style.opacity = 0;
    this.reset = true;
    window.scrollTo(0,0)
    setTimeout(() => {
      this.reset = false;
      this.DOM.footer.style.opacity = 1;
    }, 100)
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
      this.renderedStyles[key].current = !this.reset ? this.renderedStyles[key].setValue() : 0;
      this.renderedStyles[key].previous =  !this.reset ? mathUtils.lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].ease
      ) : 0
    }
    this.layout();

    for (const item of this.items) {
      if (item.isVisible) {
        item.render()
      }
    }

    requestAnimationFrame(() => this.render())
  }

  blockScroll(){
    this.DOM.scrollable.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
  }
  unblockScroll(){
    document.body.style.overflow = "visible"
    this.DOM.scrollable.style.overflow = "visible"
  }
}
