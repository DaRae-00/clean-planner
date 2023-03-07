export function Switch() {
  return (
    <div className="switch">
      <div className="switch__1">
        <input id="switch-1" type="checkbox" />
        <label></label>
      </div>

      <div className="switch__2">
        <input id="switch-2" type="checkbox" checked />
        <label></label>
      </div>
    </div>
  );
}

export function Checkbox() {
  return (
    <div className="checkbox">
      <div className="checkbox__1">
        <input id="checkbox-1" type="checkbox" />
        <label>
          <i className="material-icons">done</i>
        </label>
      </div>
      <div className="checkbox__2">
        <input id="checkbox-2" type="checkbox" checked />
        <label>
          <i className="material-icons">done</i>
        </label>
      </div>
    </div>
  );
}

export function Radio() {
  return (
    <div className="radio">
      <div className="radio__1">
        <input id="radio-1" type="radio" name="radio" value="1" />
        <label></label>
      </div>

      <div className="radio__2">
        <input id="radio-2" type="radio" name="radio" value="2" checked />
        <label></label>
      </div>
    </div>
  );
}

export function Chip() {
  return (
    <div className="chip">
      <div className="chip__icon">
        {/* <ion-icon name="color-palette"></ion-icon> */}
      </div>
      <p>Neumorphic Design</p>
      <div className="chip__close">
        {/* <ion-icon name="close"></ion-icon> */}
      </div>
    </div>
  );
}

export function Input() {
  return (
    <>
      <div className="text-input">
        <input
          type="text"
          className="text-input__input"
          placeholder="Type anything..."
        />
      </div>

      {/* // todo : icon text input   */}
      {/* <div className="search">
        <input type="text" className="search__input" placeholder="Search..." />
        <div className="search__icon">
          <ion-icon name="search"></ion-icon>
        </div>
      </div> */}
    </>
  );
}

export function Teb() {
  return (
    <div className="segmented-control">
      <input type="radio" name="radio2" value="3" id="tab-1" checked />
      <label className="segmented-control__1">
        <p>Tab 1</p>
      </label>

      <input type="radio" name="radio2" value="4" id="tab-2" />
      <label className="segmented-control__2">
        <p>Tab 2</p>
      </label>

      <input type="radio" name="radio2" value="5" id="tab-3" />
      <label className="segmented-control__3">
        <p>Tab 3</p>
      </label>

      <div className="segmented-control__color"></div>
    </div>
  );
}
