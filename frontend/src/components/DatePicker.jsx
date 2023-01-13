import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import fr from "date-fns/locale/fr";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DatePicker() {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "Enter") {
      setOpen(true);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  return (
    <div className="min-w-full mt-4 calendarWrap flex justify-center">
      <input
        value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
          range[0].endDate,
          "MM/dd/yyyy"
        )}`}
        readOnly
        className={`text-center font-light min-w-full ${
          open ? "hidden" : "inputBox"
        }`}
        onClick={() => setOpen((opened) => !opened)}
      />

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            showDateDisplay={false}
            showMonthAndYearPickers={false}
            showSelectionPreview
            minDate={new Date()}
            rangeColors={["rgb(79 70 229)"]}
            locale={fr}
          />
        )}
      </div>
    </div>
  );
}
