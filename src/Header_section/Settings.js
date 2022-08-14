import { useContext } from "react";
import { Context } from "../Context";

function Settings({ setIsOpen, other }) {
  const {
    selectedSound,
    setSelectedSound,
    selectedAnimation,
    setSelectedAnimation,
    main_color_1,
    setMainColor1,
    second_color_1,
    setSecondColor1,
    main_color_2,
    setMainColor2,
    second_color_2,
    setSecondColor2,
    main_color_3,
    setMainColor3,
    second_color_3,
    setSecondColor3,
  } = useContext(Context)

  return (
    <div>
      <div>
        <h3 style={{ color: other }}>time for some settings</h3>
        <div>
          <div>
            <h4>customise your colors</h4>
            <div className="colors_container">
              <div className="sub_colors_container">
                <div className="main-color">
                  <input
                    className="main-color-input"
                    type="color"
                    value={main_color_1}
                    onChange={(e) => setMainColor1(e.target.value)}
                  />
                </div>
                <div className="second-color">
                  <input
                    className="second-color-input"
                    type="color"
                    value={second_color_1}
                    onChange={(e) => setSecondColor1(e.target.value)}
                  />
                </div>
              </div>
              <div className="sub_colors_container">
                <div className="main-color">
                  <input
                    className="main-color-input"
                    type="color"
                    value={main_color_2}
                    onChange={(e) => setMainColor2(e.target.value)}
                  />
                </div>
                <div className="second-color">
                  <input
                    className="second-color-input"
                    type="color"
                    value={second_color_2}
                    onChange={(e) => setSecondColor2(e.target.value)}
                  />
                </div>
              </div>
              <div className="sub_colors_container">
                <div className="main-color">
                  <input
                    className="main-color-input"
                    type="color"
                    value={main_color_3}
                    onChange={(e) => setMainColor3(e.target.value)}
                  />
                </div>
                <div className="second-color">
                  <input
                    className="second-color-input"
                    type="color"
                    value={second_color_3}
                    onChange={(e) => setSecondColor3(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>customise your sound</h4>
            <select value={selectedSound} onChange={(e) => setSelectedSound(e.target.value)}>
              <option value="1">sound 1</option>
              <option value="2">sound 2</option>
              <option value="3">sound 3</option>
              <option value="4">sound 4</option>
              <option value="5">sound 5</option>
            </select>
          </div>
          <div>
            <h4>customise your animations</h4>
            <select value={selectedAnimation} onChange={(e) => setSelectedAnimation(e.target.value)}>
              <option value="1">zoom in up</option>
              <option value="2">bounce in left</option>
              <option value="3">bounce in right</option>
              <option value="4">roll in</option>
              <option value="5">rubber band</option>
            </select>
          </div>
          <div></div>
        </div>
        <button
          className="header_buttons_settings"
          style={{
            background: other,
            borderColor: other,
            margin: "30px auto 0 auto",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => setIsOpen(false)}
        >
          close me
        </button>
      </div>
    </div>
  );
}

export default Settings;
