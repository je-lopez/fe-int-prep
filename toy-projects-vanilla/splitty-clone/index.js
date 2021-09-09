class App {
  constructor() {
    this.LANDING = 'LANDING';
    this.NEW_TIMER = 'NEW_TIMER';

    this.view = this.LANDING;
    this.views = [this.LANDING, this.NEW_TIMER];
  }

  viewExists(view) {
    return this.views.includes(view);
  }

  setView(view) {
    // ensure view is valid
    if (this.viewExists(view)) {
      this.view = view;

      if (view === this.LANDING) {
        // reset aside data/view
      }

      this.render();
    } else {
      // throw error
      console.error('*** Error setting view ***')
    }
  }

  getView(view) {
    if (this.viewExists(view)) {

    }
  }

  render() {
    switch (this.view) {
      case 'LANDING':
        document.getElementById('main-content').innerHTML = `
          <section class="landing-section">

          </section>
        `;
        break;
      case NEW_TIMER:
        break;
      default:
          // throw error
          console.error('*** Error rendering view ***');
          break;
    }
  }
}

const Splitty = new App();
Splitty.render();
