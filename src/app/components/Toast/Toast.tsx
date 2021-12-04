import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style9 from "style9";

// components
import {
  CloseToastIcon,
  SuccessToastIcon,
  ErrorToastIcon,
} from "@/app/components/Icons";

// styles
import { classes } from "./styles";

// types
import { VIUState } from "@/app/types/viu.type";

// actions
import { toastSuccess, toastFailure } from "@/app/actions/app.action";

type Toast = {
  id: number;
  content: string;
  color: string;
  icon: ReactNode;
};

const Toast: React.FC = () => {
  const [toastList, setToastList] = useState<Toast[] | []>([]);
  const { success, error } = useSelector(appSelector);

  let toastProperties: Toast;

  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const showToast = (type: "success" | "error", content: string) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: toastList.length + 1,
          content,
          color: "#52c41a",
          icon: <SuccessToastIcon />,
        };
        break;
      case "error":
        toastProperties = {
          id: toastList.length + 1,
          content,
          color: "#ff4d4f",
          icon: <ErrorToastIcon />,
        };
        break;

      default:
        toastProperties = {} as Toast;
    }

    setToastList([...toastList, toastProperties] as Toast[]);
  };

  const deleteToast = useCallback(
    id => {
      const newToastList = toastList.filter(toastItem => toastItem.id !== id);
      setToastList(newToastList);
    },
    [toastList, setToastList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) deleteToast(toastList[0].id);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);

  useEffect(() => {
    if (success) {
      showToast("success", success);
      dispatch(toastSuccess(null));
    }
    if (error) {
      showToast("error", error);
      dispatch(toastFailure(null));
    }
  }, [dispatch, showToast, success, error]);

  return toastList.length > 0 ? (
    <div className={style9(classes.toastContainer, classes.toastTopRight)}>
      {toastList.map((toastItem, idx) => (
        <div
          key={idx}
          className={style9(classes.toastItem, classes.toastTopRight)}
        >
          <div className={style9(classes.toastBody)}>
            <span
              className={style9(classes.toastIcon)}
              style={{ color: toastItem.color }}
            >
              {toastItem.icon}
            </span>
            {toastItem.content}
          </div>
          <button
            className={style9(classes.toastCloseButton)}
            onClick={() => deleteToast(toastItem.id)}
          >
            <CloseToastIcon />
          </button>
        </div>
      ))}
    </div>
  ) : null;
};

const appSelector = (state: VIUState) => state.app;

export default Toast;
