import React from "react";
import styled from "styled-components";
import GlowButton from "./GlowButton";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .btn {
    border: 2px solid black;
    background: black;
    border-radius: 30px;
    cursor: pointer;
    text-align: center;
    padding: 4px 5px;
  }
  .btn:hover {
    color: orange;
    background: transparent;
  }

  .tag {
    color: #ff6200;
  }

  h1 div {
    overflow: hidden;
  }
`;
const Content = () => {
  return (
    <Div>
      <div className="content">
        <pre className="tag">&lt;&gt;</pre>

        <h1 className="font-mont_alter text-4xl font-bold">
          <div className="">
            Dura
            <br />
            Narayan
          </div>
          <br />
        </h1>
        <p className="font-mont w-[35vw]">
          Hello World! I am a UI/UX designer and Front-end Web developer based in Nepal.
        </p>
      </div>
      <pre className="tag mt-1">&lt;/&gt;</pre>
      <div className="mt-5">
        <GlowButton />
      </div>
    </Div>
  );
};

export default Content;
