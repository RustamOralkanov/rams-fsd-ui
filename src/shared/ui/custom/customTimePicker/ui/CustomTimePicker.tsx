import React from "react";
import { useCustomTimePicker } from "../model/useCustomTimePicker";
import { Flex } from "antd";
import "./CustomTimePicker.scss";
import { OnChangeType } from "../../customSelect/model/customSelect.model";

export const CustomTimePicker: React.FC<{ onChange?: OnChangeType }> = ({ onChange }) => {
    const { times, containerRef, onMouseDown, onMouseLeave, onMouseUp, onMouseMove, onTouchMove, onTouchEnd, onTouchStart, current_time, handleOnChange } =
        useCustomTimePicker(onChange);

    return (
        <div
            className="custom-time"
            ref={containerRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {times.map((time, index) => (
                <Flex className={["custom-time-item", current_time === time ? "active" : ""].join(" ")} key={index} onClick={() => handleOnChange(time)}>
                    {time}
                </Flex>
            ))}
        </div>
    );
};
