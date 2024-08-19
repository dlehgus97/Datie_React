import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { Button as MuiButton } from "@mui/material";
import { useNavigate } from "react-router-dom"; // React Router 사용

const LoginForm = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [userId, setUserId] = useState(""); // 아이디 상태 관리
  const [password, setPassword] = useState(""); // 비밀번호 상태 관리

  const handlesignupclick = () => {
    navigate("/verify"); // /verify 페이지로 이동
  };

  const handleLoginClick = () => {
    // 여기서 데이터베이스에 접근하는 로직을 구현해야 합니다.
    const dummyDatabase = {
      testUser: "testPassword", // 더미 데이터베이스 예시
    };

    if (!dummyDatabase[userId]) {
      alert("데이티 회원이 아닙니다."); // 아이디가 없는 경우
    } else if (dummyDatabase[userId] !== password) {
      alert("비밀번호가 틀렸습니다."); // 비밀번호가 다른 경우
    } else {
      navigate("/main"); // 로그인 성공 시 /main으로 이동
    }
  };

  return (
    <section className="login-form-container">
      <CompletionImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbd6203791ea3413ef7042de5a3eaac76a4432aaea83ddea035112f4371dd015?placeholderIfAbsent=true&apiKey=d9ab0808f42f485d9f1f9f59597e6744"
        alt="Card application complete"
      />
      <form className="login-form">
        <div className="input-group">
          <TextField
            id="id"
            label="아이디"
            variant="outlined"
            value={userId}
            onChange={(e) => setUserId(e.target.value)} // 아이디 입력 처리
            sx={{
              mb: 2,
              width: "80%",
            }}
          />
        </div>
        <div className="input-group">
          <TextField
            id="pw"
            label="비밀번호"
            type="password" // 비밀번호 입력 필드를 *로 표시
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 처리
            sx={{
              mb: 2,
              width: "80%",
              fontFamily: '"Gamja Flower", cursive',
            }}
          />
        </div>
        <div className="remember-id">
          <input type="checkbox" id="remember" className="remember-checkbox" />
          <label htmlFor="remember">아이디 저장</label>
        </div>
        <MuiButton
          variant="contained"
          onClick={handleLoginClick} // 로그인 클릭 시 처리
          sx={{
            mt: 2,
            backgroundColor: "rgb(148, 160, 227)",
            "&:hover": {
              backgroundColor: "rgb(120, 140, 200)",
            },
            width: "80%",
            height: "50px",
            fontFamily: '"Gamja Flower", cursive',
            fontSize: "22px",
          }}
        >
          로그인
        </MuiButton>

        {/* 회원가입 텍스트 추가 */}
        <SignUpText onClick={handlesignupclick}>회원가입</SignUpText>
      </form>
    </section>
  );
};

const StyledLoginForm = styled(LoginForm)`
  text-align: center;
  background-color: #fff;
  flex-direction: column; /* 수직 정렬 추가 */
  font-size: 16px;
  padding: 33px 20px;
  border: 1px solid #cac8c8;

  .remember-id {
    align-items: center; /* 세로 중앙 정렬 */
    margin-top: 25px; /* 위쪽 여백 */
    margin-bottom: 25px; /* 아래쪽 여백 */
    width: 100%;
    justify-content: flex-start; /* 왼쪽 정렬 */
    text-align: left; /* 왼쪽 정렬 */
  }

  .remember-checkbox {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 8px; /* 체크박스와 레이블 사이 여백 추가 */
  }

  .login-button {
    border-radius: 5px;
    background-color: #94a0e3;
    color: #fff;
    font-weight: 700;
    padding: 12px;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

const CompletionImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 100%;
  max-width: 300px; /* 최대 너비 설정 */
  margin-top: 20px;
`;

const SignUpText = styled.p`
  margin-top: 15px; /* 위쪽 여백 */
  cursor: pointer; /* 커서 스타일 변경 */
  color: grey; /* 텍스트 색상 */
`;

export default StyledLoginForm;
