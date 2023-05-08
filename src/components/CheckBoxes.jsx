import { useState } from "react";

function CheckBoxes({handleChecked, formData}) {

    return (
        <ul>
            <li>
              <label
                ><input
                  name="timeSpent" type="checkbox" value="swimming" onChange={handleChecked} checked={formData.timeSpent.some(word => word === "swimming")}
                />Swimming</label
              >
            </li>
            <li>
              <label
                ><input name="timeSpent" type="checkbox" value="bathing" onChange={handleChecked} checked={formData.timeSpent.some(word => word === "bathing")} />Bathing</label
              >
            </li>
            <li>
              <label
                ><input
                  name="timeSpent" type="checkbox" value="chatting" onChange={handleChecked} checked={formData.timeSpent.some(word => word === "chatting")}
                />Chatting</label
              >
            </li>
            <li>
              <label
                ><input name="timeSpent" type="checkbox" value="noTime" onChange={handleChecked} checked={formData.timeSpent.some(word => word === "noTime")} />I don't like to
                spend time with it</label
              >
            </li>
        </ul>
    )

}

export default CheckBoxes