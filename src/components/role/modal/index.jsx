import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import "./styles.scss";
function ModalGeneral(props) {
  return (
    <Modal
      title={props.title}
      visible={props.open}
      onOk={props.submit}
      onCancel={props.cancel}
      footer={null}
    >
      <div className="mg__wrapper">{props.children}</div>
    </Modal>
  );
}

export default ModalGeneral;
