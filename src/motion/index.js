import React from 'react'
import { motion, useCycle, useDragControls } from "framer-motion";
import { MouseEvent } from "react";

const MotionIndex = () => {
  // 箱をクリックすると右側に移動するアニメーション
    const [x, cycleX] = useCycle(-300, 0);
    // ポインターイベントの実装
    const dragControls = useDragControls();

    const startDrag = (event: MouseEvent) => {
      dragControls.start(event, { snapToCursor: true });
    };

  return (
    <>
     <div
        style={{ width: "100%", height: "200px"}}
        onPointerDown={startDrag}></div>
    {/* <motion.div
      style={{ width: "200px", height: "200px", background: "skyblue" }}
      animate={{ x: x }} />
      <button onClick={() => cycleX()}>クリック</button> */}
          <motion.div
        style={{ width: "200px", height: "200px", background: "skyblue" }}
        drag="x"
        dragControls={dragControls}
      />
    </>
  );
}


export default MotionIndex
