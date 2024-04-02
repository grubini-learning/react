import React from "react";

const enum Modes {
  Hint = "hint",
  Warning = "warning",
}

type HintBoxProps = {
  mode: "hint";
};
type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
};
type InfoBoxProps = React.PropsWithChildren<HintBoxProps | WarningBoxProps>;

export const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;

  if (mode === Modes.Hint) {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <p>{children}</p>
    </aside>
  );
};
