/**
 *
 * Intro
 *
 * The view and model are two components used by the controller.
 * The controller has in its constructor all the components it needs to do the job.
 *
 * The constructor uses inversion of control and injects modules in this way.
 * This pattern enables you to inject any component that meets the high-level contract.
 * Think of it as a nice way to abstract code from implementation details.
 * This pattern empowers you to write clean code in plain JavaScript.
 */


class PenguinController {
  constructor(penguinView, penguinModel) {
    this.penguinView = penguinView;
    this.penguinModel = penguinModel;
  }
  
  initialize() {
    this.penguinView.onClickGetPenguin = this.onClickGetPenguin.bind(this)
  }
  
  /**
   * When an event is fired, the controller grabs the data and says what happens next.
   * The this.showPenguin() callback is of interest.
   *
   * @param event
   */
  onClickGetPenguin(event) {
    const target = event.currentTarget;
    const index = parseInt(target.dataset.penguinIndex, 10);
    
    this.penguinModel.getPenguin(index, this.showPenguin.bind(this));
  };
  
  /**
   * The controller calculates indexes for each penguin and tells the view to render this.
   * It grabs data from the model and transforms it into an object the view understands and cares about.
   *
   * @param penguinModelData
   */
  showPenguin(penguinModelData) {
    
    const penguinViewModel = {
      name: penguinModelData.name,
      imageUrl: penguinModelData.imageUrl,
      size: penguinModelData.size,
      favoriteFood: penguinModelData.favoriteFood
    };
    
    penguinViewModel.previousIndex = penguinModelData.index - 1;
    penguinViewModel.nextIndex = penguinModelData.index + 1;
    
    if (penguinModelData.index === 0) {
      penguinViewModel.previousIndex = penguinModelData.count - 1;
    }
    
    if (penguinModelData.index === penguinModelData.count - 1) {
      penguinViewModel.nextIndex = 0;
    }
    
    /**
     * Note the controller does not care about implementation details.
     * It uses the contracts the view provides like this.render().
     * This is the discipline necessary for clean code.
     * The controller can trust each component to do what it says it will do.
     * This adds transparency which makes the code readable.
     */
    this.penguinView.render(penguinViewModel);
  };
}

/**
 * The view only cares about the DOM element and wiring up events.
 */

class PenguinView {
  constructor(element) {
    this.element = element;
    
    this.onClickGetPenguin = null;
  }
  
  render(viewModel) {
    this.element.innerHTML = '<h3>' + viewModel.name + '</h3>' +
      '<img class="penguin-image" src="' + viewModel.imageUrl +
      '" alt="' + viewModel.name + '" />' +
      '<p><b>Size:</b> ' + viewModel.size + '</p>' +
      '<p><b>Favorite food:</b> ' + viewModel.favoriteFood + '</p>' +
      '<a id="previousPenguin" class="previous button" href="javascript:void(0);"' +
      ' data-penguin-index="' + viewModel.previousIndex + '">Previous</a> ' +
      '<a id="nextPenguin" class="next button" href="javascript:void(0);"' +
      ' data-penguin-index="' + viewModel.nextIndex + '">Next</a>';
    
    this.previousIndex = viewModel.previousIndex;
    this.nextIndex = viewModel.nextIndex;
    
    /**
     * Wire up click events, and let the controller handle events
     */
    const previousPenguin = this.element.querySelector('#previousPenguin');
    previousPenguin.addEventListener('click', this.onClickGetPenguin);
    
    const nextPenguin = this.element.querySelector('#nextPenguin');
    nextPenguin.addEventListener('click', this.onClickGetPenguin);
    nextPenguin.focus();
  };
}

/**
 * In MVC, all the model cares about is Ajax. For example:
 */
class PenguinModel {
  constructor(XMLHttpRequest) {
    this.XMLHttpRequest = XMLHttpRequest;
  }
  
  getPenguin = function getPenguin(index, fn) {
    const oReq = new this.XMLHttpRequest();
    
    oReq.onload = function onLoad(e) {
      const ajaxResponse = JSON.parse(e.currentTarget.responseText);
      const penguin = ajaxResponse[index];
      
      penguin.index = index;
      penguin.count = ajaxResponse.length;
      
      fn(penguin);
    };
    
    oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
    oReq.send();
  };
}


const penguinModel = new PenguinModel(XMLHttpRequest);

const targetElement = document.getElementById('listOfPenguins');
const penguinView = new PenguinView(targetElement);

const controller = new PenguinController(penguinView, penguinModel);

controller.initialize();

controller.onClickGetPenguin({ currentTarget: { dataset: { penguinIndex: 0 } } });

