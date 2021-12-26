import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import style9 from "style9";

// components
import Input from "@/app/components/Form/Input";
import Radio from "@/app/components/Form/Radio";

// styles
import { base } from "@/app/styles/baseClasses";
import { form } from "@/app/styles/formClasses";

// actions
import { signUp } from "@/app/actions/user.action";

const SignUp: React.FC = () => {
  const initialState = {
    student_id: "",
    name: "",
    email: "",
    phone_number: "",
    birthday: "",
    gender: "Male",
    password: "",
  };

  const [userData, setUserData] = useState(initialState);

  const history = useHistory();
  const dispatch = useDispatch();

  const { student_id, name, email, phone_number, birthday, gender, password } =
    userData;

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signUp(userData, history));
  };

  return (
    <div className={style9(base.root, form.formContainer, form.formPad)}>
      <h1 className={style9(base.root, form.formContainer, form.formHeader)}>
        Đăng ký.
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
                label="Tên"
                type="text"
                name="name"
                value={name}
                onChange={onChangeInput}
                round="large"
              />
              <Input
                label="Email"
                type="text"
                name="email"
                value={email}
                onChange={onChangeInput}
                round="large"
              />
              <Input
                label="Số điện thoại"
                type="text"
                name="phone_number"
                value={phone_number}
                onChange={onChangeInput}
                round="large"
              />
              <Input
                label=""
                type="date"
                name="birthday"
                value={birthday}
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
              <div className={style9(base.root, form.formRadio)}>
                <div className={style9(base.root, form.formRadioItem)}>
                  <Radio
                    label="Nam"
                    name="gender"
                    value={gender}
                    defaultChecked
                  />
                </div>
                <div className={style9(base.root, form.formRadioItem)}>
                  <Radio label="Nữ" name="gender" value={gender} />
                </div>
              </div>
            </div>
            <div className={style9(base.root, form.formSubmit)}>
              <button
                type="submit"
                className={style9(base.root, form.formSubmitButton)}
              >
                Đăng ký
              </button>
            </div>
            <div className={style9(base.root, form.formText)}>
              <Link
                className={style9(base.root, form.formTextLink)}
                to="/signin"
              >
                Đã có tài khoản? Đăng nhập ngay.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
