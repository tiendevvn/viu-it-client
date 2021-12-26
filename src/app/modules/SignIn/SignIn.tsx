import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import style9 from "style9";

// components
import Input from "@/app/components/Form/Input";

// styles
import { base } from "@/app/styles/baseClasses";
import { form } from "@/app/styles/formClasses";

// actions
import { signIn } from "@/app/actions/user.action";

const SignIn: React.FC = () => {
  const initialState = {
    student_id: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialState);

  const history = useHistory();
  const dispatch = useDispatch();

  const { student_id, password } = userData;

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(userData, history));
  };

  return (
    <div className={style9(base.root, form.formContainer, form.formPad)}>
      <h1 className={style9(base.root, form.formContainer, form.formHeader)}>
        Đăng nhập.
      </h1>
      <div className={style9(base.root, form.formContainer, form.formMain)}>
        <div className={style9(base.root, form.formContent)}>
          <form className={style9(base.root)} onSubmit={onSubmit}>
            <div className={style9(base.root, form.formFields)}>
              <Input
                label="Mã sinh viên"
                type="text"
                name="student_id"
                value={student_id}
                onChange={onChangeInput}
                round="large"
              />
              <Input
                label="Mật khẩu"
                type="password"
                name="password"
                value={password}
                onChange={onChangeInput}
                round="large"
              />
            </div>
            <div className={style9(base.root, form.formSubmit)}>
              <button
                type="submit"
                className={style9(base.root, form.formSubmitButton)}
              >
                Đăng nhập
              </button>
            </div>
            <div className={style9(base.root, form.formText)}>
              <Link
                className={style9(base.root, form.formTextLink)}
                to="/signup"
              >
                Chưa có tài khoản? Đăng ký ngay.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
