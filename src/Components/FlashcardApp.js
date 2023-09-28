/* Project based on "steps" project from TURC23 */
import { useState } from "react";
import { DateModifier } from "./DateModifier";
import { DisplayDate } from "./DisplayDate";

export default function DateApp() {
  const [offset, setOffset] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dateApp">
        <DateModifier
          title={"Step"}
          shiftAmt={1}
          val={offset}
          allowZeroOrLess={false}
          setVal={setOffset}
        />
        <DateModifier
          title={"Count"}
          shiftAmt={offset}
          val={count}
          allowZeroOrLess={true}
          setVal={setCount}
        />
        <DisplayDate shiftAmt={count} />
      </div>
    </>
  );
}
