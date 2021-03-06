import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import style9 from "style9";

// types
import { VIUState } from "@/app/types/viu.type";
import { MatchParams } from "@/app/types/common.type";

// components
import ButtonIcon from "@/app/components/Button/ButtonIcon";

// styles
import { base } from "@/app/styles/baseClasses";
import { icon } from "@/app/styles/iconClasses";
import { classes } from "./styles";

const Head: React.FC<PropType> = ({
  headline,
  buttonBack = "true",
  match,
  history,
}) => {
  const { profile, user } = useSelector(userSelector);

  const { student_id } = match.params;

  const handleGoBack = () => history.goBack();

  return (
    <div className={style9(base.root, classes.headContainer)}>
      <div className={style9(base.root, classes.head)}>
        <div className={style9(base.root, classes.headHeight)}>
          <div className={style9(base.root)}>
            <div
              className={style9(
                base.root,
                classes.headBorder,
                classes.headHeight
              )}
            >
              <div
                className={style9(
                  base.root,
                  classes.headMain,
                  classes.headHeight
                )}
              >
                {buttonBack === "true" && (
                  <div className={style9(base.root, icon.iconContainer)}>
                    <ButtonIcon
                      type="primary-viu"
                      icon="back"
                      size="medium"
                      onClick={handleGoBack}
                    />
                  </div>
                )}
                <div className={style9(base.root, classes.headContent)}>
                  <div className={style9(base.root, classes.headContentInner)}>
                    {user ? (
                      <>
                        <h2
                          className={style9(
                            base.root,
                            base.rootText,
                            base.rootTextEllipsis,
                            classes.headTitle
                          )}
                        >
                          {profile?.student_id.toString() === student_id
                            ? profile.name
                            : user?.name}
                        </h2>
                        <div
                          className={style9(
                            base.root,
                            base.rootText,
                            base.rootTextEllipsis,
                            classes.headText
                          )}
                        >
                          534 b??i vi???t
                        </div>
                      </>
                    ) : (
                      <h2
                        className={style9(
                          base.root,
                          base.rootText,
                          base.rootTextEllipsis,
                          classes.headTitle
                        )}
                      >
                        {headline}
                      </h2>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type PropType = RouteComponentProps<MatchParams> & {
  headline: string;
  buttonBack: "true" | "false";
};

const userSelector = (state: VIUState) => state.user;

export default withRouter(Head);
