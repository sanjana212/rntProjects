import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
const Tooltip = () => {
  return (
    <div className="container mt-5">
      <span id="my-app" style={{ color: "blue" }}>my name is sanjana</span><br /><br />
      <button className="btn btn-primary" id="submit-btn">Submit</button><br /><br />
      <input type="text" id="input" />
      <ReactTooltip
        anchorId="my-app"
        place="top"
        variant="info"
        content="I am a  tooltip of text"
      />
      <ReactTooltip
      anchorId="submit-btn"
      place="bottom"
      variant="info"
      content="I am a  tooltip of button"
      />
      <ReactTooltip
      anchorId="input"
      place="bottom"
      variant="info"
      content="I am a  tooltip of button input"
      />
    </div>
  )
}
export default Tooltip;