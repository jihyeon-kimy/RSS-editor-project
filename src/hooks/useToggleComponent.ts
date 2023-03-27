import { useState } from "react";

const useToggleComponent = () => {
  const [visible, setVisible] = useState(false);

  const openComponent = () => {
    setVisible(true);
  };

  const closeComponent = () => {
    setVisible(false);
  };

  return { visible, openComponent, closeComponent };
};

export default useToggleComponent;
