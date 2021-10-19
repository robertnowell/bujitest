import React from "react";
import X2OutlinedcFocused from "../X2OutlinedcFocused";
import X2OutlinedcFocused2 from "../X2OutlinedcFocused2";
import X2OutlinedcFocused3 from "../X2OutlinedcFocused3";
import X2OutlinedcFocused4 from "../X2OutlinedcFocused4";
import X3ContainedAText from "../X3ContainedAText";
import FAB from "../FAB";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";
import "./SignUpPopUp1.css";

function SignUpPopUp1(props) {
  const {
    text1,
    text2,
    x2OutlinedcFocusedProps,
    x2OutlinedcFocused2Props,
    x2OutlinedcFocused2Props2,
    x2OutlinedcFocused3Props,
    x2OutlinedcFocused3Props2,
    x2OutlinedcFocused4Props,
    x3ContainedATextProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sign-up-pop-up-1 screen">
        <InterestedInStreamingSignUpToGetSta src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f449451c5c24357cf64b4/img/interested-in-streaming--sign-up-to-get-started-today-@2x.svg" />
        <FlexCol>
          <Group32>
            <Text1>{text1}</Text1>
            <Text2>{text2}</Text2>
          </Group32>
          <FlexRow>
            <X2OutlinedcFocused inputText={x2OutlinedcFocusedProps.inputText} label2={x2OutlinedcFocusedProps.label2} />
            <X2OutlinedcFocused2
              inputText={x2OutlinedcFocused2Props.inputText}
              label2={x2OutlinedcFocused2Props.label2}
            />
          </FlexRow>
          <X2OutlinedcFocused
            inputText={x2OutlinedcFocused2Props2.inputText}
            label2={x2OutlinedcFocused2Props2.label2}
            className={x2OutlinedcFocused2Props2.className}
          />
          <FlexRow1>
            <X2OutlinedcFocused3
              inputText={x2OutlinedcFocused3Props.inputText}
              label2={x2OutlinedcFocused3Props.label2}
              assistiveText={x2OutlinedcFocused3Props.assistiveText}
            />
            <X2OutlinedcFocused
              inputText={x2OutlinedcFocused3Props2.inputText}
              label2={x2OutlinedcFocused3Props2.label2}
              className={x2OutlinedcFocused3Props2.className}
            />
          </FlexRow1>
          <X2OutlinedcFocused4
            inputText={x2OutlinedcFocused4Props.inputText}
            label2={x2OutlinedcFocused4Props.label2}
            assistiveText={x2OutlinedcFocused4Props.assistiveText}
          />
          <OverlapGroup6>
            <X3ContainedAText>{x3ContainedATextProps.children}</X3ContainedAText>
            <X24ArrowsChevronRight src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f449451c5c24357cf64b4/img/24---arrows---chevron-right@2x.svg" />
          </OverlapGroup6>
        </FlexCol>
        <FAB />
      </div>
    </div>
  );
}

const InterestedInStreamingSignUpToGetSta = styled.img`
  width: 250px;
  height: 212px;
  margin-left: 169px;
  margin-top: 174px;
`;

const FlexCol = styled.div`
  width: 377px;
  position: relative;
  margin-left: 138px;
  margin-top: 67px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 455px;
`;

const Group32 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 105px;
`;

const Text1 = styled.div`
  ${ValignTextMiddle}
  height: 15px;
  min-width: 7px;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--black);
  font-size: var(--font-size-s2);
  text-align: center;
  letter-spacing: 0;
`;

const Text2 = styled.div`
  ${ValignTextMiddle}
  height: 10px;
  margin-left: 3px;
  min-width: 91px;
  font-family: var(--font-family-inter);
  color: #0c0c0c;
  font-size: var(--font-size-xxs);
  text-align: center;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  height: 72px;
  position: relative;
  margin-top: 18px;
  margin-right: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 373px;
`;

const FlexRow1 = styled.div`
  height: 72px;
  position: relative;
  margin-top: 24px;
  margin-right: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 373px;
`;

const OverlapGroup6 = styled.div`
  width: 80px;
  height: 44px;
  position: relative;
  margin-top: 18px;
  margin-right: 4px;
  border-radius: 4px;
`;

const X24ArrowsChevronRight = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 13px;
  left: 53px;
`;

export default SignUpPopUp1;
