import React from "react";

class SecondComponent extends React.Component {
  render() {
    return (
      <p>
        React is a free and open-source front-end JavaScript library for
        building user interfaces based on components.
      </p>
    );
  }
}

export function ThirdComponent() {
  return (
    <p>
      {" "}
      It is maintained by Meta and a community of individual developers and
      companies. React can be used to develop single-page, mobile, or
      server-rendered applications with frameworks like Next.js.
    </p>
  );
}
export default SecondComponent;
