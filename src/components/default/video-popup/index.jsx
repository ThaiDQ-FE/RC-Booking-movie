import React from "react";
import { Modal } from "antd";
import "./styles.scss";
function VideoPopup(props) {
  return (
    <Modal
      className="video-popup-modal"
      visible={props.open}
      onCancel={props.handleClose}
      footer={false}
    >
      <iframe
        className="video-popup"
        src={props.trailer}
        frameborder="0"
        allowFullScreen
      ></iframe>
    </Modal>
  );
}

export default VideoPopup;
