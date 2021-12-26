import React from "react";
import ReactDOM from "react-dom";
import style9 from "style9";

// actions

// styles
import { base } from "@/app/styles/baseClasses";
import { icon } from "@/app/styles/iconClasses";
import { classes } from "./styles";

// components
import ButtonIcon from "@/app/components/Button/ButtonIcon";
import ButtonCommon from "@/app/components/Button/ButtonCommon";

const Modal: React.FC<PropsType> = ({
  title,
  visible,
  width,
  height,
  minWidth,
  minHeight,
  okText,
  onOk,
  onCancel,
  children,
}) => {
  const viuModal = document.getElementById("viu-modal");

  return viuModal
    ? ReactDOM.createPortal(
        <>
          {visible && (
            <div className={style9(base.root, classes.modalContainer)}>
              <div
                className={style9(base.root, classes.modalOverlay)}
                onClick={onCancel}
              ></div>
              <div
                className={style9(base.root, classes.modal)}
                style={{ width, height, minWidth, minHeight }}
              >
                <div className={style9(base.root, classes.modalInner)}>
                  <div className={style9(base.root, classes.modalWidth)}>
                    <div className={style9(base.root, classes.modalOverflow)}>
                      <div className={style9(base.root, classes.modalHead)}>
                        <div className={style9(base.root)}>
                          <div
                            className={style9(
                              base.root,
                              classes.modalHeadHeight
                            )}
                          >
                            <div className={style9(base.root)}>
                              <div
                                className={style9(
                                  base.root,
                                  classes.modalHeadBoxContainer
                                )}
                              >
                                <div
                                  className={style9(
                                    base.root,
                                    classes.modalHeadBox
                                  )}
                                >
                                  <div
                                    className={style9(
                                      base.root,
                                      icon.iconContainer
                                    )}
                                  >
                                    <ButtonIcon
                                      type="primary-viu"
                                      icon="close"
                                      size="medium"
                                      onClick={onCancel}
                                    />
                                  </div>
                                  <div
                                    className={style9(
                                      base.root,
                                      classes.modalHeadTitleCover
                                    )}
                                  >
                                    <div
                                      className={style9(
                                        base.root,
                                        classes.modalHeadTitleBox
                                      )}
                                    >
                                      <h2
                                        className={style9(
                                          base.rootText,
                                          base.rootTextEllipsis,
                                          classes.modalHeadTitle
                                        )}
                                      >
                                        {title}
                                      </h2>
                                    </div>
                                  </div>
                                  <ButtonCommon
                                    type="primary"
                                    size="small"
                                    buttonType="button"
                                    text={okText}
                                    onClick={onOk}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={style9(base.root, classes.modalBody)}>
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>,
        viuModal
      )
    : null;
};

type PropsType = {
  title: string;
  visible: boolean;
  width?: number;
  height?: number;
  minWidth: number;
  minHeight: number;
  okText: string;
  onOk: () => void;
  onCancel: () => void;
};

export default Modal;
